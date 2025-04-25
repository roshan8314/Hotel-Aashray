import { galleryImages } from '../data/gallery';
import ImageGallery from '../components/ImageGallery';

const Gallery = () => {
  return (
    <>
      {/* Gallery Hero */}
      <section className="relative pt-32 pb-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="OYO Aashray Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
            <p className="text-lg text-white/90">
              Take a visual tour of our hotel facilities, rooms, and surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Explore Our Hotel</h2>
            <p>Browse through our collection of images showcasing our property</p>
          </div>

          <div className="mt-12">
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;