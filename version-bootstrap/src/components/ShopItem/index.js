import { Col } from "react-bootstrap"
import "./index.scss"

export const ShopItem = ({img, title, price}) => {
    return(
        <Col xs={12} md={6} lg={4} className="mb-3">
            <div className="shop-item">
                <img alt="Imágen del producto." src={img}/>
                <span>{title}</span>
                <span><strong>${price}</strong></span>
            </div>
        </Col>
    )
}