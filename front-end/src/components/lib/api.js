import Axios from './Axios/Axios';
import jwt_decode from 'jwt-decode';
import { createBrowserHistory } from 'history';
import setAuthToken from '../lib/Axios/setAuthToken';

export const checkTokenAuth = () => {

    let jwtToken = localStorage.getItem('jwtToken-reddit');

    if (jwtToken) {

        let decoded = jwt_decode(jwtToken);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            localStorage.removeItem('jwtToken-reddit');

            // TODO: Redirect somewhere after token is removed
            // createBrowserHistory().push('/sign-in')
            
            setAuthToken(null)
        } else {
            setAuthToken(jwtToken)
            return decoded;
        }
    }
}

export const apiStayUp = async () => {
    try {
        let success = await Axios.get('/awake')
        console.log(`success.data: `, success.data);
        return success.data
    } catch (err) {
        return err
    }
}