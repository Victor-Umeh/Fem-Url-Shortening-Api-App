const Shortener = () => {
  return (
    <form className="w-[88%] mx-auto p-6 bg-shortenMobile">
      <div>
        <input type="text" placeholder="Shorten a link here..." id="shorten" />
        <label htmlFor="shorten"></label>
      </div>
      <button></button>
    </form>
  );
};

export default Shortener;
