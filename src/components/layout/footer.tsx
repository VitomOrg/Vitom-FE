import assert from "@/assets";
import { Separator } from "@/components/ui";

const Footer = () => {
  return (
    <footer className="py-10 h-fit bg-secondary text-secondary-foreground">
      <div className="container grid grid-cols-12 grid-rows-4 gap-4">
        <div className="col-span-6 row-span-4 ">
          <div className="flex items-center gap-4">
            <img src={assert.logo} alt="logo" className="size-12" />
            <span className="text-4xl font-semibold ">Vitom</span>
          </div>
          <Separator className="w-32 h-1 my-4 rounded-lg bg-foreground" />
          <p className="w-5/6 mt-4 text-sm text-justify text-muted-foreground ">
            Vitom provides high-quality 3D models for architects, designers, and
            developers. Available in various formats and categories to suit your
            project needs.
          </p>
        </div>
        <div className="col-span-3 col-start-7 row-span-2"></div>
        <div className="col-span-3 col-start-10 row-span-2"></div>
        <div className="col-span-3 col-start-7 row-span-2 row-start-3"></div>
        <div className="col-span-3 col-start-10 row-span-2 row-start-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
