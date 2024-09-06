import { useAuth } from "@clerk/clerk-react";
import { useCallback, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { setItem } from "./lib";
import routes from "./router";
import { Toaster } from "./components/ui";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const auth = useAuth();

  const fetchData = useCallback(async () => {
    await auth.getToken({ template: "Vitom" }).then((response) => {
      setItem("token", response!);
    });
  }, [auth]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
