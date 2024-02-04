import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Productnavbar() {
  return (
    <Navbar bg="light" className="productnavbar">
      <Container>
        <Nav>
          <Nav.Link href="#home">all</Nav.Link>
          <Nav.Link href="#features">الكترونيات</Nav.Link>
          <Nav.Link href="#pricing">كهربيه</Nav.Link>
          <Nav.Link href="#prik">منزليه</Nav.Link>
          <Nav.Link href="#priig">تخفيصات</Nav.Link>
          <Nav.Link href="#priu9cing">تخفيصات</Nav.Link>
          <Nav.Link href="#pricijijisng">تخفيصات</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Productnavbar;
