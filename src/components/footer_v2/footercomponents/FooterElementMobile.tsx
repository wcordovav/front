import { FC, useState } from "react";
import { fcategorie } from "../../../types/categorytree";

interface Parametros {
  category: fcategorie;
}

const ElementMobile: FC<Parametros> = ({ category }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <div className="category--mobile" onClick={() => setOpenMenu(!openMenu)}
        style={{borderBottom: openMenu ? 0 : ''}}
      >
        <h3>{category.categoryName}</h3>
        <div className="footer--arrow">
          <svg
            style={{ transform: openMenu ? "rotate(-180deg)" : "" }}
            className="icon--foter"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            focusable="false"
          >
            <path d="M79.719 32.342l3.562 3.509L48 71.658 12.719 35.851l3.562-3.509L48 64.534z"></path>
          </svg>
        </div>
      </div>
      <div
        className={
          openMenu
            ? "footer--mobile-submenu footer--mobile-submenu-active"
            : "footer--mobile-submenu"
        }
        style={{
          height: openMenu
            ? `${
                category.subcategories.length * 11.5
              }vw`
            : "",
        }}
      >
        <ul>
          {category.subcategories.map((subcategory) => (
            <li key={subcategory.id} className="submenu-footer-items-li">
              <a
                className="submenu-footer-item-link"
                key={subcategory.id}
                href={subcategory.url}
              >
                {subcategory.subcategoryName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ElementMobile;
