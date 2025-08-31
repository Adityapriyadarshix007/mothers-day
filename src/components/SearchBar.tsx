interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  inputClassName?: string;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  inputClassName = '',
  placeholder = 'Search...'
}: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClassName}`}
        placeholder={placeholder}
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;