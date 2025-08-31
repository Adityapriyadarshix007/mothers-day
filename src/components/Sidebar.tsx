export default function Sidebar() {
  return (
    <aside className="bg-gray-100 rounded-lg p-6 space-y-6 flex flex-col items-center">
      <div className="w-full text-center">
        <a 
          href="https://www.linkedin.com/in/aditya-priyadarshi-026816282" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block"
        >
          About the Author
        </a>
        <p className="text-sm mt-4">
          This blog celebrates the strength, care, and love of mothers around the world.
        </p>
      </div>
      <div className="w-full text-center">
        <h3 className="font-semibold mb-3">Highlights</h3>
        <ul className="space-y-2 text-sm">
          <li>Inspiring Stories</li>
          <li>Health & Wellness</li>
          <li>Motherhood Journeys</li>
        </ul>
      </div>
    </aside>
  );
}