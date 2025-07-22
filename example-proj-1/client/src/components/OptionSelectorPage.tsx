import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebase"

const OptionSelectorPage = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        await signOut(auth)
        navigate("/login")
      }

    return (
        <div>
            <h1>Welcome to Hogwarts!</h1>
            <button onClick={() => navigate("/characters")}>See All Characters</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default OptionSelectorPage