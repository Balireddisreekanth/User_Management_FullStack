import { Link, useNavigate, } from "react-router-dom";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function Menu() {
    
    const Nav = useNavigate();
    const logout = () => {
        localStorage.clear();
        Nav('/login');
    }


    return (
        <>
            <input type="checkbox" id="check" />
            <label for="check">
                {/* <i class="bi bi-arrow-bar-right" id="btn1"></i> */}
                <img id="btn1" src="menu.png" alt="" height="40px" width="40px" ></img>
                <i class="bi bi-x-lg" id="canc"></i>
            </label>
            <div className='slidebar'>
                <header>
                    <img src="user.jpg" alt="" height="80px" width="80px" style={{ borderRadius: '50%',marginBottom:'-20px',marginLeft:'20px' }}></img><br />
                    <span style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 0 25px' }} height="100px" id="um">User Management</span>
                </header>
                <ul>
                    {/* Home Page */}
                    <li><Link to='/'><i class="bi bi-house-fill"></i>Home</Link></li>

                    {/* Contact Page */}
                    <li><Link to='/first' ><i class="bi bi-person-lines-fill"></i>Contact</Link></li>

                    {/* Registration Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/register' ><i class="bi bi-r-circle-fill"></i>Register</Link></li> : ''}

                    {/* Users Page */}
                    {localStorage.getItem('roletype') === 'Admin' ? <li><Link to='/users' ><i class="bi bi-people-fill"></i>Users</Link></li> : ''}

                    {/* Tutor Page */}
                    {localStorage.getItem('roletype') === 'Tutor' ? <li><Link to='/tutor' ><i class="bi bi-person-fill"></i>Tutor</Link></li> : ''}

                    {/* Student Page */}
                    {localStorage.getItem('roletype') === 'Student' ? <li><Link to={'/stu'}><i class="bi bi-person-fill"></i>Student</Link></li> : ''}

                    {/* Login Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/login' ><i class="bi bi-door-open-fill"></i>Login</Link></li> : ''}

                    {/* About Page */}
                    {localStorage.getItem('username') == null ? <li><Link to='/third' ><i class="bi bi-ticket-detailed-fill"></i>About</Link></li> : ''}

                    {/* Logout Page */}
                    {localStorage.getItem('username') !== null ? <li onClick={logout}><Link to=""><h5 id="logout"><i class="bi bi-door-closed-fill"></i>Logout</h5></Link></li> : ''}

                    {/*Welcome Greetings */}
                    {localStorage.getItem('username') !== null ? <li><h5 id="greets">Welcome {localStorage.getItem('username')} </h5></li> : ''}



                </ul>
            </div>
            <section></section>
        </>
    )
}