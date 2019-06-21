import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import IProduct from '../../stores/products/models/IProduct';
import ProductAction from '../../stores/products/ProductAction';
import styles from './styles/productList.module.scss';

interface IState {
  product_name: string;
  product_qty: number;
}
interface IProps {}
interface IStateToProps {
  products: IProduct[];
}
interface IDispatchToProps {
  dispatch: (action: IAction<any>) => void;
}

const mapStateToProps = (state: IStore): IStateToProps => ({
  products: state.productReducer.products
});

const mapDispatchToProps = (dispatch: Dispatch<IAction<any>>): IDispatchToProps => ({
  dispatch
});

export class ProductList extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {
  public state = {
    product_name: '',
    product_qty: 0
  };

  public handleProductClick = (product: IProduct) => () => {
    this.setState({
      product_name: product.product_name,
      product_qty: product.product_manual_count
    });
  };

  public handleManucalCountChange = (product: IProduct) => (event: any) => {
    const {
      target: { value }
    } = event;

    this.setState({
      product_name: product.product_name,
      product_qty: value
    });
  };

  public onResetButtonHandler = () => {
    this.props.dispatch(
      ProductAction.setManualCount({
        product_name: this.state.product_name,
        product_qty: this.state.product_qty
      })
    );

    this.setState({
      product_name: '',
      product_qty: 0
    });
  };

  public render(): JSX.Element {
    const { products } = this.props;
    const { product_name, product_qty } = this.state;

    return (
      <section>
        <table className={styles.products}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Current Count</th>
              <th>Manual Count</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr data-automation-id="product-row" key={product.product_name}>
                <td>{product.product_name}</td>
                <td className={styles.count}>{product.product_current_count}</td>
                <td className={styles.count}>
                  {product_name === product.product_name ? (
                    <input
                      data-automation-id={`input-${product.product_name}`}
                      type="number"
                      value={product_qty}
                      onChange={this.handleManucalCountChange(product)}
                    />
                  ) : (
                    <span
                      data-automation-id={`text-${product.product_name}`}
                      onClick={this.handleProductClick(product)}
                    >
                      {product.product_manual_count}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {product_name ? (
          <button
            data-automation-id="reset-button"
            className={styles.button}
            type="button"
            onClick={this.onResetButtonHandler}
          >
            Reset Stock Level
          </button>
        ) : null}
      </section>
    );
  }
}

export default connect<IStateToProps, IDispatchToProps, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
