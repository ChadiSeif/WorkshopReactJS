import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavbarBrand,Form,Button,FormControl,NavDropdown,Table,Image } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
     
        <h1>Checkpoint ReactJS</h1>
        <Image src="https://cdn.educba.com/academy/wp-content/uploads/2020/02/React-Versions.png" fluid />
        <div>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Version</th>
      <th>Official Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>ES1		</td>
      <td>ECMAScript 1 (1997)</td>
      <td>First edition</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ES2		</td>
      <td>ECMAScript 2 (1998)</td>
      <td>Editorial changes</td>
    </tr>
   <tr>
      <td>3</td>
      <td>ES3		</td>
      <td>ECMAScript 3 (1999)</td>
      <td>Added regular expressions
          /Added try/catch
          /Added switch
          /Added do-while</td>
    </tr>
    <tr>
      <td>4</td>
      <td>ES4		</td>
      <td>ECMAScript 4</td>
      <td>Never released</td>
    </tr>
    <tr>
      <td>5</td>
      <td>ES5	</td>
      <td>ECMAScript 5 (2009)</td>
      <td>
Added "strict mode"
/Added JSON support
/Added String.trim()
/Added Array.isArray()
/Added Array iteration methods
/Allows trailing commas for object literals</td>
    </tr>
    <tr>
      <td>6</td>
      <td>ES6	</td>
      <td>ECMAScript 2015</td>
      <td>
Added let and const
/Added default parameter values
/Added Array.find()
/Added Array.findIndex()</td>
    </tr>
    <tr>
      <td></td>
      <td>	</td>
      <td>ECMAScript 2016</td>
      <td>Added exponential operator (**)
/Added Array.includes()</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>	ECMAScript 2017</td>
      <td>Added string padding
/Added Object.entries()
/Added Object.values()
/Added async functions
/Added shared memory</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>	ECMAScript 2018</td>
      <td>Added rest / spread properties
/Added asynchronous iteration
/Added Promise.finally()
/Additions to RegExp</td>
    </tr>
  </tbody>
</Table>
      </div>
    </div>
  );
}

export default App;
