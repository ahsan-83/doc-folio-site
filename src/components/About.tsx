import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Building2, Users } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Doctor of Medicine (M.D.)",
      institution: "Harvard Medical School",
      year: "2008",
    },
    {
      degree: "Bachelor of Science in Biology",
      institution: "Stanford University",
      year: "2004",
    },
  ];

  const certifications = [
    "American Board of Internal Medicine",
    "Advanced Cardiac Life Support (ACLS)",
    "Basic Life Support (BLS)",
    "Fellow of the American College of Physicians (FACP)",
  ];

  const residency = {
    program: "Internal Medicine Residency",
    institution: "Massachusetts General Hospital",
    duration: "2008 - 2011",
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            About Dr. Professional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated physician committed to providing exceptional healthcare through
            continuous learning and compassionate patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="gradient-card shadow-soft hover:shadow-medium transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 py-2">
                    <p className="font-semibold text-foreground">{item.degree}</p>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <p className="text-sm text-primary font-medium">{item.year}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Residency */}
          <Card className="gradient-card shadow-soft hover:shadow-medium transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Residency</h3>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <p className="font-semibold text-foreground text-lg">
                  {residency.program}
                </p>
                <p className="text-muted-foreground mt-2">{residency.institution}</p>
                <p className="text-sm text-primary font-medium mt-1">
                  {residency.duration}
                </p>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Completed comprehensive training in internal medicine with a focus on
                  patient-centered care and evidence-based practice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="gradient-card shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">
                Board Certifications & Licenses
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <p className="text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
