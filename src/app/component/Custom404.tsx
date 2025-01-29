import { FC } from "react";
import Link from "next/link";

const Custom404: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <a className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition">
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
