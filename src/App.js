import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBar from './components/TopBar.js'


function App() {
  return (
    <div className="App">
      <TopBar/>
     <h2>Browse Stores in Houston</h2>
     <Container style = {{ marginTop: '40px', textAlign: 'center'}}>
      <Row style={{borderBottom:'1px solid #E8E9EB', display: 'flex', justifyContent: 'space-evenly'}}>
        <Row>
          <Col xs='.5'>
            <img src='https://www.instacart.com/image-server/144x144/www.instacart.com/assets/domains/warehouse/logo/252/9921fd46-e9b5-4a9c-8598-dea54d037e3d.png' roundedCircle/>
          </Col>
          <Col>
          <h5 style={{ fontWeight:'bold'}}>Smith's</h5>
          <p>Delivery * Pickup</p>
          </Col>
        </Row>
        <Col sm='1'></Col>
        <Row>
          <Col xs='.5'>
            <img src='https://www.instacart.com/image-server/144x144/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png' roundedCircle/>
          </Col>
          <Col>
          <h5 style={{ fontWeight:'bold' }}>Sprouts Farmers Market</h5>
          </Col>
          <Col ma='0'>
            <h5 style={{ fontWeight: 'bold'}}>Kroger</h5>
            <p>Delivery</p>
          </Col>
        </Row>
      </Row>
     </Container>
    </div>
  );
}

export default App;
