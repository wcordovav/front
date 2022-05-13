import { FC } from "react";
import {categories,subcategories} from "../../../types/categorytree"

interface Parametros{ 
  name: string, 
  subcategorie: subcategories[], 
  fnMenu: (status: boolean, subcats: subcategories[], name: string, category: categories) => void, 
  category: categories, 
  activo: boolean
}

const HeadElement: FC<Parametros> = ({ name, subcategorie, fnMenu, category , activo}: Parametros) => {
    // console.log(subcategorie)

  const handleMouseEnter = () => {

    if(subcategorie.length > 0){
      fnMenu(true,subcategorie,name,category);
    }else{
      fnMenu(false,subcategorie,name, category);
    }

  };


  return (
    <>
      <div
        className={"item-list"}
        onMouseEnter={() => handleMouseEnter()}
        // onMouseLeave={() => setIdActivo(null)}
        // onMouseOver={(e) => handleMouseOver(e)}
      >
        {category.url ?
        <a className={`list-link `} href={category.url_main}>
          <span className="el-name">{name}</span>
        </a>
         :
         <button className={`list-link ${activo ? 'active' :''}`} >
          <span className="el-name">{name}</span>
        </button>
         }
      </div>
      
    </>
  );
};

export default HeadElement;
