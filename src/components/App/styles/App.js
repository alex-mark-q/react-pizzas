import styled from 'styled-components/macro';

export const Container = styled.div`
	width: calc(100% - 1.875rem);
`
export const Content = styled.div`
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-flow: column;
	flex-flow: column;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
`
export const Layout = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
`
export const Services = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	width: calc(50% - 1.875rem);
	background-color: #F0971E;
	-webkit-box-flex: 4;
	-ms-flex: 4;
	flex: 4;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
`