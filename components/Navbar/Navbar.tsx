import styles from "./Navbar.module.scss";
import NavDesktop from "./Desktop/NavDesktop";
import NavMobile from "./Mobile/NavMobile";
import { useContext } from "react";
import { WidthContext } from "../../pages/_app";

export const Navbar: React.FC = () => {
  const width: number = useContext(WidthContext);
  return <>{width > 480 ? <NavDesktop /> : <NavMobile />}</>;
};

export default Navbar;
