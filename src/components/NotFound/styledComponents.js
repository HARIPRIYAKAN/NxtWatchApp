import styled from 'styled-components'

export const NotFoundPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  height: 100vh;
  width: 100vw;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 500;
  color: ${props => props.headingColor};
`
export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.noteColor};
`
export const NotFoundImage = styled.img`
  width: 200px;
  height: 200px;
`
