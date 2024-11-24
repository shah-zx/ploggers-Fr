import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-main-content">
                <div className="blog-card">
                    <h2>Blog Title 1</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 2</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 1</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 2</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 1</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 2</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 1</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 2</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 1</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
                <div className="blog-card">
                    <h2>Blog Title 2</h2>
                    <p>Blog summary or excerpt goes here...</p>
                </div>
               
            </div>
            <div className="blog-sidebar">
                <h3>Recommended Topics</h3>
                <ul>
                    <li>Topic 1</li>
                    <li>Topic 2</li>
                    {/* Add more topics as needed */}
                </ul>
                <h3>Best Picks</h3>
                <ul>
                    <li>Pick 1</li>
                    <li>Pick 2</li>
                    {/* Add more picks as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Blog;
