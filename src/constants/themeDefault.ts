const lineHeights = {
    longText: '140%',
    shortText: '130%',
    heading: '120%',
    display: '110%'
  }
  
  export const textDecoration = {
    none: 'none',
    underline: 'underline',
    italic: 'italic'
  }
  
  const typography = {
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    lineHeights: {
      longText: '140%',
      shortText: '130%',
      heading: '120%',
      display: '110%'
    },
    fonts: {
      body: 'lato, sans-serif',
      headings: 'lato, sans-serif'
    },
    sizes: {
      xxxxs: '0.5rem', // 8px
      xxxs: '0.75rem', // 12px
      xxs: '0.875rem', // 14px
      xs: '1rem', // 16px
      sm: '1.125rem', // 18px
      md: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '2.5rem', // 40px
      xxl: '3rem', // 48px
      xxxl: '4rem' // 64px
    }
  }
  
  const colors = {
    brand: {
      primary: {
        darkest: '#9A1820',
        dark: '#C81F2A',
        pure: '#FF5751',
        medium: '#FF8B7E',
        soft: '##FFDEDD',
        light: '#FFF2F2'
      },
      secondary: {
        darkest: '#0067A6',
        dark: '#1B77CB',
        pure: '#6AB8FF',
        soft: '#CAE6FF',
        light: '#EEF7FF'
      },
      tertiary: {
        dark: '#E4764F',
        medium: '#FB9774',
        light: '#FFB59B'
      },
      quaternary: {
        dark: '#AA1C4F',
        medium: '#ED3957',
        light: '#F98A87'
      }
    },
    decorative: {
      orange: {
        darkest: '#9D5138',
        medium: '#E27754',
        pure: '#FF9E7E',
        soft: '#FFE0CE',
        light: '#FFF5EF'
      },
      purple: {
        darkest: '#7A55A5',
        medium: '#B57BEF',
        pure: '#D4A8FF',
        soft: '#EDDBFF',
        light: '#FAF5FF'
      },
      pink: {
        darkest: '#952D72',
        medium: '#E864BC',
        pure: '#FF8FDA',
        soft: '#FFD6F0',
        light: '#FFF0FA'
      },
      green: {
        darkest: '#076437',
        medium: '#219C56',
        pure: '#70F5AA',
        soft: '#A3FFCB',
        light: '#E6FFF1'
      },
      yellow: {
        darkest: '#7E7502',
        medium: '#D0C23E',
        pure: '#FFEE80',
        soft: '#FFF5B8',
        light: '#FFFFEB'
      }
    },
    neutral: {
      darkest: '#333333',
      dark: '#666666',
      medium: '#999999',
      lightMedium: '#CCCCCC',
      soft: '#E6E6E6',
      light: '#F6F6F6',
      pure: {
        black: '#000000',
        white: '#FFFFFF'
      }
    },
    support: {
      success: {
        darkest: '#0D7351',
        dark: '#22AA7D',
        medium: '#32C893',
        soft: '#78E3BF',
        light: '#D6FFF1'
      },
      warning: {
        darkest: '#916527',
        dark: '#E39B35',
        medium: '#FFB247',
        soft: '#FFCA81',
        light: '#FFF1DB',
        opacity: 'rgba(255, 202, 129, 0.26)'
      },
      danger: {
        darkest: '#800A1F',
        dark: '#9E001D',
        medium: '#CC0000',
        soft: '#F5ADAD',
        light: '#FFE6E6'
      },
      information: {
        darkest: '#1052A2',
        dark: '#216DCA',
        medium: '#569EF5',
        soft: '#C6DFFD',
        light: '#E6F6FF'
      },
      report: {
        darkest: '#1052A2',
        dark: '#216DCA',
        medium: '#569EF5',
        soft: '#C6DFFD',
        light: '#E6F6FF'
      }
    }
  }
  
  const borders = {
    radius: {
      none: '0',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      pill: '31.25rem',
      circular: '50%'
    },
    widths: {
      none: '0px',
      hairline: '1px',
      thin: '2px',
      thick: '4px'
    }
  }
  
  const opacity = {
    opaque: 0.78,
    semiOpaque: 0.56,
    medium: 0.32,
    light: 0.16,
    semiTranspatent: 0.08
  }
  
  const spacing = {
    femto: '0.125rem', // 2px
    pico: '0.2rem', // 3px
    nano: '0.5rem', // 8px
    xxxxs: '0.75rem', // 12px
    xxxs: '1rem', // 16px
    xxs: '1.5rem', // 24px
    xs: '2rem', // 32px
    sm: '2.5rem', // 40px
    md: '3rem', // 48px
    lg: '3.5rem', // 56px
    xl: '4rem', // 64px
    xll: '4.5rem', // 72px
    xxl: '5rem', // 80px
    xxxl: '7.5rem', // 120px
    huge: '10rem', // 160px
    giant: '12.5rem' // 200px
  }
  
  const animations = {
    easeOut: {
      duration: '400ms',
      timingFunction: 'cubic-bezier(0,0,0.58,1)'
    },
    easeInOut: {
      duration: '560ms',
      timingFunction: 'cubic-bezier(0.55,0.47,1)'
    }
  }
  const shadow = {
    default: {
      lv1: '0px 1px 2px 0px #3333331F, 0px 2px 8px 0px #3333331F;',
      lv2: '0px 0px 8px 0px #3333330D, 0px 2px 4px 0px #3333330D, 0px 4px 8px 0px #3333330D, 0px 14px 16px 0px #3333330D, 0px 0px 2px 0px #3333330D;',
      lv3: '0px 6px 10px 0px #3333330D, 0px 20px 12px 0px #3333330D, 0px 16px 14px 0px #3333330D, 0px 6px 4px 0px #3333330D, 0px 0px 4px 0px #3333330D;'
    },
    bottom: {
      lv1: '0px 1px 0px 0px #3333331F, 0px 2px 0px 0px #3333330D'
    },
    button: {
      primary: {
        lv1: '0px 0px 8px 0px #D837311A, 0px 2px 4px 0px #D837311A, 0px 4px 8px 0px #D837311A, 0px 14px 16px 0px #D837311A, 0px 0px 2px 0px #D837311A;',
        lv2: '0px 6px 10px 0px #D837311A, 0px 20px 30px 0px #D837311A, 0px 16px 14px 0px #D837311A, 0px 6px 10px 0px #D837311A, 0px 0px 4px 0px #D837311A;'
      },
      secondary: {
        lv1: '0px 0px 8px 0px #0D00531A, 0px 2px 4px 0px #0D00531A, 0px 4px 8px 0px #0D00531A, 0px 14px 16px 0px #0D00531A, 0px 0px 2px 0px #0D00531A;',
        lv2: '0px 6px 10px 0px #0D00531A, 0px 20px 30px 0px #0D00531A, 0px 16px 14px 0px #0D00531A, 0px 6px 10px 0px #0D00531A, 0px 0px 4px 0px #0D00531A;'
      }
    }
  }
  
  const theme = {
    textDecoration,
    typography,
    colors,
    borders,
    opacity,
    spacing,
    animations,
    lineHeights,
    shadow
  } as const
  
  export default theme
  
  