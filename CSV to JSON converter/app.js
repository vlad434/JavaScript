const alertContainer = document.querySelector('.alert');
const convertInCSV = document.getElementById('convert-to-csv');
const input = document.getElementById('input');
const output = document.getElementById('textarea');
const uploadBtn = document.getElementById('upload');
const downloadBtn = document.getElementById('download-btn');
const clearBtn = document.getElementById('clear-btn');
const copyBtn = document.getElementById('copy-btn');

convertInCSV.addEventListener('click', convertToCSV);
clearBtn.addEventListener('click', clearAll);

function convertToCSV() {
  if (validate()) {
    let csvText = '';
    jsonText = input.value;
    jsonText = jsonText.replace(/[\r\s\n\]\[\{"]/g, '');
    jsonText = jsonText.replace(/},/g, '}');
    let variables;
    variables = jsonText.split('}');
    for (let i = 0; i < variables.length - 1; i++) {
      let currVar;
      currVar = variables[i];
      vars = currVar.split(',');

      for (let j = 0; j < vars.length; j++) {
        vars[j] = vars[j].split(':');
      }

      for (let j = 0; j < vars.length; j++) {
        if (i == 0) {
          csvText += `${vars[j][0]}`;
          if (j < vars.length - 1) {
            csvText += ',';
          } else {
            csvText += '\n';
          }
        }
      }
      for (let j = 0; j < vars.length; j++) {
        csvText += `${vars[j][1]}`;
        if (j < vars.length - 1) {
          csvText += ',';
        } else {
          csvText += '\n';
        }
      }
      output.value = csvText;
    }
  } else {
    alertMessage('Invalid input!');
  }

  function validate() {
    const textJSON = input.value;
    try {
      JSON.parse(textJSON);
    } catch (err) {
      return false;
    }
    return true;
  }
}

function alertMessage(message) {
  const alert = document.createElement('h1');
  alert.textContent = message;
  alertContainer.appendChild(alert);

  setTimeout(function () {
    document.querySelector('.alert').remove();
    window.location.reload();
  }, 1000);
}

function clearAll() {
  input.value = '';
  output.value = '';
}

function copyText() {
  document.querySelector('textarea[name="output"]').select();
  document.execCommand('copy');
}

function downloadFile() {
  var textt = output.value;
  var blob = new Blob([textt], { type: 'text/plain;charset=utf-8' });
  FileSaver.saveAs(blob, 'hello world.txt');
  console.log(textt);
}
