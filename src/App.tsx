import { useAuth } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { setItem } from "./lib";
import routes from "./router";
import useThemeStore from "./state/local/theme";

const queryClient = new QueryClient();

function App() {
  const { theme } = useThemeStore();
  const auth = useAuth();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const fetchData = useCallback(async () => {
    await auth.getToken({ template: "Vitom" }).then((response) => {
      setItem("token", response!);
    });
  }, [auth]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
