import styles from "../../styles/banner.module.css";

// Assets Import
import recorder from "../../assets/recorder.png";
import pinkDots from "../../assets/pink-dots.png";
import comma from "../../assets/comma.png";
import greenBubbles from "../../assets/green-bubbles.png";
import conversationBubble from "../../assets/conversation-bubble.png";
import glossyWheel from "../../assets/glossy-wheel.png";
import pinkStar from "../../assets/pink-star.png";
import yellowDots from "../../assets/yellow-dots.png";
import squigglyLine from "../../assets/squiggly-line.png";
import balls from "../../assets/balls.png";
import sprayCann from "../../assets/spraycan.png";
import paint1 from "../../assets/paint1.png";
import paint2 from "../../assets/paint2.png";
import { useEffect, useState } from "react";

export default function DecorativeImages() {
  const [activePaint, setActivePaint] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePaint((prev) => (prev === 1 ? 2 : 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Left */}
      <div className={`${styles.layer} ${styles.layerPinkStar}`}>
        <img
          src={pinkStar}
          alt=""
          className={styles.layerPinkStarInner}
          aria-hidden="true"
          decoding="async"
        />
      </div>
      <img
        src={yellowDots}
        alt=""
        className={`${styles.layer} ${styles.layerYellowDots}`}
        aria-hidden="true"
        decoding="async"
      />
      <img
        src={squigglyLine}
        alt=""
        className={`${styles.layer} ${styles.layerSquigglyLine}`}
        aria-hidden="true"
        decoding="async"
      />
      <img
        src={balls}
        alt=""
        className={`${styles.layer} ${styles.layerBalls}`}
        aria-hidden="true"
        decoding="async"
      />
      {/* Top Left */}
      <img
        src={recorder}
        alt=""
        className={`${styles.layer} ${styles.layerRecorder}`}
        aria-hidden="true"
        decoding="async"
      />
      {/* Right */}
      <img
        src={greenBubbles}
        alt=""
        className={`${styles.layer} ${styles.layerGreenBubbles}`}
        aria-hidden="true"
        decoding="async"
      />
      <div className={`${styles.layer} ${styles.layerConversationBubble}`}>
        <img
          src={conversationBubble}
          alt=""
          className={styles.layerConversationBubbleInner}
          aria-hidden="true"
          decoding="async"
        />
      </div>
      <img
        src={pinkDots}
        alt=""
        className={`${styles.layer} ${styles.layerPinkDots}`}
        aria-hidden="true"
        decoding="async"
      />
      <img
        src={comma}
        alt=""
        className={`${styles.layer} ${styles.layerComma}`}
        aria-hidden="true"
        decoding="async"
      />
      <div className={`${styles.layer} ${styles.sprayCan}`}>
        <img
          src={paint1}
          alt="Paint Splatter 1"
          className={`${styles.paintSplatter} ${
            activePaint !== 1 ? styles.hidden : ""
          }`}
        />
        <img
          src={paint2}
          alt="Paint Splatter 2"
          className={`${styles.paintSplatterTwo} ${
            activePaint !== 2 ? styles.hidden : ""
          }`}
        />
        <img src={sprayCann} alt="Spray Can" className={styles.sprayCan} />
      </div>
      {/* Bottom */}
      <div className={`${styles.layer} ${styles.layerGlossyWheel}`}>
        <img
          src={glossyWheel}
          alt=""
          className={styles.layerGlossyWheelInner}
          aria-hidden="true"
          decoding="async"
        />
      </div>
    </>
  );
}
