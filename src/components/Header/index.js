import React from 'react';
import './Header.css';

const Header = () => {
  // 动态设置背景图片样式
  const headerStyle = {
    backgroundImage: `
      linear-gradient(135deg, rgba(15, 32, 39, 0.7) 0%, rgba(32, 58, 67, 0.8) 25%, rgba(44, 83, 100, 0.7) 50%, rgba(15, 32, 39, 0.8) 100%),
      url('/background.jpg'),
      linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%)
    `,
    backgroundSize: 'cover, cover, cover',
    backgroundPosition: 'center, center, center',
    backgroundRepeat: 'no-repeat, no-repeat, no-repeat'
  };

  return (
    <header className="header with-background-image" style={headerStyle}>
      <div className="header-background">
        <div className="container">
          <div className="header-content">
            <h1 className="header-title">
              本站项目秉承绝不收费，有效果再谈合作，纯分润模式
            </h1>
            <div className="header-subtitle">
              <div className="subtitle-text broken-effect">聚维合-聚集彩票领域</div>
              <div className="subtitle-text">第三方收入的不二之选</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;