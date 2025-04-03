import React, { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

const WeatherSearch: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("لطفاً نام شهر را وارد کنید");
      return;
    }
    setError("");
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-start">
      <div className="w-full">
        <input
          type="text"
          placeholder="نام شهر را وارد کنید"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className={`border px-4 py-2 rounded w-full`}
        />
        {error && <p className="text-red-500 text-sm mt-2 mb-2">{error}</p>}
      </div>
      <button
        type="submit"
        className="bg-[#2981CA] text-white px-4 py-2 rounded"
      >
        جستجو
      </button>
    </form>
  );
};

export default WeatherSearch;
