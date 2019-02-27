import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter, RouterContext, Router } from 'react-router';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { get, flow, map, compact, flatten, pick } from 'lodash/fp';
import { ServerStyleSheet } from 'styled-components';

import { getStore } from 'store';
import routes from 'routes';
import Localization from 'components/localization';

export const getRenderProps = location =>
  new Promise(resolve => {
    const matchedRoutes = matchRoutes(routes, location.pathname);
    const renderProps = {
      matchedRoutes,
      location
    };

    return resolve(renderProps);
  });

// Api actions to happen before ssr
// Actions can go on the static class property of component or
// the wrapper component or the route itself
const getSsrApiActions = route =>
  get('route.component.ssrApiActions', route) ||
  get('route.ssrApiAction', route);

export const getInitializedStore = () => {
  const store = getStore();

  return store;
};

export const fetchRequiredData = userAgent => renderProps => {
  const store = getInitializedStore();
  const requiredDataPromises = flow(
    map(getSsrApiActions),
    compact,
    flatten,
    map(apiAction => store.dispatch(apiAction(renderProps)))
  )(renderProps.matchedRoutes);

  return Promise.all(requiredDataPromises)
    .then(() => Promise.resolve({ renderProps, store }))
    .catch(() => Promise.resolve({ renderProps, store }));
};

export const renderToString = (renderProps, store) => {
  const styleSheet = new ServerStyleSheet();
  const context = renderProps.location;
  const html = ReactDomServer.renderToString(
    styleSheet.collectStyles(
      <Provider store={store}>
        <Localization>
          <StaticRouter context={context} location={renderProps.location}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Localization>
      </Provider>
    )
  );

  return { html, css: styleSheet.getStyleTags() };
};

export const renderApp = ({ renderProps, store }) => {
  const reducers = ['network', 'journals', 'products', 'locale', 'categories'];
  const styleSheet = new ServerStyleSheet();

  const state = pick(reducers, store.getState());
  const { html, css } = renderToString(renderProps, store);
  const scripts = `<script>window.__REDUX__STATE__ = '${escape(
    JSON.stringify(state)
  )}';</script>`;
  const { title = '', meta = '' } = Helmet.renderStatic();

  return {
    title: title.toString(),
    meta: meta.toString(),
    html,
    scripts,
    css
  };
};
