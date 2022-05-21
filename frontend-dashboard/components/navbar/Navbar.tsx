import type { NextPage } from 'next';
import Image from 'next/image';

import { useUserContext } from '../../context/authContext';
import logoImg from '../../public/Dashboard-logo.png';
import styles from '../../styles/Navbar.module.css';

export const Navbar: NextPage = () => {
  const { user } = useUserContext();
  return (
    <div className={styles.nav}>
      <div className={styles.navbar__container}>
        <p>Welkom {user?.name}</p>
        <div className={styles.image__container}>
          <Image src={logoImg} width={160} height={45} alt="logo" />
        </div>
      </div>
    </div>
  );
};
