import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen">
      <SignIn signUpUrl="/sign-up" forceRedirectUrl={"/products"} />
    </div>
  );
};

export default Login;
