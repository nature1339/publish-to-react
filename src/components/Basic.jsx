import React from "react";

// 변수를 props라고 한다.
const Basic = ({ parentText }) => {
  console.log(parentText);
  return (
    <div>
      <div> div tags </div>
    </div>
  );
};

export default Basic;
