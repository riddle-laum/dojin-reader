
// 
let isOpenPulldown = false;

// open pulldown
function pulldownOpen(target){
  // delete old pulldown
  document.querySelector('#invisible .pulldown').innerHTML = '';
  document.querySelector('#invisible .pulldown').dataset.paramNum = '';
  // create new pulldown
  const list = [
    {key: 'B IS BAD', onclick: ()=>{console.log('B IS BAD!');}},
    {key: 'B IS GOD', onclick: ()=>{console.log('B IS GOD!!!')}},
  ];
  makeTabPullDown(target, list);
}

// close pulldown
function pulldownClose(){
  document.querySelector('#invisible .pulldown').style = `display:none;`;
  document.querySelector('#invisible .pulldown').innerHTML = '';
  document.querySelector('#invisible .pulldown').dataset.paramNum = '';
}

// makePullDown
function makeTabPullDown(parent, list){
  const pulldown = document.querySelector('#invisible .pulldown');
  for(const val of list){
    const elm = document.createElement('div');
    elm.setAttribute('class', 'pulldown-tab');
    elm.innerText = val.key;
    elm.addEventListener('onmouseup', val.onclick);
    pulldown.appendChild(elm);
  }
  pulldown.style = `display:block;left:${parent.getBoundingClientRect().left}px;`;
  pulldown.dataset.paramNum = list.length;
}

// ----- onclick ----- //
document.addEventListener('mouseup', event=>{
  if(event.target.className.match(/(^|\s)tabs($|\s)/)){
    // titlebar tabs
    isOpenPulldown = event.target.className.match(/(^|\s)tab-[a-zA-Z]+($|\s)/g)[0].split('-')[1];

  } else isOpenPulldown = false;
});

// close (quit) application
document.querySelector('#title-bar > .close').addEventListener('mouseup', event=>{
  dojinreader.quit();
});

// minimize application
document.querySelector('#title-bar > .minimize').addEventListener('mouseup', event=>{
  dojinreader.minimize();
});
