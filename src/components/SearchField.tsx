import React, { useState } from 'react';
import PosterContainer from './PosterContainer';
import search from '@/lib/api/search'; // Import the search function

interface SearchFieldProps {
    onSearch: (movies: any[]) => void; // Define the onSearch prop
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>(''); // State for the search query
    const [results, setResults] = useState<any[]>([]); // State for storing search results

    const handleSearch = async () => {
        try {
            const searchResults = await search(query);
            setResults(searchResults);
            onSearch(searchResults);
        } catch (error) {
            console.error('Error performing search:', error);
        }
    };

    const clearSearch = () => {
        setQuery('');
        setResults([]);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search movie titles..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="text-black border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none"
                />
                <button
                    onClick={handleSearch} // Call handleSearch function on button click
                    className="border border-white rounded-lg p-2 mb-2 hover:bg-gray-800 hover:border-gray-300 transition-colors"
                >
                    Search
                </button>
                <button
                    onClick={clearSearch} // Call clearSearch function on button click
                    className="border border-white rounded-lg p-2 mb-2 ml-2 hover:bg-gray-800 hover:border-gray-300 transition-colors"
                >
                    Clear
                </button>
            </div>

            {/* Conditionally render search results */}
            {results.length > 0 && (
                <div>
                    <h2>Search Results</h2>
                    <PosterContainer movies={results} />
                </div>
            )}
        </div>
    );
};

export default SearchField;
