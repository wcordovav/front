import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Product } from "../includes/productType";

interface Props {
  titulo: string;
  products: Product[];
}

const ProductsPopUp = ({ titulo, products }: Props) => {
  return (
    <div className="popup-container">
      <div className="popup-title">
        <h3>{titulo}</h3>
      </div>
      <div className="popup-body">
        
          {products.map((product) => (
            <div className="product" key={product.model}>
              <div className="top">
                  <h4>{product.name}</h4>
              </div>
              <div className="image">
                <LazyLoadImage
                  src={product.imagen}
                  alt=""
                  effect="blur"
                />
              </div>
              <div className="bot">
                  <a className="button" href={product.url}>Lo quiero </a>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default ProductsPopUp;
