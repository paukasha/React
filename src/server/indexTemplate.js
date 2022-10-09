export const indexTemplate = (content, token) => `
  <!DOCTYPE html>
  <html lang="ru">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reddit</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}'
    </script>
    <style>

  

     </style>
  </head>

  <body>
    <div id="react_root">${content}</div>
    <div id="modal_root" style=" position: fixed;
        top: 17%;
        left: 50%;
        transform: translate(-50%, 0);
        max-height: 733px;
        overflow-y: auto;
        box-shadow: -2px 4px 10px #80808047;
        "></div>
  </body>

  </html>
`
