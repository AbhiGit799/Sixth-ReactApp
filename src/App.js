import PT from "prop-types";
import { Component } from "react";

export function AEmployee(props) {
    const { name, empId, gender, status, friendList, studentDetails, fun1, fun2, fun3, fun4 } = props;
    const { mobileNo, emailId } = studentDetails;
    return (
        <>
            <h2>Employee Details</h2>
            <hr />
            <h2>Hello, {name}</h2>
            <h2>Your Emp Id : {empId }</h2>
            <h2>Your Gender : {gender ? 'Male' : 'Female'}</h2>
            <h2>Your Status : {status ? 'New' : 'Old'}</h2>
            <h2>Friend List</h2>
            <ul>
                {
                    friendList.map((n, i) => {
                        return <li key={i} >{n}</li>
                    })
                }
            </ul>
            <h4>Stduent Info</h4>
            <p>MobileNo :  {mobileNo}</p>
            <p>EmailId :  {emailId}</p>
            <h4>Fun1: {fun1()}</h4>
            <h4>Fun2: {fun2()}</h4>
            <h4>Fun3: {fun3("How are you ?")}</h4>
            <h4>Fun4: {fun4(10, 20)}</h4>
        </>
    )
}

//PropTypes only give warning in console.

AEmployee.propTypes={

    name: PT.string,
    empId:PT.number,
    //empId:PT.any,   //to send any kind of data.
    gender:PT.bool,
    status:PT.bool,
    friendList:PT.array,
    studentDetails:PT.object,
    fun1:PT.func,
    fun2:PT.func,
    fun3:PT.func,
    fun4:PT.func,
    isActive:PT.bool,

}


//Complex Val

export class BEmployee extends Component
{
    render()
    {
        return(<>
        
         <h1>Hello,{this.props.name}</h1>
         <h1>Employee ID: {this.props.empId}</h1>
         <h1>Gender : {this.props.gender}</h1>
         <h1>Designation:{this.props.designation} </h1>

        </>)
    }
}

//camelcase

BEmployee.defaultProps={
    designation:"Associate"
}

BEmployee.propTypes = {
  name:PT.string.isRequired,
  gender:PT.oneOf(['male','female']),
  empId:PT.oneOfType([PT.number,PT.string]),
  
}

BEmployee.defaultProps={
    designation:"Associate"
}


// export function FunEmployee(props)
// {
   
//         return(<>
        
//          <h1>Hello,{props.name}</h1>
//          <h1>Employee ID: {props.empId}</h1>
//          <h1>Gender : {props.gender}</h1>
//          <h1>Designation:{props.designation} </h1>

//         </>)
    
// }

// FunEmployee.defaultProps={
//     designation:"Associate"
// }


// FunEmployee.propTypes = {
//     name:PT.string.isRequired,
//     gender:PT.oneOf(['male','female']),
//     empId:PT.oneOfType([PT.number,PT.string]),
    
//   }


// export function AFunEmployee(props)
// {
   
//         return(<>
        
//          <h1>Hello,</h1>
//          <h1>Employee ID: {props.empDetails.empId}</h1>
//          <h1>Name : {props.empDetails.name}</h1>
//          <h1>Age : {props.empDetails.age}</h1>

//         </>)
    
// }


export function AFunEmployee({empDetails})
{
    const {empId,name,age} = empDetails;
   
        return(<>
        
         <h1>Hello,</h1>
         <h1>Employee ID: {empId}</h1>
         <h1>Name : {name}</h1>
         <h1>Age : {age}</h1>

        </>)
    
}

AFunEmployee.defaultProps={
    
}


AFunEmployee.propTypes = {
   
    empDetails:PT.shape({
        empId:PT.number.isRequired,
        name:PT.string.isRequired,
        age:PT.number.isRequired
    })

}