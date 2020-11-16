import React, { useState } from 'react';
import { Button, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalExample = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [data, setData] = useState([{
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
  }])

  const handleChange = (e) => {
    console.log("event", e.target.name,e.target.value)
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>New+</Button>
      <Modal isOpen={modal} scrollable toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Label>Date</Label>
          <Input type="text" name="" onClick={handleChange} />
          <Label>Customer Name</Label>
          <Input type="text" name="" />
          <Label>Lead Origin</Label>
          <Input type="text" name="" />
          <Label>Salesperson</Label>
          <Input type="text" name="" />
          <Label>License</Label>
          <Radio /><br />
          <Label>Privacy</Label>
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          /><br />
          <Label>Test Drive</Label>
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          /><br />
          <Label>Trade</Label>
          <Input type="text" name="" />
          <Label>Vehicle</Label>
          <Input type="text" name="" />
          <Label>Deal Type</Label>
          <Input type="text" name="" />
          <Label>Credit</Label>
          <Input type="text" name="" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary"
            onClick={toggle}
          >Save</Button>{' '}
          <Button color="secondary"
            onClick={toggle}
          >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
