// eslint-disable-next-line react/prop-types
const SearchField = ({ icon }) => {
  return (
    <div className="flex items-center bg-zinc-300 rounded-md">
      {icon && <img src={icon} alt="" className="mr-2 py-2 ps-3" width={35} />}
      <input
        type=""
        className="bg-transparent text-black py-3 px-1 outline-none rounded-md w-80"
        placeholder="Search name, username, or email..."
      />
    </div>
  );
};

export default SearchField;
