# IQ.COM M3U8 PARSER/SAVER

---

## INSTRUCTIONS

- Import the bookmarklet into your browser bookmarks (Or select all the code below and drag and drop into your bookmark bar)
- Play video and set first the resolution you want to save.  
(Note: only current resolution will be save. So make sure to set first)
- Now click the bookmarklet I made or just copy the whole code to your console if you want

```javascript
javascript:void%20function(){(function(){function%20a(b,c){var%20d=new%20Blob([b],{type:%22text/plain%22});let%20e=document.createElement(%22a%22);e.href=URL.createObjectURL(d),e.download=c,e.style.display=%22none%22,e.click()}function%20b(a){return%20document.getElementById(a).innerText}function%20c(a){var%20b=Math.log,c=0|b(a)/b(1e3);return+(a/Math.pow(1e3,c)).toFixed(2)+(%22kMGTPEZY%22[c-1]||%22%22)+%22B%22}var%20d=playerObject.package.engine.movieinfo.current.vidl;d.forEach(function(d){if(d.m3u8){var%20e=d.m3u8,f=b(%22pageMetaTitle%22),g=c(d.vsize),h=`${d.realArea.width}x${d.realArea.height}`;a(e,`${f}.${h}.H264.[${g}].m3u8`)}})})()}();" ADD_DATE="" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVQ4jZWTu04DQQxFj6NlJw0FJYI+pECioeMHePwF/Ba/EIpNaCl4dCAkJMSr5VFBQ5GNNHMpstn1rkQRS5Y9nvH1le2x8MY+ximwznLyiTi28MYHYh0DBFhtnNPxm/Mn4RVNfgstK5PfQuEFWf6EyoHovxhyVUxVpS6jSqYD0X82LH9EWJXg6NZv/Z2zC7dngnJLKMFoo2C6JUabBZaA1NxNO7Yczm2mWFWKcLB6RHgwyu35ZS2Vb7F9JkFGhHDftNccYDemLlCEHhHKHdWocugLEEUIt0a5I8KdIcckqxO7laNrZHQNdsyIkHla5z9jyl3VgPVQkvNdnASWX/vpzqueDQsO144IN9YErWHkJ2orl2i2J/Iray1Ka207SQBllZORYPI9ZrYnlpHJ9xhLYPkFH/rvJ3Y/kGcjMPjqRXFiiS+qzWupGjUX01zfIxz/Adex7u0zjjctAAAAAElFTkSuQmCC
```
---
