import { NavigationBar } from "@/components";
import { FirstFrame } from "@/components";

export default function Home() {
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <NavigationBar />
      <FirstFrame />
    </div>
  );
}
