import React from 'react';
import logo from './logo.svg';
import { Card, Col, Row } from "antd";
import CardProducts from './components/CardProducts';

import './App.css';
import './display.less';
import 'antd/dist/antd.css';
import './bootstrap/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={7}>
          <CardProducts />
        </Col>
        <Col span={9}>
          <CardProducts />
        </Col>
        <Col span={8}>
          <CardProducts />
        </Col>
      </Row>

      {/* desktop */}
      <div className="d-none d-lg-block">
        desktop version
      </div>

      {/* mobile */}
      <div className="d-sm-block d-md-none d-lg-none">
        mobile version
      </div>
    </div>
  );
}

export default App;
