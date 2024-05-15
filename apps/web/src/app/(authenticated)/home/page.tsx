'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Card, Avatar, Spin } from 'antd'
import {
  UserOutlined,
  BookOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
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
      <Title level={2}>Welcome to Your Dashboard</Title>
      <Paragraph>
        Here you can find an overview of your account and activities.
      </Paragraph>

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
