'use strict'
var secretRevealed=false
var doSecretReveal
var resetSecretReveal
doSecretReveal=function(){document.body.className=document.body.className.replace('is-offset','')
window.scroll(0,window.scrollY+195)
secretRevealed=true}
resetSecretReveal=function(){if(secretRevealed){document.body.className+=' is-offset'
window.scroll(0,Math.max(window.scrollY-195,0))}}
document.addEventListener('DOMContentLoaded',function(){setTimeout(doSecretReveal,3000)})
window.addEventListener('beforeunload',function(){resetSecretReveal()})