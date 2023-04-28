import React, { useState } from "react";
import WalletTable from "./WalletTable";
import AddAmountModal from "./AddAmountModal";
import { useSelector } from "react-redux";

let data = [
  {
    id: 1,
    username: "Sunil Bista",
    amount: "50000",
  },
  {
    id: 2,
    username: "Prakash Niroula",
    amount: "100000",
  },
];

function Wallet() {
  //
  const walletData = useSelector((state) => state.wallet.wallet);
  const [showAddAmountModal, setShowAddAmountModal] = useState(false);

  return (
    <div className="wfull py-2">
      {showAddAmountModal && (
        <AddAmountModal
          closeModal={() => setShowAddAmountModal(false)}
          walletData={walletData}
        />
      )}
      <h2 className="text-2xl mt-3 font-medium">User's Wallet List</h2>
      <div className="my-4">
        <WalletTable
          data={data}
          setShowAddAmountModal={setShowAddAmountModal}
        />
      </div>
    </div>
  );
}

export default Wallet;
