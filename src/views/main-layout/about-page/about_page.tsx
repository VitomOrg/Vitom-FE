import Introduction from "@/views/main-layout/about-page/components/introduction";
import ListTeammate from "@/views/main-layout/about-page/components/list_teammate";

const AboutPage = () => {
  return (
    <main className="container py-9">
      <Introduction />
      <ListTeammate />
    </main>
  );
};

export default AboutPage;
