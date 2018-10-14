import React from 'react';

export default function Html(props) {
  return (
    <html>
      <body>
        {props.children}
      </body>
    </html>
  );
}
