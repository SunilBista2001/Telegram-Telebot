import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import { useForm } from "react-hook-form";
import { getCategory } from "../../api/Services/Categories";

function AddProductModal({ closeModal }) {
  const { register, handleSubmit } = useForm();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCategory().then((data) => setOptions(data));
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Add Product">
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
          <label for="title">Product Name</label>
          <input
            type="text"
            className="form-control"
            {...register("product_name", {
              required: true,
            })}
          />
        </div>
        <div class="form-group">
          <label for="title">Description</label>
          <textarea
            rows="5"
            className="form-control"
            {...register("description", {
              required: true,
            })}
          ></textarea>
        </div>
        <div class="form-group">
          <label for="title">Price</label>
          <input
            type="text"
            className="form-control"
            {...register("price", {
              required: true,
            })}
          />
        </div>
        <div class="form-group flex items-center gap-2">
          <input type="checkbox" {...register("is_instant")} />
          <label for="title">Is Instant?</label>
        </div>
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
      </form>
    </Modal>
  );
}

export default AddProductModal;
