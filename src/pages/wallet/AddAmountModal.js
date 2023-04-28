import React from "react";
import Modal from "../../components/modal/Modal";
import { useForm } from "react-hook-form";

function AddAmountModal({ closeModal, walletData }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      //   username: walletData?.username,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Update Wallet">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label for="title">Username</label>
          <input
            type="text"
            className="form-control cursor-not-allowed"
            placeholder="Enter the Username"
            value={walletData?.username}
          />
        </div>
        <div class="form-group">
          <label for="title">Enter Amount</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the amount to be updated in Wallet"
            {...register("wallet_amount")}
          />
        </div>
        <footer className="card-footer mt-4">
          <div className="row">
            <div className="flex justify-end gap-3">
              <button className="btn btn-primary modal-confirm" type="submit">
                Update
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
      </form>
    </Modal>
  );
}

export default AddAmountModal;
