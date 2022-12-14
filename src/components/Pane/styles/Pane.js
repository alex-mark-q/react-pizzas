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
	height: 100vh;
	overflow: visible;
	user-select: text;
	flex-direction: row;
	width: calc(50% - 1.875rem);
`
export const Contents = styled.div`
	width: ${({ theme }) => `calc( (100% / ${theme.columns} * 11) - ${theme.variables.offsets.desktop}rem)` } ;
`
export const SideBarWrapper = styled.div`
	position: fixed;
	right: 0;
	flex: 0 0 7.33333%;
	width: calc(7.33333% - 1.875rem);
`