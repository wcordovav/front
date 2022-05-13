import { FC } from "react";
import SubmenuItemsMobile from "./SubmenuItemsMobile";
import {categories, subcategories} from "../../../types/categorytree"
interface Parametros{
  categoryTree: categories
}
const SubmenuMobile:FC<Parametros> = ({categoryTree}) => {
  // console.log(categoryTree)
  return (
    <div className="submenu-body">
      <div className="mobile-submenu-title">
        <a className="submenu-title-link" href={categoryTree?.link}>
          {categoryTree.categoria}
        </a>
      </div>
      <ul className="submenu-mobile-list">
        {categoryTree.scat
          ? categoryTree.scat.map((subcategorie: subcategories) => {
              return (
                <SubmenuItemsMobile key={subcategorie.id} subcategorie={subcategorie} />
              );
            })
          : null}
      </ul>
      {categoryTree.imagen ? (
        <div className="submenu-mb-bottom">
          <a href={categoryTree?.url_imagen}>
            <div className="box-imagen-mobile">
              <img src={""+categoryTree.imagen} alt="" />
            </div>
            <div className="box-reference">
              <p className="menu-rigth-prod">
                {categoryTree.titulo ?? categoryTree.titulo}
              </p>
              <span className="aditional-info">Conoce más</span>
            </div>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default SubmenuMobile;
