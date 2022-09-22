import React from 'react';
import { Pane } from '../components';
import { Menu } from '../components';

export function PaneContainer({ children }) {
  return (
    <Pane>
      <Pane.Contents>
        
      </Pane.Contents>
      { children }
    </Pane>
  );
}