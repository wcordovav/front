import { FC, useState } from "react";

interface Parametros{
  mobile: boolean;
}

const Login: FC<Parametros> = ({ mobile }) => {
  const [util, setUtil] = useState<boolean>(false);

  if (mobile === true && util === true) setUtil(false);

  return (
    <>
      <button onMouseEnter={() => setUtil(true)}>
        <svg
          className="icon-header"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 96"
          focusable="false"
        >
          <path d="M48 50c17.346 0 32 14.221 32 31.054V89c0 2.757-2.243 5-5 5H21c-2.757 0-5-2.243-5-5v-7.946C16 64.221 30.654 50 48 50zm0 8c-12.785 0-24 10.773-24 23.054V86h48v-4.946C72 68.773 60.785 58 48 58zm-.002-56c12.133 0 22.003 9.87 22.003 22.001C70 36.131 60.13 46 47.998 46c-12.13 0-21.997-9.869-21.997-21.999C26 11.87 35.867 2 47.998 2zm0 8c-7.718 0-13.997 6.281-13.997 14.001C34 31.72 40.28 38 47.998 38 55.718 38 62 31.72 62 24.001 62 16.281 55.719 10 47.998 10z"></path>
        </svg>
      </button>
      {util ? (
        <div className="login-util" onMouseLeave={() => setUtil(false)}>
          <a
            className="link-login-signup"
            href="https://account.samsung.com/accounts/v1/DCGLPE/signInGate?response_type=code&client_id=zyj35vde15&locale=es_PE&countryCode=PE&redirect_uri=https:%2F%2Fwww.samsung.com%2Faemapi%2Fv6%2Fdata-login%2FafterLogin.pe.json&state=GLByvs9h6kcwtf&goBackURL=https:%2F%2Fwww.samsung.com%2Fpe%2F&scope="
          >
            <span className="icon-header-wrap icon-header--login">
              <svg
                className="icon-header"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 96"
                focusable="false"
              >
                <path d="M48 50c17.346 0 32 14.221 32 31.054V89c0 2.757-2.243 5-5 5H21c-2.757 0-5-2.243-5-5v-7.946C16 64.221 30.654 50 48 50zm0 8c-12.785 0-24 10.773-24 23.054V86h48v-4.946C72 68.773 60.785 58 48 58zm-.002-56c12.133 0 22.003 9.87 22.003 22.001C70 36.131 60.13 46 47.998 46c-12.13 0-21.997-9.869-21.997-21.999C26 11.87 35.867 2 47.998 2zm0 8c-7.718 0-13.997 6.281-13.997 14.001C34 31.72 40.28 38 47.998 38 55.718 38 62 31.72 62 24.001 62 16.281 55.719 10 47.998 10z"></path>
              </svg>
            </span>
            <span>Iniciar Sesión/SignUp</span>
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Login;
