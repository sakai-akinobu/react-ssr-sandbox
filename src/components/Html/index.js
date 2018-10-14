import React from 'react';

export function Html(props) {
  return (
    <html>
      <body>
        {props.children}
      </body>
    </html>
  );
}
