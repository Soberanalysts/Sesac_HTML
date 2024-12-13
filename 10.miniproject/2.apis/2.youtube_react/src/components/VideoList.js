const VideoList = ({ videos, link}) => {
    console.log("videolist : ", videos);
    return (
        <ul>
            {videos.map((video) => (
                <li key={video.id.videoId}>
                    <img src={video.snippet.thumbnails.default.url} alt=""/>
                    <div>
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.description}</p>
                        <iframe 
                            width="560" height="315" 
                            src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">watch</a>
                        {/* <href>{`https://www.youtube.com/watch?v=${video.id}`}</href> */}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default VideoList;