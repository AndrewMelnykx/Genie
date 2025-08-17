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

const Testimonials = [
  {
    name: "Andrew",
    avatar: "A",
    title: "Software Engineer",
    description: "Simple and at the same time very useful application!",
  },
  {
    name: "Sophia",
    avatar: "S",
    title: "Product Manager",
    description: "This tool has streamlined our workflow and saved countless hours.",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "UI/UX Designer",
    description: "The interface is clean and intuitive — I love working with it every day.",
  },
  {
    name: "Emma",
    avatar: "E",
    title: "Data Analyst",
    description: "Accurate, fast, and reliable. It quickly became part of my daily toolkit.",
  },
];

export { montserrat, input, Testimonials };
