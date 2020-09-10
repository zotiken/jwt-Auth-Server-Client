import React, {useState} from 'react'
import useAccess from "../hook/access.hook" 

export const Auth = React.createContext(false)

export default function AuthContext(props) {
    const [auth, setauth] = useState(true)
    const access = useAccess(auth)
    return (
        <Auth.Provider value={auth}>
            {access}
        </Auth.Provider>
    )
}

