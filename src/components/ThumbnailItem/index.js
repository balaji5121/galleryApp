// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {details, Active, newItem} = props
  const {thumbnailUrl, thumbnailAltText, id, imageUrl, imageAltText} = details
  const a = Active ? 'thumb' : 'o'

  const itemChanged = () => {
    newItem(id)
    console.log(id)
  }

  return (
    <li>
      <button type="button" onClick={itemChanged}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={a} />
      </button>
    </li>
  )
}

export default Thumbnail
