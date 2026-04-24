/*import React, { useEffect, useState } from "react";*/
import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { createArticle, getArticle, updateArticle } from '../api/articles';

const ArticleFormPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // Si existe → edición

  useEffect(() => {
    if (id) {
      getArticle(id).then(data => {
        form.setFieldsValue(data);
      });
    }
  }, [id, form]);

  const onFinish = async values => {
    if (id) {
      await updateArticle(id, values);
      message.success('Artículo actualizado');
    } else {
      await createArticle(values);
      message.success('Artículo creado');
    }
    navigate('/');
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px' }}>
      <h1>{id ? 'Edit Article' : 'New Article'}</h1>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Nombre" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="description" label="Descripción">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item name="image" label="URL de Imagen">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default ArticleFormPage;
