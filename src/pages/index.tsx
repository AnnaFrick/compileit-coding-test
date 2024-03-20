import React, { useState } from "react";
import RootLayout from "@/app/layout";
import ListTrending from "@/components/ListTrending";
import ListNowPlaying from "@/components/ListNowPlaying";
import ListTopRated from "@/components/ListTopRated";
import SearchField from "@/components/SearchField";

const HomePage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // State to store search results

  // Function to handle search results
  const handleSearchResults = (results: any[]) => {
    setSearchResults(results);
  };

  return (
    <RootLayout>
      <div className="flex">
        <div className="flex flex-col w-full">
          <div className="flex p-24">
            <SearchField onSearch={handleSearchResults} />
          </div>
          <div className="p-4">
            <ListTrending />
            <ListNowPlaying />
            <ListTopRated />
          </div>
        </div>
      </div>
    </RootLayout>

  );
};

export default HomePage;
