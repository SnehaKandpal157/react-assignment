import React from 'react';
import SearchField from "react-search-field";
import ModalExample from "./Modal";
function header() {
  return (
    <div className="header-outer-wrap">
      <div className="header-inner-wrap">
        <SearchField
          placeholder="Search..."
          // onChange={onChange}
          className="search-bar"
        />
        <ModalExample />
      </div>
    </div>
  )
}

export default header
