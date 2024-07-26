function Navbar() {
  return (
    <div className="flex justify-between px-4 py-2 border border-black bg-cyan-500">
      <div className=" px-3 py-1 border border-black">logo</div>

      <div className="flex space-x-2">
        <div className=" px-3 py-1 border border-black">profile</div>
        <div className=" px-3 py-1 border border-black">Logout</div>
      </div>
    </div>
  );
}

export default Navbar;
