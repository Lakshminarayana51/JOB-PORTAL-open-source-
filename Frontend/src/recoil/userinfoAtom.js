import {atom} from 'recoil';

const userinfoAtom = atom({
    key: 'userinfoAtom', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });


export default userinfoAtom;