"use client";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl text-red-500 text-center">
        Error processing data: {error.message}
      </div>
    </div>
  );
};

export default ErrorPage;
