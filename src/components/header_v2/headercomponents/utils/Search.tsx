import { FC, useState } from "react";

const Search: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [buscador, setBuscador] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuscador(e.target.value);
    // console.log(e.target.value)
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    window.location.href = `https://www.samsung.com/pe/search/?searchvalue=${buscador}`;
  };

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
          <path d="M40.581 4.09c20.126 0 36.5 16.374 36.5 36.5a36.325 36.325 0 01-7.963 22.733l22.8 22.948-5.674 5.639-22.767-22.913a36.327 36.327 0 01-22.896 8.093c-20.126 0-36.5-16.374-36.5-36.5s16.374-36.5 36.5-36.5zm0 8c-15.715 0-28.5 12.785-28.5 28.5s12.785 28.5 28.5 28.5 28.5-12.785 28.5-28.5-12.785-28.5-28.5-28.5z"></path>
        </svg>
      </button>
      {visible ? (
        <div className="buscador">
          <div className="contenedor-formulario">
            <div className="formulario-titulo">
              <span>¿Podemos Ayudarte?</span>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="formulario-buscador"
            >
              <div className="contenedor-input">
                <input
                  className="buscador-input"
                  placeholder="Galaxy S22 Ultra"
                  type="text"
                  name="buscador"
                  onChange={(e) => handleChange(e)}
                  value={buscador}
                />
                <svg
                  className="buscar"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 96"
                  focusable="false"
                  onClick={(e) => handleSubmit(e)}
                >
                  <path d="M40.581 4.09c20.126 0 36.5 16.374 36.5 36.5a36.325 36.325 0 01-7.963 22.733l22.8 22.948-5.674 5.639-22.767-22.913a36.327 36.327 0 01-22.896 8.093c-20.126 0-36.5-16.374-36.5-36.5s16.374-36.5 36.5-36.5zm0 8c-15.715 0-28.5 12.785-28.5 28.5s12.785 28.5 28.5 28.5 28.5-12.785 28.5-28.5-12.785-28.5-28.5-28.5z"></path>
                </svg>
                <svg
                  className="limpiar"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 96"
                  focusable="false"
                  onClick={() => setBuscador("")}
                >
                  <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
                </svg>
              </div>
            </form>
          </div>
          <div className="cerrar-buscador" onClick={() => setVisible(false)}>
            <svg
              className="icon-header"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              focusable="false"
            >
              <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Search;
