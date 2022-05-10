import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Table } from '../../components/table/Table';
import styles from '../../styles/Dashboard.module.css';

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <Sidebar />
      <Navbar />
      <Table />
    </div>
  );
};

export default Dashboard;
