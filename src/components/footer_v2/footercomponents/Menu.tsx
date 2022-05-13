import { FC } from "react";
import { fcategorie } from "../../../types/categorytree";
import { FooterElements } from "../FooterElements";
import FooterElement from "./FooterElement";
import Links from "./Links";

const Menu: FC = () => {
  const categoryTree: fcategorie[] = FooterElements;
  // console.log(categoryTree);
  return (
    <>
    <div className="footer-top">
      {categoryTree && categoryTree.length > 0
        ? categoryTree.map((category: fcategorie) => {
            return (
              <FooterElement key={category.id} category={category} />
            );
          })
        : null}
    </div>
    <div className="copy-container">
    <span>
      Copyright© 1995-2022 Samsung. Todos los derechos reservados.
    </span>
  </div>

  <Links />
  </>
  );
};

export default Menu;
