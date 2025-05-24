import { NavigationBar } from '@/components';
import { FirstFrame } from '@/components';
import { SecondFrame } from '@/components';
import { ScrollList } from '@/components';
import { CardCourses } from '@/components';

export default function Home() {
  return (
    <div className="@container grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-8 p-3 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-8">
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <NavigationBar />
        <main className="container mx-auto mb-15 px-4 sm:px-6 lg:px-8">
          <FirstFrame />
        </main>

        <div className="relative mb-40">
          <SecondFrame />
        </div>
        <div className="container mb-10"></div>
        <div className="container mt-5 justify-center px-8">
          <CardCourses />
        </div>
      </div>
    </div>
  );
}
