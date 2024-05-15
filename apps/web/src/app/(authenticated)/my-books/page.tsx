'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyPublishedBooksPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [books, setBooks] = useState<Model.Book[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, {
        includes: ['booksAsSeller', 'booksAsSeller.author'],
      })
        .then(user => {
          if (user.booksAsSeller) {
            setBooks(user.booksAsSeller)
          }
        })
        .catch(error => {
          enqueueSnackbar('Failed to fetch books', { variant: 'error' })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [userId])

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        My Published Books
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Here you can find all the books you have published.
      </Paragraph>
      {loading ? (
        <Spin
          size="large"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {books?.map(book => (
            <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={book.title}
                    src={book.previewImageUrl || '/default-book-cover.jpg'}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                }
                onClick={() => router.push(`/book/${book.id}`)}
              >
                <Card.Meta
                  title={book.title}
                  description={
                    <>
                      <Text>{book.author?.name}</Text>
                      <br />
                      <Text type="secondary">
                        {dayjs(book.dateCreated).format('MMMM D, YYYY')}
                      </Text>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
