import changeAcc from './changeAcc';
import changebal from './changebal';
import changetokbal from './tokbal'
import setContract from './setContract'
import setToken from './setToken'
import addphoto from './addphoto'
import addvideo from './addvideo'
import addfile from './addfile'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  Acc:changeAcc,
  bal:changebal,
  tokbal:changetokbal,
  contract:setContract,
  token:setToken,
  images:addphoto,
  videos:addvideo,
  files:addfile
});

export default rootReducer;
