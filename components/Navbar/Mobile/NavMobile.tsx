import styles from "./NavMobile.module.scss";
import NavIcons from "../NavIcons/NavIcons";
import NavModal from "./NavModal";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";

export const NavMobile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalHandler = (): void => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  interface propTypes {
    modalHandler: () => void;
  }

  const props: propTypes = {
    modalHandler: modalHandler,
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav__title}>
        <h1 className={styles.nav__titleTop}>Michael</h1>
        <h1 className={styles.nav__titleBottom}>Davies</h1>
      </div>
      <div className={styles.nav__menu}>
        <NavIcons />
        <div className={styles.nav__modalContainer}>
          {isModalOpen ? (
            <CloseIcon fontSize="large" onClick={modalHandler} />
          ) : (
            <MenuIcon fontSize="large" onClick={modalHandler} />
          )}
          {isModalOpen && <NavModal {...props} />}
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
