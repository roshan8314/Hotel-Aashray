import { Link } from 'react-router-dom';
import { Room } from '../types';
import { Check } from 'lucide-react';

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            ₹{room.price}/night
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
        <p className="text-neutral-600 mb-4">{room.description}</p>
        
        <div className="mt-auto">
          <h4 className="font-medium text-primary-800 mb-2">Room Amenities:</h4>
          <ul className="grid grid-cols-1 gap-2 mb-6">
            {room.amenities.map((amenity, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success-500 shrink-0 mt-0.5" />
                <span className="text-neutral-700">{amenity}</span>
              </li>
            ))}
          </ul>
          
          <Link 
            to="https://www.oyorooms.com/296408/?checkin=24%2F04%2F2025&checkout=25%2F04%2F2025&rooms=1&guests=1&rooms_config=1-1_0&selected_rcid=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;