import Head from "next/head";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface adminLayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: adminLayoutProps) => {
  return (
    <main className="admin-layout-box admin-layout-box-light admin-layout-box-dark admin-layout-box-default">
      <Head>
        <title>{title}</title>
      </Head>
      <Sidebar />
      <section className="main-body">{children}</section>
    </main>
  );
};

export default Layout;
