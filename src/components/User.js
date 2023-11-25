import { useState } from "react";

const User = ({ name, location, instaId }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      
      grade
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>InstaId : {instaId}</h4>
    </div>
  );
};

export default User;
