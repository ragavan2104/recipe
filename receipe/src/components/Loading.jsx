import React from "react";

const Loading = ({ 
  size = "medium", 
  text = "Loading...", 
  showText = true,
  fullScreen = false 
}) => {
  // Size variants
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };

  const textSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
  };

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center">
      {/* Spinning circle */}
      <div 
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}
      ></div>
      
      {/* Loading text */}
      {showText && (
        <p className={`mt-4 text-gray-600 ${textSizeClasses[size]} font-medium animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8">
      <LoadingSpinner />
    </div>
  );
};

// Alternative loading component with recipe-themed animation
export const RecipeLoading = ({ text = "Cooking up something delicious..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Cooking pot animation */}
      <div className="relative">
        <div className="w-16 h-16 bg-gray-700 rounded-full relative">
          {/* Pot body */}
          <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
          {/* Steam animation */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-4 bg-gray-300 rounded animate-bounce delay-0"></div>
          </div>
          <div className="absolute -top-3 left-1/2 transform -translate-x-2">
            <div className="w-1 h-5 bg-gray-400 rounded animate-bounce delay-150"></div>
          </div>
          <div className="absolute -top-3 left-1/2 transform translate-x-1">
            <div className="w-1 h-5 bg-gray-400 rounded animate-bounce delay-300"></div>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-gray-600 text-base font-medium animate-pulse">
        {text}
      </p>
      
      {/* Loading dots */}
      <div className="flex space-x-1 mt-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-0"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

// Simple inline loading spinner
export const InlineLoading = ({ size = "small" }) => {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-6 h-6 border-2",
    large: "w-8 h-8 border-2"
  };

  return (
    <div 
      className={`${sizeClasses[size]} border-gray-200 border-t-blue-500 rounded-full animate-spin inline-block`}
    ></div>
  );
};

export default Loading;
