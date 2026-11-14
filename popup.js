'use strict';
const DexAPI=typeof browser!=='undefined'?browser:chrome;
document.querySelector('#open').addEventListener('click',()=>DexAPI.tabs.create({url:'https://poke.idleworld.online/play'}));
document.querySelector('#help').addEventListener('click',()=>DexAPI.tabs.create({url:DexAPI.runtime.getURL('manual.html')}));
