const SearchInput = ({ value, onChange }) => {
  return (
    <form>
      <label
        for="default-search"
        class="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div class="relative">
        <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            class="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          class="block w-full rounded-full bg-gray-200 px-4 py-2 ps-10 text-sm text-gray-900 outline-none"
          id="default-search"
          onChange={onChange}
          placeholder="Search"
          required
          type="search"
          value={value}
        />
      </div>
    </form>
  );
};

export default SearchInput;
