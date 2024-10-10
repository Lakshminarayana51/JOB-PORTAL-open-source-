import {atom} from 'recoil';

const tododata = atom({
    key: 'tododata ', // unique ID (with respect to other atoms/selectors)
    default:null, // default value (aka initial value)
  });


export default tododata ;