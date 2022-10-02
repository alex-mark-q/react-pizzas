import styled from 'styled-components/macro';

export const Container = styled.div`
	width: calc(100% - 1.875rem);
`
export const Content = styled.div`
	flex-flow: column;
	display: flex;
	justify-content: center;
`
export const Layout = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`
export const Services = styled.div`
	background: ${({ src }) => (src ? `url(/images/png/${src}.jpg)` : '#191c21')};
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	width: calc(100% - 1.875rem);
	flex: 3;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const Boarding = styled.div`
	flex: 5;
	display: flex;
	align-items: center;
	width: calc(100% - 1.875rem);
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
`

export const Present = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-flow: row;
	color: #fff;
	height: 100vh;
	gap: 25px;
`

