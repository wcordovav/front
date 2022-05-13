import cart from '../../../../assets/images/premium-service/carrito.png';
import service from '../../../../assets/images/premium-service/service.png';
import call from '../../../../assets/images/premium-service/call.png';

const Steps = () => {
  return (
    <div id="step--step" className="ps--steps">
      <h3 className="step-title">Accede a nuestro servicio gratuito de instalación Premium</h3>
      <div className="step-cards">
        <div className="step-card">
          <div className="card--icon">
            <img src={cart} alt="shopping-cart-icon" />
          </div>
          <div className="card--body">
            <div className="card--title">
              <h4>Paso 1</h4>
            </div>
            <div className="card--desc">
              <p>Compra nuestros productos Premium de Samsung.</p>
            </div>
          </div>
        </div>
        <div className="step-card">
          <div className="card--icon">
          <img src={call} alt="call-icon" />
          </div>
          <div className="card--body">
            <div className="card--title">
              <h4>Paso 2</h4>
            </div>
            <div className="card--desc">
              <p>
                Agenda la instalación a través de nuestra línea gratuita:{" "}
                <span>0 800 777 08.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="step-card">
          <div className="card--icon">
            <img src={service} alt="call-icon" />
          </div>
          <div className="card--body">
            <div className="card--title">
              <h4>Paso 3</h4>
            </div>
            <div className="card--desc">
              <p>
                Recibe a nuestros técnicos en casa para la instalación de tus
                productos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
