const font = {
  sizeMin: 12,
  sizeMax: 16,
};
const screens = {
  // Width
  mobileWidth:  320,
  tabletWidth:  600,
  desktopWidth: 1600,

  // Height
  desktopHeight: '100vh',
};
const basicOffset = 1.875;
const color = {
  item: '#191c21'
}

const base = {
  columns: 12,
  font: {
  // font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
    size: `calc(
      ${font.sizeMin}px + ${font.sizeMax - font.sizeMin} *
        ((100vw - ${screens.mobileWidth}px) / ${screens.desktopWidth - screens.mobileWidth})
    )`,
    family: {
      text:  '"Montserrat", sans-serif',
      title: '"Roboto", Arial, sans-serif',
    }
  },
  elements: {
    height: 'var(--height-page)',
    backgroundColor: 'var(--background-color)',
  },
  border: {
    radius: 'var(--border-radius)',
    size:   'var(--border-size)',
    circle: '50%',
  },
  screens: {
    desktop: {
      height: screens.desktopHeight,
    }
  },
  variables: {
    border: {
      size:   1,
      radius: basicOffset * 2,
    },
    offsets: {
      desktop: basicOffset
    },
    color: color.item
  }

}

type TTheme = typeof base;

declare module 'styled-components' {
  export type TDefaultTheme = TTheme;
}

export default base;