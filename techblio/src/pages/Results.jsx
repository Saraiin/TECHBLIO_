import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navibar from '../components/Navibar';

const Results = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        setSearchResults(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    
    <div>
      <Navibar />
      <h1>Search Results for: {query}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {searchResults.map((book) => (
            <div key={book.id}>
              <h2>{book.volumeInfo.title}</h2>
              {/* Render other book details here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
