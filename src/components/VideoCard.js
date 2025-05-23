function VideoCard({ video }) {
  return (
    <div className="video-card">
      <video
        controls
        width="100%"
        src={video.videoUrl}
        style={{ borderRadius: '8px' }}
      />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <p><small>Uploaded by: {video.user?.username || 'Unknown'}</small></p>
    </div>
  );
}

export default VideoCard;
