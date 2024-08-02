import type { Component } from "solid-js";
import logo from "./assets/images/logo.png";

const App: Component = () => {
  return (
    <div class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div class="flex justify-center mb-8">
          <div class="w-64 h-64 flex items-center justify-center text-gray-500">
            <img src={logo} alt="Kioskade.png" />
          </div>
        </div>
        <h1 class="text-4xl font-bold text-center text-secondary mb-4">
          Kioskade
        </h1>
        <p class="text-xl text-center text-primary mb-6">
          Elevating Retail Markets
        </p>
        <p class="text-gray-600 text-center mb-8">
          Revolutionizing retail with seamless integration of customer loyalty,
          lightning-fast online payments, and cutting-edge POS systems.
        </p>
        <div class="bg-primary text-white text-center py-3 rounded-lg mb-8">
          <span class="text-2xl font-semibold">Coming Soon</span>
        </div>
        <div class="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/company/kioskade"
            class="text-primary hover:text-secondary transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
