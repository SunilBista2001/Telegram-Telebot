import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

function OrderList({ data }) {
  return (
    <div className="card-body">
      <table className="table table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quanity</th>
            <th>Ordered Date</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.date}</td>
              <td>{`$${order.price}`}</td>
              <td className="actions-hover actions-fade flex gap-1">
                <DoneIcon className="text-green-500" />
                <CloseIcon className="text-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
