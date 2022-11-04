import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => ( isPlaying && activeSong?.title === songi.title ? (
  <FaPauseCircle 
  size={35}
  className="text-gray-300"
  onClick={handlePause}
  />
): (
  <FaPauseCircle 
  size={35}
  className="text-gray-300"
  onClick={handlePlay}
  />
));

export default PlayPause;
