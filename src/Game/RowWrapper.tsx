import React from 'react'
import styled from 'styled-components'

interface Props {
  rowIndex?: string | number
  children: any
  tiles?: number
}

const Row = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: calc(400px / ${props => props.tiles});
`

const RowWrapper: React.FC<Props> = ({rowIndex, children}) => {
  return (
    <Row key={rowIndex}>
      {children}
    </Row>
  )
}

export default RowWrapper
