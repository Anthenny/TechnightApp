import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useModalContext } from '../../context/modalContext';

import styles from '../../styles/Table.module.css';

type SortKeys = 'gebruiker' | 'email' | 'telefoonnummer' | 'actie';

type ParticipantKeys = any;

export const Table: NextPage = () => {
  const [data, setData] = useState<ParticipantKeys[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<String | null>();
  const { setModal } = useModalContext();

  const headers: { key: SortKeys; label: string }[] = [
    { key: 'gebruiker', label: 'Gebruiker' },
    { key: 'email', label: 'Email' },
    { key: 'telefoonnummer', label: 'Telefoonnummer' },
    { key: 'actie', label: 'Actie' }
  ];

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/v1/form', {
          method: 'GET'
        });

        const responseData = await response.json();
        if (!response.ok) return setError(responseData.message);

        setData(responseData.data.formData);
      } catch (err: any) {}
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const deleteHandler = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/v1/form/${id}`, {
        method: 'DELETE'
      });
    } catch (err: any) {
      setIsLoading(false);
    }
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
            {data.map((participant) => {
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
