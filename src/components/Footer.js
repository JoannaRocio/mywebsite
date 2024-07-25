import React from 'react';
import { Layout } from 'antd';
import '../styles/Footer.css';

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Mi página web ©2024 Creada por @JoannaRocio
    </Footer>
  );
}

export default AppFooter;
