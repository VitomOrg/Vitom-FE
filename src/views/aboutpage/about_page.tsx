import assert from "@/assets";
import GlbViewer from "@/components/three_ui/glb";

const AboutPage = () => {
  return (
    <div className="h-96">
      <GlbViewer className="" filePath={assert.glb} children />
      About Page
    </div>
  );
};

export default AboutPage;
