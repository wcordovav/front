import {  lazy, Suspense, useState } from "react";
import PremiumServiceLoader from "../../../../components/skeleton-loaders/PremoumServiceLoader";
// import TabLineaBlanca from "./LineaBlanca";
// import TabTelevisores from "./Televisores";

const TabLineaBlanca = lazy(() => import("./LineaBlanca"));
const TabTelevisores = lazy(() => import("./Televisores"));

const Tabs = () => {
  const [tabActive, setTabActive] = useState<number>(1);

  return (
    <div className="ps--tabs">
      <div className="tab-categories">
        <ul>
          <li
            onClick={() => setTabActive(1)}
            className={tabActive === 1 ? "active" : ""}
          >
            TELEVISORES
          </li>
          <li
            onClick={() => setTabActive(2)}
            className={tabActive === 2 ? "active" : ""}
          >
            LÍNEA BLANCA
          </li>
        </ul>
      </div>
      <div className="tab-content">
        {tabActive === 1 ? (
          <Suspense fallback={<>  <PremiumServiceLoader /> <PremiumServiceLoader /> </> } >
            <TabTelevisores />
            </Suspense>
        ) : tabActive === 2 ? (
          <Suspense fallback={ <>  <PremiumServiceLoader /> <PremiumServiceLoader /> </> } >
              <TabLineaBlanca />
          </Suspense>
        ) : null}
      </div>
    </div>
  );
};

export default Tabs;
