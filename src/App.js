import React from 'react';
import logo from './logo.svg';
import { Card, Col, Row } from "antd";
import CardProducts from './components/CardProducts';

import './App.css';
import './display.less';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={12}>
          <CardProducts />
        </Col>
        <Col span={12}>
          <CardProducts />
        </Col>
      </Row>
    </div>
  );
}

export default App;
