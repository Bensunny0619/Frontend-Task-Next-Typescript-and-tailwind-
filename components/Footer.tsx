export default function Footer() {
  return (
    <footer className="w-full border-t bg-neutral-800 dark:bg-neutral-900 dark:border-neutral-700 mt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 text-lg rounded bg-black flex items-center justify-center text-white font-bold">
            K
          </div>
          <span className="font-bold text-lg text-gray-300">Krea AI</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 font-semibold text-base sm:text-lg text-gray-300">
          <span>curated by</span>
          <div className="w-6 h-6 rounded bg-black flex items-center justify-center text-white font-bold">
            M
          </div>
          Mobbin
        </div>
      </div>
    </footer>
  );
}
