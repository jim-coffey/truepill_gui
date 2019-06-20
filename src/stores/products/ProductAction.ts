import IAction from '../IAction';
import IProduct from './models/IProduct';

export default class ProductAction {
  public static readonly ADD: string = 'ProductAction.ADD';
  public static readonly GET_PRODUCTS: string = 'ProductAction.GET_PRODUCTS';

  public static addProducts(products: IProduct[]): IAction<IProduct[]> {
    return {
      error: true,
      meta: null,
      payload: products,
      type: ProductAction.ADD
    };
  }

  public static getProducts(): IAction<void> {
    return {
      type: ProductAction.GET_PRODUCTS
    };
  }
}
