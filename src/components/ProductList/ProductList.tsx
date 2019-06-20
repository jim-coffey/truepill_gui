import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import IAction from '../../stores/IAction';
import IStore from '../../stores/IStore';
import IProduct from '../../stores/products/models/IProduct';
// import ProductAction from '../../stores/products/ProductAction';
import styles from './styles/productList.module.scss';

interface IState {}
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

class ProductList extends React.Component<IStateToProps & IDispatchToProps & IProps, IState> {
  public render(): JSX.Element {
    const { products } = this.props;

    return (
      <section>
        <table className={styles.products}>
          <tr>
            <th>Product Name</th>
            <th>Current Count</th>
            <th>Manual Count</th>
          </tr>
          {products.map(product => (
            <tr key={product.product_name}>
              <td>{product.product_name}</td>
              <td className={styles.count}>{product.product_current_count}</td>
              <td className={styles.count}>{product.product_manual_count}</td>
            </tr>
          ))}
        </table>
      </section>
    );
  }
}

export default connect<IStateToProps, IDispatchToProps, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
