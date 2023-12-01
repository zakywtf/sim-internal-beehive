// var process.env.BASE_URL = process.env.BASE_process.env.BASE_URL

async function progressLoader(url) {

}

async function padukuhanPucung() {
    var pad = document.getElementById('padukuhanPucung');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Pucung.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanCaturharjo(){
    var pad = document.getElementById('padukuhanCaturharjo');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Caturharjo.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanCageran(){
    var pad = document.getElementById('padukuhanCageran');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Cageran.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanDalem(){
    var pad = document.getElementById('padukuhanDalem');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Dalem.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanKebon(){
    var pad = document.getElementById('padukuhanKebon');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Kebon.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanKenaji(){
    var pad = document.getElementById('padukuhanKenaji');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Kenaji.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanTamananPabrik(){
    var pad = document.getElementById('padukuhanTamananPabrik');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/TamananPabrik.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanTamanan(){
    var pad = document.getElementById('padukuhanTamanan');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Tamanan.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanCarikan(){
    var pad = document.getElementById('padukuhanCarikan');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Carikan.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanKlurak(){
    var pad = document.getElementById('padukuhanKlurak');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Klurak.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanKarangmojo(){
    var pad = document.getElementById('padukuhanKarangmojo');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Karangmojo.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanBogem(){
    var pad = document.getElementById('padukuhanBogem');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Bogem.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanKepatihan(){
    var pad = document.getElementById('padukuhanKepatihan');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Kepatihan.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanRandugunting(){
    var pad = document.getElementById('padukuhanRandugunting');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Randugunting.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanKowang(){
    var pad = document.getElementById('padukuhanKowang');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Kowang.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanKeniten(){
    var pad = document.getElementById('padukuhanKeniten');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Keniten.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanPakem(){
    var pad = document.getElementById('padukuhanPakem');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Pakem.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanJongkangan(){
    var pad = document.getElementById('padukuhanJongkangan');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Jongkangan.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanTegalrejo(){
    var pad = document.getElementById('padukuhanTegalrejo');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Tegalrejo.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanRinginsari(){
    var pad = document.getElementById('padukuhanRinginsari');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Ringinsari.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanTulung(){
    var pad = document.getElementById('padukuhanTulung');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Tulung.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}

async function padukuhanSentono(){
    var pad = document.getElementById('padukuhanSentono');
    if (pad.checked){
        var response = await fetch('https://tamanmartani.beehivedrones.com/citra_drone_padukuhan/Sentono.tif');
        const file = await response.blob();
        
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = function () {
            var arrayBuffer = reader.result;
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("rgb_raster:", georaster);
                var layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8,
                    resolution: 512
                });
                console.log("layer:", layer);
                layer.addTo(map);
                
            });
        };
    }else{
        // sessionStorage.removeItem('peta_dasar')
        // getFile(false)
        location.reload()
    }
}