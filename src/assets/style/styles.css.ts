import { createTheme, style } from "@vanilla-extract/css";


export const [themeClass, vars] = createTheme({
  color: {
    primary: "#E26559",
    secondary: "#3C4043"
  },
  font: {
    bold: '700',
    regular:"400"
  },
});


export const modalStyle = style({
  position: "fixed",
  zIndex: "1",
  left: "0",
  top: "0",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(4px)",
});

export const modalContentWrapperStyle = style({
  display: 'flex',
  margin: "auto",
  width: '100%',
  height: '100%',
  justifyContent: "center",
  alignItems: "center"

});


export const modalContentStyle = style({
  display: 'block',
  backgroundColor: "#fff",
  margin: "auto",
  width: '320px',
  height: '563px',
  padding: "30px 20px",
});

export const logoWrapperStyle = style({
  border: '1px solid #D8D9D9',
  width: "86px",
  height: "86px",
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 14px',
});

export const modalTitle = style({
  fontWeight: vars.font.bold,
  fontSize: "20px",
  lineHeight: "24px",
  color: vars.color.secondary,
  marginBottom: "7px",
  textAlign: "center",

});
export const modalSubTitle = style({
  fontWeight: vars.font.regular,
  fontSize: "14px",
  lineHeight: "22px",
  color: "#636669",
  marginBottom: "20px",
  textAlign: "center",


});

export const featureWrapper = style({
  margin: 'auto',
  width: '71%'
});

export const featureItemWrapper = style({
  display: "flex",
  marginBottom: '20px'
});

export const featureIconWrapper = style({
  width: "22px",
  height: "22px",
  border: "1px solid #D8D9D9",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: "50%",
  flexShrink: 0,
  marginRight: '5px',

});

export const featureTitle = style({
  fontWeight: vars.font.bold,
  fontSize: "12px",
  lineHeight: "16px",
  color: vars.color.secondary,
  flexShrink: 0



});

export const featureDescription = style({
  fontWeight: vars.font.regular,
  fontSize: "12px",
  lineHeight: "16px",
  color: "#8A8C8E",
});

export const planLimitStyle = style({
  marginBottom: '30px'

});

export const planLimitTextStyle = style({
  fontWeight: vars.font.bold,
  fontSize: "14px",
  lineHeight: "22px",
  textAlign: "center",
  color: "#242628",
  marginBottom: '8px'


});

export const planLimitCounterText = style({
  fontWeight: vars.font.bold,
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center",
  color: vars.color.primary,
  marginBottom: '5px'


});


export const planButton = style({
  fontWeight: vars.font.bold,
  fontSize: "14px",
  lineHeight: "22px",
  textAlign: "center",
  width: '100%',
  color: "#fff",
  padding: '13px 0',
  backgroundColor: vars.color.primary,
  border: 'none',
  cursor: 'pointer',
  transition: '200ms',
  ":active": {
    backgroundColor: "#883d35",
  },
  ":hover": {
    backgroundColor: "#b55147",
  },
  ":disabled": {
    opacity: '0.4',
    backgroundColor: vars.color.primary,
    cursor: 'unset',
  },

});

export const progressbarWrapper = style({
  background: '#EBECEC',
  width: '200px',
  margin: 'auto',
  height: '4px'
});

export const progressStyle = style({
  background: vars.color.primary,
  height: '4px',
  transition: '1s ease',
});