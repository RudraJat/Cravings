const ShimmerMenu = () => {
  return (
    <div className="pt-28 pb-14 px-6 md:px-20 bg-gradient-to-br from-green-50 via-green-50 to-green-100 min-h-screen animate-pulse">
      {/* Shimmer Header */}
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 w-full max-w-4xl mx-auto mb-10">
        <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>

        <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
          <div className="h-6 w-28 bg-green-100 rounded-full"></div>
          <div className="h-4 w-6 bg-gray-300 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>

        <div className="h-4 w-1/2 bg-green-100 rounded mb-4"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between text-sm gap-4">
          <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Shimmer Categories */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="h-6 w-40 bg-green-200 rounded mb-6"></div>

        {Array(3)
          .fill("")
          .map((_, index) => (
            <div key={index} className="mb-10">
              {/* Category Title */}
              <div className="h-5 w-1/3 bg-gray-300 rounded mb-4"></div>

              {/* Placeholder Items */}
              <div className="space-y-6">
                {Array(2)
                  .fill("")
                  .map((__, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start gap-6 border-b border-gray-200 pb-6"
                    >
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                        <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
                      </div>
                      <div className="h-24 w-24 bg-gray-200 rounded-xl"></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
