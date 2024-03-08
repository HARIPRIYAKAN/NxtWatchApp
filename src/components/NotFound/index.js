import Header from '../Header'

import NavBar from '../NavBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundPara,
  NotFoundImage,
  TopContainer,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFindImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavBar />
          <TopContainer bgColor={bgColor}>
            <NotFoundContainer>
              <NotFoundImage src={notFindImageUrl} alt="not found" />
              <NotFoundHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </TopContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default NotFound
