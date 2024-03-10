import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const ImageContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  height: 350px;
  box-shadow: 0px 4px 16px 0px #cbd5e1;
  border-radius: 8px;
  margin: auto;
`
export const WebsiteLogoImg = styled.img`
  width: 80px;
  height: 30px;
  margin-bottom: 30px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: red;
`
export const LoginButton = styled.button`
  color: '#ffffff';
  background-color: #3b82f6;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  width: 100%;
  height: 30px;
  cursor: pointer;
  border: none;
  font-family: 'Roboto';
  font-size: 12px;
  border-radius: 8px;
`

export const LabelStyle = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #94a3b8;
  font-weight: 400;
`
export const CheckboxStyle = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #94a3b8;
  font-weight: 400;
  margin-left: 10px;
  margin-top: 6px;
`
export const InputStyle = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 12px;
  color: #94a3b8;
  font-weight: 400;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
`
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`
