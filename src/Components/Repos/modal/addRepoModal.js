import axios from "axios";
import React, { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [owner, setOwner] = useState("");
  const [rep, setRep] = useState("");
  const [link, setLink] = useState("");
  const [star, setStar] = useState("");

  const handleSend = () => {
    axios
      .post("http://localhost:5000/repo", {
        owner: owner,
        repoNAme: rep,
        link,
        star,
      })
      .then(function (response) {
        console.log(response);
        alert("new rep is seanded!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Repositorie
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Owner</Form.Label>
        <Form.Control
          type="email"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />

        <Form.Label>Repo Name</Form.Label>
        <Form.Control
          type="email"
          value={rep}
          onChange={(e) => setRep(e.target.value)}
        />

        <Form.Label>Link to Repasitorie</Form.Label>
        <Form.Control
          type="email"
          variant="outline-info"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <div>
          <Button
            variant="outline-warning"
            className="m-2"
            onClick={() => setStar(1)}
          >
            {" "}
            1<i class="fas fa-star"></i>
          </Button>
          <Button
            variant="outline-warning"
            className="m-2"
            onClick={() => setStar(2)}
          >
            {" "}
            2<i class="fas fa-star"></i>
          </Button>
          <Button
            variant="outline-warning"
            className="m-2"
            onClick={() => setStar(3)}
          >
            {" "}
            3<i class="fas fa-star"></i>
          </Button>
          <Button
            variant="outline-warning"
            className="m-2"
            onClick={() => setStar(4)}
          >
            {" "}
            4<i class="fas fa-star"></i>
          </Button>
          <Button
            variant="outline-warning"
            className="m-2"
            onClick={() => setStar(5)}
          >
            {" "}
            5<i class="fas fa-star"></i>
          </Button>
        </div>
        <Button className="mt-3" onClick={() => handleSend()}>
          Add Repositorie
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
