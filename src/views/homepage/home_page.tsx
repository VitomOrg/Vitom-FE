import Hero from "@/views/homepage/compoents/hero";
import "./style/index.css";
import CardItem from "@/components/common/card_item";
import assert from "@/assets";
import ObjView from "@/components/test";
const HomePage = () => {
  return (
    <main className="w-full ">
      <Hero />

      <div className="flex gap-3 flex-nowrap">
        <div>
          {/* <CardItem filePath={assert.model} /> */}
          <ObjView />
        </div>
        <div>
          <CardItem filePath={assert.apos} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
