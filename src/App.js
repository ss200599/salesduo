import React from "react";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import IncomeCard from "./components/IncomeCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import "./App.css";
import DataTable from "./components/DataTable";
import Navi from "./components/Navi";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Sidebar style={{ position: "absolute", left: "0" }} />
      <Container
        style={{
          position: "absolute",
          top: "0px",
          marginLeft: "251px",
          float: "right",
        }}
      >
        <div className="box1">
          <Navi />
        </div>
      </Container>

      <Container
        style={{
          position: "absolute",
          top: "100px",
          marginLeft: "900px",
          float: "left",
        }}
      >
        <div className="box2">
          {" "}
          <LineChart />
        </div>
      </Container>

      <IncomeCard />

      <Container
        style={{
          position: "absolute",
          top: "250px",
          marginBottom: "32px",
          marginLeft: "270px",
          float: "left",
        }}
      >
        <div className="box3">
          <BarChart />
        </div>
      </Container>

      <Container
        style={{
          position: "absolute",
          top: "600px",
          marginLeft: "270px",
          float: "left",
        }}
      >
        <DataTable />
      </Container>
    </div>
  );
};

export default App;
