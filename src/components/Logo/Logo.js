import React from 'react'
import { Container, Link } from './styles/Logo'
import { Link as ReachRouterLink } from 'react-router-dom'
// import { ReactComponent as LogoSvg } from './svg/logo.svg'

export default function Logo ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
}

Logo.Link = function LogoLink({ to, ...restProps }) {
  return (
    
    <ReachRouterLink to = { to }>
      <Link {...restProps}>
        {/*<LogoSvg />*/} 
      </Link>
    </ReachRouterLink>

  )
};

Logo.propTypes = {};
Logo.defaultProps = {};