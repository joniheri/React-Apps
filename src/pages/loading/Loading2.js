import React from "react";

// import css
import "../../css/Loading2.css";

// import components
import NavbarPublic from "../../components/NavbarPublic";

export default function Loading2() {
  return (
    <>
      <NavbarPublic />
      <div style={{ marginTop: "100px" }}>
        <center>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </center>
      </div>
    </>
  );
}
