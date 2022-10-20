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
        <Col span={12}>
          <CardProducts />
        </Col>
        <Col span={12}>
          <CardProducts />
        </Col>
      </Row>

      {/* desktop */}
      <div className="d-none d-lg-block d-md-none d-sm-none">
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
