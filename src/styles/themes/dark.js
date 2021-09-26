import bgImg from '../../assets/images/bg-desktop-dark.jpg';

const theme = {
  title: 'dark',
  backgroundImage: bgImg,

  colors: {
    background: 'hsl(235, 21%, 11%)',
    white: '#ffffff',
    card: 'hsl(235, 24%, 19%)',
    todoText: 'hsl(234, 39%, 85%)',
    hover: 'hsl(236, 33%, 92%)',
    greyText: 'hsl(234, 11%, 52%)',
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
