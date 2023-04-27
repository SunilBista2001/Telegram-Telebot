import React, { useState } from "react";
import AddSubCategoryModal from "./AddSubCategoryModal";
import Button from "../../../components/button/Button";

function SubCategory() {
  const [showSubCategoryModal, setShowCategoryModal] = useState(false);
  return (
    <div className="w-full py-2">
      {showSubCategoryModal && (
        <AddSubCategoryModal closeModal={() => setShowCategoryModal(false)} />
      )}
      <div
        className="w-full flex justify-end"
        onClick={() => setShowCategoryModal(true)}
      >
        <Button title="Add Sub Category" />
      </div>
      <div className="my-4">{/* Render the Sub Category */}</div>
    </div>
  );
}

export default SubCategory;
