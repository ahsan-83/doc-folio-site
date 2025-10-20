import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder for gallery images - in a real implementation, these would be actual images
  const galleryImages = [
    { id: 1, alt: "Modern consultation room" },
    { id: 2, alt: "Medical equipment" },
    { id: 3, alt: "Hospital facility" },
    { id: 4, alt: "Patient care area" },
    { id: 5, alt: "Reception area" },
    { id: 6, alt: "Medical conference" },
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
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-muted-foreground text-center px-4">{image.alt}</p>
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
