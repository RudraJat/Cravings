const Shimmer = () => {
  return (
    <div className="pt-28 px-6 md:px-16 pb-10 min-h-screen bg-green-50">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow animate-pulse"
            >
              <div className="h-40 bg-gray-300 rounded-xl mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
