import React from "react";

//Class based component ko yeh btana pdta he react ko ki yeh ek class based component he
// aur yeh React.Component se extend hota he
class UserClass extends React.Component {
  constructor(props) {
    super(props); // Constructor ko use karke hum props ko initialize karte hain or super(props) ka kaam he parent class ke constructor ko call karna
    // yeh props ko class ke andar use karne ke liye store karta he
    
    // this.state = {
    //   count: 0,
    // }; 

    this.state={
        userInfo:{
            name: "Dummy",
            location: "Dummy Location",
            avatar_url: "Dummy URL",
        },
    }
  }

 async componentDidMount(){
    //API calls
    const data = await fetch("https://api.github.com/users/RudraJat");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });
    // console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;

    return (
      <div className="user-class">
        {/* <h1>Count= {count}</h1> */}
        {/* <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE DIRECTLY
            // this.state.count += 1; // Directly modifying state is not recommended, but for simplicity in this example, we do it
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button> */}
        <div>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 1234567890</h4>
        </div>
        <div>
            <img className="avatar" src={avatar_url} alt="Avatar" />
        </div>
      </div>
    );
  }
}

export default UserClass;
