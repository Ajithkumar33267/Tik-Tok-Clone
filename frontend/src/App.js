import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './axios'

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/v2/posts');
      setVideos(res.data)
      return res;
    }
    fetchData();
  }, [])

  console.log(videos)

  return (
    <div className="app">
      <div className='app__videos'>
        {videos && videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            key={url}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        )
        )}

      </div>
    </div>
  );
}

export default App;
