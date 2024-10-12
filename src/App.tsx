import { ThemeProvider } from "@/components/theme-provider";
import { useAuth } from "@clerk/clerk-react";
import { useCallback, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui";
import { setItem } from "./lib";
import routes from "./router";
import { useUser } from "@/domains/stores/query-hook/user/useUser";
import useRoleStore from "@/domains/stores/zustand/role";

function App() {
  const auth = useAuth();
  const { data } = useUser();
  const { setRole } = useRoleStore();

  const fetchData = useCallback(async () => {
    await auth.getToken({ template: "Vitom" }).then((response) => {
      setItem("token", response!);
    });
  }, [auth]);

  useEffect(() => {
    if (data) {
      setRole(data);
    }
  }, [data, setRole]);

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
