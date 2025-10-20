import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Trophy, Users2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      position: "Chief of Internal Medicine",
      institution: "City General Hospital",
      duration: "2018 - Present",
      responsibilities: [
        "Leading a team of 15+ physicians in the internal medicine department",
        "Implementing evidence-based clinical protocols",
        "Mentoring resident physicians and medical students",
      ],
    },
    {
      position: "Attending Physician",
      institution: "Metropolitan Medical Center",
      duration: "2014 - 2018",
      responsibilities: [
        "Provided comprehensive inpatient and outpatient care",
        "Participated in quality improvement initiatives",
        "Conducted clinical research in cardiovascular medicine",
      ],
    },
    {
      position: "Clinical Fellow",
      institution: "University Hospital",
      duration: "2011 - 2014",
      responsibilities: [
        "Specialized training in internal medicine",
        "Published research in peer-reviewed journals",
        "Delivered patient education programs",
      ],
    },
  ];

  const awards = [
    "Physician of the Year Award 2022",
    "Excellence in Patient Care Award 2020",
    "Outstanding Teaching Award 2019",
    "Research Excellence Grant 2017",
  ];

  const memberships = [
    "American Medical Association (AMA)",
    "American College of Physicians (ACP)",
    "Society of Hospital Medicine",
    "American Heart Association",
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of excellence in clinical practice, leadership, and medical
            education.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl gradient-hero">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl font-serif font-semibold">Professional Experience</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="gradient-card shadow-soft hover:shadow-medium transition-all"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.position}
                      </h4>
                      <p className="text-primary font-medium">{exp.institution}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards */}
          <Card className="gradient-card shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">
                  Awards & Accomplishments
                </h3>
              </div>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <p className="text-foreground">{award}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Memberships */}
          <Card className="gradient-card shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">
                  Professional Memberships
                </h3>
              </div>
              <div className="space-y-3">
                {memberships.map((membership, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <p className="text-foreground">{membership}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
