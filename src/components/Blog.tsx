import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, FileText, ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      type: "article",
      title: "Understanding Cardiovascular Health: Prevention and Management",
      excerpt: "Learn about the key factors that affect heart health and practical steps you can take to maintain a healthy cardiovascular system.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Cardiovascular Health",
      image: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
    },
    {
      type: "video",
      title: "Diabetes Management: A Complete Guide",
      excerpt: "Watch this comprehensive video guide on managing diabetes, including diet, exercise, and medication management strategies.",
      date: "March 10, 2024",
      readTime: "15 min watch",
      category: "Diabetes Care",
      image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      type: "article",
      title: "Hypertension: The Silent Killer",
      excerpt: "Discover why high blood pressure is called the silent killer and what you can do to keep your blood pressure in check.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Preventive Medicine",
      image: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    },
    {
      type: "video",
      title: "Proper Inhaler Technique for Asthma Patients",
      excerpt: "Step-by-step demonstration of correct inhaler usage to maximize medication effectiveness and control asthma symptoms.",
      date: "February 28, 2024",
      readTime: "5 min watch",
      category: "Respiratory Health",
      image: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20",
    },
    {
      type: "article",
      title: "Mental Health and Physical Wellness: The Connection",
      excerpt: "Explore the important relationship between mental and physical health and how treating one can benefit the other.",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Mental Health",
      image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
      type: "video",
      title: "Annual Health Screening: What to Expect",
      excerpt: "A walkthrough of the comprehensive annual health screening process and why regular check-ups are crucial for disease prevention.",
      date: "February 15, 2024",
      readTime: "12 min watch",
      category: "Preventive Care",
      image: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
    },
  ];

  const categories = [
    "All",
    "Cardiovascular Health",
    "Diabetes Care",
    "Respiratory Health",
    "Mental Health",
    "Preventive Care",
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Medical Insights & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational articles and video content to help you understand your health
            better and make informed decisions about your care.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles and Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((item, index) => (
            <Card
              key={index}
              className="gradient-card shadow-soft hover:shadow-medium transition-all group cursor-pointer overflow-hidden"
            >
              <div className={`h-48 ${item.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {item.type === "video" ? (
                  <Video className="h-16 w-16 text-primary z-10" />
                ) : (
                  <FileText className="h-16 w-16 text-primary z-10" />
                )}
                <Badge className="absolute top-4 right-4 z-10">
                  {item.type === "video" ? "Video" : "Article"}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {item.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{item.category}</Badge>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    {item.type === "video" ? "Watch" : "Read"} 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="gradient-card shadow-medium border-primary/20">
          <CardContent className="pt-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Stay Updated with Health Tips
              </h3>
              <p className="text-muted-foreground">
                Subscribe to receive the latest medical insights, health tips, and updates
                on new articles and videos directly to your inbox.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground"
                />
                <Button className="gradient-hero text-primary-foreground shadow-soft hover:shadow-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Blog;