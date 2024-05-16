'use client'

import {
  BookOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'
import { useAuthentication } from '@web/modules/authentication'
import { Avatar, Card, Col, Flex, Row, Spin, Typography } from 'antd'
import dayjs from 'dayjs'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
const { Title, Text, Paragraph } = Typography

export default function HomePageTest() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [user, setUser] = useState<Model.User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userId) {
          const userData = await Api.User.findOne(userId, {
            includes: ['notifications', 'booksAsSeller', 'carts', 'orders'],
          })
          setUser(userData)
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [userId])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Flex
        align="center"
        justify="center"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <Title level={2}>Libros que te recomendamos:</Title>
      </Flex>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Profile"
            hoverable
            cover={
              <Avatar
                size={64}
                icon={<UserOutlined />}
                src={user?.pictureUrl}
              />
            }
          >
            <Card.Meta title={user?.name} description={user?.email} />
            <Text type="secondary">
              Joined: {dayjs(user?.dateCreated).format('DD MMM YYYY')}
            </Text>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="My Books"
            hoverable
            onClick={() => router.push('/my-books')}
            cover={
              <BookOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
            }
          >
            <Card.Meta
              description={`You have ${user?.booksAsSeller?.length || 0} books`}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            title="Shopping Cart"
            hoverable
            onClick={() => router.push('/cart')}
            cover={
              <ShoppingCartOutlined
                style={{ fontSize: '64px', color: '#1890ff' }}
              />
            }
          >
            <Card.Meta
              description={`You have ${user?.carts?.length || 0} items in your cart`}
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
