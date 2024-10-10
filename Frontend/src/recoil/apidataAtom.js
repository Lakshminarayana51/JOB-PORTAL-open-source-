import {atom} from 'recoil';

const apidataAtom = atom({
    key: 'apidataAtom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });


export default  apidataAtom;