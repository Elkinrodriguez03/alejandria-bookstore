'use client'
import { useConfiguration } from '@web/core/configuration'
import { Button, Flex, Form, Input } from 'antd'

type Props = {
  isLoading: boolean
  onSubmit: (values: { email: string; password: string }) => void
  onResetPassword: () => void
}

export const LoginForm = ({ isLoading, onSubmit, onResetPassword }: Props) => {
  const [form] = Form.useForm()

  const { isEnvironmentDevelopment } = useConfiguration()

  const handleSubmit = (values: { email: string; password: string }) => {
    onSubmit(values)
  }

  const initialValues = { email: null, password: null }

  if (isEnvironmentDevelopment) {
    initialValues.email = 'test@test.com'
    initialValues.password = 'password'
  }

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      initialValues={initialValues}
      requiredMark={false}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Se requiere correo electronico' }]}
      >
        <Input
          type="email"
          placeholder="Correo electronico"
          autoComplete="email"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Se requiere contraseña' }]}
      >
        <Input.Password
          type="password"
          placeholder="Contraseña"
          autoComplete="current-password"
        />
      </Form.Item>

      <Form.Item>
        <Flex justify="end">
          <Button
            type="link"
            onClick={onResetPassword}
            style={{ padding: 0, margin: 0 }}
          >
            ¿Has olvidado tu contraseña?
          </Button>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} block>
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  )
}
