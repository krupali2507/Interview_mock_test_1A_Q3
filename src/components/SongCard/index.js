import {BsFillTrashFill} from 'react-icons/bs'
import './index.css'

const SongCard = props => {
  const {songDetail, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetail

  const onClickDelete = () => {
    onDeleteSong(id)
  }

  return (
    <li className="song-item-container">
      <div className="image-name-container">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="name-genre-container">
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="delete-duration-container">
        <button type="button" onClick={onClickDelete} testid="delete">
          <BsFillTrashFill />
        </button>
        <p>{duration}</p>
      </div>
    </li>
  )
}

export default SongCard
