import ContentSection from "@/views/contactpage/components/content";
import FormContact from "@/views/contactpage/components/form_contact";

const ContactPage = () => {
  return (
    <main className="container flex flex-col gap-4 p-10 shadow-[2px_4px_10px_rgba(0,0,0,0.1)] rounded-xl md:flex-row bg-background text-foreground shadow-primary py-9">
      <ContentSection />
      <FormContact />
    </main>
  );
};

export default ContactPage;
