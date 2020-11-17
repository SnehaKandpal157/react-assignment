import React, { useState } from 'react';
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import _get from "lodash/get";

const ModalComponent = (props) => {
  const {
    className
  } = props;

  return (
    <div>
      <Button color="primary" onClick={props.handleToggleModal}>New+</Button>
      <Modal isOpen={props.modal} scrollable toggle={props.handleToggleModal} className={className}>
        <ModalHeader toggle={props.handleToggleModal}>Modal title</ModalHeader>
        <ModalBody>
          <Label>Date</Label>
          <Input type="date" name="date" value={_get(props.data, "date", "")} onChange={props.handleChange} />
          <Label>Customer Name</Label>
          <Input type="text" name="customer_name" value={_get(props.data, "customer_name", "")} onChange={props.handleChange} />
          <Label>Lead Origin</Label>
          <Input type="text" name="lead_origin" value={props.data.lead_orgin} onChange={props.handleChange} />
          <Label>Salesperson</Label>
          <Input type="text" name="salesperson" value={props.data.salesperson} onChange={props.handleChange} />
          <Label>License</Label>
          <Radio
            checked={_get(props.data, "license", "") === "Valid"}
            onChange={props.handleChange}
            value="Valid"
            name="license"
          />
          Valid
          <Radio
            checked={_get(props.data, "license", "") === "Expired"}
            onChange={props.handleChange}
            value="Expired"
            name="license"
          />
          Expired
          <br/>
          <Label>Privacy</Label>
          <Checkbox
            name="privacy"
            checked={props.data.privacy}
            onChange={props.handleCheckBoxChange}
          /><br />
          <Label>Test Drive</Label>
          <Checkbox
            name="test_drive"
            checked={props.data.test_drive}
            onChange={props.handleCheckBoxChange}
          /><br />
          <Label>Trade</Label>
          <Checkbox
            name="trade"
            checked={props.data.trade}
            onChange={props.handleCheckBoxChange}
          />
          <br/>
          <Label>Vehicle</Label>
          <Input type="text" value={props.data.vehicle} name="vehicle" onChange={props.handleChange} />
          <Label>Deal Type</Label>
          <Input type="text" name="deal_type" value={props.data.deal_type} onChange={props.handleChange} />
          <Label>Credit</Label>
          <Checkbox
            name="credit"
            checked={props.data.credit}
            onChange={props.handleCheckBoxChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary"
            onClick={props.handleSave}
          >Save</Button>{' '}
          <Button color="secondary"
            onClick={props.handleToggleModal}
          >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
