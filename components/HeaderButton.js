function HeaderButton({name}) {
  return (
    <div>
      <div className="flex items-center cursor-pointer md:px-10 sm:h-14
                      md:hover:bg-gray-100 rounded-xl active:border-b-2
                      active:border-blue-500 group">
        <button type="button" className="h-5">{name}</button>
      </div>
    </div>
  )
}

export default HeaderButton
