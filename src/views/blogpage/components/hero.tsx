import assert from "@/assets";

const Hero = () => {
  return (
    <div className="w-full  py-28 bg-secondary">
      <div className="container flex items-center justify-end gap-2">
        <div>
          <h1 className="text-5xl font-bold text-start">
            <div>
              <span>Vitom</span>
              <span className="text-primary">Blog</span>
            </div>
          </h1>
          <p className="text-muted-foreground text-end">
            Where Ideas Meet Creativity
          </p>
        </div>
        <img src={assert.logo} alt="hero" className="size-28" />
      </div>
    </div>
  );
};

export default Hero;
