import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createPlan } from "../../http/planAPI";

const CreatePlan = ({ show, onHide }) => {
  const [value, setValue] = useState('')
  const [file, setFile] = useState(null)

  const addPlan = () => {
    const formData = new FormData()
    formData.append('img', file)
    formData.append('title', value)
    createPlan(formData).then(data => onHide())
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати план
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={"Enter name"}></Form.Control>
          <Form.Control className="mt-2" type="file" onChange={selectFile}></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрити
        </Button>
        <Button variant={"outline-success"} onClick={addPlan}>
          Додати
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePlan;
