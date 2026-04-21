import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-gray-100">

        <h1 className="text-6xl font-extrabold bg-blue-600 text-white rounded-4xl px-4 py-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-4xl hover:bg-green-700 transition duration-300"
          >
            Go Home
          </button>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;