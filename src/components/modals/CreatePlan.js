import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createPlan } from "../../http/planAPI";

const CreatePlan = ({ show, onHide }) => {
  const [value, setValue] = useState('')

  const addPlan = () => {
    createPlan(({title: value})).then(data => {
      setValue('')
      onHide()
    })
  }
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добивить план
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={"Enter name"}></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addPlan}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePlan;
