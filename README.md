# IQ.COM M3U8 PARSER/SAVER

---

## CHANGELOGS

### `[2023-05-20]`

- (Optional) Save segments as aria2c for flv playlist format
- Support new playlist format (which able to build the segments and save as m3u8)
- Now support multiple formats of media playlists, not just M3U8
- Updated bookmarklet

### `[2022-11-13]`

- Support segmented url (flv format) then save as txt file
  - e.g. <https://www.iq.com/play/%E8%80%81%E5%B8%AB%E6%99%9A%E4%B8%8A%E5%A5%BD-episode-1-19rrljrmxs?lang=en_us># (need taiwan IP)
  - You could also uncomment from line 32 (then comment line 30) if you want aria2c download format
  - `NOTE`: You must download each segment first then merge.
- Alert if segmented detected
- Updated bookmarklet

### `[2022-09-23]`

- Fixed getting the correct title

### `[2022-05-21]`

- Fixed getting m3u8 content and title
- Updated bookmarklet version

---

## INSTRUCTIONS

- Import the bookmarklet in your browser bookmarks
- Play video and set first the resolution you want to save.  
(Note: only current resolution will be save. So make sure to set first)
- Now click the bookmarklet I made
  - or just copy the whole code to your console then hit enter 
  - or you could drag and drop this javascript code below into your bookmarks bar

```javascript
javascript:void%20function(){(function(){function%20a(b,c,d){var%20e=new%20Blob([b],{type:%22text/plain%22});let%20f=document.createElement(%22a%22);f.href=URL.createObjectURL(e),f.download=`${c}.${d}`,f.style.display=%22none%22,f.click()}function%20b(){var%20a=document.getElementsByClassName(%22intl-play-title%22)[0].outerText,b=a.split(%22\n%22),c=b[0];if(a.toLowerCase().includes(%22episode%22)){var%20d=a.match(/episode.[0-9]{1,3}/gi);null!=d%26%26(c+=d[0])}return%20c}function%20c(a){var%20b=Math.log,c=0|b(a)/b(1e3);return+(a/Math.pow(1e3,c)).toFixed(2)+(%22kMGTPEZY%22[c-1]||%22%22)+%22B%22}function%20d(a){return%20a.replaceAll(%22%20%22,%22.%22)}const%20e=playerObject.package.engine.movieinfo.current.vidl;e.forEach(async%20e=%3E{var%20f=e.playlist;if(f){const%20h=d(b()),i=c(e.vsize),j=`${e.realArea.width}x${e.realArea.height}`;var%20g=%22m3u8%22;if(Array.isArray(f)){alert(%22Segmented%20urls%20detected.%20Note:%20You%20should%20download%20each%20segment%20then%20combine%22);const%20a=[],b=await%20Promise.all(f.map(async%20a=%3E{const%20b=a.l;return(await%20fetch(%22https://data.video.iqiyi.com/videos%22+b)).json()}));b.forEach(b=%3E{a.push(b.l)}),g=%22txt%22,f=a.join(%22\n%22)}a(f,`${h}${j}-[${i}]`,g)}})})()}();
```

- if you want to edit the js codes, you can convert it to bookmarklet here: <https://chriszarate.github.io/bookmarkleter/>
