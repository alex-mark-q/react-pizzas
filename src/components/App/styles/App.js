import styled from 'styled-components/macro';

export const Container = styled.div`
	// width: calc(100% - 1.875rem);
`
export const Content = styled.div`
	flex-flow: column;
	display: flex;
	justify-content: center;
	flex-direction: row;
`
export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	height: ${({ theme }) => theme.elements.height};
	// width: calc(50% - 1.875rem);
	width: 100%
`
export const Services = styled.div`
	display: flex;
	background: ${({ src }) => (src ? `url(/images/png/${src}.jpg)` : '#191c21')};
	background-size: cover;
	background-repeat: no-repeat;
	// height: 100vh;
	width: 700px;
`
export const Boarding = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
	flex-direction: column;
	width: 700px;
`

export const Present = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-flow: row;
	color: #fff;
	height: 100vh;
	gap: 25px;
`
export const Col = styled.div`
	// width: 800px;
`
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// width: calc(60% - 1.875rem);
`
export const Constructor = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.elements.backgroundColor};
	position: sticky;
	top: 0px;
	margin-left: auto;
	margin-right: auto;
	height: 100%;
	width: 700px;
	bottom: 0px;
`