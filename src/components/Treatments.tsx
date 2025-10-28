import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Droplets, Wind, Brain, Activity, Shield, Stethoscope, Pill, Syringe, FileText } from "lucide-react";

const Treatments = () => {
  const diseaseCategories = [
    {
      id: "cardiovascular",
      name: "Cardiovascular Diseases",
      icon: Heart,
      color: "text-red-500",
      diseases: [
        {
          name: "Hypertension (High Blood Pressure)",
          description: "Chronic condition requiring careful monitoring and management",
          procedures: [
            "24-hour blood pressure monitoring",
            "Medication adjustment and optimization",
            "Lifestyle modification counseling",
            "Risk factor assessment",
          ],
        },
        {
          name: "Coronary Artery Disease",
          description: "Management of chest pain and heart health",
          procedures: [
            "Cardiac risk assessment",
            "ECG and stress testing",
            "Cholesterol management",
            "Antiplatelet therapy",
          ],
        },
        {
          name: "Heart Failure",
          description: "Comprehensive management of heart function",
          procedures: [
            "Echocardiogram interpretation",
            "Fluid management",
            "Medication optimization",
            "Dietary counseling",
          ],
        },
      ],
    },
    {
      id: "metabolic",
      name: "Metabolic & Endocrine",
      icon: Droplets,
      color: "text-blue-500",
      diseases: [
        {
          name: "Diabetes Mellitus (Type 1 & 2)",
          description: "Comprehensive diabetes care and management",
          procedures: [
            "HbA1c monitoring and management",
            "Insulin therapy and adjustment",
            "Blood glucose monitoring education",
            "Diabetic complication screening",
            "Nutritional counseling",
          ],
        },
        {
          name: "Thyroid Disorders",
          description: "Management of hyperthyroidism and hypothyroidism",
          procedures: [
            "Thyroid function testing",
            "Medication dosage optimization",
            "Symptom management",
            "Regular monitoring",
          ],
        },
        {
          name: "Metabolic Syndrome",
          description: "Comprehensive approach to multiple risk factors",
          procedures: [
            "Weight management program",
            "Lipid profile assessment",
            "Blood pressure control",
            "Lifestyle modification plan",
          ],
        },
      ],
    },
    {
      id: "respiratory",
      name: "Respiratory Conditions",
      icon: Wind,
      color: "text-cyan-500",
      diseases: [
        {
          name: "Asthma",
          description: "Chronic airway disease management",
          procedures: [
            "Pulmonary function testing",
            "Inhaler technique training",
            "Asthma action plan development",
            "Trigger identification",
            "Peak flow monitoring",
          ],
        },
        {
          name: "COPD (Chronic Obstructive Pulmonary Disease)",
          description: "Long-term lung disease management",
          procedures: [
            "Spirometry testing",
            "Oxygen therapy management",
            "Pulmonary rehabilitation referral",
            "Medication optimization",
          ],
        },
        {
          name: "Pneumonia",
          description: "Acute and chronic respiratory infections",
          procedures: [
            "Chest X-ray evaluation",
            "Antibiotic therapy",
            "Respiratory support",
            "Follow-up care",
          ],
        },
      ],
    },
    {
      id: "neurological",
      name: "Neurological Disorders",
      icon: Brain,
      color: "text-purple-500",
      diseases: [
        {
          name: "Headaches & Migraines",
          description: "Diagnosis and management of chronic headaches",
          procedures: [
            "Headache diary analysis",
            "Preventive medication management",
            "Trigger identification",
            "Acute treatment protocols",
          ],
        },
        {
          name: "Stroke Prevention",
          description: "Risk reduction and secondary prevention",
          procedures: [
            "Carotid ultrasound screening",
            "Anticoagulation management",
            "Blood pressure optimization",
            "Risk factor modification",
          ],
        },
        {
          name: "Peripheral Neuropathy",
          description: "Management of nerve damage and pain",
          procedures: [
            "Neurological examination",
            "Pain management strategies",
            "Underlying cause treatment",
            "Physical therapy referral",
          ],
        },
      ],
    },
  ];

  const generalProcedures = [
    {
      icon: Stethoscope,
      title: "Comprehensive Physical Examination",
      description: "Thorough head-to-toe assessment including vital signs, cardiovascular, respiratory, and abdominal examination.",
    },
    {
      icon: FileText,
      title: "Diagnostic Testing Interpretation",
      description: "Expert analysis of laboratory results, imaging studies, and specialized tests to guide treatment decisions.",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Prescription optimization, drug interaction screening, and monitoring for side effects and effectiveness.",
    },
    {
      icon: Activity,
      title: "Chronic Disease Monitoring",
      description: "Regular follow-up visits, tracking disease progression, and adjusting treatment plans as needed.",
    },
    {
      icon: Syringe,
      title: "Preventive Care Services",
      description: "Vaccinations, health screenings, and counseling for disease prevention and health maintenance.",
    },
    {
      icon: Shield,
      title: "Risk Assessment & Counseling",
      description: "Evaluation of genetic, lifestyle, and environmental risk factors with personalized recommendations.",
    },
  ];

  return (
    <section id="procedures" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Diseases & Treatment Procedures
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive treatment protocols for various medical conditions with
            evidence-based procedures and personalized care approaches.
          </p>
        </div>

        {/* Disease Categories Tabs */}
        <Tabs defaultValue="cardiovascular" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {diseaseCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="gap-2">
                <category.icon className={`h-4 w-4 ${category.color}`} />
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {diseaseCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              {category.diseases.map((disease, idx) => (
                <Card key={idx} className="gradient-card shadow-soft hover:shadow-medium transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                      {disease.name}
                    </CardTitle>
                    <p className="text-muted-foreground">{disease.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-foreground">Treatment Procedures:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {disease.procedures.map((procedure, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* General Procedures */}
        <div className="space-y-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              General Medical Procedures
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Standard procedures performed during consultations and follow-up visits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalProcedures.map((procedure, index) => (
              <Card
                key={index}
                className="gradient-card shadow-soft hover:shadow-medium transition-all group cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <procedure.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {procedure.title}
                    </h4>
                    <p className="text-muted-foreground">{procedure.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;