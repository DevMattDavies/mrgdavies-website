import styles from "./NavMobile.module.scss";
import NavIcons from "../NavIcons/NavIcons";
import NavModal from "./NavModal";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import React, { useEffect, useState } from "react";

export const NavMobile = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalHandler = (): void => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__title}>
        <h1 className={styles.nav__titleTop}>Michael</h1>
        <h1 className={styles.nav__titleBottom}>Davies</h1>
      </div>
      <div className={styles.nav__menu}>
        <div className={styles.nav__modalContainer}>
          {isModalOpen ? (
            <CloseIcon fontSize="large" onClick={modalHandler} />
          ) : (
            <MenuIcon fontSize="large" onClick={modalHandler} />
          )}
          {isModalOpen && (
            <>
              <div className={styles.nav__background}></div>
              <NavModal modalHandler={modalHandler} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
