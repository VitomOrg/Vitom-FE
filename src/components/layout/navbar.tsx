import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import useThemeStore from "../../state/global/theme";

const Navbar = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <div className="w-full h-700">
      <button
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Navbar;
