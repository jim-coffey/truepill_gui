import IProduct from './IProduct';

export default interface IProductReducerState {
  readonly product_manual_count: number;
  readonly product_name: string;
  readonly products: IProduct[];
}
