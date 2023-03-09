const changeParagraphStyles = () => {
  let pElements = document.getElementsByTagName('p');
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.fontWeight = 'bold';
    pElements[i].style.backgroundColor = 'yellow';
  }
}

changeParagraphStyles();