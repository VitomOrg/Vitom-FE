import DialogCustom from "@/components/common/dialog";
import {
  AlertDialogCancel,
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Label,
} from "@/components/ui";
import { useTheme } from "@/hooks";
import { useAuth, UserProfile, useUser } from "@clerk/clerk-react";
import {
  CreditCard,
  LayoutDashboard,
  LogOut,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="after:border after:border-none">
          <Avatar className="size-6 hover:cursor-pointer hover:bg-secondary ">
            <AvatarFallback>{user?.username}</AvatarFallback>
            <AvatarImage src={user?.imageUrl} alt={user?.username || ""} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 border-2 border-secondary "
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleToggle}>
            {!isDarkMode ? (
              <Sun className="mr-2 size-5" />
            ) : (
              <Moon className="mr-2 size-5" />
            )}
            <Label>Theme mode</Label>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
            <User className="mr-2 size-5" />
            <Label>Profile</Label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 size-5" />
            <Label>Billing</Label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 size-5" />
            <Label>Dashboard</Label>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 size-5" />
            <Label>Logout</Label>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogCustom
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        children={
          <div className="relative">
            <AlertDialogCancel>Close</AlertDialogCancel>
            <UserProfile />
          </div>
        }
      />
    </div>
  );
};

export default Profile;
