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

  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <ModalContext.Provider value={{ modal, setModal }}>
        <Sidebar />
        <Navbar />
        <Modal />
        <Table />
      </ModalContext.Provider>
    </div>
  );
};

export default Dashboard;
