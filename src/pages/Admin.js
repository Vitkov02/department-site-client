import { React, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateTeacher from "../components/modals/CreateTeacher";
import CreateAudience from "../components/modals/CreateAudience";
import CreateWork from "../components/modals/CreateWork";
import CreatePlan from "../components/modals/CreatePlan";

const Admin = () => {
  const [teacherVisible, setTeacherVisible] = useState(false);
  const [audienceVisible, setAudienceVisible] = useState(false);
  const [planVisible, setPlanVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-primary"
        className="mt-2"
        onClick={() => {
          setTeacherVisible(true);
        }}
      >
        Додати викладача
      </Button>
      <Button
        variant="outline-primary"
        className="mt-2"
        onClick={() => {
          setAudienceVisible(true);
        }}
      >
        Додати аудиторію
      </Button>
      <Button
        variant="outline-primary"
        className="mt-2"
        onClick={() => {
          setWorkVisible(true);
        }}
      >
        Додати статтю
      </Button>
      <Button
        variant="outline-primary"
        className="mt-2"
        onClick={() => {
          setPlanVisible(true);
        }}
      >
        Додати уч.план
      </Button>
      <CreateAudience
        show={audienceVisible}
        onHide={() => setAudienceVisible(false)}
      />
      <CreatePlan show={planVisible} onHide={() => setPlanVisible(false)} />
      <CreateTeacher show={teacherVisible} onHide={() => setTeacherVisible(false)} />
      <CreateWork show={workVisible} onHide={() => setWorkVisible(false)} />
    </Container>
  );
};

export default Admin;
