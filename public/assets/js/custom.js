$(document).ready(function(){
    $("#kesejahteraan_penduduk").show();
    $("#infrastruktur").hide();
    $("#fasilitas_umum").hide();
    // $('.modale-loader').addClass('opened');


});

function KesejahteraanPenduduk(){
    $("#kesejahteraan_penduduk").show();
    $("#infrastruktur").hide();
    $("#fasilitas_umum").hide();
}

function Infrastuktur(){
    $("#kesejahteraan_penduduk").hide();
    $("#infrastruktur").show();
    $("#fasilitas_umum").hide();
}

function FasilitasUmum(){
    $("#kesejahteraan_penduduk").hide();
    $("#infrastruktur").hide();
    $("#fasilitas_umum").show();
}

function openModalLogin() {
    // console.log({cat})
    var modal = document.getElementById("loginModal");
    modal.style.display = "block"; 

}


function openModalSlider(images) {
    // console.log({ images }) 
    var modal = document.getElementById("sliderImagesModal");
    // $('#info-images').html(tit)
    const splitImages = images.split(',')
    // console.log({splitImages})
    const divSlider = []
    const dotSlider = []

    for (let i = 0; i < splitImages.length; i++) {
        const ig = splitImages[i];
        // console.log({images})
        var display = (i == 0) ? 'block' : 'none'
        divSlider.push(`
        <div class="sliderImagesModal fade" style="display: ${display}; cursor: pointer; ">
            <img src="/images/${ig}" alt="image" class="img-slide-modal">
        </div>`)
        dotSlider.push(`<span class="doti" onclick="currentSlideModalLayer(${i})"></span> `)
    }

    const joinDivSlider = divSlider.join("")
    const joinDotSlider = dotSlider.join("")
    
    document.getElementById("images").innerHTML = joinDivSlider + `
    <a class="prev" onclick="plusSlidesModalLayer(-1)">❮</a>
    <a class="next" onclick="plusSlidesModalLayer(1)">❯</a>`;

    document.getElementById("dot-images").innerHTML = joinDotSlider

    modal.style.display = "block"; 

    
}

function closeModalLogin() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "none";
}

function closeModalSlider() {
    var modal = document.getElementById("sliderImagesModal");
    modal.style.display = "none";
}

function legenda(){
    var pad = document.getElementById('padukuhan');
    console.log('masuk padukuhan', {check: pad.checked})
    if (pad.checked == true){
        $("#legenda-padukuhan").show();
        $("#legenda").show();
        dragElement(document.getElementById("legenda-padukuhan"));

    }else{
        $("#legenda-padukuhan").hide();
        $("#legenda").hide();

    }
}

function legendaInfra(){
    var infra = document.getElementById('infra');
    console.log('masuk legenda infra', {check: infra.checked})

    if (infra.checked) {
        $("#legenda_infra").show();
        $("#info_jalan").show();
        dragElement(document.getElementById("info_jalan"));

    }else{
        $("#legenda_infra").hide();
        $("#info_jalan").hide();

    }
}

function legendaInfra2(){
    var infra = document.getElementById('infras');
    console.log('masuk legenda infra', {check: infra.checked})

    if (infra.checked) {
        $("#legenda-infrastruktur").show();
        $("#legenda-info-jalan").show();
        dragElement(document.getElementById("legenda-infrastruktur"));
        dragElement(document.getElementById("legenda-info-jalan"));

    }else{
        $("#legenda-infrastruktur").hide();
        $("#legenda-info-jalan").hide();

    }
}

function legendaPenggunaanLahan(){
    var penggunaan_lahan = document.getElementById('penggunaan_lahan');
    if (penggunaan_lahan.checked){
        $("#legenda_lahan").show();
        $("#persentase_lahan").show();
        dragElement(document.getElementById("persentase_lahan"));

    }else{
        $("#persentase_lahan").hide();
        $("#legenda_lahan").hide();

    }
}

function legendaRt(){
    var rt = document.getElementById('rt');
    if (rt.checked){
        $("#legenda-rt").show();
        $("#legenda_rt").show();
        dragElement(document.getElementById("legenda-rt"));

    }else{
        $("#legenda-rt").hide();
        $("#legenda_rt").hide();

    }
}

function legendaFasum(){
    var fasum = document.getElementById('fasum');
    if (fasum.checked) {
        // console.log('masuk fasum')
        $("#legenda_fasum").show();
        $("#legenda-fasum").show();
        // dragElement(document.getElementById("legenda_fasum"));
        dragElement(document.getElementById("legenda-fasum"));

    }else{
        $("#legenda_fasum").hide();
        $("#legenda-fasum").hide();

    }
}

function openMenuPamong() {
    console.log('masuk open menu')
    document.getElementById("myDropdown").classList.toggle("show");
}

function openMenuPamong2() {
    console.log('masuk open menu 2')
    document.getElementById("myDropdown2").classList.toggle("show");
}


function openTabsPamong(element) {
    switch (element) {
        case 'Pamong':
            document.getElementById('ListPamong').style.display = "block";
            document.getElementById('ListBPKal').style.display = "none";
            document.getElementById('ListLembaga').style.display = "none";
            document.getElementById('ListLPMKAL').style.display = "none";
            break;
        case 'BPKal':
            document.getElementById('ListPamong').style.display = "none";
            document.getElementById('ListBPKal').style.display = "block";
            document.getElementById('ListLembaga').style.display = "none";
            document.getElementById('ListLPMKAL').style.display = "none";
            break;
        case 'Lembaga':
            document.getElementById('ListPamong').style.display = "none";
            document.getElementById('ListBPKal').style.display = "none";
            document.getElementById('ListLembaga').style.display = "block";
            document.getElementById('ListLPMKAL').style.display = "none";
            break;
        case 'LPMKAL':
            document.getElementById('ListPamong').style.display = "none";
            document.getElementById('ListBPKal').style.display = "none";
            document.getElementById('ListLembaga').style.display = "none";
            document.getElementById('ListLPMKAL').style.display = "block";
            break;
        default:
            break;
    }
}

function closeLegenda(element) {
    $(element).hide();
}

function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    //   if (document.getElementById(elmnt.id + "header")) {
    //     /* if present, the header is where you move the DIV from:*/
    //     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    //   } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    //   }
    // console.log({elmnt, pos1, pos2, pos3, pos4});
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function openFormLogin(cat) {
    var host = window.location.origin; 
    console.log({host, cat})
    // window.open(host+"/login");
    sessionStorage.removeItem('login_cat')
    sessionStorage.setItem('login_cat', JSON.stringify(cat));
    // if (cat=='create') {
    //     sessionStorage.removeItem('login_cat')
    //     sessionStorage.setItem('login_cat', JSON.stringify(cat));

    //     window.open(`${host}/login`)
    // } else if (cat=='edit'){
    //     var query = sessionStorage.getItem("query_login")
    //     var qry= JSON.parse(query)

    //     window.open(`${host}/login?cat=${cat}&type=${qry.type}&id=${qry._id}`)
    // }

    window.open(`${host}`)
    // window.open(`${host}/maintenance`)

}

// collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}

// leaflet
var coords = [-7.73587735627273, 110.48429042100908]; // the geographic center of our map
var zoomLevel = 14; // the map scale. See: http://wiki.openstreetmap.org/wiki/Zoom_levels

var map = L.map('map', {
    zoomControl: false,
    fullscreenControl: true,
    fullscreenControlOptions: { // optional
        title:"Show me the fullscreen !",
        titleCancel:"Exit fullscreen mode"
    }
}).setView(coords, zoomLevel);
// const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
// L.tileLayer(mbUrl, { id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1 }).addTo(map);

// map.locate({setView: true, maxZoom: 19});
// map.locate({setView: true, maxZoom: 21});
L.control.zoom({ position: 'bottomleft' }).addTo(map);
L.control.scale({ position: 'bottomleft' }).addTo(map);

function init() {
    init.called = true;
}

// var marker = L.marker([-7.73587735627273, 110.48429042100908], {alt: 'Layers'}).on('click', onMarkerClick)
// marker.addTo(map)

// var test = L.marker([-7.7378860879538145, 110.47877311706544], {alt: 'Layers'}).on('click', onMarkerClick)
// test.addTo(map)
// const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHBpZHBsZXJldCIsImEiOiJjbDAzbGU0Z3oxM2ptM2NxZ3dvZHM5bzNtIn0.9IekgDvhS-fGVRbjE7oeeg';
// L.tileLayer(mbUrl, { id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1 }).addTo(map);
// L.tileLayer(mbUrl, { id: 'mapbox/satellite-streets-v11', tileSize: 512, zoomOffset: -1 }).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // maxZoom: 19,
    maxZoom: 21,
    attribution: '&copy; Tamanmartani'
}).addTo(map);

map.on('enterFullscreen', function(){
    if(window.console) window.console.log('enterFullscreen');
});
map.on('exitFullscreen', function(){
    if(window.console) window.console.log('exitFullscreen');
});

var mapInfo = document.getElementById("map-info");
var mapInfoLahan = document.getElementById("map-info-lahan");
var mapPamong = document.getElementById("map-pamong");
var legendaPadukuhan = document.getElementById("legenda-padukuhan");
var legendaInfrastruktur2 = document.getElementById("legenda-infrastruktur");
var legendaFasum2 = document.getElementById("legenda-fasum");
var legendaInfoJalan2 = document.getElementById("legenda-info-jalan");
var legendaRt2 = document.getElementById("legenda-rt");

var mapPane = document.querySelector(".leaflet-map-pane");

var rxTranslate = /translate(?:3d)?\(([^\)]+)\)/i;

mapPane.appendChild(mapInfo);
mapPane.appendChild(mapInfoLahan);
mapPane.appendChild(mapPamong);
mapPane.appendChild(legendaPadukuhan);
mapPane.appendChild(legendaInfrastruktur2);
mapPane.appendChild(legendaFasum2);
mapPane.appendChild(legendaInfoJalan2);
mapPane.appendChild(legendaRt2);

var observer = new MutationObserver(function(mutations) {
    if (mutations.some(m => m.attributeName === "style")) {
        // apply an inverse transform
        mapInfo.style.transform = "translate(" + mapPane
        .style
        .transform
        .match(rxTranslate)[1]
        .split(",")
        .slice(0, 2) /* extract only x and y; discard z */
        .map(n => parseFloat(n) * -1 + "px") /* invert values */ + ")";
        
        mapInfoLahan.style.transform = "translate(" + mapPane
        .style
        .transform
        .match(rxTranslate)[1]
        .split(",")
        .slice(0, 2) /* extract only x and y; discard z */
        .map(n => parseFloat(n) * -1 + "px") /* invert values */ + ")";
        
        mapPamong.style.transform = "translate(" + mapPane
        .style
        .transform
        .match(rxTranslate)[1]
        .split(",")
        .slice(0, 2) /* extract only x and y; discard z */
        .map(n => parseFloat(n) * -1 + "px") /* invert values */ + ")";
        
        // legendaPadukuhan.style.transform = "translate(" + mapPane
        // .style
        // .transform
        // .match(rxTranslate)[1]
        // .split(",")
        // .slice(0, 2) /* extract only x and y; discard z */
        // .map(n => parseFloat(n) * -1 + "px") /* invert values */ + ")";
    }
});

observer.observe(mapPane, {
    attributes: true
});
