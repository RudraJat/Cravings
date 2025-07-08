import React from "react";

//Class based component ko yeh btana pdta he react ko ki yeh ek class based component he
// aur yeh React.Component se extend hota he
class UserClass extends React.Component {
    render(){
        return (
            <div className="user-class">
                <h2>Name: Rudra</h2>
                <h3>Location: Gwalior</h3>
                <h4>Contact: 1234567890</h4>
            </div>
        )
    }
};

export default UserClass;
