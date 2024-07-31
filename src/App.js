import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './pages/about';
import AppHeader from './components/Header';
import { Layout } from 'antd';
import AppFooter from './components/Footer';
import 'antd/dist/reset.css';
import './styles/index.css'
import './styles/Header.css'
import Home from './pages/Home';



const { Content } = Layout;

function App() {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
      <div className="header" >
        <AppHeader />
      </div>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>

        <AppFooter />
      </Layout>
      </Router>
    );
}

export default App;
