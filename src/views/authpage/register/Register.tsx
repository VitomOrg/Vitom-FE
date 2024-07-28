import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
};

export default Register;
