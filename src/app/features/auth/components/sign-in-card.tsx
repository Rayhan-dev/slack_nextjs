import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
// import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import { SignInFlow } from "../../types";
import { useAuthActions } from "@convex-dev/auth/react";

// interface SignInCardProps {
//   setState: (state: SignInFlow) => void;
// }

const SignInCard = () => {
  const { signIn } = useAuthActions();
  const handleProviderSignIn = (value: "github" | `google`) => {
    signIn(value);
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue to Slack</CardTitle>
        {/* <CardDescription>
          Use your email or another service to continue
        </CardDescription> */}
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        {/* <form className="space-y-2.5">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            disabled={false}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            disabled={false}
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Continue
          </Button>
        </form> */}
        <Separator />
        <div className="flex flex-col space-y-2.5">
          <Button
            disabled={false}
            onClick={() => {
              handleProviderSignIn("google");
            }}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute left-2.5 top-2.5" />
            Log in with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {
              handleProviderSignIn("github");
            }}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute left-2.5 top-2.5" />
            Log in with Github
          </Button>
        </div>
        {/* <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => setState("signUp")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p> */}
      </CardContent>
    </Card>
  );
};

export default SignInCard;
