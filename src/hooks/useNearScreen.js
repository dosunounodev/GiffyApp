import { useEffect, useRef, useState } from 'react';

const useNearScreen = ({ distance } = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      const element = entries[0];
      // console.log(element.isIntersecting);
      if (element.isIntersecting) {
        setIsNearScreen(true);
        observer.unobserve(fromRef.current);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance || '100px',
      });

      observer.observe(fromRef.current);
    });

    return () => {
      observer && observer.disconnect();
    };
  }, [distance]);

  return { isNearScreen, fromRef };
};

export default useNearScreen;
