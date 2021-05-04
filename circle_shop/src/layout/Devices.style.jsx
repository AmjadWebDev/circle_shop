const size = {
  minMobile:"320px",
  maxMobile: "480px",
  minTablet: "481px",
  maxTablet: "768px",
  minSmallScreen: "769px",
  maxSmallScreen: "1024px",
  minDesktop: "1025px",
  maxDesktop: "1200px",
  LargScreen: "1201px",
};

export const device = {
  mobile: `(min-width : ${size.minMobile}) and (max-width: ${size.maxMobile})`,
  tablet: `(min-width : ${size.minTablet}) and (max-width: ${size.maxTablet})`,
  small_screen: `(min-width: ${size.minSmallScreen})and (max-width: ${size.maxSmallScreen})`,
  desktop: `(min-width: ${size.minDesktop})and (max-width: ${size.maxDesktop})`,
  larg: `(min-width : ${size.LargScreen} )`,
};