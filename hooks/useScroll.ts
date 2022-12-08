import { useEffect, useRef, useState } from 'react';

/**
 * 스크롤 값 , 특정 위치까지 스크롤할경우 boolean값 , 스크롤 방향(1 === bottom , -1 === top)을 리턴합니다.
 * */
export function useScroll(heightTrigger?: number) {
  const [scroll, setScroll] = useState<number>(0);
  const [isTrigger, setIsTrigger] = useState<boolean>(false);
  const prevScroll = useRef(0);
  const [detectScrollDirection, setDetectScrollDirection] = useState<1 | -1>(-1);

  const handleScroll = () => {
    setScroll(window.scrollY);
    if (!heightTrigger) return;
    // trigger event
    if (heightTrigger > window.scrollY) setIsTrigger(false);
    if (heightTrigger < window.scrollY) setIsTrigger(true);

    //detect direction
    if (heightTrigger < window.scrollY) {
      if (prevScroll.current < window.scrollY) setDetectScrollDirection(1);
      if (prevScroll.current > window.scrollY) setDetectScrollDirection(-1);

      prevScroll.current = window.scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scroll, isTrigger, detectScrollDirection] as [number, boolean, 1 | -1];
}
