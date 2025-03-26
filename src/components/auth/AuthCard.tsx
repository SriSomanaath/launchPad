import SignInButtonWithProvider from "./SignInButtonWithProvider";
import SignInForm from "./SignInForm";


const AuthCard = () => {
  return (
    <div className="flex w-full border p-3 shadow-md rounded-lg flex-col gap-10 bg-white items-center justify-center">
      <div className="flex flex-col gap-2 w-full">
        <SignInForm />
        <p className="text-center text-gray-600">or with provider</p>
        <SignInButtonWithProvider provider="google" />
        <SignInButtonWithProvider provider="github" />
      </div>
    </div>
  );
};
export default AuthCard;