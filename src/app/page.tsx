import { NavigationBar } from '@/components';
import { FirstFrame } from '@/components';
import { SecondFrame } from '@/components';
import { MostPopularCourses } from '@/components';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-center gap-8 p-3 pb-20 font-[family-name:var(--font-geist-sans)] sm:flex sm:p-8">
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <NavigationBar />
        <FirstFrame />
        <SecondFrame />
        <MostPopularCourses />
      </div>
    </div>
  );
}
