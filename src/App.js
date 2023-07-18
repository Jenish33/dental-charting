import "./App.css";
import tooth from "./images/11.png";
import cavity from "./images/cavity11.png";
import bracket1 from "./images/bracketIcon.jpeg";
import bracket2 from "./images/bracketType2Icon.jpeg";
import cavityicon from "./images/cavityIcon.png";
import implantIcon from "./images/implantIcon.png";
import { useState } from "react";
import { Table, Avatar, Typography, Pagination } from "antd";
import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  Divider,
  Switch,
  Modal,
  message,
} from "antd";

function App() {
  const [imgArray, setImgarray] = useState([tooth, tooth, tooth, tooth]);
  const cavityarr = [cavity];
  const bracketArray = [bracket1, bracket2];
  const [state, setState] = useState(0);
  const [bracket, setBracket] = useState(0);
  const [bracketvalue, setBracketvalue] = useState(false);
  const [currentKey, setCurrentKey] = useState(1);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [table, setTable] = useState(false);
  const [cavityvalue, setCavityvalue] = useState(false);
  const [cavityvalueother, setCavityvalueother] = useState(false);

  const { Title } = Typography;

  function onClick() {
    setCavityvalue(true);
    setState(state ? 0 : 1);
  }
  function handelbracket() {
    setBracketvalue(true);
    setBracket(bracket ? 0 : 1);
  }

  const handelSubmit = (i) => {
    if (cavityvalue && i == 0) {
      imgArray[i] = cavityarr[i];

      console.log(imgArray[i]);
      setTable(true);
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();
      let formattedDate = day + "-" + month + "-" + year;

      const newRow = {
        key: currentKey.toString(),
        date: (
          <>
            <Avatar.Group>
              <div>
                <Title level={5}>{formattedDate}</Title>
              </div>
            </Avatar.Group>
          </>
        ),
        description: (
          <>
            <div>
              <Title level={5}>
                {"tooth" + " " + currentKey + " " + "cavity"}
              </Title>
            </div>
          </>
        ),
        remarks: (
          <>
            <div>
              <Button>Edit</Button>
            </div>
          </>
        ),
        actions: (
          <>
            <img
              src={cavityicon}
              style={{ width: "50px", height: "auto" }}
              alt="tooth"
            />
          </>
        ),
      };

      setData((prevData) => [...prevData, newRow]);
      setName("");
      setCurrentKey((updateKey) => updateKey + 1);
      setCavityvalue(false);
    }
    if (cavityvalue && i == 1) {
      imgArray[i] = cavityarr[0];

      console.log(imgArray[i]);
      setTable(true);
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();
      let formattedDate = day + "-" + month + "-" + year;

      const newRow = {
        key: currentKey.toString(),
        date: (
          <>
            <Avatar.Group>
              <div>
                <Title level={5}>{formattedDate}</Title>
              </div>
            </Avatar.Group>
          </>
        ),
        description: (
          <>
            <div>
              <Title level={5}>
                {"tooth" + " " + currentKey + " " + "cavity"}
              </Title>
            </div>
          </>
        ),
        remarks: (
          <>
            <div>
              <Button>Edit</Button>
            </div>
          </>
        ),
        actions: (
          <>
            <img
              src={cavityicon}
              style={{ width: "50px", height: "auto" }}
              alt="tooth"
            />
          </>
        ),
      };

      setData((prevData) => [...prevData, newRow]);
      setName("");
      setCurrentKey((updateKey) => updateKey + 1);
      setCavityvalue(false);
    }
    if (cavityvalue && i == 2) {
      imgArray[i] = cavityarr[0];

      console.log(imgArray[i]);
      setTable(true);
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();
      let formattedDate = day + "-" + month + "-" + year;

      const newRow = {
        key: currentKey.toString(),
        date: (
          <>
            <Avatar.Group>
              <div>
                <Title level={5}>{formattedDate}</Title>
              </div>
            </Avatar.Group>
          </>
        ),
        description: (
          <>
            <div>
              <Title level={5}>
                {"tooth" + " " + currentKey + " " + "cavity"}
              </Title>
            </div>
          </>
        ),
        remarks: (
          <>
            <div>
              <Button>Edit</Button>
            </div>
          </>
        ),
        actions: (
          <>
            <img
              src={cavityicon}
              style={{ width: "50px", height: "auto" }}
              alt="tooth"
            />
          </>
        ),
      };

      setData((prevData) => [...prevData, newRow]);
      setName("");
      setCurrentKey((updateKey) => updateKey + 1);
      setCavityvalue(false);
    }
    if (cavityvalue && i == 3) {
      imgArray[i] = cavityarr[0];

      console.log(imgArray[i]);
      setTable(true);
      let currentDate = new Date();
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();
      let formattedDate = day + "-" + month + "-" + year;

      const newRow = {
        key: currentKey.toString(),
        date: (
          <>
            <Avatar.Group>
              <div>
                <Title level={5}>{formattedDate}</Title>
              </div>
            </Avatar.Group>
          </>
        ),
        description: (
          <>
            <div>
              <Title level={5}>
                {"tooth" + " " + currentKey + " " + "cavity"}
              </Title>
            </div>
          </>
        ),
        remarks: (
          <>
            <div>
              <Button>Edit</Button>
            </div>
          </>
        ),
        actions: (
          <>
            <img
              src={cavityicon}
              style={{ width: "50px", height: "auto" }}
              alt="tooth"
            />
          </>
        ),
      };

      setData((prevData) => [...prevData, newRow]);
      setName("");
      setCurrentKey((updateKey) => updateKey + 1);
      setCavityvalue(false);
    }
  };

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Remarks",
      key: "remarks",
      dataIndex: "remarks",
    },

    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
    },
  ];

  return (
    <div>
      <Title level={1} className="headding">
        Dental Tooth{" "}
      </Title>
      <Row className="main">
        <div className="tooth">
          <Col>
            <div>
              <div className="dental">
                {imgArray.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      style={{ width: "50px", height: "auto" }}
                      alt="tooth"
                      onClick={() => handelSubmit(i)}
                    />
                  </div>
                ))}

                {bracketvalue && (
                  <img
                    src={bracketArray[bracket]}
                    className="bracket"
                    alt="tooth"
                  />
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className="icons">
              <img
                src={cavityicon}
                style={{ width: "50px", height: "auto" }}
                className="icon-img"
                alt="tooth"
                onClick={onClick}
              />
              <img
                src={bracket1}
                style={{ width: "50px", height: "auto" }}
                className="icon-img"
                alt="tooth"
                onClick={handelbracket}
              />
              <img
                src={implantIcon}
                style={{ width: "50px", height: "auto" }}
                className="icon-img"
                alt="tooth"
              />
            </div>
          </Col>
        </div>
      </Row>
      <Row className="table">
        {table && (
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="ant-border-space"
          />
        )}
      </Row>
    </div>
  );
}

export default App;
