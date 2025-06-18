
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const properties = [
    {
      id: '1',
      name: 'Comfort PG for Students',
      type: 'PG Hostel',
      location: 'Anna Nagar',
      district: 'Chennai',
      price: 450,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=500&h=300&fit=crop',
      amenities: ['Wi-Fi', 'Food', 'Security', 'Parking']
    },
    {
      id: '2',
      name: 'Executive Lodge',
      type: 'Lodge',
      location: 'RS Puram',
      district: 'Coimbatore',
      price: 800,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=500&h=300&fit=crop',
      amenities: ['Wi-Fi', 'Parking', 'Food', 'Security']
    },
    {
      id: '3',
      name: 'Budget Hostel',
      type: 'Hostel',
      location: 'Meenakshi Amman Temple Area',
      district: 'Madurai',
      price: 300,
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=500&h=300&fit=crop',
      amenities: ['Wi-Fi', 'Security', 'Food']
    },
    {
      id: '4',
      name: 'Family Guest House',
      type: 'House',
      location: 'Shevapet',
      district: 'Salem',
      price: 1200,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=500&h=300&fit=crop',
      amenities: ['Wi-Fi', 'Parking', 'Food', 'Security']
    },
    {
      id: '5',
      name: 'Modern PG Accommodation',
      type: 'PG Hostel',
      location: 'Srirangam',
      district: 'Tiruchirappalli',
      price: 550,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&h=300&fit=crop',
      amenities: ['Wi-Fi', 'Food', 'Security', 'Parking']
    },
    {
      id: '6',
      name: 'Heritage Lodge',
      type: 'Lodge',
      location: 'Palayamkottai',
      district: 'Tirunelveli',
      price: 650,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=500&h=300&fit=crop',
      amenities: ['Wi-Fi', 'Parking', 'Food']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best accommodations across Tamil Nadu's districts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
