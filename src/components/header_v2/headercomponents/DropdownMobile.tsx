import { FC, useState } from "react";
import SubmenuMobile from "./SubmenuMobile";
import { categories } from "../../../types/categorytree"

interface Parametros{ 
  closeMobile: () => void;
  categoryTree: categories[];
  visible:boolean;
}

const DropdownMobile: FC<Parametros> = ({ closeMobile, categoryTree, visible }) => {
  
  const [mainMenu, setMainMenu] = useState<boolean>(false);
  const [submenuItems, setSubmenuItems] = useState<categories>({} as categories);
  // console.log(submenuItems)
  const ResetSelected = (): void => {
    closeMobile();
  };
  const setActiveElement = (element: categories) => { 
    if (element.url) return;
    setSubmenuItems(element);
    setMainMenu(true);
    // console.log(element)
  }
  
  if (visible) {
    document.body.classList.add('overflow-hidden');
  }else{
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <div
      className={
        visible
          ? "menu-desplegable-mobile menu-desplegable-mobile-active"
          : "menu-desplegable-mobile"
      }
    >
      <div className="title-mobile">
        <span className="return-menu-mobile" onClick={() => setMainMenu(false)}>
          {mainMenu ? (
            <svg
              className="icon-header icon-header--back"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              focusable="false"
            >
              <path d="M40.544 11.613l5.538 5.774L18.335 44l75.054.001v8H18.337l27.745 26.612-5.538 5.774L2.611 48l37.933-36.387z"></path>
            </svg>
          ) : null}
        </span>
        <span className="close-menu-mobile" onClick={ResetSelected}>
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
      <div
        className={
          !mainMenu ? "submenu-mobile" : "submenu-mobile submenu-mobile-active"
        }
      >
        <SubmenuMobile categoryTree={submenuItems}  />
      </div>
      {!mainMenu ? 
      <div className="body-mobile">
        <div className="top-mobile">
          <ul>
            {categoryTree.map((subcategorie: categories) => {
              if (subcategorie.pos === 1) {
                return (
                  <li
                    key={subcategorie.id}
                    className="menu-list-item mobile-list"
                    onClick={() => setActiveElement(subcategorie)}
                  >
                    {subcategorie.url ? (
                      <a className="list-link-mobile" href={subcategorie.url_main}>
                        <span>{subcategorie.categoria}</span>
                      </a>
                    ) : (
                      <>
                        <span>{subcategorie.categoria}</span>
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
                      </>
                    )}
                  </li>
                );
              }else{
                return null;
              }
            })}
          </ul>
        </div>
        <hr className="middle-line" />
        <div className="bottom-mobile">
          <ul>
            {categoryTree.map((subcategorie: categories) => {
              if (subcategorie.pos === 2) {
                return (
                  <li
                    key={subcategorie.id}
                    className="menu-list-item mobile-list"
                    onClick={() => setActiveElement(subcategorie)}
                  >
                    {subcategorie.url ? (
                      <a className="list-link-mobile" href={subcategorie.url_main}>
                        <span>{subcategorie.categoria}</span>
                      </a>
                    ) : (
                      <>
                        <span>{subcategorie.categoria}</span>
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
                      </>
                    )}
                  </li>
                );
              }else{
                return null;
              }
            })}
          </ul>
        </div>
        <hr className="middle-line" />
        <a
          className="login-mobile"
          href="https://account.samsung.com/accounts/v1/DCGLPE/signInGate?response_type=code&client_id=zyj35vde15&locale=es_PE&countryCode=PE&redirect_uri=https:%2F%2Fwww.samsung.com%2Faemapi%2Fv6%2Fdata-login%2FafterLogin.pe.json&state=GLB6lvyzri6tyx&goBackURL=https:%2F%2Fwww.samsung.com%2Fpe%2F&scope="
        >
          <svg
            className="icon-header"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            focusable="false"
          >
            <path d="M48 50c17.346 0 32 14.221 32 31.054V89c0 2.757-2.243 5-5 5H21c-2.757 0-5-2.243-5-5v-7.946C16 64.221 30.654 50 48 50zm0 8c-12.785 0-24 10.773-24 23.054V86h48v-4.946C72 68.773 60.785 58 48 58zm-.002-56c12.133 0 22.003 9.87 22.003 22.001C70 36.131 60.13 46 47.998 46c-12.13 0-21.997-9.869-21.997-21.999C26 11.87 35.867 2 47.998 2zm0 8c-7.718 0-13.997 6.281-13.997 14.001C34 31.72 40.28 38 47.998 38 55.718 38 62 31.72 62 24.001 62 16.281 55.719 10 47.998 10z"></path>
          </svg>
          <span>Iniciar Sesión/Sign-Up</span>
        </a>
      </div>: null}

      
    </div>
  );
};

export default DropdownMobile;
