import { useEffect, useRef, useState } from 'react';

const useNearScreen = ({
  distance = '100px',
  externalRef,
  once = true,
} = {}) => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const elementRef = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const element = entries[0];
      // console.log(element.isIntersecting);
      if (element.isIntersecting) {
        setIsNearScreen(true);
        once && observer.unobserve(elementRef);
      } else {
        !once && setIsNearScreen(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      elementRef && observer.observe(elementRef);
    });

    return () => {
      observer && observer.disconnect();
    };
  }, [distance, externalRef, once]);

  return { isNearScreen, fromRef };
};

export default useNearScreen;
