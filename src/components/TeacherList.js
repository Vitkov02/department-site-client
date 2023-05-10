import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../index";
import TeacherCard from "./TeacherCard";

const TeacherList = observer(() => {
  const {teacher} = useContext(Context)
  return (
    <Row className="">
        {teacher.teachers.map(teacher =>
            <TeacherCard key={teacher.id} teacher={teacher}/>
            )}
    </Row>
  )
});

export default TeacherList;
