import Introduction from "@/views/aboutpage/components/introduction";
import ListTeammate from "@/views/aboutpage/components/list_teammate";

const AboutPage = () => {
  return (
    <main className="container py-9">
      <Introduction />
      <ListTeammate />
    </main>
  );
};

export default AboutPage;
