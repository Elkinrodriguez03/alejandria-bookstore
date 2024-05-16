'use client'

import { RouterObject } from '@web/core/router'
import { useCoreStore } from '@web/core/store'
import { AuthenticationHook } from '@web/domain/authentication'
import { useAuthentication } from '@web/modules/authentication'
import { GoogleOauth } from '@web/modules/googleOauth'
import { GoogleButton } from '@web/modules/googleOauth/components/googleButton'
import { Button, Flex, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import { ErrorAlert } from './components/ErrorAlert'
import { LoginForm } from './components/LoginForm'
const { Text } = Typography

export default function LoginPage() {
  const router = useRouter()
  const store = useCoreStore()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()

  const {
    login,
    isLoading: isLoadingLogin,
    isSuccess: isSuccessLogin,
    errors: errorsLogin,
  } = AuthenticationHook.useLogin()

  const {
    googleCallback,
    isLoading: isLoadingGoogle,
    isSuccess: isSuccessGoogle,
    errors: errorsGoogle,
  } = AuthenticationHook.useGoogle()

  const isSuccess = isSuccessLogin || isSuccessGoogle
  const isLoading = isLoadingLogin || isLoadingGoogle || isSuccess
  const errors = [...errorsLogin, ...errorsGoogle]

  useEffect(() => {
    if (isSuccess) {
      onSuccess()
    }
  }, [isSuccess])

  const onError = () => {
    enqueueSnackbar('No se pudo iniciar sesión con Google', {
      variant: 'error',
    })
  }

  const onSuccess = async () => {
    try {
      router.push(RouterObject.route.HOME)
    } catch (error) {
      enqueueSnackbar('Algo salió mal durante la inicialización.', {
        variant: 'error',
      })
    }
  }

  /* -------------------------------- HANDLERS -------------------------------- */

  const handleSubmit = (values: { email: string; password: string }) => {
    login(values)
  }

  const handleGoogleSuccess = (response: { credential: string }) => {
    googleCallback(response)
  }

  return (
    <>
      <Flex
        align="center"
        justify="center"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
          padding: 0,
          margin: '70px',
          width: '900px',
          height: '700px',
          borderRadius: '30px',
        }}
      >
        <Flex
          vertical
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '50px',
            height: '700px',
          }}
          gap="middle"
        >
          <Header description="Bienvenido!" />
          <ErrorAlert errors={errors} />

          <LoginForm
            isLoading={isLoading}
            onSubmit={handleSubmit}
            onResetPassword={() =>
              router.push(RouterObject.route.RESET_PASSWORD)
            }
          />

          {GoogleOauth.useActive() && (
            <GoogleButton onSuccess={handleGoogleSuccess} onError={onError} />
          )}
        </Flex>
        <Flex
          vertical
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: 'url("background-login.png")',
            backgroundSize: 'cover',
            position: 'relative',
            width: '100%',
            padding: '50px',
            height: '700px',
            borderRadius: '0 30px 30px 0',
          }}
        >
          <img
            src="./Logo2.png"
            alt="alejandria logo"
            style={{
              width: '70px',
              height: '70px',
              position: 'absolute',
              top: '0px',
              right: '0px',
              margin: '10px',
            }}
          />
          <Flex vertical align="center" style={{ paddingBottom: '50px' }}>
            <Title level={3} style={{ margin: 0 }}>
              Bienvenido de nuevo
            </Title>
            <Text type="secondary">Ingresa con tus datos personales</Text>
          </Flex>
          <Button
            style={{ border: '3px', borderRadius: '50px' }}
            onClick={() => router.push(RouterObject.route.REGISTER)}
          >
            <Flex gap={'small'} justify="center">
              <Text type="secondary">No tengo una cuenta!</Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
