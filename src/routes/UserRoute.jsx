
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Loading from '../components/shared/Loading/Loading';
import useRole from '../hooks/useRole';
import  { useEffect } from 'react';

const UserRoute = ({ children }) => {
    const navigate = useNavigate();
    const [userRole, isLoading] = useRole();

    useEffect(() => {
        if (!isLoading && userRole.role !== 'User') {
            navigate('/dashboard');
        }
    }, [isLoading, userRole, navigate]);
    if (isLoading) {
        return <Loading></Loading>;
    }

    if (userRole.role === 'User') {
        return children;
    } else {
        return null;
    }
};

export default UserRoute;
