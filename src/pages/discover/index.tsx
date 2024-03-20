import React, { useState } from "react";
import RootLayout from "@/app/layout";
import SearchField from "@/components/SearchField";
import DiscoverMovies from "@/components/DiscoverMovies";


const DiscoverPage: React.FC = () => {
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
            <DiscoverMovies />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default DiscoverPage;