'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Spin, Card } from 'antd'
import {
  UserOutlined,
  DollarOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function BookDetailPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [book, setBook] = useState<Model.Book | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await Api.Book.findOne(params.id, {
          includes: ['author', 'seller'],
        })
        setBook(bookData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch book details', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchBook()
  }, [params.id])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!book) {
    return (
      <PageLayout layout="narrow">
        <Title level={2}>Book Not Found</Title>
        <Paragraph>The book you are looking for does not exist.</Paragraph>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Book Details</Title>
      <Paragraph>Here you can find the details of the selected book.</Paragraph>
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <img
              src={book.previewImageUrl}
              alt={book.title}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={24} sm={12} md={16}>
            <Title level={3}>{book.title}</Title>
            <Paragraph>{book.description}</Paragraph>
            <Text>
              <UserOutlined /> Author: {book.author?.name}
            </Text>
            <br />
            <Text>
              <DollarOutlined /> Price: ${book.price}
            </Text>
            <br />
            <Text>
              <CalendarOutlined /> Published on:{' '}
              {dayjs(book.dateCreated).format('MMMM D, YYYY')}
            </Text>
          </Col>
        </Row>
      </Card>
    </PageLayout>
  )
}
