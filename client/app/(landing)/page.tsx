import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div style={{ color: "black", fontSize: "20px" }}>
      Landing Pages (Unprotected)
      <div>
        <Link href={"sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={"sign-up"}>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
