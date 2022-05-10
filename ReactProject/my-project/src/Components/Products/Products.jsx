import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    return (
        <div className="products">
            {props.products.map((i) => {
                return(
                    <Product key={i.id} id={i.id} price={i.price} name={i.name} img={i.img}/>
                )
            })}
        </div>
    )
}

export default Products