import React from 'react';

export default function Html(props) {
  const {initialData, children} = props;
  return (
    <html>
      <head>
        <script src="./client.js" defer></script>
        <script id="initial-data" data-json={JSON.stringify(initialData)}></script>
      </head>
      <body>
        <div id="app">
          {props.children}
        </div>
      </body>
    </html>
  );
}
