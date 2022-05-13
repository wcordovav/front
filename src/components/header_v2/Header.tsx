import { FC, useState } from "react";
import "./header.scss";
import { HeaderElements } from "./HeadElements";
import Dropdown from "./headercomponents/Dropdown";
import DropdownMobile from "./headercomponents/DropdownMobile";
import HeadElement from "./headercomponents/HeadElement";
import Search from "./headercomponents/utils/Search";
import ShoppingCart from "./headercomponents/utils/ShoppingCart";
import Login from "./headercomponents/utils/Login";
import { subcategories, categories } from "../../types/categorytree";

const Header: FC = () => {
  const categoryTree: categories[] = HeaderElements;
  const [menu, setMenu] = useState<boolean>(false);
  const [subcategories, setSubCategories] = useState<subcategories[]>([]);
  const [activeElement, setActiveElement] = useState<categories>(
    {} as categories
  );
  const [mobile, setMobile] = useState<boolean>(false);

  // console.log(activeElement)

  const fnMenu = (
    menu: boolean,
    subcats: subcategories[],
    name: string,
    activeCategory: categories
  ): void => {
    setSubCategories(subcats);
    setMenu(menu);
    setActiveElement(activeCategory);
    // console.log(category)
  };
  const handleMouseLeave = () => {
    setMenu(false);
    setActiveElement({} as categories);
    setSubCategories([]);
  };

  const closeMobile = (): void => {
    setMobile(false);
  };

  if (mobile) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="left">
            <div className="logo">
              <a href="https://www.samsung.com/pe/">
                <img
                  src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/global-samsung-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="items-list">
              {categoryTree && categoryTree.length > 0
                ? categoryTree.map((category: categories) => {
                    if (category.pos === 1) {
                      return (
                        <HeadElement
                          key={category.id}
                          name={category.categoria}
                          category={category}
                          activo={
                            activeElement.id === category.id ? true : false
                          }
                          subcategorie={category.scat}
                          fnMenu={fnMenu}
                        />
                      );
                    } else {
                      return null;
                    }
                  })
                : null}
            </div>
          </div>
          <div className="right">
            <div className="items-list">
              {categoryTree && categoryTree.length > 0
                ? categoryTree.map((category: categories) => {
                    if (category.pos === 2) {
                      return (
                        <HeadElement
                          key={category.id}
                          name={category.categoria}
                          category={category}
                          activo={
                            activeElement.id === category.id ? true : false
                          }
                          subcategorie={category.scat}
                          fnMenu={fnMenu}
                        />
                      );
                    } else {
                      return null;
                    }
                  })
                : null}
            </div>
            <ul className="util-list">
              <li className="desktop-icon">
                <Search />
              </li>
              <li className="desktop-icon">
                <ShoppingCart />
              </li>
              <li className="desktop-icon login-li">
                <Login mobile={menu} />
              </li>
              <li className="mobile-icon">
                <button onClick={() => setMobile(true)}>
                  <svg
                    className="icon-header"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 96 96"
                    focusable="false"
                  >
                    <path d="M83 70v8H13v-8h70zm0-26v8H13v-8h70zm0-26v8H13v-8h70z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {activeElement ? (
          <>
            <Dropdown
              mouseLeave={handleMouseLeave}
              subcategories={subcategories}
              activeElement={activeElement}
              visible={menu}
            />
          </>
        ) : null}
      </div>
      {mobile ? (
        <DropdownMobile
          categoryTree={categoryTree}
          closeMobile={closeMobile}
          visible={mobile}
        />
      ) : null}
      <div className={mobile || menu ? "bg-black2" : undefined}></div>
    </>
  );
};

export default Header;
