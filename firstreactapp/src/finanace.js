
import axios from "axios";
import { useState ,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link} from "react-router-dom";

export default function Finance(){
    
     const [tutorinfo,setTutor] = useState([])
    const [studentinfo,setStudent] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/studen').then((res)=>{
            setStudent(res.data)
        })
    },[studentinfo])

    useEffect(()=>{
        axios.get('http://localhost:5000/tuto').then((res)=>{
            
            setTutor(res.data)
        })
    },[tutorinfo])


    
    return(
        <>
        <section>
        <div id="users" style={{margin:'20px 0 0 5px'}}>
                    <button id="tutor" style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",fontWeight:'bold'}}><Link to={'/users'} style={{color:"white",textDecoration:"none"}}>Back</Link></button> &nbsp;
                    {/* <button  id= "student"style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",color:"white",fontWeight:'bold'}}><Link  to={'/student'} style={{color:"white",textDecoration:"none"}}>Student</Link></button> */}
                   </div>
        <div><h5>
        <caption align="center" style={{fontWeight:'bold' ,fontSize:'20px',color:'white',borderRadius:'0 10px 0 10px',background:'grey',margin:'5px'}} >Students_Pay_Status</caption>
                <table className="table table-bordered" style={{borderColor:'white',background: 'rgba(0, 0, 0,0.2)',width:'100%'}} >
                    <thead>
                        <tr align="center" >
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Last Name</th> */}
                            
                            {/* <th scope="col">Password</th> */}
                            <th scope="col">Course</th>
                           
                            
                            <th scope="col">Total-Fee</th>
                            <th scope="col">Paid-Fee</th>
                            <th scope="col">Remaining-Fee</th>
                            <th scope="col">Project/Internship</th>
                            <th scope="col">Role</th>
                            {/* <th scope="col">Phone Number</th> */}
                            
                            <th scope="col">Status</th>
                            <th scope="col">Fee_Detail</th>
                            <th scope="col">Payment_Detail</th>
                            

                        </tr>
                    </thead>
                    <tbody align="center" >
                        {studentinfo.map((item) =>
                            <>
                                <tr key={item.id} >
                                    <th scope="row">{item.id}</th>
                                    <td>{item.firstname}</td>
                                    
                                    
                                    <td>{item.course}</td>
                                    
                                    <td>{item.total}</td>
                                    <td>{item.paid}</td>
                                    <td>{item.remaining}</td>
                                    <td>{item.project}</td>

                                    
                                    <td>{item.roletype}</td>
                                    
                                    {/* {tutorinfo.map((val)=>
                                    <td value={val.id}>{val.firstname}</td>
                                    )} */}
                                     {/* <td>
                                Find tutor's name based on tutor ID
                                {tutorinfo.find(tutor => item.assigned_to === tutor.id)?.firstname || 'Unknown Tutor'}
                            </td> */}

                                    
                                    
                                    <td>{item.status}</td>
                                    <td>{item.fee_detail}</td>
                                    <td>{item.paymode}</td>

                                    
                                    
                                </tr>
                            </>
                        )}
                    </tbody>
                   </table></h5><br /></div>
                   </section>

        </>
    )
}