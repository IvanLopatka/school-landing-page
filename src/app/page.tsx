import { NavigationBar, LearnNewSkill } from '@/components';
import { HeroSection } from '@/components';
import { Features } from '@/components';
import { MostPopularCourses } from '@/components';
import { MeetOurInstructors } from '@/components';
import { ChooseCategory } from '@/components/ChooseCategory';
import { GoodEducation } from '@/components/GoodEducation';
import { Reviews } from '@/components/Reviews';
import { CallUs } from '@/components/CallUs';
import { InfoAndContacts } from '@/components';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-center font-[family-name:var(--font-geist-sans)] sm:flex">
      <NavigationBar />
      <HeroSection />
      <Features />
      <ChooseCategory />
      <MostPopularCourses />
      <LearnNewSkill />
      <GoodEducation />
      <Reviews />
      <MeetOurInstructors />
      <CallUs />
      <InfoAndContacts />
    </div>
  );
}
