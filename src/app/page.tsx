"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="h-screen flex flex-col gap-2 px-16 py-12 items-center zxcsdvsdv">
      <Input type="text" className="outline-none focus:outline-none" />
      <Button variant={"ghost"} size={"sm"} className="w-fit">
        search
      </Button>
    </main>
  );
}
