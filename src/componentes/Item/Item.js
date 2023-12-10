import "./Item.css"

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className="CardItem card">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture className="img-fluid">
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    precio: ${price}
                </p>
                <p className="Info">
                    stock disponible:{stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <link to={`/item/${id}`} className="Option">Ver detalle</link>
            </footer>
        </article>
    )
}

export default Item;