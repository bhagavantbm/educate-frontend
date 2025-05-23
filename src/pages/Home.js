import { useEffect, useState } from 'react';
import API from '../api/api';
import VideoCard from '../components/VideoCard';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await API.get('/videos');
        setVideos(res.data);
      } catch (err) {
        console.error('Error fetching videos:', err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="home-page">
      <h2>Educational Video Feed</h2>
      {videos.length === 0 ? (
        <p>No videos uploaded yet.</p>
      ) : (
        videos.map((video) => <VideoCard key={video._id} video={video} />)
      )}
    </div>
  );
}

export default Home;
