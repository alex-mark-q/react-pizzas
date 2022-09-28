import React from 'react';
import { Header, NavBar, Logo, Menu } from '../components'
import * as ROUTES from '../constants'

export function HeaderContainer({ children }) {
  return (
    <>
    	<Logo>
        <Logo.Link src = '/images/svg/logo.svg' to = { ROUTES.HOME } alt="Pizzas" /> 
      </Logo>
      <NavBar>
      <NavBar.Wrapper>
      </NavBar.Wrapper>
      </NavBar>
      <Header>
        <Menu>
          <Menu.List>
            <Menu.Item>
              <Menu.ItemLink href="#">
                Pizzas
              </Menu.ItemLink>
            </Menu.Item>
            <Menu.Item>
              <Menu.ItemLink href="#">
                Delivery
              </Menu.ItemLink>
            </Menu.Item>
            <Menu.Item>
              <Menu.ItemLink href="#">
                Contacts
              </Menu.ItemLink>
            </Menu.Item>
            <Menu.Item>
              <Menu.ItemLink href="#">
                Login
              </Menu.ItemLink>
            </Menu.Item>
            <Menu.Item>
              <Menu.ItemLink href="#">
                Register
              </Menu.ItemLink>
            </Menu.Item>
          </Menu.List>
        </Menu>
      </Header>
    </>
  )
}