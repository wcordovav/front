import { LazyLoadImage } from "react-lazy-load-image-component";
import MuiPopUp from "../../../../components/alert/MuiPopUp";
import StepSlider from "../../../../components/slider/StepSlider";
import Carouselv2 from "../../../../components/swiper/Carousel_v2";
import { cardElements, HeadSwiper } from "../../../../types/swipert";
import { Product } from "../includes/productType";
import ProductsPopUp from "./ProductsPopUp";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  title: string;
  productList: Product[];
  sliderElements: HeadSwiper[];
  itemsCarousel: cardElements[];
}

const ProductSection = ({
  title,
  productList,
  sliderElements,
  itemsCarousel,
}: Props) => {
  return (
    <div className="product-section">
      <div className="sub-content-info">
        <div className="info--title">
          <h4>{title}</h4>
        </div>
        <div className="info--desc">
          <p>Descubre todos nuestros productos Samsung con este beneficio</p>
          <MuiPopUp
            buttonText="Ver Todos"
            Component={
              <ProductsPopUp titulo="Lavadoras" products={productList} />
            }
          />
        </div>
      </div>
      <div className="sub-content-images">
        <StepSlider data={sliderElements} />
      </div>
      <div className="sub-content-body">
        <Carouselv2>
          {itemsCarousel.map((element, count) => (
            <div className="card-container" key={count}>
              <div className="card">
                <div className="card-img">
                  <LazyLoadImage
                    src={element.image}
                    alt={element.alt}
                    effect="blur"
                  />
                </div>
                <div className="card-body">
                  <h4 className="item-name">{element.name}</h4>
                  <a href={element.url} className="details-button">
                    VER DETALLE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carouselv2>
      </div>
    </div>
  );
};

export default ProductSection;
