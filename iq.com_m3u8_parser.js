/*
script by zackmark29
https://github.com/zackmark29

v1.0.3 | 2022-11-13
*/
(function () {
    const movieInfo = playerObject.package.engine.movieinfo.current.vidl;
    movieInfo.forEach(async info => {
        var playlist = info.playlist;
        if (playlist) {
            const title = Sanitize(GetTitle());
            const fileSize = FormatBytes(info.vsize);
            const resolution = `${info.realArea.width}x${info.realArea.height}`;
            const fileName = `${title}${resolution}-[${fileSize}]`;
            var extension = "m3u8";

            // flv format
            if (Array.isArray(playlist)){
                alert("Segmented urls detected. Note: You should download each segment then combine");
                const urls = []
                const baseUrl = "https://data.video.iqiyi.com/videos";
                const results = await Promise.all(playlist.map(async url => {
                    const indexUrl = url.l;
                    const fullurl = baseUrl + indexUrl;
                    return (await fetch(fullurl)).json();
                }))
                
                // plain format
                results.forEach(u => { urls.push(u.l) });
                
                // aria2c format
                // results.forEach((url, i) => {
                //     const aria2cUrl = `${url.l}\n\tout=output_${i+1}.flv`
                //     urls.push(aria2cUrl)
                // })
                
                extension = "txt";
                playlist = urls.join("\n");
            }

            SaveToFile(playlist, fileName, extension);
        }
    });

    function SaveToFile(data, filename, extension) {
        var blob = new Blob([data], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${filename}.${extension}`;
        a.style.display = "none";
        a.click();
    }

    function GetTitle() {
        var rawTitle = document.getElementsByClassName("intl-play-title")[0].outerText;
        var parts = rawTitle.split('\n');
        var title = parts[0];
        if (rawTitle.toLowerCase().includes("episode")){
            var ep = rawTitle.match(/episode.[0-9]{1,3}/gi);
            if (ep != null)
                title += ep[0];
        }
        return title;
    }

    function FormatBytes(size) {
        var e = (Math.log(size) / Math.log(1e3)) | 0;
        return (+(size / Math.pow(1e3, e)).toFixed(2) + ("kMGTPEZY"[e - 1] || "") + "B" );
    }

    function Sanitize(title) {
        return title.replaceAll(" ", ".");
    }
})();