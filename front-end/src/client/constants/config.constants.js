// @flow
declare var process: any;

export const BASE_URL: string = process.env.BASE_URL;
export const API_BASE_URL: string = process.env.API_BASE_URL;
export const WOOCOOMERCE_CONSUMER_KEY: string = process.env.WOOCOOMERCE_CONSUMER_KEY;
export const WOOCOOMERCE_CONSUMER_SECRET: string = process.env.WOOCOOMERCE_CONSUMER_SECRET;
export const CONTENT_BASE_URL: string = `${API_BASE_URL}/wordpress/wp-content`;