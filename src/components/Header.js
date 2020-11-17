import React from 'react';
import SearchField from "react-search-field";
import ModalExample from "./Modal";
function header(props) {
  return (
    <div className="header-outer-wrap">
      <div className="header-inner-wrap">
        <SearchField
          placeholder="Search..."
          // onChange={onChange}
          className="search-bar"
        />
        <ModalExample {...props}/>
      </div>
    </div>
  )
}

export default header
