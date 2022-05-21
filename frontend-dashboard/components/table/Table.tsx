import type { NextPage } from 'next';
import { useEffect, useState, useCallback } from 'react';

import { useModalContext } from '../../context/modalContext';
import styles from '../../styles/Table.module.css';
import { config } from '../../config/config';
import useHttp from '../../hooks/http-hook';

type SortKeys = 'gebruiker' | 'email' | 'telefoonnummer' | 'actie';

type Participant = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  // TODO data useState een type participant maken
  // refference: string;
  // role: string;
  // updatedAt: string;
  // company: string;
};

export const Table: NextPage = () => {
  // TODO data een type geven
  const [data, setData] = useState<any>([]);
  const { modal, setModal, setEditModal, setEditId } = useModalContext();
  const { errorHttp, sendRequest, clearErrorHttp } = useHttp();

  const headers: { key: SortKeys; label: string }[] = [
    { key: 'gebruiker', label: 'Gebruiker' },
    { key: 'email', label: 'Email' },
    { key: 'telefoonnummer', label: 'Telefoonnummer' },
    { key: 'actie', label: 'Actie' }
  ];

  const fetchFormData = async () => {
    try {
      const responseData = await sendRequest(`${config.API_URL}/form`, 'GET');

      setData(responseData.data.formData);
    } catch (err) {}
  };

  // useEffect hook runs once when the component first mounts, I also added the modal as a dependencie so the useEffect runs everytime the modal changes.
  useEffect(() => {
    fetchFormData();
    console.log('fetching data');
  }, [modal]);

  const deleteHandler = async (id: string) => {
    try {
      await sendRequest(`${config.API_URL}/form/${id}`, 'DELETE');
      fetchFormData();
    } catch (err: any) {}
  };

  const editHandler = (id: string) => {
    setEditModal(true);
    setEditId(id);
    setModal(true);
    return console.log(`Edited user with an id of: ${id}`);
  };

  return (
    <>
      <h4 className={styles.table__header}>
        Mensen die zich hebben ingeschreven voor de TechNight!
      </h4>
      <div className={styles.table__container}>
        {errorHttp && <p>{errorHttp}</p>}
        <table>
          <thead>
            <tr>
              {headers.map((row) => {
                return <th key={row.key}>{row.label}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((participant: Participant) => {
              return (
                <tr key={participant._id}>
                  <td>{participant.name}</td>
                  <td>{participant.email}</td>
                  <td>{participant.phoneNumber}</td>
                  <td className={styles.table__buttons}>
                    <button
                      className={`${styles.table__button} ${styles.table__button_edit}`}
                      onClick={() => editHandler(participant._id)}
                    >
                      Edit
                    </button>
                    <button
                      className={`${styles.table__button} ${styles.table__button_delete}`}
                      onClick={() => deleteHandler(participant._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
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
