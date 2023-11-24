import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      //   count2: 3,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>

        <button
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
        </button>

        <h2>Name : {name}</h2>
        <h3>App : FOOD APP</h3>
        <h4>Location : {location}</h4>
        <h4>Location : {this.props.location}</h4>
      </div>
    );
  }
}

export default UserClass;
