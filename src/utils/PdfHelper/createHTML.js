const fs = require('fs');

const createRow = (format, data) => {
  const items = format.map(field => `<td>${data[field.value]}</td>`).join('')

  console.log(format, items);

  return `
  <tr>
    ${items}
  </tr>
`};

const createTable = (format, data) => {
  console.log(format, data);

  const rows = data.map(item => createRow(format, item)).join('');
  const headers = format.map(field => `<th>${field.label}</th>`).join('');
  return {
    styling: `table {
      width: 100%;
    }
    tr {
      text-align: left;
      border: 1px solid black;
    }
    th, td {
      padding: 15px;
    }
    tr:nth-child(odd) {
      background: #CCC
    }
    tr:nth-child(even) {
      background: #FFF
    }
    .no-content {
      background-color: red;
    }`,
    content: `
    <table>
      <tr>
          ${headers}
      </tr>
      ${rows}
    </table>`
  }
};

const createHtml = (type, format, data) => {
  let view = {};
  if (type === 'table') {
    view = createTable(format, data);
  }
  console.log(view);

  return `
  <html>
    <head>
      <style>
      ${view.styling}
      </style>
    </head>
    <body>
      ${view.content}
    </body>
  </html>
`};

const doesFileExist = (filePath) => {
  try {
    fs.statSync(filePath); // get information of the specified file path.
    return true;
  } catch (error) {
    return false;
  }
};

const createHTML = (filename, type, format, data) => {
  try {
    const html = createHtml(type, format, data);
    console.log('Succesfully created an HTML table');
    return html;
  } catch (error) {
    console.log('Error generating table', error);
  }
}
export default createHTML;
