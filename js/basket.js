import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import products from "./data/products";


const Products = ({ products, handleButtonClick }) => {

    return (
        <>
            <h2>Produkty</h2>
            <ul>
                {products.map((product, i) => {
                    return (
                        <>
                            <li key={product.id}>
                                {product.name}, cena: {product.price} PLN
                            </li>
                            <button className="btn btn-primary" onClick={() => handleButtonClick(product)}>Kup</button>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

const Cart = ({ basket }) => {

    return (
        <>
            <h2>Koszyk</h2>
            <ul>
                {basket.map((product,i) => {
                    return <li key={product.id}>{product.name}, cena: {product.price} PLN</li>
                })}
            </ul>
        </>
    )
}

const Shop = ({ products }) => {

    const [basket, setBasket] = useState([])

    const addToCart = (product) => {

        let found = basket.findIndex(p => p.id === product.id);
        if (found !== -1) return; //return null - zatrzymuje funkcję w tym miejscu
        
        setBasket([...basket, product]);
    }

    return (
        <>
            <Products products={products} handleButtonClick={addToCart}/>
            <Cart basket={basket}/>
        </>
    )
}

const App = () => {
    return <Shop products={products}/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  Shop,
  Products,
  Cart
};
