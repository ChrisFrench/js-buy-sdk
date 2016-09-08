import Config from './config';
import version from './version';
import ShopClient from './shop-client';
import './isomorphic-fetch';
import './isomorphic-btoa';
import { NO_IMAGE_URI } from './models/product-model';

/**
 * @module shopify-buy
 * @submodule shopify
 */

/**
 * `ShopifyBuy` only defines one function {{#crossLink "ShopifyBuy/buildClient"}}{{/crossLink}} which can
 * be used to build a {{#crossLink "ShopClient"}}{{/crossLink}} to query your store using the
 * provided
 * {{#crossLink "ShopifyBuy/buildClient/configAttrs:apiKey"}}`apiKey`{{/crossLink}},
 * {{#crossLink "ShopifyBuy/buildClient/configAttrs:appId"}}`appId`{{/crossLink}},
 * and {{#crossLink "ShopifyBuy/buildClient/configAttrs:domain"}}`domain`{{/crossLink}}.
 * @class ShopifyBuy
 * @static
 */
const Shopify = {
  ShopClient,
  Config,
  version,
  NO_IMAGE_URI: NO_IMAGE_URI,

  /**
   * Create a ShopClient. This is the main entry point to the SDK.
   *
   * ```javascript
   * const client = ShopifyBuy.buildClient({
   *   apiKey: 'bf081e860bc9dc1ce0654fdfbc20892d',
   *   appId: 6,
   *   domain: 'embeds.myshopify.com'
   * });
   * ```
   *
   * @method buildClient
   * @for ShopifyBuy
   * @static
   * @public
   * @param {Object} configAttrs An object of required config data such as: `apiKey`, `appId`, `domain`
   * @param {String} configAttrs.apiKey An API Key for your store. Documentation how to get an API Key:
   *                                    https://help.shopify.com/api/sdks/js-buy-sdk/getting-started#api-key
   * @param {String} configAttrs.appId Typically will be 6 which is the Buy Button App Id. For more info on App Id see:
   *                                   https://help.shopify.com/api/sdks/js-buy-sdk/getting-started#app-id
   * @param {String} configAttrs.domain Your shop's full `myshopify.com` domain. For example: `embeds.myshopify.com`
   * @return {ShopClient} a client for the shop using your api credentials which you can use to query your store.
   */
  buildClient(configAttrs = {}) {
    const config = new this.Config(configAttrs);

    return new this.ShopClient(config);
  }
};

export default Shopify;
