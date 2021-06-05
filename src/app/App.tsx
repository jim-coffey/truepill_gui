import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import IAction from '../stores/IAction';
import ProductAction from '../stores/products/ProductAction';
import ProductList from '../components/ProductList';

import styles from './styles/app.module.scss';

interface IState {}
interface IProps {}
interface IStateToProps {}
interface IDispatchToProps {
  dispatch: (action: IAction<any>) => void;
}
const var1 = 1;
const mapStateToProps = (): IStateToProps => ({});
const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
  dispatch
});
const var3 = 3;
const var4 = 4;
class App extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {
  public onClickButtonHandler = this._onClickButton.bind(this);

  public render(): JSX.Element {
    return (
      <>
        <div className={styles.header}>
          <img className={styles.icon} src="favicon.png" />
          <button className={styles.button} type="button" onClick={this.onClickButtonHandler}>
            Refresh Products
          </button>
        </div>
        <ProductList />
      </>
    );
  }

  private _onClickButton(): void {
    this.props.dispatch(ProductAction.getProducts());
  }
}

export default connect<IStateToProps, IDispatchToProps, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
