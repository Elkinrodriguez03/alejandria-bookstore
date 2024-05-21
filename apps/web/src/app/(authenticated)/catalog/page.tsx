'use client'

import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import { Card, Col, Row, Spin, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
const { Title, Text, Paragraph } = Typography

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
        const booksData = await Api.Book.findMany({
          includes: ['author', 'seller'],
        })

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
        Catologo de libros
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        Busca tus libros favoritos en nuestra colección de libros disponibles.
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
