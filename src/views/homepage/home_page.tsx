import { useUserState } from "@/hooks/fetch";
import "./style/index.css";

const HomePage = () => {
  const { data: user } = useUserState();

  console.log(user);

  return (
    <div className="container">
      <main className="p-4">
        <div className="flex flex-col items-center justify-center w-full h-40 rounded-lg hero">
          <h1 className="text-primary">Hello, {user?.UserName}!</h1>

          <p>This is a simple example of theme switching using Zustand.</p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
