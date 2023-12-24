import { Component } from "react";
import ReactDOM from "react-dom/client";
import {AEmployee,BEmployee,FunEmployee,AFunEmployee } from './app'

// function AIndex() {
//     let friends = ["Chandan", "Pawan", "Samir"];
//     let details = { mobileNo: 8956235689, emailId: 'ajeet@gmail.com' };
//     return (
//         <AEmployee
//             name="Ajeet Singh"
//            // name={1234}  //Warning: Failed prop type: Invalid prop `name` of type
//             empId={789}
//             gender
//             status={false}
//             friendList={friends}
//             studentDetails={details}
//             fun1={() => "Hi Ajeet"}
//             fun2={() => { return "Hi Chandan" }}
//             fun3={(msg) => { return msg }}
//             fun4={(a, b) => a + b}
//             isActive
//         />
//     )
// }
// const aroot = ReactDOM.createRoot(document.getElementById("root"));
// aroot.render(<AIndex />);


//Props Complex Validation

// class BIndex extends Component
// {
//    render()
//    {
//     return(<>

//      {/* <BEmployee/>  Warning: Failed prop type: The prop `name` is marked as required in `BEmployee`, but its value is `undefined`. at BEmployee */}
     
//      {/* <BEmployee name="Arjun" gender="Male"/> */}

//      <BEmployee name="Arjun" gender="male" empId={101}  />
  
    
//     </>)
//    }
// }

// const broot = ReactDOM.createRoot(document.getElementById("root"));
// broot.render(<BIndex />);



// function CIndex()
// {

//     return(<>
    
//      <FunEmployee name="Arjun" gender="male" empId={101} />

//     </>)
// }


// const croot = ReactDOM.createRoot(document.getElementById("root"));
// croot.render(<CIndex />);




function DIndex()
{
    let obj={
        empId:210,
        name:"Rahul",
        age:32
    }
    return(<>
    
      <AFunEmployee empDetails={obj}/>

    </>)
}


const droot = ReactDOM.createRoot(document.getElementById("root"));
droot.render(<DIndex />);



