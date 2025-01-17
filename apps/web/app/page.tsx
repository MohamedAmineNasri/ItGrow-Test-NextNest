import { getSession } from '@/lib/session';
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'
import Testimonial from '@/components/ui/testimonial';
import BlogSection from '@/components/ui/blogSection';
import Pricing from '@/components/ui/Pricing';

export default async function Home() {
  const session = await getSession()
  console.log(session)
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      {/* Main content goes here */}
      {/* <Testimonial /> */}
      <Pricing />
      <BlogSection />
    </div>
    <Footer />
  </div>
  );
}
