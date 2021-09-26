import React from "react";

function Activity(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="activity">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} style={{backgroundColor: "#fff"}}>DELETE</button>
    </div>
  );
}

export default Activity;
