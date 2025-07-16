import React, { useState } from 'react';
import { Card, Button, Tag, Modal, Space, Toast } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ 
  id, 
  name, 
  description, 
  status, 
  buttonText, 
  buttonAction, 
  detailButtonText,
  detailButtonAction,
  isComingSoon = false 
}) => {
  const navigate = useNavigate();
  const [showWechatModal, setShowWechatModal] = useState(false);

  // 主号数据
  const mainWechatAccounts = [
    { id: 1, account: 'hzggzh12', name: '主号1', tip: '主要合作账号' },
    { id: 2, account: 'hhzzgg122', name: '主号2', tip: '主要合作账号' },
  ];

  // 备用号数据
  const backupWechatAccounts = [
    { id: 3, account: 'hzggzh11', name: '备用号', tip: '备用联系方式' },
  ];

  const handleButtonClick = (action) => {
    if (action === 'detail') {
      navigate(`/detail/${id}`);
    } else if (action === 'cooperation') {
      setShowWechatModal(true);
    }
  };

  const copyToClipboard = async (text, name) => {
    try {
      await navigator.clipboard.writeText(text);
      Toast.show({
        icon: 'success',
        content: `已复制 ${name} 的微信号`,
        duration: 2000,
      });
    } catch (err) {
      // 如果不支持clipboard API，使用传统方法
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      Toast.show({
        icon: 'success',
        content: `已复制 ${name} 的微信号`,
        duration: 2000,
      });
    }
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'active':
        return { color: '#52c41a', text: '运营中', bgColor: '#f6ffed' };
      case 'cooperation':
        return { color: '#1890ff', text: '可合作', bgColor: '#e6f7ff' };
      case 'coming-soon':
        return { color: '#faad14', text: '即将开放', bgColor: '#fffbe6' };
      default:
        return { color: '#d9d9d9', text: '未知', bgColor: '#f5f5f5' };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <>
      <div className="project-card-wrapper enhanced-card">
        <Card className="project-card modern-card">
          <div className="card-header-enhanced">
            <div className="project-info">
              <h3 className="project-name-enhanced">{name}</h3>
                             <div className="project-description-enhanced">
                 {description}
               </div>
            </div>
            {status && (
              <div className="status-badge" style={{ backgroundColor: statusConfig.bgColor }}>
                <Tag 
                  color={statusConfig.color} 
                  className="status-tag-enhanced"
                >
                  {statusConfig.text}
                </Tag>
              </div>
            )}
          </div>
        
          <div className="card-content-enhanced">
          </div>
        
          <div className="card-footer-enhanced">
            {isComingSoon ? (
              <div className="coming-soon-container">
                <div className="coming-soon-text">🚀 此项目暂未开放，请敬请期待</div>
              </div>
            ) : (
              <div className="button-group">
                {detailButtonText && detailButtonAction && (
                  <Button 
                    color="default" 
                    size="large"
                    className="detail-button-enhanced"
                    onClick={() => handleButtonClick(detailButtonAction)}
                  >
                    <span className="button-text">
                      📋 {detailButtonText}
                    </span>
                  </Button>
                )}
                
                {buttonText && buttonAction && (
                  <Button 
                    color="primary" 
                    size="large"
                    className="action-button-enhanced"
                    onClick={() => handleButtonClick(buttonAction)}
                  >
                    <span className="button-text">
                      🤝 {buttonText}
                    </span>
                  </Button>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* 微信号弹窗 */}
      <Modal
        visible={showWechatModal}
        content={
          <div className="wechat-modal-content">
            <div className="modal-header">
              <div className="modal-header-top">
                <h3>📱 联系我们</h3>
                <button 
                  className="modal-close-btn"
                  onClick={() => setShowWechatModal(false)}
                >
                  ✕
                </button>
              </div>
              <p className="modal-subtitle">如若繁忙请添加备用号</p>
            </div>
            
            <Space direction="vertical" block className="wechat-list">
              {/* 主号区域 */}
              <div className="wechat-section">
                <div className="section-title">🔥 主号</div>
                <div className="wechat-accounts-container">
                  {mainWechatAccounts.map((account) => (
                    <div key={account.id} className="wechat-item">
                      <div className="wechat-info">
                        <div className="wechat-name">{account.name}</div>
                        <div className="wechat-tip">{account.tip}</div>
                      </div>
                      <div className="wechat-account-section">
                        <div className="wechat-account" onClick={() => copyToClipboard(account.account, account.name)}>
                          {account.account}
                        </div>
                      </div>
                      <div className="wechat-actions">
                        <Button
                          color="primary"
                          size="small"
                          block
                          onClick={() => copyToClipboard(account.account, account.name)}
                        >
                          📋 复制微信号
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 备用号区域 */}
              <div className="wechat-section">
                <div className="section-title">🔄 备用号</div>
                <div className="wechat-accounts-container">
                  {backupWechatAccounts.map((account) => (
                    <div key={account.id} className="wechat-item">
                      <div className="wechat-info">
                        <div className="wechat-name">{account.name}</div>
                        <div className="wechat-tip">{account.tip}</div>
                      </div>
                      <div className="wechat-account-section">
                        <div className="wechat-account" onClick={() => copyToClipboard(account.account, account.name)}>
                          {account.account}
                        </div>
                      </div>
                      <div className="wechat-actions">
                        <Button
                          color="primary"
                          size="small"
                          block
                          onClick={() => copyToClipboard(account.account, account.name)}
                        >
                          📋 复制微信号
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Space>
            
            <div className="modal-tips">
              <div className="tip-item">💡 建议优先添加主号，如繁忙请添加备用号</div>
              <div className="tip-item">👆 可直接点击微信号或按钮进行复制</div>
              <div className="tip-item">⏰ 工作时间：9:00-22:00</div>
              <div className="tip-item">🔥 人多时请耐心等待，我们会尽快回复</div>
            </div>
          </div>
        }
        closeOnAction
        onClose={() => setShowWechatModal(false)}
        actions={[
          {
            key: 'close',
            text: '关闭',
            onClick: () => setShowWechatModal(false),
          },
        ]}
      />
    </>
  );
};

export default ProjectCard;