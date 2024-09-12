import ObjView from "@/components/test";
import { User } from "@/domains/models/user/user.response";
import { useEffect, useState } from "react";

const Hero = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center justify-center w-full rounded-lg h-[600px] hero ">
      <h1>Hello, {user?.UserName}</h1>

      <p>This is a simple example of theme switching using Zustand.</p>

      {/* <Button onClick={() => setShow((prev) => !prev)}>Click to show 3D</Button> */}
      <div className="flex flex-row w-full h-96">
        <ObjView />
      </div>
    </div>
  );
};

export default Hero;
