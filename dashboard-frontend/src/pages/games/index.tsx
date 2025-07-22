import React from "react";
import RockPaperScissors from "./rockPaperScissors/rockPaperScissors";

const GamesPage: React.FC = () => {
  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-4">لیست بازی‌ها</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* بازی سنگ کاغذ قیچی */}
        <div className="aspect-square bg-white shadow rounded-lg p-4 flex flex-col overflow-hidden">
          <h2 className="text-lg font-bold mb-2 text-center">سنگ کاغذ قیچی</h2>
          <div className="flex-1 overflow-y-auto">
            <RockPaperScissors />
          </div>
        </div>

        {/* جایگاه بازی بعدی */}
        <div className="aspect-square bg-white shadow rounded-lg p-4 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold text-blue-500 mb-2">بازی بعدی</h2>
          <p className="text-gray-500">در حال توسعه...</p>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
