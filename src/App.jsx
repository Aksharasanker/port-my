import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  

  return (

    <>

      <div>
      <Navbar expand="lg" className="bg-body-transparent">
      <Container >
        <Navbar.Brand href="#home"className='text-light'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#card"className='text-light'>Projects</Nav.Link>
            <Nav.Link href="#abt"className='text-light'>About</Nav.Link>
            <Nav.Link href="#footer"className='text-light'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

  


      <div className='row p-5 ' > 
      
     
        <div className="col-md-5 p-5 d-flex justify-content-center align-items-center">
        <img src="img\aks-removebg-preview.png" id="img1"></img>
        </div>
      <div className='col-md-5 p-3'>
      <h1 className='text-light'>Hi I'm <span>Akshara</span><br></br>Full Stack Developer</h1>
      <p className='text-light'>I am an enthusiastic software developer with a passion for crafting products that resonate with users. My focus extends to ensuring customer satisfaction, rigorous testing, accessibility, collaborative teamwork, and maintaining high standards of code quality.I thrive in challenging environments that require critical thinking, creativity, and a collaborative approach to achieve goals efficiently.Familiar with programming languages such as Java, Python, and C, with experience in developing robust and scalable applications.
          Skilled in web development technologies including HTML/CSS, JavaScript, and frameworks like React .
        Familiar with database management systems like SQL, MySQL,enabling efficient data handling and analysis</p>
      </div> 
        
        </div>
    
    <h1 className='text-light text-center'>MY PROJECTS</h1>
     <div className='d-flex justify-content spacebetween'id='card'>
   
    <Card style={{ width: '300px', height:'450px',background:'grey', margin:'20px'}}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=" />
      <Card.Body>
        <Card.Title><span id='cd'>Travel Website</span><br></br> Here is a sample website of a Travel agencey designed using HTML,CSS and Bootstrap</Card.Title>
        <Button variant="success" className='m-1 p-1'>View Demo</Button>
        <Button variant="warning" className='m-1 p-1'>View Source code</Button>
      </Card.Body>
    </Card>



    <Card style={{ width: '300px', height:'450px',background:'grey', margin:'20px'}}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_640.jpg" />
      <Card.Body>
        <Card.Title><span id='cd'>Coffee Shop</span><br></br> Here is a sample website of a Cofee shop designed using HTML and CSS</Card.Title>
        <Button variant="success" className='m-1 p-1'>View Demo</Button>
        <Button variant="warning" className='m-1 p-1'>View Source code</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '300px', height:'450px',background:'grey', margin:'20px'}}>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/012/098/044/small/illustration-of-heavy-rain-cloudy-weather-with-cartoon-animation-style-rainy-scenery-background-free-vector.jpg" />
      <Card.Body>
        <Card.Title id='txt'><span id='cd'>weather application </span><br></br>Here is a weather detecting app designed using HTML and CSS,Bootstrap.Weather conditions accessed using API</Card.Title>
        <Button variant="success" className='m-1 p-1'>View Demo</Button>
        <Button variant="warning" className='m-1 p-1'>View Source code</Button>
      </Card.Body>
    </Card>
    </div>

   <div className='d-flex justify-content spacebetween'id='card' >

    <Card style={{ width: '300px', height:'450px',background:'grey', margin:'20px'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVf21zGZ27wTCG1KGI6jQBf6O-PzCyNU-cLQ&s" />
      <Card.Body>
        <Card.Title id='txt'><span id='cd'>Landing Page </span><br></br>Here is a landing page designed using HTML and CSS,Bootstrap and REACT.</Card.Title>
        <Button variant="success" className='m-1 p-1' >View Demo</Button>
        <Button variant="warning" className='m-1 p-1'>View Source code</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '300px', height:'450px',background:'grey', margin:'20px'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjLqQ6zum3w-NrjkiUjA4ODXah3wWehozZQ&s" />
      <Card.Body>
        <Card.Title id='txt'><span id='cd'>Simple Interest</span><br></br>Here is a Simple Interest calculator app designed using HTML and CSS,Bootstrap and REACT.</Card.Title>
        <Button variant="success" className='m-1 p-1'>View Demo</Button>
        <Button variant="warning" className='m-1 p-1'>View Source code</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '300px', height:'450px',background:'grey', margin:'20px'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV73eO9hMGD3bhyjCtXbwrbrrs8spnc89yjA&s" />
      <Card.Body>
        <Card.Title id='txt'><span id='cd'>BMI Calculator</span><br></br>Here is a BMI Calculator app designed using HTML and CSS,Bootstrap and React</Card.Title>
        <Button variant="success" className='m-1 p-1'>View Demo</Button>
        <Button variant="warning" className='m-1 p-1'>View Source code</Button>
      </Card.Body>
    </Card>

    </div>
   
    <div class="abt"id="abt">
      <h2 className='text-light text-center pt-5'>ABOUT ME</h2>
      <p className='w-50' id="para">Hello! I'm Akshara Sanker, btech graduate in Computer science and Engineering.I am enthusiastic about leveraging technology to solve complex problems and create innovative solutions. My academic background has equipped me with a solid foundation in software development, algorithms, data structures, and computer systems. I thrive in challenging environments that require critical thinking, creativity, and a collaborative approach to achieve goals efficiently.Familiar with programming languages such as Java, Python, and C, with experience in developing robust and scalable applications.
          Skilled in web development technologies including HTML/CSS, JavaScript, and frameworks like React .
        Familiar with database management systems like SQL, MySQL,enabling efficient data handling and analysis
      </p>
      

    </div>
   
    <h2 className='text-center mt-5 text-light' >Technical Skills</h2>
    <div className=''id='pg'>
    <ProgressBar className='m-3' variant="info" now={20} /><h5 className='text-info'>Python</h5>
      <ProgressBar className='m-3' variant="warning" now={60} /><h5 className='text-info'>Java</h5>
      <ProgressBar className=' m-3' variant="success" now={80} /><h5 className='text-info'>C</h5>
      <ProgressBar className='m-3' variant="danger" now={40} /><h5 className='text-info'>React</h5>
      <ProgressBar className=' m-3' variant="info" now={80} /><h5 className='text-info'>C</h5>
      <ProgressBar className=' m-3' variant="success" now={80} /><h5 className='text-info'>css</h5>
    </div>
  
  <div id="footer">
  
<h5 className='text-center mt-5 text-light fs-1'>Contact me</h5>

  <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#B197FC",}}className='p-3 m-1' />
  <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#B197FC",}} className='p-3 m-1'/>
  <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#B197FC",}} className='p-3 m-1' />
  <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#B197FC",}} className='p-3 m-1' />
  <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#B197FC",}} className='p-3 m-1' />
  <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "#B197FC",}} className='p-3 m-1' />       



  </div>
     
    </>
  )
}

export default App
