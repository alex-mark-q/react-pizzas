import styled from 'styled-components/macro';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 100%;
	color: #fff;
	margin-top: 55px
`
export const Info = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`

export const Calories = styled.div`
	text-align: right;
	display: flex;
	flex-direction: column;
	font-size: 32px
`

export const Gramms = styled.div`
	text-align: right;
	display: flex;
	flex-direction: column;
	font-size: 32px
`

export const Title = styled.div`
	font-size: 26px
`

export const Price = styled.div`
	text-align: right;
	display: flex;
	flex-direction: column;
	font-size: 32px
`
