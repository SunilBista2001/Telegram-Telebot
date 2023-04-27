import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCategoryId,
  setCategoryData,
} from "../../redux/slices/CategorySlice";

function CategoryTable({
  data,
  refetch,
  setShowEditModal,
  setShowDeleteModal,
}) {
  const dispatch = useDispatch();

  const deleteCategory = (id) => {
    dispatch(setCategoryId(id));
    setShowDeleteModal(true);
    console.log("cat id >", id);
  };

  const editCategories = (data) => {
    setShowEditModal(true);
    dispatch(setCategoryData(data));
  };

  return (
    <div className="card-body">
      <table className="table table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((cat, index) => (
            <tr key={index}>
              <td>{cat.cat_id}</td>
              <td>{cat.name}</td>
              <td className="actions-hover actions-fade">
                <button onClick={() => editCategories(cat)}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="ml-3 delete-row"
                  onClick={() => deleteCategory(cat.cat_id)}
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
