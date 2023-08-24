import { createGlobalStyle } from 'styled-components'

const Toasts = createGlobalStyle`
  .Toastify__toast-container {
      width: fit-content;
    }

    .creating-reminder {
      width: 400px;
      background: #bbd7f8;
    }

    .created-reminder {
      width: 400px;
      background: #78e3bf;
    }
`

export default Toasts