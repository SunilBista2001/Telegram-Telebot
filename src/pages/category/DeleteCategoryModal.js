import React from "react";
import DeleteModal from "../../components/modal/DeleteModal";

function DeleteCategoryModal({ closeModal }) {
  return (
    <DeleteModal title="Category">
      <footer className="card-footer">
        <div className="row">
          <div className="col-md-12 text-end">
            <button className="btn btn-primary modal-confirm mr-3">
              Confirm
            </button>
            <button
              className="btn btn-default modal-dismiss"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </footer>
    </DeleteModal>
  );
}

export default DeleteCategoryModal;
