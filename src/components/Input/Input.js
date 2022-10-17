import React, { useState } from 'react'
import { Input, Label, Wrapper } from './styles/Input'

export default function InputName ({  children,  ...restProps }) {
	return (
		<Wrapper>
			<Input placeholder="Pizza Name" name="name" id='name' required { ...restProps } />
			<Label />
		</Wrapper>
	);
}