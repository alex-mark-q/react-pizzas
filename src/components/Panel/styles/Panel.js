import styled from 'styled-components/macro';

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
	flex-direction: column;
    height: 100vh;
    justify-content: center;
`
export const Description = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`
export const Header = styled.div`
`

export const Title = styled.div`
	font-family: 'GillSansCondC';
	font-size: 52px;
	font-style: normal;
	text-transform: uppercase;
`
export const SubTitle = styled.div`
	font-family: 'GillSansC';
	color: #767676;
	margin: 40px 0;
`

export const Step = styled.div`
	display: flex;
	flex-direction: row;
	gap: 45px;
	margin-bottom: 25px;
`

export const StepElem = styled.div`

`
export const StepImage = styled.img`

`
export const StepChain = styled.div`
	margin: 25px 0
`

export const Order = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	height: 70px;
	position: relative;
	width: 255px;
		&:hover div {
		color: #fff;
	}
`

export const Button = styled.button`
	background-color: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: none;
	position: relative;
	cursor: pointer;
	height: 100%;
	padding: 0;
	position: absolute;
	width: 270px;
	&:before {
    transition: all .3s ease;
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		border-radius: 60px;
    width: 60px;
    height: 60px;
    background: #E53934;

	}
	&:hover::before {
		background: #E53934;
		width: 100%;
	}
	&:hover::before {
		background: #E53934;
		width: 100%;
	}

	&:after {
		content: '';
		width: 35px;
		height: 35px;
		background: url("/images/svg/custom-pizza.svg") 0 0 no-repeat;
		background-size: cover;
		background-position: center center;
		z-index: 100;
    position: absolute;
    left: 10px;
	}
`

export const Text = styled.div`
	z-index: 99;
	margin-left: 75px;
	display: flex;
	flex-direction: column;
	span {
    text-align: left;
    text-transform: uppercase;
    font-family: 'GillSansLightC';
    font-weight: normal;
    font-style: normal;
    font-size: 15px;
	}
`