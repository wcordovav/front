import { useEffect } from "react";
import Header from "../../../components/header_v2/Header";
import Footer from "../../../components/footer_v2/Footer";
import "./styles.scss";
import { useDevice } from "../../../hooks/useDevice";
import TagManager from "react-gtm-module";
import ImgDesktop from "../../../assets/images/freeStyle/landing/freestyle-v4_kv_1902.jpg";
import ImgMobile from "../../../assets/images/freeStyle/landing/freestyle-v4_kv_768.jpg";
import FreeStyleForm from './Form';

const NigthBeyond = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MSVVX7F" });
  });

  const { isDesktop, isMobile, isTablet, isLaptop } = useDevice();
  return (
    <>
      <Header />
      <div className="hero">
        {(isDesktop || isLaptop) && (
          <img
            className="imgBanner"
            src={ImgDesktop}
            width="100%"
            alt="freestyle banner"
          />
        )}
        {(isMobile || isTablet) && (
          <img
            className="imgBanner"
            src={ImgMobile}
            width="100%"
            alt="freestyle mobile banner"
          />
        )}
      </div>

      <div className="form-container">
        <div className="form">
          <FreeStyleForm />
        </div>
      </div>
      
      <div className="guide-section">
        <div className="steps">
          <div className="step">
            <div className="title">
              <img src="	https://www.samsung.com.pe/redimetucupon/static/media/step1.68959c2edf7424acc14c.webp" alt="" />
              1.
            </div>
            <p>
            Cuando recibas tu nuevo Galaxy S22 o Galaxy TAB S8 ingresa a Samsung Members con tu Samsung Account. <br /><br />
            Luego, dirígete a la sección beneficios para activar tu cupón virtual, donde visualizarás tu codigo de E-voucher y el link para redimir los productos seleccionados.
            </p>
          </div>
          <div className="step">
            <div className="title">
            <img src="https://www.samsung.com.pe/redimetucupon/static/media/step2.632b722371756e68ceee.webp" alt="" />
              2.
            </div>
            <p>
            La URL de canje será una sección de shop.samsung.com.pe con los productos seleccionados para canje. <br /><br />
            Escoge el ítem promocional, durante el proceso de compra deberás ingresar tu código E-voucer. <br /><br />
            Se programará el envío del producto(s) seleccionado(s). <br /><br />
            Para consultas relacionadas a la promoción se trandrá habilitado la opción 0 en el Call Center 0-800-001-32
            </p>
          </div>
          <div className="step">
            <div className="title">
            <img src="https://www.samsung.com.pe/redimetucupon/static/media/step3.5a8b5ec57a157bec642c.webp" alt="" />
              3.
            </div>
            <p>
            Puedes obtener tu cupón virtual hasta el <b> 15 de Marzo.</b><br /><br />
            Puedes redimir tu cupón virtual hasta el <b> 31 de Marzo. </b>
            </p>
          </div>
        </div>
        <p className="terms">
          *Válido para compras <b>del 23 febrero al 10 de Marzo del 2022</b>
        </p>
        <p className="terms-message">
        La entrega de productos estarán sujetos a las políticas de la tienda Online de Samsung Perú, disponibilidad de stock y zona de reparto.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NigthBeyond;
