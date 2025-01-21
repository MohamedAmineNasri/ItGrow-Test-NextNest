"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";
import React, { useActionState, useState } from "react";

const SignUpForm = () => {
  const [state, action] = useActionState(signUp, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    verifyPasswords(value, confirmPassword);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    verifyPasswords(password, value);
  };

  const verifyPasswords = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return false;
    }
    setPasswordError(""); 
    return true;
  };

  const isFormValid = () => {
    return password && confirmPassword && !passwordError;
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center w-[600px]">
      <div className="w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign Up
        </h2>
        <form className="space-y-4" action={action}>
          <div className="flex flex-col gap-2">
            {state?.message && (
              <p className="text-sm text-red-500">{state.message}</p>
            )}
            <div>
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="User Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
            {state?.error?.name && (
              <p className="text-sm text-red-500">{state.error.name}</p>
            )}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>
            {state?.error?.email && (
              <p className="text-sm text-red-500">{state.error.email}</p>
            )}
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-indigo-500"
                >
                  <img
                    src={
                      showPassword
                        ? "data:image/png;base64,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"
                        : "data:image/png;base64,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"
                    }
                    alt={showPassword ? "Hide password" : "Show password"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            <div>
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-indigo-500"
                >
                  <img
                    src={
                      showPassword
                        ? "data:image/png;base64,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"
                        : "data:image/png;base64,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"
                    }
                    alt={showPassword ? "Hide password" : "Show password"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}
            <SubmitButton
              type="submit"
              disabled={!isFormValid()}
              className={`w-full px-4 py-2 text-white rounded-lg transition-all ${
                isFormValid()
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Sign Up
            </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
