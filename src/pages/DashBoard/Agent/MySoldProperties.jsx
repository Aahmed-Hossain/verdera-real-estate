import axios from "axios";
import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";


const MySoldProperties = () => {
    const [userRole] = useRole();
    const email = userRole?.email;
    console.log(userRole);
    
    const { data: soldProperties = [] } = useQuery({
      queryKey: ["soldProperties"],
      queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/payment/specifiAgent?email=${email}`);
        return res.data;
      },
    });
    
    console.log(soldProperties);
    

    return (
        <div>
            <h2>{soldProperties.length}</h2>
            console.log;
        </div>
    );
};

export default MySoldProperties;