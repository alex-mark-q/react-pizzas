import styled from 'styled-components/macro';

export const Main = styled.div``
export const Container = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
`
export const CPane = styled.div`
	display: flex;
	outline: none;
	overflow: visible;
	user-select: text;
	flex-direction: row;
`
export const Contents = styled.div`
	width: calc(100% - 1.875rem);
`
export const SideBarWrapper = styled.div`
	-webkit-box-flex: 0;
	-ms-flex: 0 0 7.33333%;
	flex: 0 0 7.33333%;
	width: calc(8.33333% - 1.875rem);
`