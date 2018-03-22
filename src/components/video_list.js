import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const VideoItems = props.videos.map( (v) => {
		return (
			<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={v.etag} 
			video={v} />
		)
	});

	return (
		<ul className="col-md-4 list-group">
			{VideoItems}
		</ul>
	)
}

export default VideoList;