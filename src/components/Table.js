import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import SearchField from "react-search-field";
import { _isEmpty } from "lodash";
import localForage from "localforage";

const TableComponent = (props) => {
  const [dataList, setDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     if (searchResult) {
  //       setDataList(searchResult)
  //     }
  //   }
  //   else {
  //     localForage.getItem("data", (_error, data) => {
  //       setDataList(data)
  //     })
  //   }
  // }, [props.dataArray,searchTerm,searchResult])

  const handleSearch = (value, event) => {
    setSearchTerm(value)
    const searchResult = dataList.filter((data) => data.customer_name === value)
    console.log("searchResult", searchResult)
    setSearchResult([searchResult])
  }
  return (
    <div>
      <div className="table-header">
        <div className="left-wrap">
          <SearchField
            placeholder="Input Search Text"
            // onChange={handleSearch}
            className="search-bar"
          />
          <Button >Filter</Button>
        </div>
        <div className="right-wrap">
          <div><i class="fa fa-check pending" aria-hidden="true"></i> <span className="icon-span">PENDING</span></div>
          <div><i class="fa fa-check requirement" aria-hidden="true"></i> <span className="icon-span">REQUIREMENTS HAVE BEEN MET</span></div>
          <div> <i class="fa fa-times action-required" aria-hidden="true"></i> <span className="icon-span">ACTION REQUIRED</span></div>
          <div> <i class="fa fa-ban no-data" aria-hidden="true"></i> <span className="icon-span">NO DATA</span></div>
        </div>
      </div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>DATE</th>
            <th>CUSTOMER NAME</th>
            <th>LEAD ORIGIN</th>
            <th>SALESPERSON</th>
            <th>LICENSE</th>
            <th>PRIVACY</th>
            <th>TEST DRIVE</th>
            <th>TRADE</th>
            <th>VEHICLE</th>
            <th>DEAL TYPE</th>
            <th>CREDIT</th>
          </tr>
        </thead>
        <tbody>
          {(props.dataArray) && props.dataArray.map((data) => {
            return (
              <tr key={data.customer_name}>
                <th scope="row"><i class="fa fa-plus" aria-hidden="true"></i></th>
                <td>{data.date}</td>
                <td>{data.customer_name}</td>
                <td>{data.lead_origin}</td>
                <td>{data.salesperson}</td>
                <td><button className={`${data.license}`}>{data.license}</button></td>
                <td>{data.privacy ? <i class="fa fa-check requirement" aria-hidden="true"></i> : <i class="fa fa-times action-required" aria-hidden="true"></i>}</td>
                <td>{data.test_drive ? <i class="fa fa-check requirement" aria-hidden="true"></i> : <i class="fa fa-times action-required" aria-hidden="true"></i>}</td>
                <td>{data.trade ? <i class="fa fa-check requirement" aria-hidden="true"></i> : <i class="fa fa-times action-required" aria-hidden="true"></i>}</td>
                <td>{data.vehicle}</td>
                <td>{data.deal_type}</td>
                <td>{data.credit ? <button className="credit-button">Credit</button> : <button className="credit-button">No Credit</button>}</td>
              </tr>
            )

          })}
        </tbody>
      </Table>
    </div>
  )
}

export default TableComponent;
