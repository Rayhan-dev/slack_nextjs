"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import Router from "next/router";
const Testpage = () => {
  const router = useRouter();
  const { signOut } = useAuthActions();
  return (
    <div>
      <Button
        onClick={async () => {
          await signOut();
          router.push("/auth");
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Testpage;
