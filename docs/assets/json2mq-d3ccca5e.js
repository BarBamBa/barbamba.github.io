import{c as f}from"./string-convert-c60507dd.js";var s=f,c=function(n){var r=/[height|width]$/;return r.test(n)},a=function(n){var r="",o=Object.keys(n);return o.forEach(function(i,e){var t=n[i];i=s(i),c(i)&&typeof t=="number"&&(t=t+"px"),t===!0?r+=i:t===!1?r+="not "+i:r+="("+i+": "+t+")",e<o.length-1&&(r+=" and ")}),r},h=function(n){var r="";return typeof n=="string"?n:n instanceof Array?(n.forEach(function(o,i){r+=a(o),i<n.length-1&&(r+=", ")}),r):a(n)},v=h;export{v as j};
