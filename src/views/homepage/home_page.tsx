import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import assert from "../../assets";
import FBXViewer from "./fbx_view";

const HomePage = () => {
  // const { data: user, loading, error } = useFetch<Response<User>>("/User");

  // console.log(user, loading, error);

  // const token = "msy_XGcUFCmEHXJKWXLi8ODrmhfd4m4WcWCPGXxq";

  // const id = "0190c0c6-993f-7b8f-bef6-7ae64c96ced7";

  // setItem("token", token);

  // const { data: model } = useFetch<AI>(`/v1/image-to-3d/${id}`);

  // console.log(model);

  // const modelScale = 0.01; // Adjust the model's scale
  // const modelRotationSpeed = 0.005;
  // const modelFBX = assert.apos;

  return (
    <div className="flex items-end justify-center w-full h-full">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* <FBXViewer
        modelUrl={modelFBX}
        modelScale={modelScale}
        modelRotationSpeed={modelRotationSpeed}
      /> */}
    </div>
  );
};

export default HomePage;
