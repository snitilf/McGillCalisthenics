import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../hooks/useLenis';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // jump instantly on route change so we don't fight Lenis with a long tween
    scrollToTop(true);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

