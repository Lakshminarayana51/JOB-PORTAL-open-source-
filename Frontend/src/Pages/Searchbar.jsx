import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/Search';
import { useRecoilState } from 'recoil';
import SearchAtom from '../recoil/SearchAtom';
import { useEffect  } from 'react';
import tododata from '../recoil/tododata';

const Searchbar = () => {

    const [inputdata,setInputdata] = useRecoilState(SearchAtom);
    const [todoapidata,setTodoapidata]=useRecoilState(tododata);
   
  
    useEffect(() => {
     console.log(inputdata);
    }, [inputdata])
  
  
    return (
      <div className='search-container     '>
      <input type='text' placeholder='Search application status here....' className='search-bar'  value={inputdata} onChange={(e)=>
        setInputdata(e.target.value)
      }/>
      <div className='search-icon'>
          <SearchRoundedIcon fontSize='medium' />
      </div>
      </div>
    );
  };
  
  export default Searchbar;
