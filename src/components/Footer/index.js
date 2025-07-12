import React from 'react';
import { Card, Button } from 'antd-mobile';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Card className="project-details-section">
          <div className="details-header">
            <h2 className="details-title">项目详情了解</h2>
          </div>
          <div className="details-content">
            <Button 
              color="primary" 
              size="large"
              block
              className="details-button"
            >
              📋 查看详细项目介绍
            </Button>
            <div className="button-tip">
              <p>详细项目介绍文字内容后续添加</p>
            </div>
          </div>
        </Card>
        
        <div className="footer-bottom">
          <p className="copyright">
            © 2024 彩票项目信息展示平台 | 专业 · 可靠 · 共赢
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;