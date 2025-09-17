export default function Footer() {
  return (
    <footer className="w-full border-t bg-neutral-800 dark:bg-neutral-080 dark:border-neutral-700 mt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
        
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 text-lg rounded bg-black flex items-center justify-center text-white font-bold">
            K
          </div>
          <span className="font-bold text-lg text-gray-300 dark:text-gray-300">Krea AI</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1 mt-4 sm:mt-0 font-bold text-xl">
          <span className="text-gray-300 dark:text-gray-300">curated by</span>
          <div className="w-6 h-6 text-lg rounded bg-black flex items-center justify-center text-white font-bold">
            M
          </div>
          Mobbin
        </div>
      </div>
    </footer>
  );
}
