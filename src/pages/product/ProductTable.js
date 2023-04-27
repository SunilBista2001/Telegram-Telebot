function ProductTable() {
  return (
    <div className="card-body">
      <table className="table table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.map((cat, index) => (
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
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
