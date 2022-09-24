import styled from 'styled-components/macro';

export const Boarding = styled.div`
	flex: 5;
	display: flex;
	align-items: center;
	width: calc(41.66667% - 1.875rem);
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const Hero = styled.div`
	display: flex;
	flex-direction: row;
	width: calc(53.66667% - 1.875rem);
`
export const List = styled.div`
	display: grid;
	grid-template-columns: repeat(2,1fr);
	flex: 1 1 auto;
	align-self: center;
`

export const ListItem = styled.div`
	display: grid;
	gap: 20px;
`