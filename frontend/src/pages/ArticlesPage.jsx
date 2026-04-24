import React, { useEffect, useState } from 'react';
import { List, Card, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { getArticles, deleteArticle } from '../api/articles';

const { Meta } = Card;

function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  const loadArticles = () => {
    getArticles().then(setArticles);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleDelete = async id => {
    await deleteArticle(id);
    loadArticles();
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>List of Items</h1>
      <Link to="/articles/new">
        <Button type="primary" style={{ marginBottom: '16px' }}>
          New Article
        </Button>
      </Link>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={articles}
        renderItem={article => (
          <List.Item>
            <Card
              cover={
                article.image ? (
                  <img
                    alt={article.title}
                    src={article.image}
                    style={{ height: 160, objectFit: 'cover' }}
                  />
                ) : null
              }
              actions={[
                <Link to={`/articles/${article.id}/edit`}>Edit</Link>,
                <Popconfirm title="Delete article?" onConfirm={() => handleDelete(article.id)}>
                  <Button danger type="link">
                    Delete
                  </Button>
                </Popconfirm>,
              ]}
            >
              <Meta title={article.title} description={article.description} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ArticlesPage;
