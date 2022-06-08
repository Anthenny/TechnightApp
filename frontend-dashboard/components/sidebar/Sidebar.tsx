import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import avatarImg from '../../public/Dashboard-avatar.png';
import homeImg from '../../public/Dashboard-home.png';
import logoutImg from '../../public/Dashboard-logout.png';
import styles from '../../styles/Sidebar.module.css';
import { useUserContext } from '../../context/authContext';
import Router from 'next/router';

export const Sidebar: NextPage = () => {
  const { setUser } = useUserContext();

  const logoutHandler = () => {
    setUser({
      name: undefined,
      email: undefined,
      token: undefined
    });
    return Router.push('/');
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__avatar}>
          <Image src={avatarImg} alt="avatar" width={117} height={117} />
        </div>
        <div className={styles.container}>
          <div className={styles.sidebar__link_active}>
            <div className={styles.image_style}>
              <Image
                className={styles.sidebar__link_item_img}
                src={homeImg}
                alt="icon"
                width={34}
                height={34}
              />
            </div>
            <p>Home</p>
          </div>

          <div onClick={logoutHandler} className={styles.sidebar__link}>
            <div className={styles.image_style}>
              <Image src={logoutImg} alt="icon" width={34} height={34} />
            </div>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
