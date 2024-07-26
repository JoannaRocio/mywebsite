import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import About from './pages/about';
import AppHeader from './components/Header';
import { Layout } from 'antd';
import AppFooter from './components/Footer';
import 'antd/dist/reset.css';
import './styles/index.css'

const { Content } = Layout;

function App() {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Content style={{ padding: '0 50px', marginTop: '16px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
      </Router>
    );
}

export default App;
