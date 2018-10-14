import React from 'react';

export default function Html(props) {
  return (
    <html>
      <head>
        <script src="./client.js" defer></script>
      </head>
      <body>
        <div id="app">
          {props.children}
        </div>
      </body>
    </html>
  );
}
