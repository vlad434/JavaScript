const alertContainer = document.querySelector('.alert');
const convertCSV = document.getElementById('convert-to-csv');
const input = document.getElementById('input');
const output = document.getElementById('textarea');
const clearBtn = document.getElementById('clear-btn');
const downloadBtn = document.getElementById('download-btn');
const copyBtn = document.getElementById('copy-btn');

convertCSV.addEventListener('click', convertToCSV);
clearBtn.addEventListener('click', clearAll);
downloadBtn.addEventListener('click', downloadFile);
copyBtn.addEventListener('click', copyText);

//CONVERT JSON TO CSV
function convertToCSV() {
  if (validateJSON()) {
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
    alertMessage('Invalid JSON!');
  }

  function validateJSON() {
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
  alertContainer.textContent = message;
  alertContainer.style.display = 'block';
  setTimeout(() => {
    alertContainer.style.display = 'none';
  }, 1000);
}

//CLEAR INPUT AND OUTPUT
function clearAll() {
  if (input.value === '' && output.value === '') {
    alertMessage('Nothing to clear...');
  } else {
    input.value = '';
    output.value = '';
  }
}

//COPY THE OUTPUT TEXT
function copyText() {
  if (output.value !== '') {
    document.querySelector('textarea[name="output"]').select();
    document.execCommand('copy');
  } else {
    alertMessage("There's nothing to copy...");
  }
}

function downloadFile() {
  if (output.value !== '') {
    // var textt = output.value;
    // var blob = new Blob([textt], { type: 'text/plain;charset=utf-8' });
    // FileSaver.saveAs(blob, 'hello world.txt');
    // console.log(textt);
    console.log('download');
  } else {
    alertMessage("There's nothing to download...");
  }
}
