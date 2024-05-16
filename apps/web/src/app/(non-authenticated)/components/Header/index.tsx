import { Flex, Typography } from 'antd'
import React from 'react'

const { Text, Title } = Typography

type Props = {
  title?: string
  secondTitle?: string
  description?: string
}

export const Header: React.FC<Props> = ({
  title = 'Ingresa a Alejandria',
  description,
}) => {
  return (
    <>
      <Flex vertical align="center">
        <Title level={3} style={{ margin: 0, color: '#509B95' }}>
          {title}
        </Title>
        {description && <Text type="secondary">{description}</Text>}
      </Flex>
    </>
  )
}
