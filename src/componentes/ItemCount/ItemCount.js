import { useState } from "react";
import "./ItemCount.css";
import "bootstrap/dist/css/bootstrap.css";

const ItemCount = ({stock,initial,onAdd}) => {

    const[quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
                    <button className="Button1 button is-success" onClick={decrement}>-</button>
                    <h4 className="Number">{quantity}</h4>
                    <button className="Button2 button is-success" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button3 button is-success" onClick={()=>onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
};

export default ItemCount;