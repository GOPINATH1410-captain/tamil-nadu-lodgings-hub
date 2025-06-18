
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyList from '@/components/PropertyList';
import BookingForm from '@/components/BookingForm';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PropertyList />
      <BookingForm />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
