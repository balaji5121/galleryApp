import {Component} from 'react'
import './index.css'
import Thumbnail from '../ThumbnailItem'

const imagesList = [
  
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

class Gallery extends Component {
  state = {acImage: imagesList[0]}



  newItem = id => {
    this.setState({acImage: imagesList[id]})
  }

  
  render() {
    let  images = {name:""}
    const {activeIdImage} = this.state

    return (
      <div className="bgContainer">
        <img
          src={activeIdImage.imageUrl}
          alt={activeIdImage.imageAltText}
          className="img"
        />

        <h1>Nature Photography by Balaji</h1>
        <ul className="r">
          {imagesList.map(each => (
            <Thumbnail
              details={each}
              newItem={this.newItem}
              active={each.id === activeIdImage.id}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Gallery
