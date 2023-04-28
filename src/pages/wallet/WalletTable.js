import React from "react";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useDispatch } from "react-redux";
import { setWallet } from "../../redux/slices/WalletSlice";
function WalletTable({ data, setShowAddAmountModal }) {
  //

  const dispatch = useDispatch();

  const updateAmount = (data) => {
    setShowAddAmountModal(true);
    dispatch(setWallet(data));
  };

  return (
    <div className=" card-body ">
      <table className="table  table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((wallet, index) => (
            <tr key={index} className="">
              <td>{wallet.id}</td>
              <td>{wallet.username}</td>
              <td>{`$${wallet.amount}`}</td>
              <td className="actions-hover actions-fade">
                <button className="ml-4" onClick={() => updateAmount(wallet)}>
                  <UpgradeIcon style={{ color: "#F59F01" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WalletTable;
