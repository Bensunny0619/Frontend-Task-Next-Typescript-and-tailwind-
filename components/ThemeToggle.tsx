import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


export default function ThemeToggle() {
const { theme, setTheme, systemTheme } = useTheme();
const [mounted, setMounted] = useState(false);


useEffect(() => {
setMounted(true);
}, []);


if (!mounted) return <button aria-label="toggle theme" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800" />;


const current = theme === 'system' ? systemTheme : theme;


return (
<button
aria-label="toggle theme"
onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
className="flex items-center justify-center w-10 h-10 rounded-full btn-smooth bg-white dark:bg-slate-800 shadow-sm"
title="Toggle theme"
>
{current === 'dark' ? (
// Sun icon
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
<circle cx="12" cy="12" r="4" />
<path d="M12 2v2" />
<path d="M12 20v2" />
<path d="M4.9 4.9l1.4 1.4" />
<path d="M17.7 17.7l1.4 1.4" />
<path d="M2 12h2" />
<path d="M20 12h2" />
<path d="M4.9 19.1l1.4-1.4" />
<path d="M17.7 6.3l1.4-1.4" />
</svg>
) : (
// Moon icon
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700 dark:text-slate-200">
<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
</svg>
)}
</button>
);
}