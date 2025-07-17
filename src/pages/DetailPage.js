import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, NavBar, Space, Tag } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';

const DetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // 项目详细信息
  const projectDetails = {
    hongkong: {
      name: '香港彩',
      status: '运营中',
      description: '本站主流项目，支持测试，不存在任何理由的收费',
      philosophy: '金钱即是真理，实践出真理',
      features: [
        '✅ 完全免费测试',
        '✅ 实时数据更新',
        '✅ 专业技术支持',
        '✅ 7x24小时服务',
        '✅ 多种玩法支持'
      ],
      cooperation: {
        title: '合作方式',
        items: [
          '纯分润模式，无前期费用',
          '按实际收益分成',
          '提供完整技术支持',
          '定期数据报表'
        ]
      }
    },
    macao: {
      name: '澳门彩',
      status: '可合作',
      description: '本站主流项目，支持测试，不存在任何理由的收费',
      philosophy: '金钱即是真理，实践出真理',
      features: [
        '✅ 稳定运营平台',
        '✅ 多样化玩法',
        '✅ 快速结算',
        '✅ 安全保障',
        '✅ 专业客服'
      ],
      cooperation: {
        title: '合作优势',
        items: [
          '低门槛合作',
          '高收益分成',
          '风险共担',
          '长期稳定合作'
        ]
      }
    }
  };

  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>项目信息不存在</p>
        <Button onClick={() => navigate('/')}>返回首页</Button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <NavBar 
        back="返回" 
        onBack={() => navigate(-1)}
        backIcon={<LeftOutline />}
      >
        项目详情了解
      </NavBar>
      
      <div className="container" style={{ padding: '16px' }}>
        <Space direction="vertical" block>
          {/* 查看详细项目介绍卡片 */}
          <Card>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              borderRadius: '12px',
              border: '1px solid #bae6fd',
              marginBottom: '16px'
            }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#0369a1',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                📋 查看详细项目介绍
              </div>
            </div>
            
            {/* 核心理念内容 */}
            <div style={{
              textAlign: 'center',
              padding: '24px 20px',
              background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
              borderRadius: '12px',
              border: '2px solid #fb923c',
              marginTop: '16px'
            }}>
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#ea580c',
                lineHeight: '1.6',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                letterSpacing: '0.5px'
              }}>
                💰 金钱即是真理，实践出真理
              </div>
            </div>
          </Card>

          {/* 项目基本信息 */}
          <Card>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0 }}>{project.name}</h2>
                <Tag color="success">{project.status}</Tag>
              </div>
            </div>
            <p style={{ color: '#666', lineHeight: '1.5', margin: 0 }}>
              {project.description}
            </p>
          </Card>

          {/* 项目特色 */}
          <Card title="项目特色">
            <Space direction="vertical" block>
              {project.features.map((feature, index) => (
                <div key={index} style={{ 
                  padding: '8px 0',
                  borderBottom: index < project.features.length - 1 ? '1px solid #f0f0f0' : 'none'
                }}>
                  <span style={{ fontSize: '14px' }}>{feature}</span>
                </div>
              ))}
            </Space>
          </Card>

          {/* 合作信息 */}
          <Card title={project.cooperation.title}>
            <Space direction="vertical" block>
              {project.cooperation.items.map((item, index) => (
                <div key={index} style={{ 
                  padding: '8px 0',
                  borderBottom: index < project.cooperation.items.length - 1 ? '1px solid #f0f0f0' : 'none'
                }}>
                  <span style={{ fontSize: '14px' }}>• {item}</span>
                </div>
              ))}
            </Space>
          </Card>

          {/* 操作按钮 */}
          <div style={{ padding: '20px 0' }}>
            <Space direction="vertical" block>
              <Button 
                color="primary" 
                block 
                size="large"
                onClick={() => navigate('/cooperation')}
              >
                立即合作
              </Button>
              <Button 
                block 
                size="large"
                onClick={() => navigate('/')}
              >
                返回首页
              </Button>
            </Space>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default DetailPage;