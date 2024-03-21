import React from 'react';

function BreadCrumb({ pageTitle }) {
  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>{pageTitle}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumb;
