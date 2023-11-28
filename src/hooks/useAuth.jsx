import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useAuth = () => {
    const authHook = useContext(AuthContext)
    return authHook;
};

export default useAuth;