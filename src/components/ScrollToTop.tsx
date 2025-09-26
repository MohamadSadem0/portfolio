import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop resets the scroll position to the top of the page whenever
// the route changes.  Without this, navigating to a new page would
// retain the previous scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}