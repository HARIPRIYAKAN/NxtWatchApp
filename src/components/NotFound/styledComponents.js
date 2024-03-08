import styled from 'styled-components'

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
