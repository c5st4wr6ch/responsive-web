import React from 'react';
import logo from './logo.svg';
import { Col, Row } from "antd";
import CardProducts from './components/CardProducts';

import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <CardProducts />
        </Col>
      </Row>
    </div>
  );
}

export default App;
