/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
import Loading from '../components/shared/Loading/Loading';

const AgentRoute = ({children}) => {
    const navigate = useNavigate();
    const [userRole, isLoading ] = useRole();
    if(isLoading){
        return <Loading></Loading>
    }
    if(userRole.role === 'Agent' ) return children;
    return navigate('/dashboard') 
};

export default AgentRoute;