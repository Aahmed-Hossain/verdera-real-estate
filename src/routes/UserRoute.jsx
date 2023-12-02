/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Loading from '../components/shared/Loading/Loading';
import useRole from '../hooks/useRole';

const AgentRoute = ({children}) => {
    const [userRole, isLoading ] = useRole();
    const navigate = useNavigate();
    if(isLoading){
        return <Loading></Loading>
    }
    if(userRole.role === 'User' ) return children;
   
    return navigate('/dashboard') 
};

export default AgentRoute;