import { useUserState } from "@/hooks/fetch";
import "./style/index.css";
import { Button } from "@/components/ui";

const HomePage = () => {
  const { data: user } = useUserState();

  console.log(user);

  return (
    <main className="w-full ">
      <div className="flex flex-col items-center justify-center w-full rounded-lg h-[600px] hero">
        <h1>Hello, {user?.UserName}!</h1>
        <p>Welcome to your dashboard.</p>

        <p>This is a simple example of theme switching using Zustand.</p>

        <Button>test</Button>
      </div>
    </main>
  );
};

export default HomePage;
