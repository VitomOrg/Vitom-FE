import { useUserState } from "@/hooks/fetch";

const HomePage = () => {
  const { data: user } = useUserState();

  console.log(user);

  return (
    <div className="w-full h-full">
      <main className="p-4">
        <h1 className="text-primary">Hello, {user?.UserName}!</h1>
        <p>This is a simple example of theme switching using Zustand.</p>
      </main>
    </div>
  );
};

export default HomePage;
