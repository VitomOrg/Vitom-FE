import { RouterProvider } from "react-router-dom";
import routes from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useThemeStore from "./state/global/theme";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
