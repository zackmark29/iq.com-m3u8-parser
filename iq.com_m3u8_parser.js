/*
script by zackmark29
https://github.com/zackmark29

v1.0.1 | 2022-05-21
*/
(function () {
    var movieInfo = playerObject.package.engine.movieinfo.current.vidl;
    movieInfo.forEach(function (i) {
        if (i.playlist) {
            var m3u8Content = i.playlist;
            var title = Sanitize(GetTitle("h5OrderInfo"));
            var fileSize = FormatBytes(i.vsize);
            var resolution = `${i.realArea.width}x${i.realArea.height}`;
            var fileName = `${title}.${resolution}.H264.[${fileSize}].m3u8`;

            SaveToFile(m3u8Content, fileName);
        }
    });
    
    function SaveToFile(data, filename) {
        var blob = new Blob([data], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.style.display = "none";
        a.click();
    }

    function GetTitle(id) {
        return document.getElementById(id).innerText;
    }

    function FormatBytes(size) {
        var e = (Math.log(size) / Math.log(1e3)) | 0;
        return (+(size / Math.pow(1e3, e)).toFixed(2) + ("kMGTPEZY"[e - 1] || "") + "B" );
    }

    function Sanitize(title) {
        return title.replaceAll(" ", ".");
    }
})();