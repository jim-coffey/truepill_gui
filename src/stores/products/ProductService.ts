import Axios from 'axios';

import IProductUpdate from '../../stores/products/models/IProductUpdate';

const INVENTORY_API_URL: string = process.env.REACT_APP_INVENTORY_API_URL;

export default class ProductService {
  public static async getProducts(): Promise<any> {
    return Axios.get(`${INVENTORY_API_URL}/products`);
  }

  public static async bulkUpdate(productUpdate: IProductUpdate): Promise<any> {
    return Axios.put(`${INVENTORY_API_URL}/products`, { productUpdates: [productUpdate], forceReset: true });
  }
}
