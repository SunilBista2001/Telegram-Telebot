import { useState } from "react";
import { useQuery } from "react-query";
import { getCategory } from "../../api/Services/Categories";
import Button from "../../components/button/Button";
import AddCategoryModal from "./AddCategoryModal";
import CategoryTable from "./CategoryTable";
import DeleteModal from "../../components/modal/DeleteModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import { useSelector } from "react-redux";

function Category() {
  const categoryId = useSelector((state) => state.category.id);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { data, isLoading, refetch } = useQuery("fetch-category", getCategory);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full py-2">
      {showAddCategoryModal && (
        <AddCategoryModal
          closeModal={() => setShowAddCategoryModal(false)}
          refetch={refetch}
        />
      )}
      {showDeleteModal && (
        <DeleteCategoryModal
          closeModal={() => setShowDeleteModal(false)}
          id={categoryId}
        />
      )}
      {showEditModal && <></>}
      <div
        className="w-full flex justify-end"
        onClick={() => setShowAddCategoryModal(true)}
      >
        <Button title="Add Category" />
      </div>
      <div className="my-4">
        <CategoryTable
          refetch={refetch}
          data={data}
          setShowEditModal={setShowEditModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      </div>
    </div>
  );
}

export default Category;
