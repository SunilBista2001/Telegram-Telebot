import React from "react";
import Modal from "../../components/modal/Modal";
import { useForm } from "react-hook-form";

function EditCategoryModal() {
  const { register, handleSubmit } = useForm();
  return (
    <Modal title="Edit Category">
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Category Name"
            {...register("category_name", {
              required: true,
            })}
          />
        </div>
      </form>
      <footer className="card-footer mt-4">
        <div className="row">
          <div className="flex justify-end gap-3">
            <button className="btn btn-primary modal-confirm" type="submit">
              Save
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

export default EditCategoryModal;
