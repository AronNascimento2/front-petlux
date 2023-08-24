import { createGlobalStyle, css } from 'styled-components'

const Scrollbars = createGlobalStyle`
  ${({ theme }) => css`
    * {
      &::-webkit-scrollbar {
        width: 8px;
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.neutral.pure.white} transparent;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.neutral.lightMedium};
        border-radius: 8px;

        scrollbar-color: ${theme.colors.brand.secondary.pure};
        scrollbar-width: thin;
      }

      .is-samer {
        color: ${theme.colors.brand.primary.pure};
      }
    }
  `}

`

export default Scrollbars
