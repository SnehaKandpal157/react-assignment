import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import localForage from "localforage";
import Card from "./components/Card";
import TabComponent from "./components/Tab";
import Chart from "./components/Chart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        date: "",
        customer_name: "",
        lead_origin: "",
        salesperson: "",
        license: "Valid",
        privacy: false,
        test_drive: false,
        trade: false,
        vehicle: "",
        deal_type: "",
        credit: ""
      },
      modal: false,
      dataArray: []
    };
  }

  componentDidMount() {
    localForage.getItem("data", (_error, data) => {
      if(data){
        this.setState({ dataArray: [...data] })
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name, checked", name, value)
    let updatedFormData = {};
    const { data } = this.state;
    updatedFormData = {
      ...data, [name]: value
    };
    this.setState({ data: updatedFormData });
  }

  handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    let updatedFormData = {};
    const { data } = this.state;
    updatedFormData = {
      ...data, [name]: checked
    };
    this.setState({ data: updatedFormData });

  }

  handleSave = () => {
    const { data, modal } = this.state;
    this.setState({ modal: !modal });
    localForage.getItem("data", (_error, arr_data) => {
      if (arr_data) {
        const updatedDataArray = arr_data;
        updatedDataArray.push(data);
        localForage.setItem("data", updatedDataArray);
        this.setState({ dataArray: [...updatedDataArray] })
      }
      else {
        const updatedDataArray = [];
        updatedDataArray.push(data)
        localForage.setItem("data", updatedDataArray)
        this.setState({ dataArray: [...updatedDataArray] })
      }
    })

    this.setState({
      ...data, data: {
        date: "",
        customer_name: "",
        lead_origin: "",
        salesperson: "",
        license: "",
        privacy: "",
        test_drive: "",
        trade: "",
        vehicle: "",
        deal_type: "",
        credit: ""
      }
    })
  }

  handleCancel = () => {
    const { data, modal } = this.state;
    this.setState({ modal: !modal });
    this.setState({
      ...data, data: {
        date: "",
        customer_name: "",
        lead_origin: "",
        salesperson: "",
        license: "",
        privacy: "",
        test_drive: "",
        trade: "",
        vehicle: "",
        deal_type: "",
        credit: ""
      }
    })
  }

  handleToggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }
  render(){
    const { data, modal, dataArray } = this.state;
    return (
      <div className="App">
        <Header modal={modal} data={data} handleCheckBoxChange={this.handleCheckBoxChange} handleSave={this.handleSave} handleChange={this.handleChange} handleToggleModal={this.handleToggleModal} />
        <Chart/>
        <Card />
        <TabComponent dataArray={dataArray}/>
      </div>
    );
  }
}

export default App;
