import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import IncomeCard from './components/IncomeCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import './App.css';
import DataTable from './components/DataTable';
import Navi from './components/Navi';

const App = () => {
  return (
    <Container className='App' style={{position:"relative"}}>
      <Sidebar style={{position:"absolute", left:"0"}}/>
      <Container fluid style={{position:"absolute", top:"0px", marginLeft:"251px", float:"right"}}>
        <div className='box1'><Navi/></div>
      </Container>
      
      <Container style={{position:"absolute", top:"100px", marginLeft:"900px",float:"left"}}>
        <div className='box2'> <LineChart/></div>
      </Container>
      
      <IncomeCard/>

      <Container style={{position:"absolute", top:"310px", marginLeft:"270px",float:"left"}}>
        <div className='box3' ><BarChart/></div>
      </Container>
      
      <Container style={{position:"absolute", top:"530px", marginLeft:"270px",float:"left"}}>
        <DataTable/>
      </Container>

    </Container>
    
  )
}

export default App
