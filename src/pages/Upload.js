import { useState } from 'react';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    video: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setVideoData({
      ...videoData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!videoData.video) return alert('Please select a video');

    const formData = new FormData();
    formData.append('title', videoData.title);
    formData.append('description', videoData.description);
    formData.append('video', videoData.video);

    try {
      await API.post('/videos/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Video uploaded successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload Educational Video</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="file" name="video" accept="video/*" onChange={handleChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
