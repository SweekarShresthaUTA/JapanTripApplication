// Component for actual acitivty container where activiy description is displayed with admin option to delete

import React from "react";

function Activity(props) {
  
  // The props passed includes id of activity,and the content or description of the activity
  const {id, content} = props;
  
  // function to handle clicks whenever delete is clicked to delete planned activities
  function handleClick() {
    props.onDelete(id);
  }

  return (
    // returns the activity tag with deletion logic
    <div className="activity">
      <p>{content}</p>
      <button onClick={handleClick} style={{backgroundColor: "#fff"}}>DELETE</button>
    </div>
  );
}

export default Activity;
