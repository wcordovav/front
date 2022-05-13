import { televisores } from "../includes/products";
import { tvCarousel } from "../includes/carousel";
import { TvElements } from "../includes/headslide";
import ProductSection from "./ProductSection";

const TabTelevisores = () => {
  return (
    <>
      <div className="sub-content-head">
        <h3 className="title">Disfruta de beneficios únicos</h3>
        <p className="desc">
          Válido solo para Lima Metropolitana, ciudades de Arequipa y Trujillo.
        </p>
      </div>
      <ProductSection title="Televisores" productList={televisores} itemsCarousel={tvCarousel} sliderElements={TvElements} />

    </>
  );
};

export default TabTelevisores;
