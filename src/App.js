import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CooperationPage from './pages/CooperationPage';

// 自定义主题配置
const theme = {
  '--adm-color-primary': '#1890ff',
  '--adm-color-success': '#00b96b',
  '--adm-color-warning': '#faad14',
  '--adm-color-danger': '#ff4d4f',
  '--adm-font-size-main': '14px',
  '--adm-border-radius-s': '6px',
  '--adm-border-radius-m': '8px',
  '--adm-border-radius-l': '12px',
};

function App() {
  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:projectId" element={<DetailPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;