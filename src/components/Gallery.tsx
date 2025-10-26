import { Card } from "@/components/ui/card";
import consultationRoom from "@/assets/gallery-consultation-room.jpg";
import medicalEquipment from "@/assets/gallery-medical-equipment.jpg";
import hospitalFacility from "@/assets/gallery-hospital-facility.jpg";
import patientCare from "@/assets/gallery-patient-care.jpg";
import reception from "@/assets/gallery-reception.jpg";
import conference from "@/assets/gallery-conference.jpg";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: consultationRoom, alt: "Modern consultation room" },
    { id: 2, src: medicalEquipment, alt: "Medical equipment" },
    { id: 3, src: hospitalFacility, alt: "Hospital facility" },
    { id: 4, src: patientCare, alt: "Patient care area" },
    { id: 5, src: reception, alt: "Reception area" },
    { id: 6, src: conference, alt: "Medical conference" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Facility Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art medical facilities designed for your comfort and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden shadow-soft hover:shadow-medium transition-all group cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Schedule a consultation to visit our facilities in person
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
