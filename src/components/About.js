import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <h2>This is Namaste React Webseries</h2>
      <User
        name={"Vivek Kumar (from functional component)"}
        location={"Phagwara"}
        instaId={"ig.vivek02"}
      />

      <UserClass
        name={"Vivek Kumar (from class component)"}
        location={"Phagwara"}
      />

    </div>
  );
};

export default About;
