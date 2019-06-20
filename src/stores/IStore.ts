import IProductReducerState from './products/models/IProductReducerState';

export default interface IStore {
  readonly productReducer: IProductReducerState;
}
