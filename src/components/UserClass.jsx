import React from "react";

//Class based component ko yeh btana pdta he react ko ki yeh ek class based component he
// aur yeh React.Component se extend hota he
class UserClass extends React.Component {
    constructor(props) {
        super(props); // Constructor ko use karke hum props ko initialize karte hain or super(props) ka kaam he parent class ke constructor ko call karna
        // yeh props ko class ke andar use karne ke liye store karta he
        console.log(props);
        this.state={
            count:0,
            count2:1,
        };
    }
    render(){
        const {name, location}=this.props;
        const {count,count2}=this.state;

        return (
            <div className="user-class">
                <h1>Count= {count}</h1>
                <h1>Count= {count2 }</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 1234567890</h4>
            </div>
        )
    }
};

export default UserClass;
