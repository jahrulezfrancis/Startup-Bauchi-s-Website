import { useState, useEffect, ReactNode } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

interface animProps {
  children: ReactNode;
}

export default function StaggeringAnimationContainer(props: animProps) {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  // const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0
      }
    );
  }, [open]);

  return (
    <motion.div onHoverStart={() => setOpen(!open)} whileHover={{ scale: 0.95 }} className="App" ref={scope}>
      {props.children}
    </motion.div>
  );
}
