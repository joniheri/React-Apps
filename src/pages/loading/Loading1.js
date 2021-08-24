import React from "react";

// import css loading
import "../../css/Loading1.css";

// import components
import NavbarPublic from "../../components/NavbarPublic";

export default function Loading1() {
  return (
    <>
      <NavbarPublic />
      <div style={{ marginTop: "100px" }}>
        <center>
          <div className="lds-dual-ring"></div>
        </center>
      </div>
    </>
  );
}
