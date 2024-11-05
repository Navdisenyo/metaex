// components/LottieAnimation.js
"use client"
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottieAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://lottie.host/0256067a-78ac-4187-9a32-b012d8d32dd4/BSf0zg4SPx.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  if (!animationData) return <p>Loading animation...</p>;

  return <Lottie animationData={animationData} loop={true} style={{ height: 700, width: 3200 }} />;
}
