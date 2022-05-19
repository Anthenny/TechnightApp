import type { NextPage } from 'next';
import { useEffect, useState, useCallback } from 'react';

import { useModalContext } from '../../context/modalContext';
import styles from '../../styles/Table.module.css';
import { config } from '../../config/config';

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
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<String | null>();
  const { modal, setModal } = useModalContext();

  const headers: { key: SortKeys; label: string }[] = [
    { key: 'gebruiker', label: 'Gebruiker' },
    { key: 'email', label: 'Email' },
    { key: 'telefoonnummer', label: 'Telefoonnummer' },
    { key: 'actie', label: 'Actie' }
  ];

  const sendRequest = async () => {
    const response = await fetch(`http://localhost:5000/api/v1/form`, {
      method: 'GET'
    });

    const responseData = await response.json();
    if (!response.ok) return setError(responseData.message);

    setData(responseData.data.formData);
  };

  // useEffect hook runs once when the component first mounts, I also added the modal as a dependencie so the useEffect runs everytime the modal changes.
  useEffect(() => {
    sendRequest();
  }, [modal]);

  const deleteHandler = async (id: string) => {
    try {
      await fetch(`${config.API_URL}/form/${id}`, {
        method: 'DELETE'
      });
      sendRequest();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const editHandler = (id: string) => {
    setModal(true);
    return console.log(`Edited user with an id of: ${id}`);
  };

  return (
    <>
      <h4 className={styles.table__header}>
        Mensen die zich hebben ingeschreven voor de TechNight!
      </h4>
      <div className={styles.table__container}>
        {error && <p>{error}</p>}
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
