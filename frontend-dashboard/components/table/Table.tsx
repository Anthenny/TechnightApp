import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useModalContext } from '../../context/modalContext';

import styles from '../../styles/Table.module.css';

type SortKeys = 'gebruiker' | 'email' | 'telefoonnummer' | 'actie';

export const Table: NextPage = () => {
  const [data, setData] = useState<Array<string | number>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [errror, setError] = useState<String | null>();
  const { modal, setModal } = useModalContext();

  const headers: { key: SortKeys; label: string }[] = [
    { key: 'gebruiker', label: 'Gebruiker' },
    { key: 'email', label: 'Email' },
    { key: 'telefoonnummer', label: 'Telefoonnummer' },
    { key: 'actie', label: 'Actie' }
  ];

  // useEffect(() => {
  //   // async functie die data ophaalt van api
  //   const sendRequest = async () => {
  //     // setIsLoading(true);
  //     // try{
  //     //   const response =
  //     // }
  //     // const responseData = await response.json();
  //     // if(!response.ok) return setError(responseData.message);
  //     // setData()
  //     // catch(err: any) {
  //     // }
  //     // setIsLoading(false)
  //   };

  //   sendRequest()
  // }, [data]);

  const deleteHandler = (id: number) => {
    // stuur delete request naar api
    return console.log(`Deleted user with an id of: ${id}`);
  };

  const editHandler = (id: number) => {
    // stuur patch request naar api
    setModal(true);
    return console.log(`Edited user with an id of: ${id}`);
  };

  return (
    <>
      <h4 className={styles.table__header}>
        Mensen die zich hebben ingeschreven voor de TechNight!
      </h4>
      <div className={styles.table__container}>
        <table>
          <thead>
            <tr>
              {headers.map((row) => {
                return <th key={row.key}>{row.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anthenny de Hoon</td>
              <td>anthenny1997@hotmail.com</td>
              <td>0636082244</td>
              <td className={styles.table__buttons}>
                <button
                  className={`${styles.table__button} ${styles.table__button_edit}`}
                  onClick={() => editHandler(1)}
                >
                  Edit
                </button>
                <button
                  className={`${styles.table__button} ${styles.table__button_delete}`}
                  onClick={() => deleteHandler(1)}
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
      <div className={styles.table__button_container}>
        <button
          onClick={() => {
            setModal(true);
          }}
          className={styles.table__button_add}
        >
          Voeg iemand toe
        </button>
      </div>
    </>
  );
};
