
import { Building2, Shield, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Building2,
      title: 'Quality Accommodations',
      description: 'Carefully selected properties across Tamil Nadu ensuring comfort and safety.'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Safe and secure booking process with verified property owners.'
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden charges for transparent pricing.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your accommodation needs.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About G Homes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            G Homes is Tamil Nadu's premier accommodation booking platform, connecting travelers 
            with quality PG hostels, houses, hostels, and lodges across all districts. We are 
            committed to providing safe, comfortable, and affordable accommodation options for 
            students, working professionals, and travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <feature.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose G Homes?
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            With over 1000+ verified properties across Tamil Nadu's 32 districts, we ensure 
            you find the perfect accommodation that meets your needs and budget. Our platform 
            makes booking simple, secure, and hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
