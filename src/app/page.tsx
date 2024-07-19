import Image from "next/image";
import { Button } from "~/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { LogIn, UserPlus } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <div className="relative">
        <Image
          src="/images/landing.jpg"
          alt="stadium"
          className="fixed left-0 top-0 z-0 h-screen w-screen object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute left-0 top-0 z-10 h-screen w-screen bg-black opacity-50" />
        <div className="relative z-50 flex h-screen w-screen flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white">
            True Fliers {new Date().getFullYear()} Auction
          </h1>
          <h6 className="text-lg text-slate-300">
            Register or sign up below to join
          </h6>
          <div className="mt-6 flex gap-6">
            <Button asChild>
              <div>
                <SignInButton mode="modal" />
                <LogIn size={24} className="ml-2" />
              </div>
            </Button>
            <Button asChild variant="outline">
              <div>
                <UserPlus size={24} className="mr-2" />
                <SignUpButton mode="modal" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
