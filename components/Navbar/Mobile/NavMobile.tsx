import styles from "./NavMobile.module.scss";
import NavIcons from "../NavIcons/NavIcons";
import NavModal from "./NavModal";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

export const NavMobile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalHandler = (): void => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  console.log(isModalOpen);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__title}>
        <h1 className={styles.nav__titleTop}>Michael</h1>
        <h1 className={styles.nav__titleBottom}>Davies</h1>
      </div>
      <div className={styles.nav__menu}>
        <NavIcons />
        <div className={styles.nav__modalContainer}>
          <MenuIcon fontSize="large" onClick={modalHandler} />
          {isModalOpen && <NavModal />}
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
