
import { MapPin, Star, Wifi, Car, Coffee, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface PropertyCardProps {
  id: string;
  name: string;
  type: string;
  location: string;
  district: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
}

const PropertyCard = ({ name, type, location, district, price, rating, image, amenities }: PropertyCardProps) => {
  const amenityIcons = {
    'Wi-Fi': Wifi,
    'Parking': Car,
    'Food': Coffee,
    'Security': Shield
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 py-1 rounded text-sm font-medium">
          {type}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded flex items-center">
          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}, {district}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {amenities.slice(0, 4).map((amenity) => {
            const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
            return (
              <div key={amenity} className="flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {IconComponent && <IconComponent className="h-3 w-3 mr-1" />}
                {amenity}
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-orange-600">₹{price}</span>
            <span className="text-gray-600 text-sm">/day</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-orange-600 hover:bg-orange-700">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
