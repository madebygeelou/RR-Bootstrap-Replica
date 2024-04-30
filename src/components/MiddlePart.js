import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function MiddlePart() {
    return (
        <Container className='form-container'>
                    <h1 style={{fontWeight: 'bold'}}>Order groceries for delivery</h1>
        <h1 style={{fontWeight: 'bold'}}>or pickup today</h1>
        <p>Whatever you want from local stores, brought right to your door.</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Enter your Address</Form.Label>
            <Form.Control type="address" placeholder="Enter Address" />
            <Form.Text className="text-muted">
              We'll never share your address with anyone else.
            </Form.Text>
          </Form.Group>
          </Form>
          </Container>
          )

}

export default MiddlePart;