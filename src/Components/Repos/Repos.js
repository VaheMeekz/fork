import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Container, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCountriesThunk } from "../../Redux/actions/repos.action";
import MyVerticallyCenteredModal from "./modal/addRepoModal";
import { NavLink } from "react-router-dom";
import Animation from "../Animation/Animation";
const Repos = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [repos, setRepos] = useState([]);
  const [post, setPost] = useState([]);
  const [searchedAllPosts, setSearchedAllPosts] = useState([]);
  const allRerpos = useSelector((state) => state?.reposReducer.repos);

  useEffect(() => {
    dispatch(getCountriesThunk());
  }, []);

  useEffect(() => {
    setPost(allRerpos);
  }, []);

  useEffect(() => {
    if (post) {
      setSearchedAllPosts(post);
    }
  }, [post]);

  const handleAddInFork = (id) => {
    axios
      .post("http://localhost:5000/fork", {
        repoid: id,
      })
      .then(function (response) {
        console.log(response);
        alert("This Repasitorie in your fork!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container className="mt-3">
      <Container style={{ width: "30%" }}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>
            {" "}
            <i class="fas fa-search"></i> Search in repasitories name{" "}
          </Form.Label>
          <Form.Control
            type="text"
            value={searchValue}
            onChange={(e) => {
              const searchedPosts = post.filter((p) => {
                return p.repName
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              });
              setSearchedAllPosts(searchedPosts);
              setSearchValue(e.target.value);
            }}
            // onChange={(e) => setSearchValue(e.target.value)}
          />
        </Form.Group>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Owner</th>
            <th>Repository name</th>
            <th>Repository</th>
            <th>Star</th>
            <th>Add Fork</th>
          </tr>
        </thead>

        <tbody>
          {searchedAllPosts.map(({ id, owner, repName, hav, link, star }) => {
            return (
              <tr>
                <td>{id}</td>
                <td>{owner}</td>
                <td>{repName}</td>
                <td>
                  <Button variant="outline-info">
                    <a href={link} target="blank">
                      Go to Repo
                    </a>
                  </Button>
                </td>
                <td>
                  {star}
                  <i class="fas fa-star"></i>
                </td>
                <td>
                  {hav ? (
                    <Button variant="warning">
                      <NavLink exact to="/forks">
                        In my Forks
                      </NavLink>
                    </Button>
                  ) : (
                    <Button onClick={() => handleAddInFork(id)}>Add</Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Container className="mt-3">
        <Button onClick={() => setModalShow(true)}>Add Repo</Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
      <Animation/>
    </Container>
  );
};

export default Repos;
