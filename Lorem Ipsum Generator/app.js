const text = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim vehicula lorem. Suspendisse non varius neque, ut tempor sapien. In a finibus diam. Mauris accumsan erat ultricies, mollis diam eget, ultricies nunc. Etiam tristique lacus ultrices, pharetra metus molestie, imperdiet ante. Ut accumsan sit amet libero a viverra. Sed dui diam, tempor nec augue sit amet, condimentum aliquam justo. Maecenas auctor eros erat, sed consectetur velit tristique sit amet. Aenean dignissim neque quis finibus pharetra. Aenean vel neque ultrices arcu pharetra eleifend. Praesent aliquet ornare leo, a ultrices mi. Vivamus ut dui pellentesque, mollis quam eu, tincidunt ligula. Curabitur vulputate scelerisque orci, sit amet accumsan nunc porta ac.`,
  `Vestibulum est libero, dignissim et venenatis eget, dignissim in justo. Cras id blandit tellus. Quisque libero ex, aliquet vel sem a, feugiat pellentesque erat. Vivamus tristique est sit amet felis tristique, id volutpat nibh volutpat. Sed non scelerisque sem. Ut odio quam, aliquet ac facilisis sit amet, tincidunt ac sem. Ut porta efficitur quam eget tristique. Quisque posuere commodo neque, sed pulvinar ipsum molestie vitae. Pellentesque pellentesque venenatis rutrum. Vivamus sed metus magna. Ut quis interdum ligula, id porttitor tortor.`,
  `Duis vulputate nulla a leo semper commodo. Vivamus volutpat augue lectus, placerat bibendum elit fringilla id. Maecenas iaculis maximus arcu eu semper. Nunc auctor justo risus, eu iaculis nibh porta sed. Aliquam felis erat, pulvinar ut gravida quis, venenatis eget est. Duis dolor est, viverra eget egestas sed, fermentum eget libero. Praesent vitae pulvinar turpis, quis dictum justo. Nulla eget blandit velit, ut vestibulum felis. Curabitur lacinia egestas consequat. Duis quis porttitor ipsum. Integer tincidunt, ipsum sit amet pharetra pretium, nisi est laoreet neque, ut auctor mi neque et leo. Vivamus quam lectus, malesuada tincidunt vestibulum id, iaculis eu sapien. Quisque gravida, purus nec placerat interdum, sem enim venenatis metus, nec faucibus ex orci non nisi. In ut massa id libero rhoncus sodales eget venenatis orci. Proin non ligula id dolor vestibulum scelerisque eu sit amet purus. Maecenas diam dui, egestas euismod dapibus sed, placerat vel neque.`,
  `Donec vehicula enim tortor, ut tempus nunc faucibus eget. Aliquam vitae vulputate massa. Suspendisse mi nibh, finibus a scelerisque eget, consectetur eu metus. Donec ante lectus, tincidunt eget mauris quis, bibendum egestas metus. Donec cursus nisi enim, ut euismod est elementum et. Nullam in molestie elit. Sed sapien odio, imperdiet ac maximus sed, dapibus vel lacus. Pellentesque metus nisi, feugiat at porta a, posuere maximus enim.`,
  `Suspendisse condimentum nibh odio. Aenean nec malesuada mauris. Curabitur in velit in diam placerat consequat. Nunc porta in nulla ac tincidunt. Donec vestibulum in sapien id pharetra. Nulla suscipit risus vel eros aliquet tempor. Maecenas lorem ligula, viverra ac quam vel, sagittis vulputate risus. Mauris sed ante velit. Nunc vestibulum libero et scelerisque imperdiet. Phasellus sit amet nunc in magna eleifend dignissim sed in velit. Suspendisse iaculis nulla et pretium imperdiet.`,
  `Curabitur id augue ut nisl cursus efficitur. Nulla facilisi. Vivamus id aliquet risus, a blandit magna. Maecenas vitae imperdiet nisl, sit amet sodales magna. Ut quis lacinia dui, eget placerat odio. Maecenas eget dapibus dui. Integer nibh turpis, aliquet eu erat eu, venenatis sollicitudin nisi. Proin non aliquam metus. Donec neque augue, dignissim sed ornare id, feugiat ut massa. Sed porttitor at elit at volutpat. Nullam in pellentesque arcu. Proin ut volutpat lorem, eu sagittis libero. Sed ipsum ipsum, molestie sit amet varius in, iaculis in ex. Aenean sed lacus sed purus eleifend mollis. Nullam dignissim risus quis nunc ullamcorper commodo sit amet eget libero.`,
  `In sit amet luctus lorem, quis suscipit sapien. Curabitur porta vulputate elit. Aliquam at dui imperdiet, egestas ex in, euismod nunc. Integer lacinia ligula eget euismod gravida. Mauris finibus, ligula vel tempor venenatis, elit eros imperdiet ipsum, sit amet tempor erat metus in enim. Morbi ullamcorper enim sodales purus convallis, ac mattis arcu posuere. In dui neque, eleifend non mattis sed, tristique vitae ipsum. Sed facilisis nulla eros, eu mattis ipsum cursus at. In vulputate turpis ac ante aliquet, ullamcorper venenatis risus scelerisque. Proin interdum enim quis felis porttitor euismod. Pellentesque nunc turpis, tempus vel risus sed, feugiat tempus justo. Pellentesque placerat placerat felis ac finibus. Donec sit amet vulputate diam. Etiam maximus consectetur erat eget lobortis. Curabitur eu imperdiet ex. Proin egestas molestie viverra.`,
  `Fusce viverra enim at ex faucibus, fermentum dictum nunc tincidunt. Fusce gravida congue vulputate. In ut pharetra lorem. Ut vehicula sodales tempor. Fusce ultrices tellus nibh. Ut vulputate orci at nisi interdum, et interdum lacus luctus. Donec ac ornare mi, eget blandit arcu.`,
  `Proin interdum auctor mattis. Donec semper justo in eleifend elementum. Nam tincidunt sed massa sollicitudin commodo. Sed sem nibh, posuere eget rhoncus ut, congue sed elit. Aliquam nec egestas mauris. Duis malesuada pellentesque urna, sed consequat nisi efficitur nec. Praesent malesuada mauris nisi, vel lobortis tortor faucibus id. Quisque vulputate quam sit amet accumsan elementum. Quisque aliquam quam quam, nec efficitur tortor mollis eu. Ut ante nunc, aliquet bibendum tincidunt convallis, pharetra ac diam. Nam ac dolor nulla. Maecenas auctor luctus enim vitae varius. Aenean aliquet risus eget pretium gravida. Ut elementum eget sem maximus maximus.`,
  `Quisque et pretium purus. Fusce non auctor felis, sed ultrices lorem. Nullam dignissim laoreet erat nec aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dictum quis ex at ultricies. Proin sit amet lectus quam. Ut eu placerat turpis. Nam eleifend tempus dolor, vel consectetur nunc consequat tempor. Donec dignissim viverra imperdiet.`,
];

const form = document.querySelector('.form');
const numofpara = document.getElementById('numofpara');
const output = document.querySelector('.text');

numofpara.addEventListener('input', paraNumbers);

function paraNumbers(e) {
  const value = e.target.value;
  numofpara.value = value;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = parseInt(numofpara.value);
  let tempText = text.slice(0, value);
  tempText = tempText.map((item) => `<p class="output">${item}</p>`).join('');
  output.innerHTML = tempText;
});