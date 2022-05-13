import { useFormik } from "formik";
import * as Yup from "yup";
import { FC, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_NIGHT_BEYOND } from "../../../graphql/NightBeyond";
import { sweetAlert } from "../../../components/alert/sweetAlert";
import ReCAPTCHA from "react-google-recaptcha";
import { isNumber } from "../../../utils/isNumber";

const FreeStyleForm: FC = () => {
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);
  const [info, setInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const recaptcha = useRef<any>(null);

  const [createUser] = useMutation(CREATE_NIGHT_BEYOND, {
    onError(error) {
      if (error.networkError) {
        sweetAlert("error", "Hubo un error", "");
      } else {
        sweetAlert("error", "No se registro", error.message);
      }
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      dni: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("El email es obligatorio")
        .email("Email ingresado no valido"),
      name: Yup.string().required("El nombre es obligatorio"),
      lastname: Yup.string().required("El apellido es obligatorio"),
      dni: Yup.string()
        .required("El DNI es obligatorio")
        .matches(
          isNumber,
          "DNI no válido"
        )
        .min(8, "Debe tener mínimo 8 digitos")
        .max(10, " Debe tener máximo 10 digitos"),
      phone: Yup.string()
        .required("El Telefono es obligatorio")
        .matches(
          isNumber,
          "Teléfono no válido"
        )
        .min(9, "Debe tener 9 digitos")
        .max(9, "Debe tener 9 digitos"),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (privacy === false || terms === false)
        return sweetAlert(
          "warning",
          "Falta Información",
          "Debe aceptar los terminos y la política de privacidad"
        );

      setLoading(true);

      const validRecaptcha = await recaptcha.current.execute();
      if (!validRecaptcha) return;

      const response = await createUser({ variables: { ...values } });
      // console.log({response, data})
      if (response.data?.addNightBeyondUser) {
        resetForm();
        sweetAlert("success", "Registro Exitoso", "");
      }
      // console.log(data)
      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ReCAPTCHA
        sitekey="6Lew4qkZAAAAAK50VC6HnGpNerA20BbixccSFcTh"
        size="invisible"
        id="recaptcha-form"
        ref={recaptcha}
      />
      <div className="user-form">
        <div className="form-input">
          <label htmlFor="name">Nombres (*)</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="input---error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="form-input">
          <label htmlFor="lastname">Apellidos (*)</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <p className="input---error">{formik.errors.lastname}</p>
          ) : null}
        </div>
        <div className="form-input">
          <label htmlFor="dni">DNI/Carnet de extranjería (*)</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formik.values.dni}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dni && formik.errors.dni ? (
            <p className="input---error">{formik.errors.dni}</p>
          ) : null}
        </div>
        <div className="form-input">
          <label htmlFor="email">Correo Electrónico (*)</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="input---error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="form-input">
          <label htmlFor="phone">Número de contácto (*)</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="input---error">{formik.errors.phone}</p>
          ) : null}
        </div>
      </div>
      <div className="checkboxes">
        <div className="box">
          <input
            id="privacy-policy"
            type="checkbox"
            name="privacy"
            defaultChecked={privacy}
            onClick={() => setPrivacy(!privacy)}
          />
          <label className="check" htmlFor="privacy-policy">
            Acepto la{" "}
            <a
              className="ch-link"
              href="https://www.samsung.com/pe/info/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              POLÍTICA DE PRIVACIDAD (*)
            </a>
          </label>
        </div>
        <div className="box">
          <input
            id="terms"
            type="checkbox"
            name="terms"
            defaultChecked={terms}
            onClick={() => setTerms(!terms)}
          />
          <label className="check" htmlFor="terms">
            Acepto los{" "}
            <a
              className="ch-link"
              href="https://samsung.com.pe/freestyle/files/freestyle/Legales_Pre-REgistro_Freestyle.pdf"
              target="_blank"
              rel="noreferrer"
            >
              TÉRMINOS Y CONDICIONES (*)
            </a>
          </label>
        </div>
        <div className="box">
          <input
            id="info-samsung"
            type="checkbox"
            name="info"
            defaultChecked={info}
            onClick={() => setInfo(!info)}
          />
          <label className="check" htmlFor="info-samsung">
            Deseo recibir información de Samsung{" "}
          </label>
        </div>
      </div>

      <span className="text-recaptcha">
        Este sitio esta protegido por reCAPTCHA. Aplican la{" "}
        <a
          className="r-link"
          href="https://policies.google.com/privacy"
          target="_blank"
          id="btn003"
          rel="noreferrer"
        >
          Política de Privacidad
        </a>
        de Google y los{" "}
        <a
          className="r-link"
          href="https://policies.google.com/terms"
          target="_blank"
          id="btn004"
          rel="noreferrer"
        >
          Términos del Servicio
        </a>
      </span>
      <p className="info--text">Todos los campos con (*) son obligatorios</p>
      <div className="button--container">
        {loading ? (
          <button className="ch--btn" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{background: "rgb(255, 255, 255) none repeat scroll 0% 0%;", margin: "auto", shapeRendering: "auto"}}
              width="30x"
              height="30x"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#fdfdfd"
                stroke-width="12"
                r="26"
                stroke-dasharray="122.52211349000194 42.840704496667314"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1.5384615384615383s"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                ></animateTransform>
              </circle>
            </svg>
          </button>
        ) : (
          <input type="submit" className="ch--btn" value="Enviar" />
        )}
      </div>
    </form>
  );
};

export default FreeStyleForm;
