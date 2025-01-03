import React from "react";
import Layout from "./components/Layout";
import FiltersForm from "./components/FiltersForm";

const Filters = () => {
  return (
    <Layout title="ADD Filters Categires - Cermat Admin">
      <div className="filter-container">
        <FiltersForm />
      </div>
    </Layout>
  );
};

export default Filters;
