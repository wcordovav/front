import { useState, useEffect, FC } from "react";
import SubCategorias from "./Subcategories";
import {categories, subcategories, items} from "../../../types/categorytree"

interface Parametros{
  mouseLeave: ()=>void;
  subcategories: subcategories[];
  activeElement: categories;
  visible: boolean
}

const DropDown: FC<Parametros> = ({
  mouseLeave,
  subcategories,
  activeElement,
  visible,
}) => {
  const [items, setItems] = useState<items[]>([]);
  const [submenu, setSubmenu] = useState<boolean>(true);
  const [activeid, setActiveID] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  // console.log(items);
  const firstItem: subcategories = subcategories[0];
  // console.log(firstItem)

  if (firstItem && items.length === 0 && counter === 0) {
    setItems(firstItem.items);
    setActiveID(firstItem.id);
    setCounter(1);
  }

  useEffect(() => {
    if (firstItem) {
      setItems(firstItem.items);
    }
    // eslint-disable-next-line
  }, [subcategories]);

  

  const ResetSelected = () => {
    mouseLeave();
    setItems([]);
    setActiveID("1")
  };

  return (
    <div
      className={
        visible
          ? "menu-desplegable menu-desplegable-active"
          : "menu-desplegable"
      }
      onMouseLeave={() => ResetSelected()}
      // onMouseEnter={()=>setItems(firstItem.items)}
    >
      <div className="cabecera-desplegable">
        <h2 className="menu-title"><a href={activeElement?.link}>{activeElement.categoria}</a> </h2>
        <span className="close-menu" onClick={ResetSelected}>
          <svg
            className="icon-header"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            focusable="false"
          >
            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
          </svg>
        </span>
      </div>

      <div className="desplegable-container">
        <div className="menu-left">
          <ul>
            {subcategories.map((subcat: subcategories) => (
              <li
                className="menu-list-item"
                key={subcat.id}
                onMouseEnter={() => {
                  setItems(subcat.items);
                  setSubmenu(false);
                  setActiveID(subcat.id);
                  setTimeout(() => {
                    setSubmenu(true);
                  }, 100);
                }}
                // onMouseLeave={()=>{setSubmenu(false)}}
              >
                <span>
                  {subcat.url ? (
                    <a
                      style={{fontWeight: subcat.id === activeid ? "bold" : "normal"}}
                      href={subcat.url}
                    >
                      {subcat.subcat}
                    </a>
                  ) : (
                    <button
                      style={{fontWeight: subcat.id === activeid ? "bold" : "normal"}}
                    >
                      {subcat.subcat}
                    </button>
                  )}
                </span>
                {subcat.id === activeid && items.length > 0 ? (
                  <div className="menu-list-item-arrow">
                    <svg
                      className="icon-header icon-header--next"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 96 96"
                      focusable="false"
                    >
                      <path d="M31.828 16.306l3.457-3.612L72.172 48 35.285 83.306l-3.457-3.612L64.941 48z"></path>
                    </svg>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-mid">
          <ul
            className={
              submenu ? "menu-mid-list menu-mid-list-active" : "menu-mid-list "
            }
          >
            {items.length > 0
              ? items?.map((item: items) => (
                  <SubCategorias key={item.id} item={item} />
                ))
              : null}
          </ul>
        </div>
        {activeElement.imagen ? 
          <div className="menu-right">
            <a href={activeElement?.url_imagen}>
              <div className="box-imagen">
                <img src={""+activeElement.imagen} alt="" />
              </div>
              <div className="box-reference">
                <p className="menu-rigth-prod">{activeElement.titulo ?? activeElement.titulo}</p>
                <span className="aditional-info">{activeElement.info}</span>
              </div>
            </a>
          </div>
        : null}
      </div>
    </div>
  );
};

export default DropDown;
