import {store} from '../App';
import {Actions} from './actions';
// store autheticated userData in state
export const authenticateUser = () => store.dispatch({type: Actions.FETCH});
