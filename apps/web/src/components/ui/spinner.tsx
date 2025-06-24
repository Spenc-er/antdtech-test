import * as React from "react"
const LoadingSpinner = ({ size = "w-8 h-8", color = "border-blue-500" }) => {
  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${size} ${color} border-4 border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};
export function Spinner() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Full Screen Style</h3>
        <div className="bg-gray-100 rounded-lg p-12 relative">
          <div className="flex flex-col items-center justify-center">
            <LoadingSpinner size="w-12 h-12" color="border-gray-600" />
            <p className="mt-4 text-gray-600">Please wait while we load your content...</p>
          </div>
        </div>
      </div>
  );
}