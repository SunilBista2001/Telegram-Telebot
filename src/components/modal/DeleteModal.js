import React from "react";

function DeleteModal({ title, children }) {
  return (
    <div className="w-full fixed inset-0 bg-opacity-75 bg-gray-300 z-10 flex items-center justify-center ">
      <section className="card w-1/2 ml-64">
        <header className="card-header">
          <h2 className="card-title">Are you sure?</h2>
        </header>
        <div className="card-body">
          <div className="modal-wrapper">
            <div className="modal-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <div className="modal-text">
              <h4 className="font-weight-bold text-dark">Delete {title}</h4>
              <p>Are you sure that you want to delete ?</p>
            </div>
          </div>
        </div>
        {children}
      </section>
    </div>
  );
}

export default DeleteModal;
