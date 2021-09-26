import bgImg from '../../assets/images/bg-desktop-light.jpg';

const theme = {
  title: 'light',
  backgroundImage: bgImg,

  colors: {
    background: 'hsl(236, 33%, 92%)',
    white: '#ffffff',
    card: 'hsl(0, 0%, 98%)',
    todoText: 'hsl(235, 19%, 35%)',
    hover: 'hsl(235, 19%, 35%)',
    greyText: 'hsl(236, 9%, 61%)',
    dragdrop: 'hsl(233, 14%, 35%)',
    gradient: 'linear-gradient(#e66465, #9198e5)',
    primaryBlue: 'hsl(220, 98%, 61%)',
  },

  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '20px',
  },

  fontWeight: {
    bold: '700',
    normal: '400',
  },

  breakpoints: {
    min_sm: '320px',
    max_sm: '767px',
    min_md: '768px',
    max_md: '1023px',
    min_lg: '1024px',
  },
};

export default theme;

/* ### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%) */
