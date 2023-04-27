import { useForm } from "react-hook-form";
import Modal from "../../components/modal/Modal";
import { useDispatch } from "react-redux";
import { setCategoryData } from "../../redux/slices/CategorySlice";
import { useMutation, useQueryClient } from "react-query";
import { addCategory } from "../../api/Services/Categories";
import { toast } from "react-toastify";

function AddCategoryModal({ closeModal, refetch }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const { mutate } = useMutation(addCategory, {
    onSuccess: (data) => {
      dispatch(setCategoryData(data));
      queryClient.invalidateQueries("fetch-category");
      toast.success("Added Category Succesfully", { theme: "colored" });
      refetch();
    },
  });

  const onSubmit = (data) => {
    mutate(data);
    closeModal();
  };

  return (
    <Modal title="Add Category">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label for="title">Category Name</label>
          <input
            type="text"
            className="form-control"
            name="category_name"
            placeholder="Enter the Category Name"
            {...register("category_name")}
          />
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

export default AddCategoryModal;
