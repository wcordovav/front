import { FC, useState } from "react";
import {subcategories, items} from "../../../types/categorytree"
interface Elementos  {
  subcategorie: subcategories
}

const SubmenuItemsMobile:FC<Elementos> = ({ subcategorie }) => {
  const [openMenu, setOpenMenu] = useState(false);
  // console.log(subcategorie)

  return (
    <li className="submenu-mobile-li">
      {subcategorie.url ? (
        <a className="submenu-mb-link" href={subcategorie.url}>
          <span className="">{subcategorie.subcat}</span>
        </a>
      ) : (
        <>
          <button
            className="submenu-mb-link"
            onClick={() => setOpenMenu(!openMenu)}
            style={{ fontWeight: openMenu ? "bolder" : "" }}
          >
            <span className="">{subcategorie.subcat}</span>
            <svg
              style={{ transform: openMenu ? "rotate(-180deg)" : '' }}
              className="icon-header icon-header--dropdown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              focusable="false"
            >
              <path d="M48 73.254L11.651 36.361l5.698-5.614L48 61.855l30.651-31.108 5.698 5.614z"></path>
            </svg>
          </button>
          <div
            className={
              openMenu
                ? "menu-mb-subelements menu-mb-subelements-active"
                : "menu-mb-subelements"
            }
            style={{
              height: openMenu ? `${subcategorie.items.length * (subcategorie.items.length>2 ? 45 : 50)}px` : '',
            }}
          >
            <ul>
              {subcategorie.items.map((item:items) => (
                <li key={item.id} className="submenu-mobile-items-li">
                  <a
                    className="submenu-mb-item-link"
                    key={item.id}
                    href={item.url}
                  >
                    {item.nombre}
                    {item.nuevo ? (
                      <span className="nuevo-badge">Nuevo</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="middle-line" />
          </div>
        </>
      )}
    </li>
  );
};

export default SubmenuItemsMobile;
