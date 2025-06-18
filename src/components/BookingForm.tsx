
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Phone, MapPin, CreditCard, FileText } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    mobile: '',
    address: '',
    checkIn: '',
    duration: '',
    roomRent: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Stay
          </h2>
          <p className="text-lg text-gray-600">
            Fill in your details to secure your accommodation
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-600 text-white">
            <CardTitle className="text-2xl">Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center text-sm font-medium">
                    <User className="h-4 w-4 mr-2 text-orange-600" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aadhar" className="flex items-center text-sm font-medium">
                    <FileText className="h-4 w-4 mr-2 text-orange-600" />
                    Aadhar Number *
                  </Label>
                  <Input
                    id="aadhar"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    placeholder="XXXX XXXX XXXX"
                    maxLength={12}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="flex items-center text-sm font-medium">
                    <Phone className="h-4 w-4 mr-2 text-orange-600" />
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={10}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkIn" className="flex items-center text-sm font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                    Check-in Date *
                  </Label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration" className="flex items-center text-sm font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                    Duration (Days) *
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="7"
                    min="1"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roomRent" className="flex items-center text-sm font-medium">
                    <CreditCard className="h-4 w-4 mr-2 text-orange-600" />
                    Room Rent (₹/day) *
                  </Label>
                  <Input
                    id="roomRent"
                    name="roomRent"
                    type="number"
                    value={formData.roomRent}
                    onChange={handleChange}
                    placeholder="500"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center text-sm font-medium">
                  <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                  Address *
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete address"
                  rows={3}
                  required
                  className="w-full"
                />
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Booking Summary</h3>
                <div className="space-y-1 text-sm text-orange-700">
                  <p>Duration: {formData.duration || '0'} days</p>
                  <p>Daily Rate: ₹{formData.roomRent || '0'}</p>
                  <p className="font-semibold text-lg">Total Amount: ₹{(Number(formData.duration) || 0) * (Number(formData.roomRent) || 0)}</p>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
              >
                Confirm Booking
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
