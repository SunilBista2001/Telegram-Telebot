import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import PagesIcon from "@mui/icons-material/Pages";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import StarsIcon from "@mui/icons-material/Stars";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SidebarTitle from "./SidebarTitle";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      className={showSidebar ? "inner-wrapper w-[15%]" : "inner-wrapper w-0"}
    >
      <aside id="sidebar-left" className="sidebar-left">
        <div className="sidebar-header">
          <div className="sidebar-title">Telegram Telebot</div>
          <div
            className="sidebar-toggle d-none d-md-block"
            data-toggle-className="sidebar-left-collapsed"
            data-target="html"
            data-fire-event="sidebar-left-toggle"
          >
            <button onClick={() => setShowSidebar(!showSidebar)}>
              <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
            </button>
          </div>
        </div>

        {/* Sidebar Title */}

        <div className="nano">
          <div className="nano-content flex flex-col justify-between">
            <nav id="menu" className="nav-main" role="navigation">
              <Link to="/">
                <SidebarTitle Icon={DashboardIcon} title="Dashboard" />
              </Link>
              <Link to="/category">
                <SidebarTitle Icon={CategoryIcon} title="Category" />
              </Link>

              <Link to="/sub-category">
                <SidebarTitle Icon={PagesIcon} title="Sub Category" />
              </Link>
              <Link to="/product">
                <SidebarTitle
                  Icon={ProductionQuantityLimitsIcon}
                  title="Product"
                />
              </Link>
              <Link to="/order">
                <SidebarTitle Icon={LocalShippingIcon} title="Order" />
              </Link>
              <Link to="/wallet">
                <SidebarTitle Icon={AccountBalanceWalletIcon} title="Wallet" />
              </Link>
            </nav>

            <hr className="separator" />

            <div className="sidebar-widget ">
              <h6 className="tracking-widest ">HELP</h6>

              <div className="widget-content ml-[-23px]">
                <Link to="/settings">
                  <SidebarTitle Icon={SettingsIcon} title="Settings" />
                </Link>
                <Link to="/login">
                  <SidebarTitle Icon={LogoutIcon} title="Log Out" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
