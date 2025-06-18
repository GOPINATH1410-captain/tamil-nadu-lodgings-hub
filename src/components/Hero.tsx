
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-500 to-amber-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Stay in Tamil Nadu
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover comfortable PG hostels, houses, hostels and lodges across all districts
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                District
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="chennai">Chennai</SelectItem>
                  <SelectItem value="coimbatore">Coimbatore</SelectItem>
                  <SelectItem value="madurai">Madurai</SelectItem>
                  <SelectItem value="salem">Salem</SelectItem>
                  <SelectItem value="tiruchirappalli">Tiruchirappalli</SelectItem>
                  <SelectItem value="tirunelveli">Tirunelveli</SelectItem>
                  <SelectItem value="vellore">Vellore</SelectItem>
                  <SelectItem value="erode">Erode</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Check-in
              </label>
              <Input type="date" className="w-full" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Duration (Days)
              </label>
              <Input type="number" placeholder="7" min="1" className="w-full" />
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 h-10">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
