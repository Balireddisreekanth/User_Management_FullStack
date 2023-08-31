
//import First from './first';
//  import { useState } from 'react';
// import axios from 'axios';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const divStyle = {
  display: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '1550px 300px',
  backgroundrepeat: 'no-repeat',
  height: '300px'
}

const slideImages = [
  {
    url: 'jpeg7.jpg',
    
  },
  {
    url: 'jpeg8.jpg',
    
  },
  {
    url: 'jpeg9.jpg',
  
  },
 
];
// const username = prompt('please fill username');
// const password = prompt('please fill password');



// const user = "Hemanth";
// const pass = "12345";

// const user1 = "Santhosh";
// const pass1 = "12345";

// if (username == user && password === pass) {

//     alert(`Welcome , ${username}!!!! \u263A`);

//     window.location.href = "localhost:3000/";
    

   

// } else if (username == user1 && password === pass1) {
//     alert(`Welcome , ${username}!!!! \u263A`);

//     window.location.href = "localhost:3000/";
    

// } else {
// alert('Invalid Credentials')
// }

    
function App() {

  // const [data, setData] = useState('hello man');


  // const [retdata, setRet] = useState([]);

  // const [parent, setParent] = useState(true);
  // const [child, setChild] = useState(false);  

  // setTimeout(() => {
  //   console.log('hiiiiii');
  // }, 5000)

  // console.log('hello world')

  // useEffect(() => {

  //   axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
  //     setData(res.data);
  //   }
  //   )


  //   console.log('i am working pls check now')

  // }, [])

  // const setVal = () => {
  //   setData();
  // }

  // const viewVal = (i) => {
  //   alert(i);
  //   setParent(false);
  //   setChild(true);
  //   const uniRec = data.filter(item => item.id === i);
  //   setRet(uniRec[0]);

  // }
  console.log('hiiii');
  // const test = ()=>{
  //   setData('hello world')
  //     console.log('button clicked');
  // }
  


  return (<>
  <section>
    <div >
      <br/><br/>
      <img src="jpeg10.jpg" alt="home img" width="100px" style={{margin:'0 0 0 15px'}} />
      {/* <div style={{ display: parent === true ? 'block' : 'none' }} className='main'>
        <h1>Getting data from api</h1>


        <input type="button" value="Reset" onClick={setVal} /> */}


      {/* {data && data.map((val, i) =>

          <h1 onClick={() => viewVal(val.id)} style={{ cursor: 'pointer' }} >{val.id},{val.title}</h1>
        )} */}

      {/* <First example="passing data from parent to child" /> */}
      {/* </div>
      // {/* child block */}
      {/* <div style={{ display: child === true ? 'block' : 'none' }}>
        <h1>child block !!!!!!!!!!!!!!!!!</h1>
        {retdata.userId}


      </div> */}

<h3 align={"center"}>“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” </h3>
<h5 align="center">— Albert Einstein </h5>    

<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} >
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>    
              </div>
            </div>
          ))} 
        </Slide>
      </div>

  


 
  

    </div>

{/* <button onClick={test}>button</button> */}

{/* {data} */}
</section>

</>);
}

export default App;





