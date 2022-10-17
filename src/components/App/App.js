import React, {useLayoutEffect, useRef, forwardRef} from 'react'
import { Col, Container, Content, Layout, Services, Present, Boarding, RefLayout, Wrapper, Constructor } from './styles/App'

export default function App ({  children,  ...restProps }) {
  return <Container { ...restProps }> {children} </Container>;
}

App.Content = function AppContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

App.Layout = function AppLayout({ children, ...restProps }) {
  return <Layout {...restProps}>{children}</Layout>;
};

App.Services = function AppServices({ children, ...restProps }) {
  return <Services {...restProps}>{children}</Services>;
  
};
App.Wrapper = function AppWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

App.Present = function AppPresent({ children, ...restProps }) {
  return <Present {...restProps}>{children}</Present>;
};

App.Boarding = function AppBoarding({ children, ...restProps }) {
  return <Boarding {...restProps}>{children}</Boarding>;
};
App.RefLayout = function AppRefLayout({ children, ...restProps }) {
  const fixedRef = useRef(null);
  const Wrapper = forwardRef((props, ref) => {
    return <Constructor ref={ref} {...props} />;
  });


  useLayoutEffect(() => {
    const divAnimate = fixedRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (divAnimate < window.scrollY) {
        fixedRef.current.style.position = "fixed";
        fixedRef.current.style.top = 0;
        fixedRef.current.style.marginLeft = 'auto';
        fixedRef.current.style.marginRight = 'auto';
        fixedRef.current.style.height = '100%';
        fixedRef.current.style.width = '700px';
        // fixedRef.current.style.minWidth = '60%';
        fixedRef.current.style.bottom = 0;
      } else {
        fixedRef.current.style.position = "absolute";
        fixedRef.current.style.width = '700px';
        fixedRef.current.style.height = '100%';
        fixedRef.current.style.top = 0;
        fixedRef.current.style.bottom = 0;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Wrapper ref={fixedRef}>
      {children}
    </Wrapper>
  )
};
App.Constructor = function AppConstructor({ children, ...restProps }) {
  return <Constructor {...restProps}>{children}</Constructor>;
};
App.Col = function AppCol({ children, ...restProps }) {
  return <Col {...restProps}>{children}</Col>;
};