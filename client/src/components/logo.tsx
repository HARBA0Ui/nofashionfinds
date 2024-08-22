import { Link } from "react-router-dom"

const Logo = ({bg= "white"}) => {
  return (
    <Link to="/" reloadDocument className="flex items-center gap-x-2 cursor-pointer ">
        <img src="/logo.png" className={`${bg == "black" && "invert"} w-16 h-16 `}/>
        <h1 className={`${bg == "black" && "text-white"} text-3xl`}>Fashions Finds</h1>
    </Link>
  )
}

export default Logo