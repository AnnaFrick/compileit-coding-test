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
      <div className="flex p-24">
        <SearchField onSearch={handleSearchResults} />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <DiscoverMovies />
      </div>
    </RootLayout>
  );
};

export default DiscoverPage;