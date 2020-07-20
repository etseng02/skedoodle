import React from "react"

interface Props {
  children: string;
  navigateMenu: () => void;

}

const MenuItem: React.FC<Props> = ({ children, navigateMenu }) => {


  return (
    <button
      className=" m-auto w-2/5 items-center text-center justify-center mx-auto border border-black hover:border-red-500"
      type="button"
      onClick={() => navigateMenu()}
    >
      {children}
    </button>


  )
}

export default MenuItem