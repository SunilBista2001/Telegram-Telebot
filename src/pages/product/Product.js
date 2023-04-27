import React, { useState } from "react";
import Button from "../../components/button/Button";
import AddProductModal from "./AddProductModal";
import ProductTable from "./ProductTable";

function Product() {
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  return (
    <div className="w-full py-2">
      {showAddProductModal && (
        <AddProductModal closeModal={() => setShowAddProductModal(false)} />
      )}

      <div
        className="w-full flex justify-end"
        onClick={() => setShowAddProductModal(true)}
      >
        <Button title="Add Product" />
      </div>
      {/* <div className="my-4">
        <ProductTable />
      </div> */}
    </div>
  );
}

export default Product;
