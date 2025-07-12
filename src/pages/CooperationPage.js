import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  Button, 
  NavBar, 
  Space, 
  Form, 
  Input, 
  TextArea, 
  Selector,
  Toast 
} from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';

const CooperationPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const projectOptions = [
    { label: '香港彩', value: 'hongkong' },
    { label: '澳门彩', value: 'macao' },
    { label: '新加坡天天彩', value: 'singapore' },
  ];

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // 模拟提交表单
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Toast.show({
        icon: 'success',
        content: '合作申请已提交，我们会尽快与您联系！',
        duration: 3000,
      });
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      Toast.show({
        icon: 'fail',
        content: '提交失败，请稍后重试',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cooperation-page">
      <NavBar 
        back="返回" 
        onBack={() => navigate(-1)}
        backIcon={<LeftOutline />}
      >
        合作申请
      </NavBar>
      
      <div className="container" style={{ padding: '16px' }}>
        <Space direction="vertical" block>
          {/* 合作说明 */}
          <Card>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h2 style={{ margin: '0 0 8px 0', color: '#1890ff' }}>合作</h2>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                欢迎与我们建立长期合作关系
              </p>
            </div>
          </Card>

          {/* 合作优势 */}
          <Card title="合作优势">
            <Space direction="vertical" block>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                <strong style={{ color: '#1890ff' }}>• 零风险投入</strong>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                  纯分润模式，无需任何前期费用
                </div>
              </div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                <strong style={{ color: '#1890ff' }}>• 高收益分成</strong>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                  公平合理的收益分配机制
                </div>
              </div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                <strong style={{ color: '#1890ff' }}>• 技术支持</strong>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                  7x24小时专业技术团队支持
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <strong style={{ color: '#1890ff' }}>• 长期稳定</strong>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                  建立长期稳定的合作关系
                </div>
              </div>
            </Space>
          </Card>

          {/* 合作申请表单 */}
          <Card title="合作申请表单">
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="name"
                label="联系人姓名"
                rules={[{ required: true, message: '请输入联系人姓名' }]}
              >
                <Input placeholder="请输入您的姓名" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="联系电话"
                rules={[
                  { required: true, message: '请输入联系电话' },
                  { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }
                ]}
              >
                <Input placeholder="请输入您的手机号码" />
              </Form.Item>

              <Form.Item
                name="projects"
                label="感兴趣的项目"
                rules={[{ required: true, message: '请选择感兴趣的项目' }]}
              >
                <Selector
                  options={projectOptions}
                  multiple
                />
              </Form.Item>

              <Form.Item
                name="experience"
                label="相关经验"
              >
                <TextArea
                  placeholder="请简述您在相关领域的经验（选填）"
                  rows={3}
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="留言"
              >
                <TextArea
                  placeholder="请留下您的合作意向或其他信息（选填）"
                  rows={4}
                />
              </Form.Item>

              <div style={{ padding: '20px 0' }}>
                <Button 
                  color="primary" 
                  block 
                  size="large"
                  type="submit"
                  loading={loading}
                >
                  提交合作申请
                </Button>
              </div>
            </Form>
          </Card>

          {/* 联系方式 */}
          <Card title="其他联系方式">
            <Space direction="vertical" block>
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                  如有紧急合作需求，也可直接联系我们
                </div>
                <div style={{ fontSize: '16px', color: '#1890ff', fontWeight: '500' }}>
                  客服微信：待补充
                </div>
              </div>
            </Space>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default CooperationPage;