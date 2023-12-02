/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import Loading from '../components/shared/Loading/Loading';
import useRole from '../hooks/useRole';

const AdminRoute = ({children}) => {
    const navigate = useNavigate();
    const [userRole, isLoading ] = useRole();
    if(isLoading){
        return <Loading></Loading>
    }
    if(userRole.role === 'Admin' ) return children;
    return navigate('/dashboard') 
};
export default AdminRoute;