import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   count: 0,
      //   count2: 3,
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    // console.log("Component Did Mount");
    const response = await fetch("https://api.github.com/users/vivek4551");
    const data = await response.json();

    this.setState({ 
        userInfo: data 
    });
    
    console.log(data);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1> */}

        {/* <button
          onClick={() => {
            // never update state variable directly in class components
            // never do => this.state.count = this.state.count + 1;
            this.setState({
              count: this.state.count + 1,
            //count2: this.state.count2 + 1,
            });
          }}
        >
          Increase
        </button> */}
        <img src={avatar_url} alt="user" />
        <h2>Name : {name}</h2>
        <h3>App : FOOD APP</h3>
        <h4>Location : {location}</h4>
        {/* <h4>Location : {this.props.location}</h4> */}
      </div>
    );
  }
}

export default UserClass;
