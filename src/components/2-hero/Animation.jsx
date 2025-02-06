import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

export default function Animation() {
  const [speed, setSpeed] = useState(1);

  return (
    <div
      onMouseEnter={() => setSpeed(1)} // تسريع عند تمرير الماوس
      onMouseLeave={() => setSpeed(0.4)} // العودة للسرعة الطبيعية
    >
      <DotLottieReact
        src="../../animation/Heder-Animation.json"
        loop
        autoplay
        speed={speed}
        style={{ width: 300, height: 330 }}
      />
    </div>
  );
}
