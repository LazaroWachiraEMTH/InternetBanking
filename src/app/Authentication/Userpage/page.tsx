"use client";
import { useState } from "react";
import Image from "next/image";

export default function UserIdPage() {
  const [userId, setUserId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        <div className="mb-6">
          <Image
            width={180}
            height={75}
            src="/assets/logos/vb_logo.png"
            alt="Victoria Bank Logo"
            priority
          />
        </div>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <p className="text-gray-600 mt-2">Enter User ID to proceed.</p>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full border border-gray-500 p-3 rounded-md font-light placeholder-black text-center"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 text-white font-medium rounded-md transition duration-200 ${
              isSubmitting
                ? "bg-nfnavy hover:bg-nfgold opacity-70 cursor-not-allowed"
                : "bg-nfnavy hover:bg-nfgold"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
