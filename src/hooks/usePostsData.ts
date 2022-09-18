import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IPosts {
  [key: string]: any
}

export function usePostsData() {
  const [ posts, setPosts ] = useState<IPosts>({});
  const token = useContext(tokenContext)

  useEffect(() => {
    axios.get(' https://oauth.reddit.com/best', {
      headers: {Authorization: `bearer ${token}`}
    })
      .then(({data}) => {
        setPosts(data)
      })
      .catch(console.log);
  }, [token])

  return [posts];
}
