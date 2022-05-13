import { FC } from "react";

interface SubCategorias{
    item: {
        id: string;
        url:string;
        nombre: string;
        nuevo? : boolean
    }
}

const Subcategories:FC<SubCategorias> = ({item}) => {
    return (
        <li 
        key={item.id}
        className="subcat-item"
        >
            <a className="link-subcat-item" href={item.url}>
               <span>{item.nombre}
               {item.nuevo ? <span className="nuevo-badge">Nuevo</span>:null}
               </span> 
            </a>  
        </li>
    );
}
 
export default Subcategories;