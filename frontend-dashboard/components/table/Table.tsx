import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/Table.module.css';

export const Table: NextPage = () => {
  return (
    <>
      <h4 className={styles.table__header}>
        Mensen die zich hebben ingeschreven voor de TechNight!
      </h4>
      <div className={styles.table__container}>
        <table>
          <thead>
            <tr>
              <th>Gebruiker</th>
              <th>Email</th>
              <th>Telefoonnummer</th>
              <th>Actie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anthenny de Hoon</td>
              <td>anthenny1997@hotmail.com</td>
              <td>Telefoonnummer</td>
              <td className={styles.table__buttons}>
                <button
                  className={`${styles.table__button} ${styles.table__button_edit}`}
                >
                  Edit
                </button>
                <button
                  className={`${styles.table__button} ${styles.table__button_delete}`}
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>Anthenny de Hoon</td>
              <td>anthenny1997@hotmail.com</td>
              <td>Telefoonnummer</td>
              <td className={styles.table__buttons}>
                <button
                  className={`${styles.table__button} ${styles.table__button_edit}`}
                >
                  Edit
                </button>
                <button
                  className={`${styles.table__button} ${styles.table__button_delete}`}
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>Anthenny de Hoon</td>
              <td>anthenny1997@hotmail.com</td>
              <td>Telefoonnummer</td>
              <td className={styles.table__buttons}>
                <button
                  className={`${styles.table__button} ${styles.table__button_edit}`}
                >
                  Edit
                </button>
                <button
                  className={`${styles.table__button} ${styles.table__button_delete}`}
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>Anthenny de Hoon</td>
              <td>anthenny1997@hotmail.com</td>
              <td>Telefoonnummer</td>
              <td className={styles.table__buttons}>
                <button
                  className={`${styles.table__button} ${styles.table__button_edit}`}
                >
                  Edit
                </button>
                <button
                  className={`${styles.table__button} ${styles.table__button_delete}`}
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>Anthenny de Hoon</td>
              <td>anthenny1997@hotmail.com</td>
              <td>Telefoonnummer</td>
              <td className={styles.table__buttons}>
                <button
                  className={`${styles.table__button} ${styles.table__button_edit}`}
                >
                  Edit
                </button>
                <button
                  className={`${styles.table__button} ${styles.table__button_delete}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
