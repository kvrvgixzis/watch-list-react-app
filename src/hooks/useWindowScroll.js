import { useEffect } from 'react';

/**
 * Add handlers to window scroll
 * @param {{
 *  onScrollDown: function,
 *  onScrollUp: function
 * }} props
 */
export const useWindowScroll = ({
  onScrollDown = () => {},
  onScrollUp = () => {},
}) => {
  let lastScrollTop = 0;

  const scrollHandler = () => {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    st > lastScrollTop ? onScrollDown(st) : onScrollUp(st);
    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
