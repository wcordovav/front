
export interface items {
    id: string;
    nombre : string;
    nuevo?: boolean;
    url : string;
}


export interface subcategories {
    id: string;
    subcat : string;
    url?: string;
    items : items[] | []
}

export interface categories {
    id: string;
    categoria: string;
    pos: number;
    url: boolean | string;
    url_main?: string;
    link? : string;
    titulo? : string;
    info?: string;
    url_imagen?: string;
    imagen?: string | boolean;
    scat: subcategories[] | []
}


export interface fsubcategorie{
    id: string;
    subcategoryName: string;
    url: string;
}

export interface fcategorie{
    id: string;
    categoryName: string;
    pos: number;
    subcategories: fsubcategorie []
}