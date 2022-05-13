import { FC, useState } from "react";

const ShoppingCart: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  if (visible) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <button onClick={() => setVisible(true)}>
        <svg
          className="icon-header"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 96"
          focusable="false"
        >
          <path d="M72.848 70.25c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm-35 0c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11c0-6.074 4.926-11 11-11zm35 7a4 4 0 10.002 8.001 4 4 0 00-.002-8.001zm-35 0a4 4 0 100 8 4 4 0 000-8zM13.892 3.75c2.287 0 4.376 1.55 5.058 3.72l.064.22 2.97 11.187h68.128a4.727 4.727 0 014.661 5.786l-.048.2-9.559 36.291c-.583 2.216-2.618 3.842-4.894 3.944l-.228.005H30.06c-2.287 0-4.377-1.55-5.06-3.72l-.063-.219-13.124-49.413-10.7.006-.004-8 12.782-.007zm72.03 23.127H24.108l8.027 30.226H77.96l7.962-30.226z"></path>
        </svg>
      </button>
      {visible ? (
        <div className="pop-up-carrito">
          <div className="pop-up-content">
            <svg
              className="icon-header icon--information"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              focusable="false"
            >
              <path d="M48 2.5c25.129 0 45.5 20.371 45.5 45.501S73.13 93.5 48 93.5 2.5 73.13 2.5 48.001C2.5 22.871 22.871 2.5 48 2.5zm0 5C25.633 7.5 7.5 25.633 7.5 48.001S25.632 88.5 48 88.5s40.5-18.131 40.5-40.499C88.5 25.633 70.367 7.5 48 7.5zm2.5 31V75h-5V43.5H40v-5h10.5zm-3.502-16.595C49.209 21.905 51 23.737 51 26c0 2.262-1.791 4.095-4.002 4.095C44.79 30.095 43 28.262 43 26c0-2.263 1.79-4.095 3.998-4.095z"></path>
            </svg>
            <p className="info-text">Su carrito esta vacio</p>
          </div>
          <div className="pop-up-bottom">
            <button
              onClick={() => setVisible(!visible)}
              className="pop-up-button"
            >
              Aceptar
            </button>
          </div>
          <svg
            onClick={() => setVisible(!visible)}
            className="icon-header icon-close-carrito"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            focusable="false"
          >
            <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
          </svg>
        </div>
      ) : null}
      <div className={visible ? "bg-black2" : ""}></div>
    </>
  );
};

export default ShoppingCart;
