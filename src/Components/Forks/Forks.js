import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getForksThunk } from "../../Redux/actions/fork.action";
import axios from "axios";
import Animation from "../Animation/Animation";

const Forks = () => {
  const dispatch = useDispatch();
  const [allForks, setAllForks] = useState([]);
  const forks = useSelector((state) => state?.forkReducer.forks);

  useEffect(() => {
    dispatch(getForksThunk());
  }, []);

  useEffect(() => {
    setAllForks(forks);
  }, []);

  const handleDelFork = (id) => {
    axios
      .post("http://localhost:5000/fork/deleate", {
        id,
      })
      .then(function (response) {
        console.log(response);
        setAllForks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Owner</th>
            <th>Repository name</th>
            <th>Star</th>
            <th>Go to Repasitorie</th>
            <th>Delete Fork</th>
          </tr>
        </thead>
        <tbody>
          {allForks.map(({ id, owner, repName, hav,link,star }) => {
            return (
              <tr>
                <td>{id}</td>
                <td>{owner}</td>
                <td>{repName}</td>
                <td>{star}<i class="fas fa-star"></i></td>
                <td>
                <Button variant='outline-info'>
                    <a href={link} target="blank">
                      Go to Repo
                    </a>
                  </Button>
                </td>
                <td>
                  <Button onClick={() => handleDelFork(id)} variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Animation/>
    </Container>
  );
};

export default Forks;
