import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBar from './components/TopBar.js'
import MiddlePart from './components/MiddlePart.js';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <div>
      <TopBar/>
      <MiddlePart>
      </MiddlePart>
      <div className='App'>
     <h2>Browse Stores in Las Vegas</h2>    
     <Container style={{ marginTop:'40px', textAlign: 'center'}}>
     <Row style= {{borderBottom:'1px solid #E8E9EB', display: 'flex', justifyContent: 'space-evenly'}} xs={2} md={4} lg={6}>
          <Col xs='.5'>
            <img src='https://www.instacart.com/image-server/144x144/www.instacart.com/assets/domains/warehouse/logo/252/9921fd46-e9b5-4a9c-8598-dea54d037e3d.png' roundedCircle/>
            <h5 style={{ fontWeight:'bold'}}>Smith's</h5>
          <p>Delivery * Pickup</p>
          </Col>
          <Col xs='.5'>
            <img src='https://www.instacart.com/image-server/144x144/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png' roundedCircle/>
          <h5 style={{ fontWeight:'bold' }}>Sprouts Farmers Market</h5> 
          </Col>
          <Col xs='.5'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQy1BGnIkpuJVajWSm2gdoUkvf8Eykxb02_ManLYqdw&s' roundedCircle/>
            <h5 style={{ fontWeight: 'bold'}}>Kroger</h5>
            <p>Delivery</p>
          </Col>
      </Row>
     </Container>
     <Container style={{ marginTop:'40px', textAlign: 'center'}}>
     <Row style= {{borderBottom:'1px solid #E8E9EB', display: 'flex', justifyContent: 'space-evenly'}} xs={2} md={4} lg={6}>
          <Col xs='.5'>
            <img src='https://www.instacart.com/image-server/144x144/www.instacart.com/assets/domains/warehouse/logo/252/9921fd46-e9b5-4a9c-8598-dea54d037e3d.png' roundedCircle/>
            <h5 style={{ fontWeight:'bold'}}>Smith's</h5>
          <p>Delivery * Pickup</p>
          </Col>
          <Col xs='.5'>
            <img src='https://www.instacart.com/image-server/144x144/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png' roundedCircle/>
          <h5 style={{ fontWeight:'bold' }}>Sprouts Farmers Market</h5> 
          </Col>
          <Col xs='.5'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjQy1BGnIkpuJVajWSm2gdoUkvf8Eykxb02_ManLYqdw&s' roundedCircle/>
            <h5 style={{ fontWeight: 'bold'}}>Kroger</h5>
            <p>Delivery</p>
          </Col>
      </Row>
     </Container>
     </div>
    </div>
  );
}

export default App;
