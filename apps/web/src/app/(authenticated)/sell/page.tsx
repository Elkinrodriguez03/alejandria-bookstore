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

    const { title, description, price } = values
    const previewImageUrl = fileList[0]?.url

    try {
      await Api.Book.createOneBySellerId(userId, {
        title,
        description,
        price,
        previewImageUrl,
        authorId: userId,
      })
      enqueueSnackbar('Book published successfully', { variant: 'success' })
      router.push('/my-books')
    } catch (error) {
      enqueueSnackbar('Failed to publish book', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Publish a Book for Sale</Title>
          <Text>Fill in the details below to publish your book for sale.</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input the title of the book!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: 'Please input the price of the book!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Preview Image" name="previewImageUrl">
              <Upload
                fileList={fileList}
                customRequest={handleUpload}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Publish
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
