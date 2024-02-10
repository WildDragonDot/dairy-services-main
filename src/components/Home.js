import React from 'react';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="font-sans">
      <nav className="bg-blue-600 text-white p-5 flex justify-between items-center">
        <a href="#" className="text-lg font-bold">DairyApp</a>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-300">Products</a></li>
          <li><a href="#" className="hover:text-blue-300">About Us</a></li>
          <li><a href="#" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>

      <div className="text-center py-10 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to DairyApp</h1>
        <p className="mb-4">Your favorite online dairy store.</p>
        <Button variant="outline-light">Discover Our Products</Button>
      </div>

      <div className="py-10">
        <h2 className="text-2xl text-center font-bold mb-6">Featured Products</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="p-5">
              <h3 className="font-bold text-xl mb-2">Fresh Milk</h3>
              <p>Rich and creamy milk sourced from local farms.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="p-5">
              <h3 className="font-bold text-xl mb-2">Artisan Cheeses</h3>
              <p>A variety of fine cheeses for every taste.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="p-5">
              <h3 className="font-bold text-xl mb-2">Organic Yogurt</h3>
              <p>Delicious, healthy yogurts with natural ingredients.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 text-white text-center p-4">
        © 2024 DairyApp. All rights reserved.
      </footer>
			<h1 className=' text-blue-300 text-center p-2 '>Connect your wallet and pay now from below </h1>
    </div>
  );
}

export default Home;
