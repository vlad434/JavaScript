const btn = document.getElementById('counter');
const table_container = document.querySelector('.table-container');
const inputArea = document.getElementById('input-area');
const total_words_container = document.querySelector('.total-words');
const total_words_element = document.getElementById('total-words');

// btn.addEventListener('click', wordCount);
btn.onclick = wordCount;
var myChart;

function wordCount() {
  var text = inputArea.value;
  text = text.toLocaleLowerCase();
  text = text.replace(/[\,\.\!\?\`\'\"\{\}\[\]\\\/\>\<\:\;\+\=]+/g, ' ');
  text = text.replace(/\s+/g, ' ');

  if (text == '' || text == ' ') {
    //IF THERE ARE NO WORDS IN TEXTAREA
    total_words_container.style.display = 'none';
    inputArea.style.boxShadow = '0px 0px 20px 5px rgb(238, 61, 12)';
    inputArea.align = 'center';
    myChart && myChart.destroy();
    setTimeout(() => {
      inputArea.value = '';
      inputArea.style.boxShadow = 'none';
    }, 1000);
  } else {
    //IF THE TEXTAREA CONTAINS WORDS
    let arr = text.trim().split(' ');
    let wordsList = [];
    arr.forEach((word) => {
      if (word != '') {
        if (wordsList.length == 0) {
          wordsList.push({ text: word, count: 1 });
        } else {
          let ok = true;
          wordsList.forEach((el) => {
            if (el.text == word) {
              el.count++;
              ok = false;
            }
          });
          if (ok) wordsList.push({ text: word, count: 1 });
        }
      }
    });
    const wordCount = arr.length;
    total_words_container.style.display = 'block';
    total_words_element.innerText = `${wordCount}`;

    wordsList.sort((a, b) => {
      return b.count - a.count;
    });

    let lables_arr = [];
    let data_arr = [];
    let wordsListLength = wordsList.length >= 5 ? 5 : wordsList.length;
    for (let i = 0; i < wordsListLength; i++) {
      lables_arr.push(wordsList[i].text);
      data_arr.push(wordsList[i].count);
    }

    let theRest = 0;
    for (let i = 5; i < wordsList.length; i++) {
      theRest += wordsList[i].count;
    }
    if (theRest > 0) {
      lables_arr.push('The rest');
      data_arr.push(theRest);
    }

    myChart && myChart.destroy();
    const ctx = document.getElementById('myChart').getContext('2d');
    const data = {
      labels: lables_arr,
      datasets: [
        {
          label: '# of words',
          data: data_arr,
          backgroundColor: [
            'rgb(0, 255, 0, .7)',
            'rgb(0, 0, 255, .7)',
            'rgb(255, 255, 0, .7)',
            'rgb(255, 0, 0, .7)',
            'rgb(255, 0, 255, .7)',
            'rgb(180, 180, 180, .7)',
          ],
          hoverBackgroundColor: [
            'rgb(0, 255, 0)',
            'rgb(0, 0, 255)',
            'rgb(255, 255, 0)',
            'rgb(255, 0, 0)',
            'rgb(255, 0, 255)',
            'rgb(180, 180, 180)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
    });
  }
}
