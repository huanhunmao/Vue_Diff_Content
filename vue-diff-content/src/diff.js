const Diff = require('diff')

const one = JSON.stringify([{historicalBg
    : 
    "630594703284202025c0174d",
    introduction
    : 
    "发送到发送到发"}]),
    other = JSON.stringify([{historicalBg
        : 
        ["630594703284202025c0174d","312i3213123213","31923921328138"],
        introduction
        : 
        "发送到发送到发"}]),
    color = '';
    
let span = null;

 const diff = Diff.diffChars(one, other),
    display = document.createElement('div'),
    fragment = document.createDocumentFragment();

 diff.forEach((part) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added ? 'red' :
    part.removed ? 'grey' : '';
  span = document.createElement('span');
  span.style.backgroundColor = color;
  span.appendChild(document
    .createTextNode(part.value));
  fragment.appendChild(span);
});

display.appendChild(fragment);

export const res = display