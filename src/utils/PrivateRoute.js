import { Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataForm } from '../../src/sections/auth/login'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(DataForm)
    return(
        <Route {...rest}>{!user ? <Navigate to="/login" /> :   children}</Route>
    )
}

export default PrivateRoute;