import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../Context/AuthContext';
import useBuyer from '../../hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isLoading] = useBuyer(user?.email);
    const location = useLocation()

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    if (user && isBuyer) {
        return children
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate> 
};

export default BuyerRoute;