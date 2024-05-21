'use client'

import { useEffect, useState } from 'react'
import { Typography, Row, Col, Button, List, Avatar, Spin } from 'antd'
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ShoppingCartPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [cart, setCart] = useState<Model.Cart | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, {
        includes: ['carts', 'carts.cartItems', 'carts.cartItems.book'],
      })
        .then(user => {
          if (user.carts && user.carts.length > 0) {
            setCart(user.carts[0])
          }
        })
        .catch(error => {
          enqueueSnackbar('Failed to load cart', { variant: 'error' })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [userId])

  const handleDeleteCartItem = async (cartItemId: string) => {
    try {
      await Api.CartItem.deleteOne(cartItemId)
      setCart(prevCart => {
        if (prevCart) {
          return {
            ...prevCart,
            cartItems: prevCart.cartItems?.filter(
              item => item.id !== cartItemId,
            ),
          }
        }
        return prevCart
      })
      enqueueSnackbar('Item removed from cart', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to remove item', { variant: 'error' })
    }
  }

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Carrito de compras</Title>
      <Text>
        
      </Text>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          {cart && cart.cartItems && cart.cartItems.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={cart.cartItems}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => handleDeleteCartItem(item.id)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.book?.previewImageUrl} />}
                    title={item.book?.title}
                    description={`Quantity: ${item.quantity} - Price: $${item.book?.price}`}
                  />
                  <div>
                    <Text strong>
                      Total: ${item.quantity * (item.book?.price || 0)}
                    </Text>
                  </div>
                </List.Item>
              )}
            />
          ) : (
            <Text>Tu carrito luce vacío</Text>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
