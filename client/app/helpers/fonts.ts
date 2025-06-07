import { Uncial_Antiqua, IM_Fell_English } from "next/font/google";

const UncialAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  weight: "400",
});
const Cedarville = IM_Fell_English({
  subsets: ["latin"],
  weight: "400",
});

export { UncialAntiqua, Cedarville };
