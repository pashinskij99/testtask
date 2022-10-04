import React, {useEffect, useRef} from 'react';
import moveTooltip from "../../utils/moveTooltip";

const Tooltip = ({ text, children }) => {
  const ref = useRef()

  useEffect(() => {
    const moveTooltipWrapper = (event) => moveTooltip(event, ref.current)
    window.addEventListener('mousemove', moveTooltipWrapper)
    return () => {
      window.removeEventListener('mousemove', moveTooltipWrapper)
    }
  }, [ref])

  return (
    <div className='tooltip'>
      {children}
      <span ref={ref} className='tooltip__text'>{text}</span>
    </div>
  );
};

export default Tooltip;