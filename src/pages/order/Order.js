import React from "react";
import OrderList from "./OrderList";

let orders = [
  {
    id: 1,
    date: "2023-05-01",
    product: "MacBook",
    quantity: "1",
    price: "1300",
  },
  {
    id: 2,
    date: "2023-02-01",
    product: "Iphone 15 Pro Max",
    quantity: "1",
    price: "1400",
  },
];

function Order() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
      <h2 className="text-2xl font-medium">Order List</h2>

      <div className="my-4">
        <OrderList data={orders} />
      </div>
    </div>
  );
}

export default Order;
