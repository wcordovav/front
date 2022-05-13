
import { cocinaCarousel, lavadoraCarousel, refrigeratorsCarousel } from "../includes/carousel";
import { cookElements, refriElements, washElements } from "../includes/headslide";
import { cocinas, lavadoras, refrigeradoras } from "../includes/products";
import ProductSection from "./ProductSection";

const TabLineaBlanca = () => {
  return (
    <>
      <div className="tab-content-sub">
        <div className="sub-content-head">
          <h3 className="title">Disfruta de beneficios únicos</h3>
          <p className="desc">Válido solo para Lima Metropolitana.</p>
        </div>

        <ProductSection title="Refrigeradoras" productList={refrigeradoras} itemsCarousel={refrigeratorsCarousel} sliderElements={refriElements} />

        <ProductSection title="Lavadoras" productList={lavadoras} itemsCarousel={lavadoraCarousel} sliderElements={washElements} />

        <ProductSection title="Cocinas" productList={cocinas} itemsCarousel={cocinaCarousel} sliderElements={cookElements} />
       
        
       
      </div>
    </>
  );
};

export default TabLineaBlanca;
