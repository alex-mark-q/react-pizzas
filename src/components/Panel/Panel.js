import React, { useCallback } from 'react'
import { Container, Hero, Description, Header, Title, SubTitle, Step, StepElem, StepImage, StepChain, Order, Button, Text } from './styles/Panel'

export default function Panel ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
};

Panel.Hero = function PanelHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};

Panel.Description = function PanelDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Panel.Header = function PanelDescription({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Panel.Title = function PanelTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Panel.SubTitle = function PanelSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Panel.Step = function PanelStep({ children, ...restProps }) {
  return <Step {...restProps}>{children}</Step>;
};
Panel.StepElem = function PanelStepElem({ children, ...restProps }) {
  return <StepElem {...restProps}>{children}</StepElem>;
};
Panel.StepImage = function PanelStepImage({ children, ...restProps }) {
  return <StepImage {...restProps} />;
};
Panel.StepChain = function PanelStepChain({ children, ...restProps }) {
  return <StepChain {...restProps}>{children}</StepChain>;
};
Panel.Order = function PanelOrder({ children, ...restProps }) {
  return <Order {...restProps}>{children}</Order>;
};
Panel.Button = function PanelButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>{children}</Button>
  )
};
Panel.Text = function PanelText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};