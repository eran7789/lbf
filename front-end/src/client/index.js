import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from 'routes';
import { getStore } from 'store';
import Localization from 'components/localization';

const store = getStore();
const app = (
  <Provider store={store}>
    <Localization>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Localization>
  </Provider>
);

hydrate(app, document.getElementById('root'));
