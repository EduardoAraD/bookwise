import Image from 'next/image'
import { useRouter } from 'next/router'

import { ButtonLogin } from '../../components/ButtonLogin'

import { Content, ImageBackground, LoginContainer } from './styles'
import backgroundImage from '../../assets/backgroundImage.png'
import logo from '../../assets/logo.png'

export default function Login() {
  const router = useRouter()

  async function handleGoHome() {
    await router.push('/home')
  }

  return (
    <LoginContainer>
      <ImageBackground>
        <div className="logo">
          <Image src={logo} alt="logo Bookwise" width={232} height={58} />
        </div>
        <div className="opacity" />
        <Image className="background" src={backgroundImage} alt="" />
      </ImageBackground>
      <Content>
        <div>
          {/* <Image src={logo} alt="logo Bookwise" width={232} height={58} /> */}
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>

          <ButtonLogin
            type="button"
            onClick={handleGoHome}
            title="Entrar no Google"
            typeLogin="google"
          />
          <ButtonLogin
            type="button"
            onClick={handleGoHome}
            title="Entrar no Github"
            typeLogin="github"
          />
          <ButtonLogin
            type="button"
            onClick={handleGoHome}
            title="Entrar como visitante"
            typeLogin="visitant"
          />
        </div>
      </Content>
    </LoginContainer>
  )
}
