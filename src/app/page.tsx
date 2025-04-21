import { NavigationBar } from '@/components';
import { FirstFrame } from '@/components';
import { SecondFrame } from '@/components';

export default function Home() {
  return (
    <div className="@container grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-10">
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <NavigationBar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FirstFrame />
        </main>
      </div>
    </div>
  );
}
