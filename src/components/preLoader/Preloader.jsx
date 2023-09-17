import "./Preloader.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { preLoaderAnim } from "./animation";

export default function Preloader() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 7 });

    return animation.stop;
  }, []);

  useEffect(()=>{
    preLoaderAnim()
  })

  return <div className="preloader">
    <div className="texts-container">
        <motion.h1>{rounded}</motion.h1>
        <h1>%</h1>
    </div>
  </div>;
}
