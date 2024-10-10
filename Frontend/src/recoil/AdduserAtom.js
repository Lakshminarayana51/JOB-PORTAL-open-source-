import {atom} from 'recoil';

const AdduserAtom= atom({
    key: 'AdduserAtom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
  });


export default AdduserAtom;