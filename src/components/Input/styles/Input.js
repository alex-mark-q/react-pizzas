import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  font-family: inherit;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
`
export const Input = styled.input`
  text-align: left;
	border: none;
	outline: none;
	background: none;
	width: 260px;
	border-bottom: 3px solid #FFDBB5;
	font-size: 27px;
	transition: 0.4s all;
	&:required,
	&:invalid { 
		box-shadow:none;
	}
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
`
export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;

`
