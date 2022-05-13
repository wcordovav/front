import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
// import Footer from '../../../components/footer';
import { useDevice } from '../../../hooks/useDevice';
import Header from '../../../components/header_v2/Header';
import Footer from '../../../components/footer_v2/Footer';
import './style.scss';

const ThankYouPage = ()=>{
    
    useEffect(()=>{
        TagManager.initialize({gtmId:'GTM-MSVVX7F'})
    })

    const { isDesktop, isMobile, isTablet, isLaptop } = useDevice();

    return (
        <>
        <Header/>

            {(isDesktop || isLaptop) && (
                <img className='imgBanner' src='thank-you-freestyle/images/freeStyle/1366x570_FreeStyle.jpg' width="100%" alt='freestyle banner'/>
            )}
            {(isMobile || isTablet) && (
                <img className='imgBanner' src='thank-you-freestyle/images/freeStyle/800x650_FreeStyle.jpg' width="100%" alt='freestyle banner'/>
            )}
            
            <div className='divMsj'>
                <h1>¡Gracias por registrarte!</h1>
                <h2>Tus datos han sido enviados con éxito, estate muy atento a tu correo electrónico que muy pronto te
                enviaremos información sobre la preventa del FreeStyle y acceder a beneficios insuperables.</h2>
                <h3>Para mayor información, te invitamos a ingresar aquí <br></br> <a href='https://www.samsung.com.pe/freestyle/' target='_blank' rel="noreferrer">https://www.samsung.com.pe/freestyle/</a></h3>
            </div>

            <div className='divSocial'>
                <h4>No te olvides de seguirnos en nuestras redes sociales</h4>
                <div className='divRowImage'>
                    <div className='divItemImage'>
                        <a href='https://instagram.com/samsungpe?utm_medium=copy_link' target='_blank' rel="noreferrer">
                            <img className='imageIg' src="thank-you-freestyle/images/freeStyle/icon-ig-90.webp" alt="Instagram"></img>
                        </a>
                    </div>
                    <div className='divItemImage'>
                        <a href='https://youtube.com/user/SamsungPeru' target='_blank' rel="noreferrer">
                            <img className='imageYt' src="thank-you-freestyle/images/freeStyle/icon-yt-90.webp" alt="Youtube"></img>
                        </a>
                    </div>
                </div>
            </div>

        <Footer/>
        </>
    );

}


export default ThankYouPage
