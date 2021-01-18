import { css, createGlobalStyle } from 'styled-components'
import { fluidRange, transparentize, math, rem } from 'polished'

export const MAX_CONTENT_WIDTH = rem('1440px')
export const fontStack = `Poppins, Telegraf, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`

export const COLOR = {
  WHITE: '#FFFFFF',
  BLACK: '#000',
  BLUEBERRY_SODA: '#8591A5',
  EXPLORATION_GREEN: '#58A55D',
  LYNX_WHITE: '#F8F8F8' /* 5 Grey */,
}

export const SPACE = {
  XXS: rem(2),
  XS: rem(4),
  S: rem(8),
  M: rem(16),
  L: rem(32),
  XL: rem(64),
  XXL: rem(128),
  XXXL: rem(256),
  XXXXL: rem(400),
}

export const FONT_SIZE = {
  XXS: rem(10),
  XS: rem(12),
  S: rem(14),
  M: rem(16),
  L: rem(18),
  XL: rem(20),
  XXL: rem(24),
  XXXL: rem(28),
  XXXXL: rem(32),
  XXXXXL: rem(36),
  XXXXXXL: rem(48),
}

export const FONT_WEIGHT = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
}

export const RADIUS = {
  XS: '1px',
  S: '2px',
  M: '4px',
  L: '8px',
  CIRCLE: '50%',
  PILL: '9999px',
}

export const DEVICE = {
  S: '0',
  M: '768px',
  L: '1024px',
  XL: '1440px',
}

export const breakpoints = {
  S: DEVICE.S,
  M: DEVICE.M,
  L: DEVICE.L,
  XL: DEVICE.XL,
}

const mediaQuery = ({ mobileFirst = true }) =>
  Object.entries(DEVICE).reduce(
    (deviceMediaQueries, [label, breakpoint]) => ({
      ...deviceMediaQueries,
      [label]: (...args) => css`
        @media screen and (${mobileFirst ? 'min-width' : 'max-width'}: ${math(
        `${breakpoint} - 0.1px`
      )}) {
          ${css(...args)}
        }
      `,
    }),
    {}
  )

// mq is for usage within `styled` function
export const mq = {
  to: mediaQuery({ mobileFirst: false }),
  from: mediaQuery({ mobileFirst: true }),
}

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    min-width: 320px;
    margin: 0;
    color: ${COLOR.WHITE};
    background-color: ${COLOR.WHITE};
  }
  html {
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '13px',
        toSize: '18px',
      },
      '320px',
      '2200px'
    )}
    cursor: initial;
  }
  body {
    font-family: ${fontStack};
    letter-spacing: -${1 / 32}em;
    color: ${COLOR.WHITE};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 0.5em 0;
  }
  h1,
  h2,
  h3 {
    line-height: 1.3;
  }
  h4,
  h5,
  h6 {
    line-height: 1.5;
  }
  p {
    margin: 0;
  }

  ol {
    margin: 0;
    padding: 0;
  }

  input,
  textarea,
  button {
    font-family: inherit;
    letter-spacing: inherit;
    box-sizing: border-box;
  }

  input::placeholder {
    font-size: inherit;
  }

  button {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  input[type="number"] {
    appearance: textfield;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1em;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  :focus {
    outline: none;
  }
`

export const theme = {
  breakpoints,
}
