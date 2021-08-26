
// 
let isOpenPulldown = false;

const PulldownTabs = {
  'local': [
    {key: 'no rating', onclick: ()=>{alert('normal')}},
    {key: 'R-15', onclick: ()=>{alert('r-15')}},
    {key: 'R-18', onclick: ()=>{alert('r-18')}},
  ],
  'online': [
    {key: 'google', onclick: ()=>{alert('www.google.com')}},
    {key: 'bing', onclick: ()=>{alert('bing wwwwww')}},
  ],
  'help': [
    {key: 'version', onclick: ()=>{console.log('dojin-reader v0.0.1 / electron v13.1.0 / chromium v91.0.4472.77 / node v14.16.0 / v8 v9.1.269.28-electron.0')}},
  ],
};

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
  document.querySelector('#invisible > .pulldown').style = `display:none;`;
  document.querySelector('#invisible > .pulldown').innerHTML = '';
  document.querySelector('#invisible > .pulldown').dataset.paramNum = '';
}

// makePullDown
function makeTabPullDown(parent, list){
  const pulldown = document.querySelector('#invisible .pulldown');
  for(const val of list){
    const elm = document.createElement('div');
    elm.setAttribute('class', `pulldown pulldown-tab pulldown-${val.key.replace(/\s|-/g, '_')}`);
    elm.innerText = val.key;
    pulldown.appendChild(elm);
    pulldown.querySelector(`.pulldown-${val.key.replace(/\s|-/g, '_')}`).addEventListener('onmouseup', val.onclick);
  }
  pulldown.style = `display:block;left:${parent.getBoundingClientRect().left}px;`;
  pulldown.dataset.paramNum = list.length;
}

// ----- onclick ----- //
document.addEventListener('mouseup', event=>{
  if(event.target.className.match(/(^|\s)tabs($|\s)/)){
    // titlebar tabs
    const buttonName = event.target.className.match(/(^|\s)tab-[a-zA-Z]+($|\s)/g)[0].split('-')[1];
    isOpenPulldown = isOpenPulldown == buttonName ? false : buttonName;
  } else if(!event.target.className.match(/(^|\s)pulldown-tab($|\s)/)) isOpenPulldown = false;
  for(const node of document.querySelectorAll('.pulldown'))
    if(node.className.match(`pulldown-${isOpenPulldown}`)) node.style = 'display:block;';
    else node.style = 'display:none;';
  // pulldownClose();
  // if(isOpenPulldown){
  //   // open pull down
  //   document.querySelector('#invisible .pulldown').style = 'display:block;';
  //   makeTabPullDown(document.querySelector(`.tab-${isOpenPulldown}`), PulldownTabs[isOpenPulldown]);
  // }
  console.log(isOpenPulldown);
});

// close (quit) application
document.querySelector('#title-bar > .close').addEventListener('mouseup', event=>{
  dojinreader.quit();
});

// minimize application
document.querySelector('#title-bar > .minimize').addEventListener('mouseup', event=>{
  dojinreader.minimize();
});
