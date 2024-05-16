'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Upload, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function PublishBookPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList(fileList => [...fileList, { url: url, status: 'done' }])
  }

  const onFinish = async (values: any) => {
    if (!userId) {
      enqueueSnackbar('User not authenticated', { variant: 'error' })
      return
    }

    const { title, description, price, authorPub, genre, publisher, quantity} = values
    const previewImageUrl = fileList[0]?.url

    try {
      await Api.Book.createOneBySellerId(userId, {
        title,
        description,//not
        price,
        previewImageUrl,//not
        authorId: userId,
        authorPub,
        genre, //poner en el api
        publisher, //poner en el api
        quantity //poner en el api
      })
      enqueueSnackbar('Libro publicado con éxito', { variant: 'success' })
      router.push('/my-books')
    } catch (error) {
      enqueueSnackbar('Hubo un fallo en la publicación del libro', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Publicar libro a la venta</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Título"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese el título del libro',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Autor"
              name="authorPub"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese el autor del libro',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Género"
              name="genre"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese el género del libro',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Editorial"
              name="publisher"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese la editorial del libro',
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item label="Description" name="description">
              <Input.TextArea rows={4} />
            </Form.Item> */}
            <Form.Item
              label="Precio"
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese el precio del libro',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="Cantidad"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese la cantidad de libros',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            {/* <Form.Item label="Preview Image" name="previewImageUrl">
              <Upload
                fileList={fileList}
                customRequest={handleUpload}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item> */}
            <Form.Item className='center-div'>
              <Button type="primary" htmlType="submit" className='center-button'>
                Publicar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
