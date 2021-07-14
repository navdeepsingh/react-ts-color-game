import React from 'react'
import styled from 'styled-components'
import RowWrapper from './RowWrapper'

const StyledBoard = styled.div`
  border: 2px solid black;
  width: 400px;
  height: 400px;
`


const Board = ({tiles = 6}) => {
  const [squares, ] = React.useState(Array(tiles * tiles).fill(null))

  const renderSquare = (i: any): React.ReactFragment => 
    <button onClick={() => {}}>
      {squares[i]}
    </button>

  return (
    <StyledBoard>
    {
      Array(tiles).fill(null).map((x, rowIndex) => {
        return (
          <RowWrapper rowIndex={rowIndex} tiles={tiles}>
            {Array(tiles).fill(null).map((y, colIndex) => renderSquare(rowIndex*tiles + colIndex) )}
          </RowWrapper>
        )
      })
    }
    </StyledBoard>
  )
}

export default Board
