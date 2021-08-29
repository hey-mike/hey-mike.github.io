import React, { useContext, useMemo, useState, useEffect } from "react";

import { StaggerContext } from "../stagger-wrap";
import { MotionBox } from "../motion-box";

export const FadeInUpBox = ({
  children,
  yOffset = 24, // y initial possition
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
  duration = 0.4,
  delayOrder, // order of appearance
  ...rest
}) => {
  const { stagger } = useContext(StaggerContext);
  const [delay, setDelay] = useState(0.25);

  const offset = 0.4;

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset);
  }, [delayOrder, offset]);

  const transition = useMemo(
    () => ({
      duration,
      delay,
      ease: easing
    }),
    [duration, delay, easing]
  );

  const staggerTransition = {
    duration,
    ease: easing
  };

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      opacity: 1,
      transition: stagger ? staggerTransition : transition
    }
  };

  return stagger ? (
    <MotionBox variants={variants} {...rest}>
      {children}
    </MotionBox>
  ) : (
    <MotionBox
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};
