import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Table } from '../../components/table/Table';
import { ModalContext } from '../../context/modalContext';

const Dashboard: NextPage = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | undefined>(undefined);

  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
        <link rel='icon' href='/developer-favicon.png' />
      </Head>
      <ModalContext.Provider
        value={{ modal, setModal, editModal, setEditModal, editId, setEditId }}
      >
        <Sidebar />
        <Navbar />
        <Modal />
        <Table />
      </ModalContext.Provider>
    </div>
  );
};

export default Dashboard;
