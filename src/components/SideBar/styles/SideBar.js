import styled from 'styled-components/macro';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 25vh 50vh 25vh;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`
export const Cart = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 10vh 10vh;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 20px;
	position: relative;
	-webkit-transition: background-color .3s ease 0s;
	transition: background-color .3s ease 0s;
`
export const HeadLine = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-flex: 0;
	-ms-flex: 0 0 45%;
	flex: 0 0 45%;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 0 auto;
	height: 100%;
	width: 100%;
`
export const HeadLineWrapper = styled.div`
	position: absolute;
	bottom: 50%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	width: 200px;
	margin: 0 auto;
	transform: rotate(-90deg);
	-webkit-transform: rotate(-90deg);
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`
export const Span = styled.span`
	font-family: 'GillSansC';
	font-size: 28px;
	font-weight: bold;
	font-style: normal;
	text-transform: uppercase;
`

export const Scroll = styled.div`
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-flex: 0;
	-ms-flex: 0 0 10%;
	flex: 0 0 10%;
	height: 100%;
	width: 100%;
`

export const SpanAction = styled.span`
	text-transform: capitalize;
	font-family: 'GillSansLightC';
	font-weight: normal;
	font-style: normal;
	display: block;
	transform: rotate(-90deg);
	-webkit-transform: rotate(-90deg);
`