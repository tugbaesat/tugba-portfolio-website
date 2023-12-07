import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? "text-slate-400 border-b  border-gray-500" : " text-[#adb7be] "

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
        
    </button>
  )
}

export default TabButton