import assert from "@/assets";
import GlbViewer from "@/components/three_ui/glb";

const ListItem = () => {
  return (
    <section className="flex flex-wrap h-screen gap-5 p-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="flex flex-col items-center">
          <h3 className="mb-2 text-lg font-semibold">Product {index + 1}</h3>
          <GlbViewer filePath={assert.glb} children />
        </div>
      ))}
    </section>
  );
};

export default ListItem;
