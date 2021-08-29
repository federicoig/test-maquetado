import "./index.scss"

export const ShopItem = ({img, title, price}) => {
    return(
        <div className="shop-item">
            <img alt="Imágen del producto." src={img}/>
            <span>{title}</span>
            <span><strong>${price}</strong></span>
        </div>
    )
}