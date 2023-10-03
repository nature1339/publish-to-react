import React from "react";
import { useParams } from "react-router-dom";

const StudyDetailPage = () => {
  const { id } = useParams();

  return <div>StudyDetailPage : {id}</div>;
};

export default StudyDetailPage;
