import './App.css';

import { Layout, Menu, List, Avatar } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import { UserOutlined, HomeOutlined } from '@ant-design/icons';

import ArticlesPage from './pages/ArticlesPage';
import ArticleFormPage from './pages/ArticleFormPage';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', label: <Link to="/">Articles</Link> },
              { key: '2', label: <Link to="/articles/new">New Article</Link> },
            ]}
          />
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <h3>Web Content</h3>
          </Header>
          <Content style={{ margin: '16px' }}>
            <Routes>
              <Route path="/" element={<ArticlesPage />} />
              <Route path="/articles/new" element={<ArticleFormPage />} />
              <Route path="/articles/:id/edit" element={<ArticleFormPage />} />
            </Routes>
            {/* <ArticlesPage /> */} {/* 👈 Aquí se muestra la página */}
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
