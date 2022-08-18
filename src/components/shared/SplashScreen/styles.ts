import styled from 'styled-components'

interface IContainerProps {
  show: boolean
}

export const Container = styled.div<IContainerProps>`
  position: fixed;
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
`
