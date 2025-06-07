import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const input = (prompt: string) => {
  return {
    fps: 24,
    width: 1024,
    height: 576,
    prompt: prompt,
    guidance_scale: 17.5,
    negative_prompt: "very blue, dust, noisy, washed out, ugly, distorted, broken",
  };
};

export { montserrat, input };
