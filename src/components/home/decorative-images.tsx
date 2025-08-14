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
import sprayCan from "../../assets/spray-can.gif";
import olives from "../../assets/olives.gif";

export default function DecorativeImages() {
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
                src={olives}
                alt=""
                className={`${styles.layer} ${styles.layerOlives}`}
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

            <div
                className={`${styles.layer} ${styles.layerConversationBubble}`}
            >
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

            <img
                src={sprayCan}
                alt=""
                className={`${styles.layer} ${styles.layerSprayCan}`}
                aria-hidden="true"
                decoding="async"
            />

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
