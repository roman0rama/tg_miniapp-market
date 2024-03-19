import React from 'react';
import { ReactSmartScroller } from 'react-smart-scroller';

export const HorizontalScroll = ({children} : never) => {
  const disableTracking: React.CSSProperties = {
    display: 'none'
  };

 return(
   <ReactSmartScroller draggable trackProps={disableTracking} spacing={10}>
     {children}
   </ReactSmartScroller>
 )
}