import { createContext } from "react";

// Creating React Context- It is used to avoid prop drilling
// It allows us to share values between components without passing props manually at every level
const userContext= createContext({
    loggedInUser:"Rudu",
});

export default userContext;