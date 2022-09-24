import styled from 'styled-components/macro';

export const Container = styled.div``
export const Content = styled.div`
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	z-index: 10;
	min-height: 140px;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
`
export const Menu = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	padding: 0;
`
export const Item = styled.div`
	list-style: none;
	text-transform: uppercase;
	color: #3f485f;
	font-size: 15px;
	font-weight: 700;
	-webkit-transition: color .3s ease 0s;
	transition: color .3s ease 0s;
	padding-right: 15px;
	position: relative;
`
export const ItemLink = styled.a`
	letter-spacing: 0.1rem;
	color: #ffffff;
	font-family: 'GillSansLightC';
	font-weight: bold;
	font-style: normal;
	text-decoration: none;
`