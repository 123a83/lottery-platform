import React from 'react';
import { Space } from 'antd-mobile';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

const HomePage = () => {
  // 项目数据
  const projects = [
    {
      id: 'hongkong',
      name: '香港彩',
      description: '本站主流项目，支持测试',
      status: 'active',
      buttonText: '立即合作',
      buttonAction: 'cooperation'
    },
    {
      id: 'macao',
      name: '澳门彩',
      description: '本站主流项目，支持测试',
      status: 'cooperation',
      buttonText: '立即合作',
      buttonAction: 'cooperation'
    },
    {
      id: 'singapore',
      name: '新加坡天天彩',
      description: '即将推出',
      status: 'coming-soon',
      buttonText: '',
      buttonAction: '',
      isComingSoon: true
    }
  ];

  return (
    <div className="home-page">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <section className="projects-section">
            <div className="section-header-enhanced">
              <div className="title-container">
                <h2 className="section-title-enhanced">🎯 项目专区</h2>
                <div className="title-decoration"></div>
              </div>
              <p className="section-subtitle">
                优质彩票项目，纯分润模式，你赚我才赚
              </p>
            </div>
            
            <div className="projects-grid-enhanced">
              <Space direction="vertical" block>
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="project-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard
                      id={project.id}
                      name={project.name}
                      description={project.description}
                      status={project.status}
                      buttonText={project.buttonText}
                      buttonAction={project.buttonAction}
                      isComingSoon={project.isComingSoon}
                    />
                  </div>
                ))}
              </Space>
            </div>
            
            <div className="projects-footer">
              <div className="footer-tip">
                <span className="tip-icon">💡</span>
                <span className="tip-text">
                  更多项目正在筹备中，敬请关注我们的最新动态
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;