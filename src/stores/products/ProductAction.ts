import IAction from '../IAction';
import IProduct from './models/IProduct';
import IProductUpdate from './models/IProductUpdate';

export default class ProductAction {
  public static readonly ADD: string = 'ProductAction.ADD';
  public static readonly GET_PRODUCTS: string = 'ProductAction.GET_PRODUCTS';
  public static readonly SET_MANUAL_COUNT: string = 'ProductAction.SET_MANUAL_COUNT';

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

  public static setManualCount(productUpdate: IProductUpdate): IAction<IProductUpdate> {
    return {
      payload: productUpdate,
      type: ProductAction.SET_MANUAL_COUNT
    };
  }
}
