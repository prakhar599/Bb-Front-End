import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blogapi/');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data); // Assuming your API response is an array of blogs
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Router>
      {/* Define routes for different components */}
      <Routes>
        {/* Default route: Render Navbar, BlogList, and Footer */}
        <Route
          path="/blog"
          element={
            <>
              <Navbar />
              <BlogList blogs={blogs} />
              <Footer />
            </>
          }
        />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
