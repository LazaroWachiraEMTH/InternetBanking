"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("Please input both User ID and password!");
      return;
    }
    setError("");
    setIsLoggingIn(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
      <div className="md:w-1/2 h-1/3 md:h-full relative bg-[url('/assets/images/background-login-min.jpg')] bg-cover bg-center flex items-center justify-center">
        <h2 className="text-white text-5xl font-extrabold text-center leading-[1.2]">
          The Ultimate
          <br />
          <span className="text-nfgold">Mobile Banking</span>
          <br />
          Experience
        </h2>
      </div>

      <div className="w-full md:w-1/2 md:h-full flex flex-col items-center justify-center px-8 py-8 md:py-0">
        <div className="mb-8">
          <Image
            width={180}
            height={75}
            src="/assets/logos/vb_logo.png"
            alt="Victoria Bank Logo"
            priority
          />
        </div>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-nfgold">LOGIN</h2>
            <p className="text-black mt-2">
              Sign in to continue. Your password is yours, do not share it with
              anyone.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded-md text-center">
              {error}
            </div>
          )}

          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full border border-gray-500 p-3 rounded-md font-light pr-10 placeholder-black"
              />
              <FaRegUserCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-500 p-3 rounded-md font-light pr-10 placeholder-black"
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 text-white font-medium rounded-md transition duration-200 ${
              isLoggingIn
                ? "bg-nfnavy hover:bg-nfgold opacity-70 cursor-not-allowed"
                : "bg-nfnavy hover:bg-nfgold"
            }`}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Signing in..." : "Login"}
          </button>

          <div className="text-center mt-4">
            <a href="#" className="text-sm text-nfgold hover:nfgray">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
