import Item from "../Item/Item";
import "./ItemList.css"
import "bootstrap/dist/css/bootstrap.css";

const ItemList = ({products}) => {
    return(
        <div className="ListGroup container text-center">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
};

export default ItemList;
