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

export default function CatalogPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [books, setBooks] = useState<Model.Book[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Assuming we have a method to fetch all book IDs or a paginated fetch method
        // For demonstration, let's assume we have an array of book IDs
        const bookIds = ['1', '2', '3'] // This should be fetched from an API that lists book IDs
        const booksData = await Promise.all(
          bookIds.map(id =>
            Api.Book.findOne(id, { includes: ['author', 'seller'] }),
          ),
        )
        setBooks(booksData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch books', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return (
    <PageLayout layout="narrow">
      <Title level={2} style={{ textAlign: 'center' }}>
        Book Catalog
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Browse through our collection of books available for purchase.
      </Paragraph>
      {loading ? (
        <Spin size="large" style={{ display: 'block', margin: 'auto' }} />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {books?.map(book => (
            <Col key={book.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={book.title}
                    src={book.previewImageUrl || '/default-book.png'}
                  />
                }
                onClick={() => router.push(`/book/${book.id}`)}
              >
                <Card.Meta
                  title={book.title}
                  description={
                    <>
                      <Text strong>{book.price} USD</Text>
                      <br />
                      <Text type="secondary">
                        By {book.author?.name || 'Unknown Author'}
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
