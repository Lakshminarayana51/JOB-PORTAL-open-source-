import {atom} from 'recoil';

const SearchAtom = atom({
    key: 'SearchAtom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });


export default SearchAtom;