const btn = document.getElementById('counter');
const table_container = document.querySelector('.table-container');
const inputArea = document.getElementById('input-area');
const errorEl = document.getElementById('error-box');

function wordCount() {
  var string = inputArea.value;
  string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ' ');
  if (string == '' || string == ' ') {
    inputArea.style.boxShadow = '0px 0px 20px 5px rgb(26, 134, 167)';
    inputArea.align = 'center';
    errorEl.style.transform = 'translateY(0vh)';
    table_container.style.display = 'none';
    setTimeout(() => {
      inputArea.value = '';
      inputArea.style.boxShadow = 'none';
      errorEl.style.transform = 'translateY(15vh)';
    }, 1500);
  } else {
    var words = string
      .trim()
      .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ' ')
      .split(' ');
    var output = [];

    for (var i = 0; i < words.length; i++) {
      output[words[i]] =
        output[words[i]] !== undefined ? (output[words[i]] += 1) : 1;
    }
    var words_counter = 0;

    for (key in output) {
      words_counter++;
      const tr = document.createElement('tr');
      tr.innerHTML += `
              <tr>
                <td>${words_counter}</td>
                <td>${output[key]}</td>
                <td>${key}</td>
              </tr>
    `;

      table_container.style.display = 'flex';
      table_container.appendChild(tr);
    }
  }
}

btn.addEventListener('click', () => {
  table_container.innerHTML = `
     <table>
          <tr>
            <th >Rank</th>
            <th >Count</th>
            <th >Word</th>
          </tr>
        </table>
  `;
  wordCount();
});
