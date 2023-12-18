

/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Loading from '../components/shared/Loading/Loading';
import useRole from '../hooks/useRole';
import  { useEffect } from 'react';

const AgentRoute = ({ children }) => {
    const navigate = useNavigate();
    const [userRole, isLoading] = useRole();

    useEffect(() => {
        if (!isLoading && userRole.role !== 'Agent') {
            // navigate('/dashboard'
            // );
        }
    }, [isLoading, userRole, navigate]);
    if (isLoading) {
        return <Loading></Loading>;
    }
    if (userRole.role === 'Agent') {
        return children;
    } else {
        return null;
    }
};

export default AgentRoute;
