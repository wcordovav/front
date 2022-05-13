import { FC } from "react";
import { useDevice } from "../../hooks/useDevice";
import "./footer.scss";
import Menu from "./footercomponents/Menu";
import MenuMobile from "./footercomponents/MenuMobile";

const Footer: FC = () => {
  const { isDesktop, isLaptop } = useDevice();

  return (
    <footer className="footer">
      {(isDesktop || isLaptop) ? <Menu /> : <MenuMobile />}
      {/* {isDesktop || isLaptop ? <Menu /> : <Menu />} */}
      
    </footer>
  );
};

export default Footer;
