import styled from 'styled-components/macro';

export const Content = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	z-index: 10;
	min-height: 140px;
	justify-content: flex-start;
`
export const List = styled.div`
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