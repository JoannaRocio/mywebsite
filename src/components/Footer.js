import React from 'react';
import { Layout } from 'antd';
import '../styles/Footer.css';

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <div>
        <p>Esta web fué hecha con: ReactJS, MUI, React Router, Sass, FontAwesome y Ant Design.
        </p>
      </div>
      
      Mi página web ©2024 Creada por @JoannaRocio
    </Footer>
  );
}

export default AppFooter;
