// import React from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";
// import FloatingLabel from "react-bootstrap/FloatingLabel";

// const AdminEditProfile = () => {
//   return (
//     <Form>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="inputEmail4">
//           {/* <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Email" /> */}

//           <FloatingLabel
//             controlId="floatingInput"
//             label="Email address"
//             className="mb-3"
//           >
//             <Form.Control type="email" placeholder="name@example.com" />
//           </FloatingLabel>
//         </Form.Group>

//         <Form.Group as={Col} md="6" controlId="inputPassword4">
//           {/* <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" /> */}

//           <FloatingLabel controlId="floatingPassword" label="Password">
//             <Form.Control type="password" placeholder="Password" />
//           </FloatingLabel>
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" controlId="inputAddress">
//         <Form.Label>Address</Form.Label>
//         <Form.Control placeholder="1234 Main St" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="inputAddress2">
//         <Form.Label>Address 2</Form.Label>
//         <Form.Control placeholder="Apartment, studio, or floor" />
//       </Form.Group>

//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="inputCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control />
//         </Form.Group>

//         <Form.Group as={Col} md="4" controlId="inputState">
//           <Form.Label>State</Form.Label>
//           <Form.Select defaultValue="Choose...">
//             <option>Choose...</option>
//             {/* Add more state options if needed */}
//           </Form.Select>
//         </Form.Group>

//         <Form.Group as={Col} md="2" controlId="inputZip">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control />
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" id="gridCheck">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Sign in
//       </Button>
//     </Form>
//   );
// };

// export default AdminEditProfile;

import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./AdminEditProfile.css"; // Import your custom CSS file

const AdminEditProfile = () => {
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="inputEmail4">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="inputPassword4">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="inputAddress">
          <FloatingLabel controlId="floatingAddress" label="Address">
            <Form.Control placeholder="1234 Main St" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="inputAddress2">
          <FloatingLabel controlId="floatingAddress2" label="Address 2">
            <Form.Control placeholder="Apartment, studio, or floor" />
          </FloatingLabel>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="inputCity">
            <FloatingLabel controlId="floatingCity" label="City">
              <Form.Control />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="inputState">
            <FloatingLabel controlId="floatingState" label="State">
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                {/* Add more state options if needed */}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="2" controlId="inputZip">
            <FloatingLabel controlId="floatingZip" label="Zip">
              <Form.Control />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="gridCheck">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default AdminEditProfile;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AdminEditProfile = () => {
//   return (
//     <div className="container mt-5">
//       <div className="card shadow">
//         <div className="card-header">
//           <div className="d-flex justify-content-between">
//             <div>
//               <img src="profile-icon.png" alt="Profile Icon" className="me-2" />
//               <button className="btn btn-danger me-2">Delete</button>
//               <button className="btn btn-primary">Change Password</button>
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <form>
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="firstName" className="form-label">
//                   First Name
//                 </label>
//                 <input type="text" className="form-control" id="firstName" />
//               </div>
//               <div className="col-md-4">
//                 <label htmlFor="lastName" className="form-label">
//                   Last Name
//                 </label>
//                 <input type="text" className="form-control" id="lastName" />
//               </div>

//               {/* <div class="form-floating mb-4">
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="floatingInput"
//                   placeholder="name@example.com"
//                 />
//                 <label for="floatingInput">Email address</label>
//               </div> */}

//               <div className=" form-floating col-md-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="floatingInput"
//                   placeholder="name@example.com"
//                 />
//                 <label for="floatingInput">Email</label>
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="phone" className="form-label">
//                   Phone No
//                 </label>
//                 <input type="text" className="form-control" id="phone" />
//               </div>
//               <div className="col-md-4">
//                 <label htmlFor="address" className="form-label">
//                   Address
//                 </label>
//                 <input type="text" className="form-control" id="address" />
//               </div>
//               <div className="col-md-4">
//                 <label htmlFor="city" className="form-label">
//                   City
//                 </label>
//                 <input type="text" className="form-control" id="city" />
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-4">
//                 <label htmlFor="state" className="form-label">
//                   State
//                 </label>
//                 <input type="text" className="form-control" id="state" />
//               </div>
//               <div className="col-md-4">
//                 <label htmlFor="zip" className="form-label">
//                   ZIP Code
//                 </label>
//                 <input type="text" className="form-control" id="zip" />
//               </div>
//               <div className="col-md-4">
//                 <label htmlFor="country" className="form-label">
//                   Country
//                 </label>
//                 <input type="text" className="form-control" id="country" />
//               </div>
//             </div>
//             <div>
//               <button className="btn btn-success me-2">Save</button>
//               <button className="btn btn-secondary">Cancel</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminEditProfile;

// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";

// function AdminEditProfile() {
//   return (
//     <>
//       <FloatingLabel
//         controlId="floatingInput"
//         label="Email address"
//         className="mb-3"
//       >
//         <Form.Control type="email" placeholder="name@example.com" />
//       </FloatingLabel>
//       <FloatingLabel controlId="floatingPassword" label="Password">
//         <Form.Control type="password" placeholder="Password" />
//       </FloatingLabel>
//     </>
//   );
// }

// export default AdminEditProfile;
