import Axios from 'axios';

const INVENTORY_API_URL: string = process.env.REACT_APP_INVENTORY_API_URL;
console.log('>>>>>', INVENTORY_API_URL);
export default class ProductService {
  public static async getProducts(): Promise<any> {
    return Axios.get(`${INVENTORY_API_URL}/products`);
  }
}
