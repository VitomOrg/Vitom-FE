import { useAuth } from "@clerk/clerk-react";
import { useCallback, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { setItem } from "./lib";
import routes from "./router";
import useThemeStore from "./state/theme";
import { Toaster } from "./components/ui";

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
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
