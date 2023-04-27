import React from "react";
import Modal from "../../../components/modal/Modal";

function AddSubCategoryModal({ closeModal }) {
  return (
    <Modal title="Add Sub Categories">
      <footer className="card-footer mt-4">
        <div className="row">
          <div className="flex justify-end gap-3">
            <button className="btn btn-primary modal-confirm" type="submit">
              Submit
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
    </Modal>
  );
}

export default AddSubCategoryModal;
