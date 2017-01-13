import React, { Component, PropTypes } from 'react'
import './WordGrid.css'

class WordGrid extends Component {
  handleClick = (character, id, selected) => {
    this.props.handleTileClick(character, id, selected);
  }

  render () {
    let row = 0
    let column = 0
    const { wordGrid } = this.props
    return (
      <div>
        { wordGrid.map( wordRow => {
          column = 0
          return (
          <div key={row++} className="word-row">
          { wordRow.map( charObj => {
              let id = (row - 1) + '-' + column++
              let classname = 'word-tile ' + (charObj.selected ? 'selected' : '')
              return (
                <span key={id} className={classname} onClick={this.handleClick.bind(this, charObj.character, id, charObj.selected)}>{charObj.character}</span>
              )
            })}
          </div>
        )})}
      </div>
    )
  }
}

WordGrid.propTypes = {
  wordGrid: PropTypes.arrayOf(PropTypes.array),
  handleTileClick: PropTypes.func
}

export default WordGrid