import PreCard from "@/views/homepage/compoents/pre-card";

const BusinessMetrics = () => {
  return (
    <section className="container py-12 my-8 rounded-lg bg-secondary text-secondary-foreground">
      <h1 className="text-4xl font-bold text-center">Our Achievements</h1>
      <p className="text-center">
        Discover the impact we've made in the 3D model industry. Our dedication
        to quality and innovation is reflected in the numbers.
      </p>
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-4 ">
        <PreCard
          heading="Satisfied Customers"
          value="50k+"
          text="Over 50,000 customers have trusted us with their 3D model needs."
        />
        <PreCard
          heading="Projects Completed"
          value="90+"
          text="We've successfully completed more than 90 large-scale projects."
        />
        <PreCard
          heading="Revenue Generated"
          value="$80M"
          text="Our products have contributed to over $80 million in revenue."
        />
        <PreCard
          heading="Customer Satisfaction"
          value="99%"
          text="99% of our customers are satisfied with the quality of our models."
        />
      </div>
    </section>
  );
};

export default BusinessMetrics;
