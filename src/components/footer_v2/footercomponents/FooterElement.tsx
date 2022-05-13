import { FC } from "react";
import { fcategorie } from "../../../types/categorytree";

interface Parametros{
  category: fcategorie
}

const  FooterElement:FC<Parametros> = ({category}) => {
  return (
    <div className="footer-top-column">
      <div className="category-container">
        <div className="category-title">
          <h3>{category.categoryName}</h3>
        </div>
        <div className="category-elements">
          <ul>
            {category.subcategories.map(subcategory  =>{
                return <li key={subcategory.id}>
                  <a href={subcategory.url}>
                    {subcategory.subcategoryName}
                  </a>
                </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterElement