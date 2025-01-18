import { getSession } from '@/lib/session';
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'
import Testimonial from '@/components/ui/testimonial';
import BlogSection from '@/components/ui/blogSection';
import Pricing from '@/components/ui/Pricing';
import Work from '@/components/ui/Work';
import WhatIOffer from '@/components/ui/WhatIOffer';
import AboutMe from '@/components/ui/AboutMe';
import IntroductionSection from '@/components/ui/IntroductionSection';

export default async function Home() {
  const session = await getSession()
  console.log(session)
  return (
    <div className=" ">
    <Header />
    {/* <div className="flex flex-col  px-6 py-10"> */}
      {/* Main content goes here */}
      <IntroductionSection />
      <AboutMe />
      <WhatIOffer />
      <Testimonial />
      <Work />
      <Pricing  />
      <BlogSection />
    {/* </div> */}
    <Footer />
  </div>
  );
}
