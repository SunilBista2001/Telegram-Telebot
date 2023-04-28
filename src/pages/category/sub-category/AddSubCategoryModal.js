import React, { useEffect, useState } from "react";
import Modal from "../../../components/modal/Modal";
import { useForm } from "react-hook-form";
import { getCategory } from "../../../api/Services/Categories";

function AddSubCategoryModal({ closeModal }) {
  const { register, handleSubmit } = useForm();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCategory().then((data) => setOptions(data));
    console.log("data here > ", options);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Add Sub Categories">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label for="title">Select Category</label>
          <select
            className="form-control"
            {...register("category_name", {
              required: true,
            })}
          >
            <option key={options.cat_id} value={options.name}>
              {options.name}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="title">Sub Category</label>
          <input
            className="form-control"
            placeholder="Enter the Sub-Category Name"
            {...register("sub-category_name", {
              required: true,
            })}
          />
        </div>
      </form>
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
