import { Spinner } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import {Redirect} from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest })=> {
    const {user, isLoading} = useAuth();
    if(isLoading){
      return <Spinner className='mx-auto d-block my-5' animation="grow" role="status"></Spinner>
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute
