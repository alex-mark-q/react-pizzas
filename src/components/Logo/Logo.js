import React from 'react'
import { Container, Wrapper } from './styles/Logo'
// import { ReactComponent as LogoSvg } from './svg/logo.svg'

export default function Logo ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
}

Logo.Wrapper = function LogoWrapper({ children, ...restProps }) {
  return (

    <Wrapper {...restProps}>
      {/*<LogoSvg />*/}
    </Wrapper>

  )
};

Logo.propTypes = {};
Logo.defaultProps = {};