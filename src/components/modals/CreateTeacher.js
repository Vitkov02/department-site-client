import React, {useState} from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createTeacher } from "../../http/teacherAPI";

const CreateTeacher = ({ show, onHide }) => {
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [achivement, setAchivement] = useState('')

  const addTeacher = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('img', file)
    formData.append('subject', subject)
    formData.append('achivement', achivement)
    createTeacher(formData).then(data => onHide())
  }

  
  const selectFile = e => {
    setFile(e.target.files[0])
  }
  
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить преподавателя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control className="mt-2" value={name} onChange={e => setName(e.target.value)} placeholder={"Enter name"}></Form.Control>
          <Form.Control className="mt-2" value={subject} onChange={e => setSubject(e.target.value)} placeholder={"Enter subject"}></Form.Control>
          <Form.Control className="mt-2" value={achivement} onChange={e => setAchivement(e.target.value)} placeholder={"Enter achivement"}></Form.Control>
          <Form.Control className="mt-2" type="file" onChange={selectFile}></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={addTeacher}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTeacher;
