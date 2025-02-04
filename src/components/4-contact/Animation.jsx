import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

export default function Animation() {
  const [speed, setSpeed] = useState(1);

  return (
    <div
      onMouseEnter={() => setSpeed(2)} // تسريع عند تمرير الماوس
      onMouseLeave={() => setSpeed(1)} // العودة للسرعة الطبيعية
    >
      <DotLottieReact
        src="../../../src/animation/contact.json"
        loop
        autoplay
        speed={speed}
        style={{ width: 330, height: 330 }}
      />
    </div>
  );
}
