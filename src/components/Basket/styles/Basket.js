import styled from 'styled-components/macro';

export const Element = styled.div`
	position: relative;
	display: -webkit-inline-box;
	display: -ms-inline-flexbox;
	display: inline-flex;
	vertical-align: middle;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	font-family: 'GillSansLightC';
	font-weight: normal;
	font-style: normal;
`
export const Wrapper = styled.div`
	position: relative;
	display: inline-block;
`
export const Count = styled.div`
	background: #E53934;
	position: absolute;
	z-index: 2;
	-webkit-box-flex: 0;
	-ms-flex: 0 0 20px;
	flex: 0 0 20px;
	height: 17px;
	width: 17px;
	font-size: .70rem;
	top: -8px;
	border-radius: 100%;
	font-weight: 900;
	line-height: 155%;
	text-align: center;
	color: #fff;
	left: 50%;
	margin-right: -50%;
	transform: translate(90%, 10%);
`
export const Link = styled.a`
	cursor: pointer;
	text-decoration: none;
	outline: 0;
	touch-action: manipulation;
`
export const Image = styled.div`
	position: relative;
	display: inline-block;
	width: 30px;
	height: 30px;
`