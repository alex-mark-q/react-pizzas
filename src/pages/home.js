import React from 'react';
import { PaneContainer } from '../containers/pane';
import { SideBarContainer } from '../containers/sidebar';


export default function Home() {
  return (
  	<>
  		<PaneContainer>
        <SideBarContainer />
  		</PaneContainer>
  	</>
  )
}