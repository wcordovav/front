export interface HeadSwiper{
    image: string;
    title: string;
    category: string;
    icon: string;
    url? : string;
    alt: string;
    button?: {
        url: string;
        text: string;
    }
}

export interface cardElements {
    name: string;
    url: string;
    image: string;
    alt: string;
}