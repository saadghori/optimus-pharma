import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ value, duration = 2000, suffix = "", decimals = 0 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const startTime = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      const animate = (timestamp) => {
        if (!startTime.current) startTime.current = timestamp;
        const progress = timestamp - startTime.current;
        const percentage = Math.min(progress / duration, 1);
        
        setCurrentValue(percentage * value);
        
        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCurrentValue(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {currentValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;