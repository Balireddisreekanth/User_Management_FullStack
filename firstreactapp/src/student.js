
import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useParams } from "react-router-dom";

export default function Student() {
    const useParam = useParams();
    const { id } = useParam;
    const [data, setData] = useState({ firstname: '', email: '', feedback: '' });
    const [val, setVal] = useState(0);
    const [tutorinfo, setTutor] = useState([])
    const [studentinfo, setStudent] = useState([]);
    // const Nav = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/student/${id}`).then((res) => {
            setStudent(res.data)
        })
    }, [studentinfo, id])

    useEffect(() => {
        axios.get('http://localhost:5000/tuto').then((res) => {

            setTutor(res.data)
        })
    }, [tutorinfo])

    const feeddetails = () => {
        const feedbackinfo = { firstname: data.firstname, email: data.email, feedback: data.feedback }
        alert('Feed Submitted sucessfully');
        axios.post('http://localhost:5000/feedbackinfo', feedbackinfo).then((res) => {
            console.log(res.data);
           
            if (res !== '') {
               
                setVal(val + 1);
                data.firstname = '';
                data.email = '';
                data.feedback = '';
            }


        })
    }

    React.useEffect(() => {
        axios.get(`http://localhost:5000/singleuser/${id}`).then((res) => {
            
            setData({ firstname: res.data[0].firstname, email: res.data[0].email})
        }
        )
    }, [id])
    const handler = (e) => {
        const { name, value } = e.target;

        setData((prevState) =>
            ({ ...prevState, [name]: value }))
    }

    const Feedback = () => {
        let response = document.getElementById('feed');

        if (response.style.display === "none") {
            response.style.display = "block";
        } else {
            response.style.display = "none";
        }

    }

    return (
        <>
            <section>
                {/* <div id="users" style={{margin:'20px 0 0 5px'}}>
                    <button id="tutor" style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",fontWeight:'bold'}}><Link to={'/tutor'} style={{color:"white",textDecoration:"none"}}>Tutor</Link></button> &nbsp;
                    <button  id= "student"style={{borderRadius:'10px',backgroundColor:"rgba(37, 117, 252, 1)",color:"white",fontWeight:'bold'}}><Link  to={'/student'} style={{color:"white",textDecoration:"none"}}>Student</Link></button>
                   </div> */}
                <div><h5>
                    <caption align="center" style={{ fontWeight: 'bold', fontSize: '20px', color: 'white', borderRadius: '0 10px 0 10px', background: 'grey', margin: '-22px 0 0 10px ' }} >Student</caption>
                    <button style={{ float: 'right', marginRight: '10px', width: '100px', borderRadius: '10px' }} onClick={Feedback}>Feedback</button>
                    <table className="table table-bordered" style={{ borderColor: 'white', background: 'rgba(0, 0, 0,0.2)', width: '500px', margin: '0 0 0 150px', borderRadius: '20px 20px 20px 20px' }} >

                        {/* <th scope="col">ID</th>
                            <th scope="col">Name</th> */}
                        {/* <th scope="col">Last Name</th> */}
                        {/* <th scope="col">Email</th> */}
                        {/* <th scope="col">Password</th> */}
                        {/* <th scope="col">Course_Type</th>
                            <th scope="col">Content</th>
                            <th scope="col">StartingDate</th>
                            <th scope="col">EndingDate</th>
                            <th scope="col">Total_Fee</th>
                            <th scope="col">Paid_Fee</th>
                            <th scope="col">Remaining_Fee</th>
                            <th scope="col">Project/Internship</th>
                            <th scope="col">Role</th> */}
                        {/* <th scope="col">Phone Number</th> */}
                        {/* <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                            <th scope="col">Fee</th> */}
                        {/* <th scope="col">Actions</th> */}


                        <tbody >
                            {studentinfo.map(item =>
                                <>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <td align="center">{item.id}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <td align="center">{item.firstname}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Email</th>
                                        <td align="center">{item.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Course_Type</th>
                                        <td align="center">{item.course}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Content</th>
                                        <td >{item.content}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">StartingDate</th>
                                        <td align="center">{item.start}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">EndingDate</th>
                                        <td align="center">{item.end}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Total_Fee</th>
                                        <td align="center">{item.total}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Paid_Fee</th>
                                        <td align="center">{item.paid}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Remaining_Fee</th>
                                        <td align="center">{item.remaining}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Project/Internship</th>
                                        <td align="center">{item.project}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Role</th>
                                        <td align="center">{item.roletype}</td>
                                    </tr>
                                    {/* {tutorinfo.map((val)=>
                                    <td value={val.id}>{val.firstname}</td>
                                    )} */}


                                    {/* <td>
                                Find tutor's name based on tutor ID
                                {tutorinfo.find(tutor => tutor.id === item.id)?.firstname || 'Unknown Tutor'}
                            </td> */}
                                    <tr>
                                        <th scope="col">Assigned To</th>
                                        <td align="center" value={tutorinfo.firstname}>{item.assigned_to}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Status</th>
                                        <td align="center">{item.status}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Fee</th>
                                        <td align="center"><button type="button" className="btn btn-outline-warning"><Link to={`/payment/${id}`} style={{ textDecoration: 'none' }}>Pay</Link></button>&nbsp;
                                            {/* <button type="button" className="btn btn-outline-danger" onClick={()=>del(item.id)} >Delete</button> */}
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table></h5><br />
                    <div id="feed" style={{ display: 'none' }}>
                        <form className="table table-bordered" key={val} style={{ width: '380px', height: '270px', margin: '-500px 0 0 700px', borderColor: 'white', background: 'rgba(0, 0, 255,0.2)', borderRadius: '10px 10px 10px 10px' }}>

                            
                            <div style={{margin:'-10px 0 0 20px'}}><br/>
                            <label>Name</label><br/>
                            <input type="text" name="name" onChange={handler} value={data.firstname}   style={{borderRadius:'5px'}} readOnly/><br/>

                            <label>Email</label><br/>
                            <input type="text" name="email" onChange={handler} value={data.email}  style={{borderRadius:'5px'}} readOnly/><br/>

                            <label>Feedback</label><br/>
                            <textarea rows="3" cols="40" name="feedback" onChange={handler} style={{borderRadius:'5px'}}></textarea><br/>
                            <button style={{  width: '80px',margin:'0 0 0 270px', borderRadius: '10px 10px 10px 10px', background: 'rgba(0, 0, 255,0.2)', color: 'white', outline: 'none', fontWeight: 'bold' }} onClick={feeddetails}>Submit</button>
                            </div>

                        </form>

                    </div>

                </div>

            </section>

        </>
    )
}