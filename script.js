var r=document.documentElement,b=document.getElementById('th');
try{var s=localStorage.getItem('t');if(s)r.setAttribute('data-theme',s)}catch(e){}
b.onclick=function(){var d=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');var n=d==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('t',n)}catch(e){}};