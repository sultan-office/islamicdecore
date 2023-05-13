
function SearchBox() {
  return (
    <>
      <div>
        <form action="#">
          <div className="flex items-center ">
            <input type="text" placeholder="I'm Loking For" className="w-full lg:w-[350px] xl:w-[400px] p-3 h-11 text-gray-400 text-sm focus:outline-none border border-gray-300" />
            <button type="submit" className="h-11 px-4 bg-primary font-normal text-white">Search</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchBox