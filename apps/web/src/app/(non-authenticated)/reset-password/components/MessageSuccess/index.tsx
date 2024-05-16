import { Alert } from 'antd'
import React from 'react'

type Props = {
  email: string
}

export const MessageSuccess: React.FC<Props> = ({ email }) => {
  return (
    <Alert
      style={{ textAlign: 'center' }}
      message={`Enviamos un correo electrónico a ${email} con un enlace para restablecer su contraseña`}
      type="success"
    />
  )
}
