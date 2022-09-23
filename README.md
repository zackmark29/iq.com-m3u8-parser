# IQ.COM M3U8 PARSER/SAVER

---

## CHANGELOGS

**[2022-09-23]**

- Fixed getting the correct title

**[2022-05-21]**

- Fixed getting m3u8 content and title
- Updated bookmarklet version

---

## INSTRUCTIONS

- Import the bookmarklet in your browser bookmarks
- Play video and set first the resolution you want to save.  
(Note: only current resolution will be save. So make sure to set first)
- Now click the bookmarklet I made or just copy the whole code to your console if you want

```javascript
javascript:var%20%24jscomp%3D%24jscomp%7C%7C%7B%7D%3B%24jscomp.scope%3D%7B%7D%3B%24jscomp.createTemplateTagFirstArg%3Dfunction(a)%7Breturn%20a.raw%3Da%7D%3B%24jscomp.createTemplateTagFirstArgWithRaw%3Dfunction(a%2Cc)%7Ba.raw%3Dc%3Breturn%20a%7D%3B(function()%7BplayerObject%5B%22package%22%5D.engine.movieinfo.current.vidl.forEach(function(a)%7Bif(a.playlist)%7Bvar%20c%3Da.playlist%2Cb%3Ddocument.getElementById(%22h5OrderInfo%22).innerText.replaceAll(%22%20%22%2C%22.%22)%3Bvar%20d%3Da.vsize%3Bvar%20e%3DMath.log(d)%2FMath.log(1E3)%7C0%3Bd%3D%2B(d%2FMath.pow(1E3%2Ce)).toFixed(2)%2B(%22kMGTPEZY%22%5Be-1%5D%7C%7C%22%22)%2B%22B%22%3Ba%3Db%2B%22.%22%2B(a.realArea.width%2B%22x%22%2Ba.realArea.height)%2B%22.H264.%5B%22%2Bd%2B%22%5D.m3u8%22%3Bc%3Dnew%20Blob(%5Bc%5D%2C%7Btype%3A%22text%2Fplain%22%7D)%3Bb%3Ddocument.createElement(%22a%22)%3Bb.href%3DURL.createObjectURL(c)%3Bb.download%3Da%3Bb.style.display%3D%22none%22%3Bb.click()%7D%7D)%7D)()%3Bvoid+0
```
