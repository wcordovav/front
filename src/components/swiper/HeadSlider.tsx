import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './headswipe.scss';
import { HeadSwiper } from "../../types/swipert";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  data: HeadSwiper[];
  mainTile: string;
}
//  <img class="inner---image" src=${data[index].image} style="width: 90px" />  ${data[index].category}

const HeadSlide = ({data, mainTile}: Props) =>{

  const elementWidth = 100/(data.length+1);
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className:string) {
      return `<span class="${className}" style="width: ${elementWidth}%"> 
        <div class="paginator--container" >
       <svg  width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="32" cy="32" r="32" fill="#fff"></circle>
       <path fill="#F3F4FA" d="M27.12 23.55H48.3v24.39H27.12z"></path>
       <path d="M23.97 54.91a5.36 5.36 0 01-3.89-1.6 5.44 5.44 0 01-1.01-6.37c.35-.69.83-1.29 1.43-1.77l.04-.04V14.8c0-.28-.1-.53-.3-.72a1 1 0 00-.72-.3h-5.59a.83.83 0 01-.59-1.42.83.83 0 01.6-.25h5.58c.38 0 .71.06 1.03.19a2.68 2.68 0 011.65 2.5V44.1l.14-.04c.6-.22 1.2-.33 1.83-.33h.1v-21.5a.84.84 0 01.83-.84h20.48a.84.84 0 01.83.83v25.23h2.9c.21 0 .42.1.58.25.16.16.25.37.25.6v3.72a.84.84 0 01-.84.83H28.25l-.03.04a5.39 5.39 0 01-3.97 2.02c-.1-.01-.19 0-.28 0zm.2-9.51a3.84 3.84 0 00-3.53 5.28 3.8 3.8 0 003.53 2.36 3.82 3.82 0 100-7.64zm5.48 3.83c-.01.62-.12 1.23-.33 1.82l-.05.14h19.2v-2.06H29.65l-.01.1zm-3.72-5.19l.06.03a5.5 5.5 0 013.34 3.33l.02.06h15.4V36.1h-5.79v2.88a.83.83 0 01-.83.83h-5.59a.83.83 0 01-.84-.83V36.1h-5.78v7.94h.01zm7.44-5.88h3.93V36.1h-3.93v2.06zm-7.44-3.73h18.8V23.07h-5.77v2.89a.84.84 0 01-.84.84h-5.59a.85.85 0 01-.84-.84v-2.89h-5.78v11.36h.02zm7.44-9.3h3.93v-2.06h-3.93v2.06zm-9.2 25.85c-.11 0-.23 0-.35-.03a1.72 1.72 0 01-.9-.48 1.72 1.72 0 01-.48-.9 1.79 1.79 0 01.75-1.81 1.77 1.77 0 012.75 1.47c0 .35-.1.68-.3.98a1.74 1.74 0 01-1.47.77z" fill="#050006"></path><path d="M19.55 12v.2c.33 0 .65.06.96.2a2.52 2.52 0 011.4 1.4c.14.31.2.65.2 1v29.47l.27-.1a5.5 5.5 0 011.8-.33h.2V22.24a.73.73 0 01.73-.73h20.47c.2-.01.39.07.52.2.14.14.22.32.22.52v25.33h2.98c.19 0 .37.08.51.22.14.13.22.31.22.51v3.73c0 .19-.08.38-.22.52a.73.73 0 01-.52.21H28.2l-.06.07a5.3 5.3 0 01-3.9 1.98l-.28.01a5.31 5.31 0 01-3.8-1.58 5.33 5.33 0 01-1-6.24 5.3 5.3 0 011.4-1.74l.07-.07V14.8c0-.3-.12-.58-.32-.8a1.1 1.1 0 00-.8-.32h-5.58a.73.73 0 01-.52-1.25.73.73 0 01.52-.22h5.58l.04-.2zm13 14.7a.73.73 0 01-.73-.73v-3h-5.99V34.53h19V22.97h-5.98v2.99c0 .2-.08.37-.21.52a.73.73 0 01-.52.21h-5.58zm.73-1.47h4.12V22.97h-4.12V25.23zm-.74 14.49a.73.73 0 01-.73-.73v-3h-5.98V44.11l.13.05a5.3 5.3 0 013.27 3.27l.05.14h15.57V36h-5.98v3c0 .18-.08.38-.22.51a.73.73 0 01-.52.22h-5.59v-.01zm.74-1.46h4.12V36h-4.12V38.26zm-9.11 14.88a3.9 3.9 0 003.92-3.92 3.9 3.9 0 00-4.69-3.85 3.9 3.9 0 00-3.09 3.1 3.93 3.93 0 003.86 4.67zm4.96-1.86h19.43V49.03h-19v.2c-.02.61-.12 1.22-.34 1.8l-.1.25zm-4.96-3.72a1.66 1.66 0 11-.34 3.3 1.65 1.65 0 01-1.21-2.27 1.66 1.66 0 011.55-1.03zM19.55 12h-5.62c-.24 0-.48.1-.66.27a.94.94 0 000 1.32c.18.17.42.27.66.27h5.58c.25 0 .49.1.66.27.18.18.27.41.27.66v30.3a5.7 5.7 0 00-2.06 4.05A5.6 5.6 0 0023.96 55h.29a5.61 5.61 0 004.04-2.07h21a.9.9 0 00.66-.27.94.94 0 00.27-.66V48.3c0-.24-.1-.48-.27-.66a.93.93 0 00-.66-.27H46.5V22.23c0-.24-.1-.48-.27-.66a.94.94 0 00-.66-.27H25.1a.9.9 0 00-.65.27.92.92 0 00-.28.66v21.4c-.64.01-1.27.13-1.86.34V14.79a2.77 2.77 0 00-1.72-2.6c-.33-.12-.68-.19-1.04-.19zm13 14.9h5.58a.93.93 0 00.93-.93v-2.8h5.58v11.16H26.03V23.17h5.58v2.79a.94.94 0 00.93.93zm.93-1.87v-1.86h3.72v1.86h-3.72zm-.94 14.89h5.59a.9.9 0 00.65-.27.94.94 0 00.27-.66v-2.8h5.59v11.17H29.42a5.6 5.6 0 00-3.39-3.38V36.2h5.59V39c0 .24.1.48.27.66.17.16.4.26.65.26zm.94-1.86V36.2h3.72v1.86h-3.72zm-9.31 14.88a3.69 3.69 0 01-3.65-4.45 3.72 3.72 0 113.65 4.45zm5.25-1.85c.21-.6.32-1.23.33-1.86h18.61v1.86H29.42zm-5.25-3.73c-.37 0-.73.11-1.04.31a1.85 1.85 0 00-.28 2.86 1.85 1.85 0 002.86-.27c.21-.3.32-.67.32-1.04 0-.5-.2-.97-.55-1.32a1.89 1.89 0 00-1.31-.54z" fill="#fff"></path></svg>
         
        </div>
      </span>`;
    },
  };

  return (
    <LazyLoadComponent>
    <div className="header-swiper">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        allowTouchMove={false}
      >
        <h4 className="main-title">{mainTile}</h4>

        {data.map((element, index) => (
          <SwiperSlide key={index}>
              <LazyLoadImage src={element.image} alt={element.alt} />
              {element.button ? <a className="slider--button" href={element.button.url}> {element.button.text} </a> : null}
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
    </LazyLoadComponent>
  );
}

export default HeadSlide;