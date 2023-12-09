import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? "text-slate-400 underline" : " text-[#adb7be]"

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
        
    </button>
  )
}

export default TabButton