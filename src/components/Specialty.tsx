import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Stethoscope, Pill, Brain, Shield } from "lucide-react";

const Specialty = () => {
  const treatments = [
    {
      icon: Heart,
      title: "Cardiovascular Care",
      description:
        "Comprehensive management of heart conditions, hypertension, and cholesterol disorders.",
    },
    {
      icon: Activity,
      title: "Preventive Medicine",
      description:
        "Annual check-ups, health screenings, and personalized wellness programs.",
    },
    {
      icon: Stethoscope,
      title: "Chronic Disease Management",
      description:
        "Long-term care for diabetes, asthma, COPD, and other chronic conditions.",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Expert guidance on prescription medications and treatment optimization.",
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description:
        "Integrated approach to mental wellness and stress management.",
    },
    {
      icon: Shield,
      title: "Immunizations",
      description: "Comprehensive vaccination services for all age groups.",
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Specialty & Treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in Internal Medicine with expertise in comprehensive adult care
            and chronic disease management.
          </p>
        </div>

        {/* Department Info */}
        <Card className="mb-12 gradient-card shadow-medium border-primary/20">
          <CardContent className="pt-8">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Stethoscope className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground">
                Department of Internal Medicine
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Board-certified in Internal Medicine, providing comprehensive care for
                adult patients with a focus on prevention, diagnosis, and treatment of a
                wide range of medical conditions. Specialized expertise in cardiovascular
                health and chronic disease management.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="gradient-card shadow-soft hover:shadow-medium transition-all group cursor-pointer"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <treatment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {treatment.title}
                  </h4>
                  <p className="text-muted-foreground">{treatment.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;
