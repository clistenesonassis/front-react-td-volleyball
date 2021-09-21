/**
 * Check which device is accessing the page.
 */
export const isMobile = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  const uMobile = [
    'iphone',
    'ipod',
    'iPad',
    'Opera Mini',
    'BlackBerry',
    'windows phone',
    'android',
    'iemobile 8',
  ];

  // go through all the items, making sure it is mobile.
  for (let i = 0; i <= uMobile.length; i += 1) {
    if (ua.indexOf(uMobile[i]) !== -1) {
      return true;
    }
  }

  return false;
};
