import React from "react";
import "./App.css";
import Image from "./home";
import { Link } from "react-router-dom";

// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="header_logo">
        <h1 className="header_title">Online Banking</h1>
      </div> */}

      <div className="header_navigate">
        <Link to={"/header"}>
          <div className="header_navitem">
            <span className="header_nav1">Home</span>
          </div>
        </Link>
        <Link to={"/account"}>
          <div className="header_navitem">
            <span className="header_nav1">Account Balance</span>
          </div>
        </Link>
        <Link to={"/bills"}>
          <div className="header_navitem">
            <span className="header_nav1">Paying Bills </span>
          </div>
        </Link>
        <Link to={"/Purchases"}>
          <div className="header_navitem">
            <span className="header_nav1">Online Purchases</span>
          </div>
        </Link>
        <Link to={"/transcation"}>
          <div className="header_navitem">
            <span className="header_nav3">Transactions</span>
          </div>
        </Link>
      </div>
      <img
        src="https://www.thebalancemoney.com/thmb/RdVnuj_EkMxtzyXlrDWsRexq324=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-an-online-bank-315204_final-98ce36e857d245d2867e28fa4c189111.png"
        className="header_navigate2"
        width="100%"
      />
    </div>
  );
};

export default Header;
