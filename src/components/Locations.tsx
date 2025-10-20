import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      name: "Main Medical Center",
      address: "123 Healthcare Boulevard, Medical District",
      city: "New York, NY 10001",
      phone: "(555) 123-4567",
      hours: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
    {
      name: "Downtown Clinic",
      address: "456 Professional Plaza, Suite 200",
      city: "New York, NY 10002",
      phone: "(555) 123-4568",
      hours: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday - Sunday: Closed",
      ],
    },
    {
      name: "Suburban Practice",
      address: "789 Community Health Center",
      city: "Brooklyn, NY 11201",
      phone: "(555) 123-4569",
      hours: [
        "Monday, Wednesday, Friday: 10:00 AM - 4:00 PM",
        "Tuesday, Thursday: 12:00 PM - 7:00 PM",
        "Saturday - Sunday: Closed",
      ],
    },
  ];

  return (
    <section id="locations" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Consultation Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple convenient locations to serve you better. Choose the location that
            works best for your schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="gradient-card shadow-soft hover:shadow-medium transition-all"
            >
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    {location.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-muted-foreground">{location.address}</p>
                        <p className="text-muted-foreground">{location.city}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-primary hover:underline"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-2">Hours</p>
                        {location.hours.map((hour, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {hour}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    Appointments available by phone or online booking
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
