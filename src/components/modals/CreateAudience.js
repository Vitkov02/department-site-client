import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createAudience } from "../../http/audienceAPI";

const CreateAudience = ({ show, onHide }) => {
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')

  const addAudience = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('img', file)
    createAudience(formData).then(data => onHide())
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить аудиторию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={name} onChange={e => setName(e.target.value)} placeholder={"Enter name"}></Form.Control>
          <Form.Control onChange={selectFile} className="mt-3" type="file"></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addAudience}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateAudience;
