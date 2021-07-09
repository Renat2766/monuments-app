import React, {Suspense} from 'react'
import styled from "styled-components"
import {Canvas} from '@react-three/fiber'
import Earch from '../Earth'

const CanvasContainer = styled.div`
  width: 100%;
  height: 600px;
`;

function Map() {
  return (
    <CanvasContainer>
      <Canvas >
        <Suspense fallback={null} >
          <Earch />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default Map
