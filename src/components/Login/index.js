import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LabelStyle,
  InputStyle,
  LoginContainer,
  WebsiteLogoImg,
  Form,
  InputContainer,
  ErrorMsg,
  LoginButton,
  CheckboxStyle,
  Checkbox,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <LabelStyle htmlFor="username">USERNAME</LabelStyle>
        <InputStyle
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <LabelStyle htmlFor="password">PASSWORD</LabelStyle>
        <InputStyle
          type={inputType}
          placeholder="Password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
        <div>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <CheckboxStyle htmlFor="checkbox">Show Password</CheckboxStyle>
        </div>
      </>
    )
  }

  onSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailureView = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onAddForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessView(data.jwt_token)
    } else {
      this.onFailureView(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showSubmitError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <Form onSubmit={this.onAddForm}>
          <WebsiteLogoImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </Form>
      </LoginContainer>
    )
  }
}
export default Login
