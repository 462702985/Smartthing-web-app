
import { Form, Layout, Input, Button, Modal} from 'antd';
import { useState} from 'react';
import Data from './Content'
import html2pdf from 'html2pdf.js'
const { Header, Content} = Layout;

function App() {
  const [token, setToken] = useState(); 
  const [isLogin, setIsLogin] = useState(false);
  const onFinish = (value) => {
    setToken("Bearer " + value.token);
    setIsLogin(true);
  }
  const onClick = () => {
    const element = document.getElementById('content');
    html2pdf(element);
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div className='header' style={{
          display:"flex",
          justifyContent:"space-between",
          color: "rgb(94, 250, 164)",
          "fontSize": "20px",}}>
          SmartThings Configurations
          <Button type="primary" size="large" style={{margin: "10px"}} onClick={onClick}>Download</Button>
        </div>
      </Header>
      {isLogin ? 
      <Layout>
        <Content style={{
            padding: "50px",
            maxHeight: "calc(100% - 64px)",
            overflowY: "auto",
          }} id="content">
            <Data token={token}/>
        </Content>
      </Layout> :
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          style={{ margin: "40px"}}
          onFinish={onFinish}
        >
          <Form.Item label="token" name="token" rules={[{ required: true, message: 'Please input your token' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item     
            wrapperCol={{ offset: 11, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <div style={{textAlign: "center"}}>
          <a href="https://developer-preview.smartthings.com/docs/advanced/authorization-and-permissions#personal-access-tokens"
            >
          create token</a></div>
        </Form>
      }
    </Layout>
  );
}

export default App;
