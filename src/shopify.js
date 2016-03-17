import Config from './config';
import ShopClient from './shop-client';
import './isomorphic-fetch';
import './isomorphic-btoa';

/**
 * @module shopify-buy
 * @submodule shopify
 */

/**
 * This namespace contains all globally accessible classes
 * @class ShopifyBuy
 * @static
 */
const Shopify = {
  ShopClient,
  Config,

  /**
   * Create a ShopClient. This is the main entry point to the SDK.
   *
   * ```javascript
   * const client = ShopifyBuy.buildClient({
   *   apiKey: 'abc123',
   *   applicationId: 123456,
   *   myShopifyDomain: 'myshop'
   * });
   * ```
   *
   * @method buildClient
   * @for ShopifyBuy
   * @static
   * @public
   * @param {Object} configAttrs A hash of required config data.
   * @param {String} configAttrs.apiKey Your api client's public token.
   * @param {String} configAttrs.applicationId The application who's listings
   * api will be using. If you are just modifying a buy button, the buy-button's
   * application id is 6. Otherwise, create your own channel provider and
   * application.
   * @param {String} configAttrs.myShopifyDomain You shop's `myshopify.com`
   * domain.
   * @return {ShopClient} a client for the shop using your api credentials.
   */
  buildClient(configAttrs = {}) {
    const config = new this.Config(configAttrs);

    return new this.ShopClient(config);
  }
};

export default Shopify;
