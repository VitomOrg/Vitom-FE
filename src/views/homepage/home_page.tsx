// import { useEffect, useState } from "react";
// import { setItem } from "../../lib/localStorage";
// import { axiosInstance } from "../../configs";
// import { AI } from "../../models/ai";

import assert from "../../assets";
import FBXViewer from "./fbx_view";

const HomePage = () => {
  // const token = "msy_AJgh4u5bKi915Mdy96O8D5tYejf7suR8Z5P5";
  // const taskId = "0190c0c6-993f-7b8f-bef6-7ae64c96ced7";

  // const [data, setData] = useState<AI | null>(null);

  // setItem("token", token);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get(`v1/image-to-3d/${taskId}`);
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const fbxUrl = assert.modelGLB; // Thay bằng đường dẫn tới file FBX của bạn
  const modelScale = 0.01; // Điều chỉnh kích thước mô hình
  const modelRotationSpeed = 0.01;

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <FBXViewer
        modelUrl={fbxUrl}
        modelScale={modelScale}
        modelRotationSpeed={modelRotationSpeed}
      />
    </div>
  );
};

export default HomePage;
