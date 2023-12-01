// var getGeojson = sessionStorage.getItem("geojson")
// var geojson = JSON.parse(getGeojson)
// var data_geojson = {
//     "type": "FeatureCollection",
//     "features": geojson
// }

// var data_geojson = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {
//                 'title':'Rumah Saya',
//                 'description':'Test Rumah Saya',
//                 'marker':'sd'
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [110.48429042100908, -7.73587735627273]
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 'title':'Rumah 2',
//                 'description':'Test Rumah Kedua',
//                 'marker':'mall'
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [110.47877311706544, -7.7378860879538145]
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 'title':'Dusun 1',
//                 'description':'Test Dusun 1 Description'
//             },
//             "geometry": {
//                 "type": "Polygon",
//                 "coordinates": [
//                     [
//                         [110.47362327575685, -7.739591508246672],
//                         [110.47654151916505, -7.739761658541237],
//                         [110.47645568847658, -7.743930319302126],
//                         [110.47353744506837, -7.743249724443463]
//                     ]
//                 ]
//             }
//         }
//     ]
// }

var host = window.location.origin;
// console.log({host})
$.ajax({
    type: "GET",
    // url: host + "/api/v1/fetch/infrastructure",
    url: host + "/api/v1/fetch/layers",
    dataType: "json",
    success: function(datas){
        // console.log(datas);
        sessionStorage.removeItem('peta_dasar')
        sessionStorage.setItem('peta_dasar', JSON.stringify(datas.peta_dasar));

        var dataGeojson = datas.data
        let checkboxStates

        const geojsonLayer = L.geoJSON(null, {
            style: function (feature) {
                // console.log({ marker :  feature.properties});
                if (feature.properties.marker == 'kalurahan') {
                    var color = '#ffffff'
                } else if (feature.properties.marker == 'KOWANG') {
                    var color = '#d9d2e9'
                } else if (feature.properties.marker == 'RANDUGUNTING') {
                    var color = '#bbd3fc'
                } else if (feature.properties.marker == 'PUCUNG') {
                    var color = '#e6afaf'
                } else if (feature.properties.marker == 'CATURHARJO') {
                    var color = '#cfe2f3'
                } else if (feature.properties.marker == 'CAGERAN') {
                    var color = '#fbf5b0'
                } else if (feature.properties.marker == 'DALEM') {
                    var color = '#efc4f9'
                } else if (feature.properties.marker == 'KEBON') {
                    var color = '#bcebd7'
                } else if (feature.properties.marker == 'KENAJI') {
                    var color = '#f6bb9f'
                } else if (feature.properties.marker == 'TAMANAN PABRIK') {
                    var color = '#fff2cc'
                } else if (feature.properties.marker == 'TAMANAN') {
                    var color = '#bcebf4'
                } else if (feature.properties.marker == 'CARIKAN') {
                    var color = '#f4d0cc'
                } else if (feature.properties.marker == 'KLURAK') {
                    var color = '#e8ffa2'
                } else if (feature.properties.marker == 'KARANGMOJO') {
                    var color = '#b5d4f1'
                } else if (feature.properties.marker == 'BOGEM') {
                    var color = '#fce5cd'
                } else if (feature.properties.marker == 'KEPATIHAN') {
                    var color = '#f4a3ba'
                } else if (feature.properties.marker == 'KENITEN') {
                    var color = '#e1ead3'
                } else if (feature.properties.marker == 'PAKEM') {
                    var color = '#fbd0a7'
                } else if (feature.properties.marker == 'JONGKANGAN') {
                    var color = '#9acdfb'
                } else if (feature.properties.marker == 'TEGALREJO') {
                    var color = '#efb4a8'
                } else if (feature.properties.marker == 'RINGINSARI') {
                    var color = '#c1f4ae'
                } else if (feature.properties.marker == 'TULUNG') {
                    var color = '#f7bad5'
                } else if (feature.properties.marker == 'SENTONO') {
                    var color = '#d4baf1'
                } else if (feature.properties.marker == 'Tambak') {
                    var color = '#6d9eeb'
                } else if (feature.properties.marker == 'Sawah') {
                    var color = '#31d45d'
                } else if (feature.properties.marker == 'Permukiman') {
                    var color = '#d26509'
                } else if (feature.properties.marker == 'Hutan') {
                    var color = '#0b9630'
                } else if (feature.properties.marker == 'Lain') {
                    var color = 'gray'
                } else if (feature.properties.marker == 'Lokal') {
                    var color = '#0000ff'
                } else if (feature.properties.marker == 'Kolektor') {
                    var color = '#00ff00'
                } else if (feature.properties.marker == 'Arteri') {
                    var color = '#ffff00'
                } else if (feature.properties.marker == 'Rel Kereta Api') {
                    var color = '#ff0000'
                } else if (feature.properties.marker == 'Jembatans') {
                    var color = '#bcebd7'
                    // var color = 'red'
                } else if (feature.properties.marker == 'irigasi_layers') {
                    // var color = '#aad3df'
                    var color = '#59b8f7'
                }   else if (feature.properties.marker == 'Pucung_01' || feature.properties.marker == 'Pucung_02' || feature.properties.marker == 'Pucung_03' || feature.properties.marker == 'Pucung_04' || feature.properties.marker == 'Pucung_05') {
                    var color = '#ae1818'
                } else if (feature.properties.marker == 'Caturharjo_01' || feature.properties.marker == 'Caturharjo_02' || feature.properties.marker == 'Caturharjo_03' || feature.properties.marker == 'Caturharjo_04' || feature.properties.marker == 'Caturharjo_05') {
                    var color = '#034a89'
                } else if (feature.properties.marker == 'Cageran_01' || feature.properties.marker == 'Cageran_02' || feature.properties.marker == 'Cageran_03' || feature.properties.marker == 'Cageran_04' || feature.properties.marker == 'Cageran_05' || feature.properties.marker == 'Cageran_06' || feature.properties.marker == 'Cageran_07' || feature.properties.marker == 'Cageran_08') {
                    var color = '#baab00'
                } else if (feature.properties.marker == 'Dalem_01' || feature.properties.marker == 'Dalem_02' || feature.properties.marker == 'Dalem_03' || feature.properties.marker == 'Dalem_04') {
                    var color = '#834e90'
                } else if (feature.properties.marker == 'Kebon_01' || feature.properties.marker == 'Kebon_02' || feature.properties.marker == 'Kebon_03' || feature.properties.marker == 'Kebon_04' || feature.properties.marker == 'Kebon_05') {
                    var color = '#527f6c'
                } else if (feature.properties.marker == 'Kenaji_01' || feature.properties.marker == 'Kenaji_02' || feature.properties.marker == 'Kenaji_03' || feature.properties.marker == 'Kenaji_04' || feature.properties.marker == 'Kenaji_05' || feature.properties.marker == 'Kenaji_06' || feature.properties.marker == 'Kenaji_07' || feature.properties.marker == 'Kenaji_08') {
                    var color = '#a96341'
                } else if (feature.properties.marker == 'Tamanan Pabrik_01' || feature.properties.marker == 'Tamanan Pabrik_02' || feature.properties.marker == 'Tamanan Pabrik_03' || feature.properties.marker == 'Tamanan Pabrik_04' || feature.properties.marker == 'Tamanan Pabrik_05') {
                    var color = '#d0ac40'
                } else if (feature.properties.marker == 'Tamanan_01' || feature.properties.marker == 'Tamanan_02' || feature.properties.marker == 'Tamanan_03' || feature.properties.marker == 'Tamanan_04' || feature.properties.marker == 'Tamanan_05' || feature.properties.marker == 'Tamanan_06' || feature.properties.marker == 'Tamanan_07' || feature.properties.marker == 'Tamanan_08' || feature.properties.marker == 'Tamanan_09') {
                    var color = '#4994a2'
                } else if (feature.properties.marker == 'Carikan_01' || feature.properties.marker == 'Carikan_02' || feature.properties.marker == 'Carikan_03' || feature.properties.marker == 'Carikan_04' || feature.properties.marker == 'Carikan_05') {
                    var color = '#806d6b'
                } else if (feature.properties.marker == 'Klurak_01' || feature.properties.marker == 'Klurak_02' || feature.properties.marker == 'Klurak_03' || feature.properties.marker == 'Klurak_04' || feature.properties.marker == 'Klurak_05') {
                    var color = '#89a437'
                } else if (feature.properties.marker == 'Karangmojo_01' || feature.properties.marker == 'Karangmojo_02' || feature.properties.marker == 'Karangmojo_03' || feature.properties.marker == 'Karangmojo_04') {
                    var color = '#356089'
                } else if (feature.properties.marker == 'Bogem_01' || feature.properties.marker == 'Bogem_02' || feature.properties.marker == 'Bogem_03' || feature.properties.marker == 'Bogem_04' || feature.properties.marker == 'Bogem_05' || feature.properties.marker == 'Bogem_06' || feature.properties.marker == 'Bogem_07' || feature.properties.marker == 'Bogem_08' || feature.properties.marker == 'Bogem_09') {
                    var color = '#965a1c'
                } else if (feature.properties.marker == 'Kepatihan_01' || feature.properties.marker == 'Kepatihan_02' || feature.properties.marker == 'Kepatihan_03' || feature.properties.marker == 'Kepatihan_04' || feature.properties.marker == 'Kepatihan_05' || feature.properties.marker == 'Kepatihan_06') {
                    var color = '#7a1e38'
                } else if (feature.properties.marker == 'Randugunting_01' || feature.properties.marker == 'Randugunting_02' || feature.properties.marker == 'Randugunting_03' || feature.properties.marker == 'Randugunting_04' || feature.properties.marker == 'Randugunting_05' || feature.properties.marker == 'Randugunting_06' || feature.properties.marker == 'Randugunting_07' || feature.properties.marker == 'Randugunting_08') {
                    var color = '#14408b'
                } else if (feature.properties.marker == 'Kowang_01' || feature.properties.marker == 'Kowang_02' || feature.properties.marker == 'Kowang_03' || feature.properties.marker == 'Kowang_04' || feature.properties.marker == 'Kowang_05' || feature.properties.marker == 'Kowang_06') {
                    var color = '#31088e'
                } else if (feature.properties.marker == 'Keniten_01' || feature.properties.marker == 'Keniten_02' || feature.properties.marker == 'Keniten_03' || feature.properties.marker == 'Keniten_04' || feature.properties.marker == 'Keniten_05' || feature.properties.marker == 'Keniten_06') {
                    var color = '#456316'
                } else if (feature.properties.marker == 'Pakem_01' || feature.properties.marker == 'Pakem_02' || feature.properties.marker == 'Pakem_03' || feature.properties.marker == 'Pakem_04' || feature.properties.marker == 'Pakem_05' || feature.properties.marker == 'Pakem_06') {
                    var color = '#733f0e'
                } else if (feature.properties.marker == 'Jongkangan_01' || feature.properties.marker == 'Jongkangan_02' || feature.properties.marker == 'Jongkangan_03' || feature.properties.marker == 'Jongkangan_04' || feature.properties.marker == 'Jongkangan_05') {
                    var color = '#215380'
                } else if (feature.properties.marker == 'Tegalrejo_01' || feature.properties.marker == 'Tegalrejo_02' || feature.properties.marker == 'Tegalrejo_03' || feature.properties.marker == 'Tegalrejo_04' || feature.properties.marker == 'Tegalrejo_05' || feature.properties.marker == 'Tegalrejo_06') {
                    var color = '#7f2c1b'
                } else if (feature.properties.marker == 'Ringinsari_01' || feature.properties.marker == 'Ringinsari_02' || feature.properties.marker == 'Ringinsari_03' || feature.properties.marker == 'Ringinsari_04' || feature.properties.marker == 'Ringinsari_05') {
                    var color = '#3f6e2e'
                } else if (feature.properties.marker == 'Tulung_01' || feature.properties.marker == 'Tulung_02' || feature.properties.marker == 'Tulung_03' || feature.properties.marker == 'Tulung_04') {
                    var color = '#730737'
                } else if (feature.properties.marker == 'Sentono_01' || feature.properties.marker == 'Sentono_02' || feature.properties.marker == 'Sentono_03' || feature.properties.marker == 'Sentono_04' || feature.properties.marker == 'Sentono_05') {
                    var color = '#5c10b2'
                }

                return { 
                    fillColor: color,
                    weight: 6,
                    opacity: (feature.properties.marker == 'kalurahan') ? 0.9 : 1,
                    color: color,  //Outline color
                    fillOpacity: (feature.properties.marker == 'kalurahan') ? 0.9 : 0.5
                };
            },
            onEachFeature: onEachFeature,
            filter: (feature) => {
                const isPointChecked = checkboxStates.points.includes(feature.properties.category)
                // const isAdministratifChecked = checkboxStates.administratifs.includes(feature.properties.category)
                return isPointChecked 
            }
        }).addTo(map)

        function updateCheckboxStates() {
            checkboxStates = {
                points: [],
                administratifs: []
            }
            console.log({checkboxStates})
            for (let input of document.querySelectorAll('input')) {
                if(input.checked) {
                    switch (input.className) {
                        case 'point': checkboxStates.points.push(input.value); break
                        case 'administratif': checkboxStates.administratifs.push(input.value); break
                    }
                }
            }
        }


        for (let input of document.querySelectorAll('input')) {
            //Listen to 'change' event of all inputs
            input.onchange = (e) => {
                geojsonLayer.clearLayers()
                updateCheckboxStates()
                geojsonLayer.addData(dataGeojson)   
            }
        }


        /****** INIT ******/
        updateCheckboxStates()
        geojsonLayer.addData(dataGeojson)

        async function whenClicked(e) {
            // e = event
            console.log({props: e});
            // You can make your ajax call declaration here
            //$.ajax(...
            // if (e.target.feature.properties.category == 'dusun') {
            if (e.category == 'kalurahan') {
                return descPamong(e)
            } else if (e.category == 'dusun') {
                return descDusun(e)
            } else if (e.category == 'farmer_land') {
                // console.log({cat: e.category});
                return descLahanPetani(e)

            }else {
                return descPoint(e)
            }
        }

        async function onEachFeature(feature, layer) {
            //bind click
            // console.log({feature, layer})

            if (feature.properties.marker == 'paud' || feature.properties.marker == 'tk' || feature.properties.marker == 'sd' || feature.properties.marker == 'smp' || feature.properties.marker == 'sma' || feature.properties.marker == 'sanggar_kesenian') {
                layer.setIcon(fasilitas_pendidikan)
            }
            else if (feature.properties.marker == 'kesejahteraan_penduduk') {
                layer.setIcon(kesejahteraan_penduduk)
            }
            else if (feature.properties.marker == 'Sumur Resapan') {
                layer.setIcon(sumur_resapan)
            }
            else if (feature.properties.marker == 'Jalan' || feature.properties.marker == 'jalan') {
                layer.setIcon(jalan)
            }
            else if (feature.properties.marker == 'Jembatan' || feature.properties.marker == 'jembatan') {
                layer.setIcon(jembatan)
            }
            else if (feature.properties.marker == 'masjid' || feature.properties.marker == 'gereja') {
                layer.setIcon(tempat_ibadah)
            }
            else if (feature.properties.marker == 'balai_desa' || feature.properties.marker == 'balai_dusun' || feature.properties.marker == 'balai_kelurahan' || feature.properties.marker == 'pdam') {
                layer.setIcon(fasilitas_sosial)
            }
            else if (feature.properties.marker == 'taman' || feature.properties.marker == 'area_wisata' || feature.properties.marker == 'rth') {
                layer.setIcon(tempat_wisata)
            }
            else if (feature.properties.marker == 'puskesmas' || feature.properties.marker == 'rs' || feature.properties.marker == 'apotek') {
                layer.setIcon(fasilitas_kesehatan)
            }
            else if (feature.properties.marker == 'gor' || feature.properties.marker == 'lapangan') {
                layer.setIcon(fasilitas_olahraga)
            }
            else if (feature.properties.marker == 'supermarket' || feature.properties.marker == 'pasar' || feature.properties.marker == 'mall' || feature.properties.marker == 'umkm' || feature.properties.marker == 'restoran' || feature.properties.marker == 'spbu') {
                layer.setIcon(fasilitas_perbelanjaan)
            }
            else if (feature.properties.marker == 'bank' || feature.properties.marker == 'koperasi' || feature.properties.marker == 'atm') {
                layer.setIcon(fasilitas_keuangan)
            }
            else if (feature.properties.marker == 'Irigasi' || feature.properties.marker == 'irigasi') {
                layer.setIcon(irigasi)
            }
            else if (feature.properties.marker == 'cagar_budaya') {
                layer.setIcon(cagar_budaya)
            }
            else if (feature.properties.marker == 'kolam_renang') {
                layer.setIcon(kolam_renang)
            }
            else if (feature.properties.marker == 'makam') {
                layer.setIcon(makam)
            }
            else if (feature.properties.marker == 'poskamling') {
                layer.setIcon(poskamling)
            }
            else if (feature.properties.marker == 'sanggar_kesenian') {
                layer.setIcon(sanggar_kesenian)
            }
            else if (feature.properties.marker == 'wc_umum') {
                layer.setIcon(wc_umum)
            }
            else if (feature.properties.marker == 'non-lbs') {
                layer.setIcon(non_lbs)
            }
            else if (feature.properties.marker == 'lbs') {
                layer.setIcon(lbs)
            }
            else if (feature.properties.marker == 'farmer_land') {
                layer.setIcon(lbs)
            }
            layer.on({
                click:
                    async function () {
                        await whenClicked(feature.properties)
                    }
            });
            layer.bindTooltip(feature.properties.title);
            // if (feature.properties.marker == 'Rel Kereta Api') {
            //     layer.on('click', function () {
            //         layer.bindPopup('Hello world!')
            //     })
            // }
            // console.log({layer})
        }

        
    },
    error: function(errMsg) {
        console.log('New Error : '+errMsg);
    }
});

function descDusun(e) {
    // console.log({ feat: e })
    const { _id, title, description, marker, luas, foto_kades, kepala_desa, phone } = e
    const large = (luas == null || luas == "") ? '-' : luas + ' Hektar'
    const name = (kepala_desa == null || kepala_desa == "") ? '-' : kepala_desa
    const hp = (phone == null || phone == "") ? '-' : phone
    const img = (foto_kades == null || foto_kades == "") ? '/assets/images/avatar-kades.jpeg' : '/foto_kades/' + foto_kades
    
    // document.getElementById("image-dukuh").innerHTML = `<img src="${img}" alt="image" class="img-padukuhan">`            
    $('#card-title').html(title)
    $("#card-info").html(`
    <table style="line-height: 28px;">
        <tr>
            <td colspan="3">
                <img src="${img}" alt="image" class="img-padukuhan">
            </td>
        </tr>
        <tr>
            <td>Nama Kepala Padukuhan</td>
            <td>:</td>
            <td><b>${name}</b></td>
        </tr>
        <tr>
            <td>Nomor HP</td>
            <td>:</td>
            <td>${hp}</td>
        </tr>
        <tr>
            <td>Luas Padukuhan</td>
            <td>:</td>
            <td>${large}</td>
        </tr>
        <tr>
            <td>Keterangan</td>
            <td>:</td>
            <td>PADUKUHAN ${title}</td>
        </tr>
    </table>
    <br/>
    `);
    $('#map-info').show();
    init();
}

function badgeOwnershipLand(string) {
    var badge
    switch (string) {
        case 'Lahan Milik':
            badge = `<span style="color:#fff;background-color:#28a745; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Lahan Milik</span>`
            break;
        case 'Tanah Kas Desa':
            badge = `<span style="color:#212529;background-color:#ffc107; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Tanah Kas Desa</span>`  
            break;
        case 'Sewa':
            badge = `<span style="color:#fff;background-color:#dc3545; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Sewa</span>`
            break;
    
        default:
            break;
    }

    return badge
}

function prettyDate(dateString){
    //if it's already a date object and not a string you don't need this line:
    if (dateString == '-') {
        return '-'
    } else {
        var date = new Date(dateString);
        var d = date.getDate();
        var monthNames = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];
        var m = monthNames[date.getMonth()];
        var y = date.getFullYear();
        var ss = date.getSeconds();
        var mm = date.getMinutes();
        var hh = date.getHours();
        return d+' '+m+' '+y;
    }
}

function badgeStatusActivityPlan(string) {
    var badge
    switch (string) {
        case 'sesuai':
            badge = `<span style="color:#fff;background-color:#28a745; border-radius:50px; margin-left:auto; line-height:1; padding:4px 8px; vertical-align:middle; font-weight:300; font-size:11px; border:1px solid #ddd">Sesuai</span>`
            break;
        case 'tdk_sesuai':
            badge = `<span style="color:#fff;background-color:#dc3545; border-radius:50px; margin-left:auto; line-height:1; padding:4px 8px; vertical-align:middle; font-weight:300; font-size:11px; border:1px solid #ddd">Tidak Sesuai</span>`  
            break;
    
        default:
            badge = '-'
            break;
    }

    return badge
}

function descLahanPetani(e) {
    // console.log({ e })
    const { _id, title, farmer_name, large, ownership_status, land_use, address, details } = e
    
    const ownership = badgeOwnershipLand(ownership_status)
    var detail_info
    var activity_plan
    if (details) {
        detail_info = `
        <hr>
        <h5><b style="font-size:15px">Laporan Lahan</b></h5>
        <table style="line-height: 28px;">
            <tr>
                <td>Nama Siklus</td>
                <td>:</td>
                <td>${details.cycle_name}</td>
            </tr>
            <tr>
                <td>Komoditas</td>
                <td>:</td>
                <td>${details.commodity}</td>
            </tr>
            <tr>
                <td>Estimasi Waktu Panen</td>
                <td>:</td>
                <td>${details.estimated_harvest_time}</td>
            </tr>
            <tr>
                <td>Estimasi Hasil Panen</td>
                <td>:</td>
                <td>${details.estimated_yield}</td>
            </tr>
            <tr>
                <td>Estimasi Kebutuhan Pupuk</td>
                <td>:</td>
                <td>${details.estimated_fertilizer}</td>
            </tr>
            <tr>
                <td>Kondisi Tanaman</td>
                <td>:</td>
                <td>${details.plant_condition}</td>
            </tr>
            <tr>
                <td>Estimasi serangan</td>
                <td>:</td>
                <td>${details.estimated_attack}</td>
            </tr>
        </table>`
        activity_plan = `
        <hr>
        <h5><b style="font-size:15px">Perencanaan Kegiatan Siklus</b></h5>
        <table style="line-height: 28px; width: 100%; border: 1px solid black;">
            <tr>
                <th style="border: 1px solid black;">Jenis Kegiatan</th>
                <th style="border: 1px solid black;">Tanggal Rencana</th>
                <th style="border: 1px solid black;">Tanggal Kegiatan</th>
                <th style="border: 1px solid black;">Status</th>
            </tr>
            <tr>
                <td style="border: 1px solid black;">${details.activity_planning_report[0].name}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[0].planning_date)}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[0].activity_date)}</td>
                <td style="border: 1px solid black;">${badgeStatusActivityPlan(details.activity_planning_report[0].status)}</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">${details.activity_planning_report[1].name}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[1].planning_date)}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[1].activity_date)}</td>
                <td style="border: 1px solid black;">${badgeStatusActivityPlan(details.activity_planning_report[1].status)}</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">${details.activity_planning_report[2].name}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[2].planning_date)}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[2].activity_date)}</td>
                <td style="border: 1px solid black;">${badgeStatusActivityPlan(details.activity_planning_report[2].status)}</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">${details.activity_planning_report[3].name}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[3].planning_date)}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[3].activity_date)}</td>
                <td style="border: 1px solid black;">${badgeStatusActivityPlan(details.activity_planning_report[3].status)}</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">${details.activity_planning_report[4].name}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[4].planning_date)}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[4].activity_date)}</td>
                <td style="border: 1px solid black;">${badgeStatusActivityPlan(details.activity_planning_report[4].status)}</td>
            </tr>
            <tr>
                <td style="border: 1px solid black;">${details.activity_planning_report[5].name}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[5].planning_date)}</td>
                <td style="border: 1px solid black;">${prettyDate(details.activity_planning_report[5].activity_date)}</td>
                <td style="border: 1px solid black;">${badgeStatusActivityPlan(details.activity_planning_report[5].status)}</td>
            </tr>
        </table>`
    } else {
        detail_info = `
        <hr>
        <h5><b style="font-size:15px">Laporan Lahan</b></h5>
        <br>
        -`

        activity_plan = `
        <hr>
        <h5><b style="font-size:15px">Perencanaan Kegiatan Siklus</b></h5>
        <br>
        -`
    }

    $('#card-title-lahan').html(title)
    $("#card-info-lahan").html(`
    <table style="line-height: 28px;">
        <tr>
            <td>Nama Pemilik</td>
            <td>:</td>
            <td><b style="font-size:14px">${farmer_name}</b></td>
        </tr>
        <tr>
            <td>Luas Lahan</td>
            <td>:</td>
            <td>${large}</td>
        </tr>
        <tr>
            <td>Status Kepemilikan</td>
            <td>:</td>
            <td>${ownership}</td>
        </tr>
        <tr>
            <td>Penggunaan Lahan</td>
            <td>:</td>
            <td>${land_use}</td>
        </tr>
        <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>${address}</td>
        </tr>
    </table>
    ${detail_info}
    ${activity_plan}
    <br/>
    `);
    $('#map-info-lahan').show();
    init();
}

function badgeCondition(string) {
    var badge
    switch (string) {
        case 'Baik':
            badge = `<span style="color:#fff;background-color:#28a745; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Baik</span>`
            break;
        case 'Rusak Ringan':
            badge = `<span style="color:#212529;background-color:#ffc107; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Rusak Ringan</span>`
            break;
        case 'Rusak Sedang':
            badge = `<span style="color:#212529;background-color:#ffc107; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Rusak Sedang</span>`
            break;
        case 'Rusak Berat':
            badge = `<span style="color:#fff;background-color:#dc3545; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Rusak Berat</span>`
            break;
        case 'Non Kategori':
            badge = `<span style="color:#fff;background-color:#1a2035; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Non Kategori</span>`
            break;
        case 'Rentan Miskin':
            badge = `<span style="color:#212529;background-color:#ffc107; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Rentan Miskin</span>`
            break;
        case 'Miskin':
            badge = `<span style="color:#fff;background-color:#dc3545; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Miskin</span>`
            break;
            break;
        default:
            break;
    }
    // console.log({string, badge});

    return badge
}

function badgeConditionLight(string) {
    var badge
    switch (string) {
        case 'Baik':
            badge = `<span style="color:#fff;background-color:#28a745; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Baik</span>`
            break;
        case 'Cukup':
            badge = `<span style="color:#212529;background-color:#ffc107; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Cukup</span>`  
            break;
        case 'Kurang':
            badge = `<span style="color:#fff;background-color:#dc3545; border-radius:50px; margin-left:auto; line-height:1; padding:6px 10px; vertical-align:middle; font-weight:400; font-size:14px; border:1px solid #ddd">Kurang</span>`
            break;
    
        default:
            break;
    }

    return badge
}

function descPoint(e) {
    // const { _id, title, description, marker, condition, details, images, category, location, address } = e.target.feature.properties
    const { _id, title, description, marker, condition, details, images, category, location, address } = e
    const cat_infra = (details == null) ? '' : details.category_infrastructure
    const con_light = (details == null) ? '-' : details.condition_lighting
    
    const con = badgeCondition(condition)
    const con_l = badgeConditionLight(con_light)
    var type_facilities = '-'
    var condition_status
    

    sessionStorage.removeItem('query_login')
    sessionStorage.setItem('query_login', JSON.stringify({_id: _id, type: category}));

    if (marker == 'paud' || marker == 'tk' || marker == 'sd' || marker == 'smp' || marker == 'sma' || marker == 'sanggar_kesenian') {
        type_facilities = 'Fasilitas Pendidikan'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'kesejahteraan_penduduk') {
        type_facilities = 'Kesejahteraan Penduduk'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'Jalan' || marker == 'jalan') {
        type_facilities = 'Jalan ' + cat_infra
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
            <tr>
                <td>Penerangan</td>
                <td>:</td>
                <td><b>${con_l}</b></td>
            </tr>
        `
    }
    else if (marker == 'Jembatan' || marker == 'jembatan') {
        type_facilities = 'Jembatan ' + cat_infra
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
            <tr>
                <td>Penerangan</td>
                <td>:</td>
                <td><b>${con_l}</b></td>
            </tr>
        `
    }
    else if (marker == 'Sumur Resapan') {
        type_facilities = 'Sumur Resapan ' + cat_infra
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
            <tr>
                <td>Penerangan</td>
                <td>:</td>
                <td><b>${con_l}</b></td>
            </tr>
        `
    }
    else if (marker == 'Irigasi' || marker == 'irigasi') {
        type_facilities = 'Irigasi ' + cat_infra
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'masjid' || marker == 'gereja') {
        type_facilities = 'Tempat Ibadah'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'balai_desa' || marker == 'balai_dusun' || marker == 'balai_kelurahan' || marker == 'poskamling' || marker == 'wc_umum' || marker == 'makam' || marker == 'pdam') {
        type_facilities = 'Fasilitas Sosial'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'taman' || marker == 'area_wisata' || marker == 'rth' || marker == 'cagar_budaya') {
        type_facilities = 'Tempat Wisata'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'puskesmas' || marker == 'rs' || marker == 'apotek') {
        type_facilities = 'Fasilitas Kesehatan'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'gor' || marker == 'lapangan' || marker == 'kolam_renang') {
        type_facilities = 'Fasilitas Olahraga'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }
    else if (marker == 'supermarket' || marker == 'pasar' || marker == 'mall' || marker == 'umkm' || marker == 'restoran' || marker == 'spbu') {
        type_facilities = 'Fasilitas Perbelanjaan'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }

    else if (marker == 'bank' || marker == 'atm' || marker == 'koperasi') {
        type_facilities = 'Fasilitas Keuangan'
        condition_status = `
            <tr>
                <td>Jenis</td>
                <td>:</td>
                <td><b>${type_facilities}</b></td>
            </tr>
            <tr>
                <td>Kondisi</td>
                <td>:</td>
                <td>${con}</td>
            </tr>
        `
    }

    const divSlider = []
    const dotSlider = []

    for (let i = 0; i < images.length; i++) {
        const ig = images[i];
        var display = (i == 0) ? 'block' : 'none'
        // console.log({images, display})
        divSlider.push(`
        <div style="display: ${display}; cursor: pointer;" onclick="openModalSlider('${images}')">
            <img src="/images/${ig}" alt="image" class="img-slide">
        </div>`)
        dotSlider.push(`<span class="dot" onclick="currentSlide(${i})"></span> `)
    }

    const joinDivSlider = divSlider.join("")
    const joinDotSlider = dotSlider.join("")
    // console.log({joinDivSlider})
    const sliders = joinDivSlider + `
    <a class="prevSlide" onclick="plusSlides(-1)">❮</a>
    <a class="nextSlide" onclick="plusSlides(1)">❯</a>`;

    // document.getElementById("dot-sliders").innerHTML = joinDotSlider
    const closeedit = `<span class="edit" onclick="openFormLogin('edit')"><i class="fa fa-edit" style="font-size:28px;color:#377fdd"></i></span>
                        <span class="close" onclick="closeCard()"> <i class="fa fa-close" style="font-size:30px;color:red"></i></span>`
    
    // document.getElementById("edit").innerHTML = edit
    // document.getElementById("closeedit").innerHTML = closeedit
    $('#card-title').html(title)
    $("#card-info").html(`
    <p>${description}</p>
    <table style="line-height: 30px;">
        <tr>
            <td>Galeri</td>
            <td>:</td>
            <td><a href="#", onclick="openModalSlider('${images}')"> Lihat Galeri</a></td>
        </tr>
        ${condition_status}
        <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>${address}</td>
        </tr>
    </table>
    `);
    // $('#card').show();
    $('#map-info').show();
    // $('#slideshow_popup').show();
    init();
}


function descPamong(e) {

    const { _id, title, description, marker, condition, details, images, category, location, address, struktur } = e
    const { kepala_bagian, staff, dukuh, bpkal, lpmkal, lembaga } = struktur
    // console.log({e, struktur})
    const tit = 'Pamong dan Struktur ' + title
    // document.getElementById("closepamong").innerHTML = `<span class="close" onclick="closeLegenda('#pamong')"> <i class="fa fa-close" style="font-size:30px;color:red"></i></span>`
    document.getElementById("menupamong").innerHTML = `
        <div class="dropdown">
            <i class="fa fa-bars dropbtn" style="font-size:30px; cursor: pointer;" aria-hidden="true" onclick="openMenuPamong2()"></i>
            <div id="myDropdown2" class="dropdown-content2">
                <a href="#" onclick="openTabsPamong('Pamong')">Pamong</a>
                <a href="#" onclick="openTabsPamong('BPKal')">BPKal</a>
                <a href="#" onclick="openTabsPamong('Lembaga')">Lembaga</a>
                <a href="#" onclick="openTabsPamong('LPMKAL')">LPMKAL</a>
            </div>
        </div>`
    
    const kabag = []
    const staff_kal = []
    const dukuhs = []
    const bpkals = []
    const lpmkals = []
    const lembagas = []

    for (let i = 0; i < kepala_bagian.length; i++) {
        const e = kepala_bagian[i];
        const img = (e.photo == null || e.photo == "") ? '/assets/images/avatar_default.png' : '/pamong/kepala_bagian/' + e.photo
        const tr = `
        <tr>
			<td>
				<img src="${img}" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>${e.nama}</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>${e.jabatan}</b></p>
				<p style="font-size: 12px; line-height: 4px;">${e.alamat} | <span style="color: #337ab7;"> ${e.hp}</span></p>
			</td>
		</tr>
        `
        kabag.push(tr)
    }
    const joinKabag = kabag.join("")

    for (let ii = 0; ii < staff.length; ii++) {
        const e = staff[ii];
        const img = (e.photo == null || e.photo == "") ? '/assets/images/avatar_default.png' : '/pamong/staff_kalurahan/' + e.photo
        const tr = `
        <tr>
			<td>
				<img src="${img}" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>${e.nama}</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>${e.jabatan}</b></p>
				<p style="font-size: 12px; line-height: 4px;">${e.alamat} | <span style="color: #337ab7;"> ${e.hp}</span></p>
			</td>
		</tr>
        `
        staff_kal.push(tr)
    }
    const joinStaffKal = staff_kal.join("")

    for (let iii = 0; iii < dukuh.length; iii++) {
        const e = dukuh[iii];
        const img = (e.photo == null || e.photo == "") ? '/assets/images/avatar_default.png' : '/foto_kades/' + e.photo
        const tr = `
        <tr>
			<td>
				<img src="${img}" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>${e.nama}</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>${e.jabatan}</b></p>
				<p style="font-size: 12px; line-height: 4px;">${e.alamat} | <span style="color: #337ab7;"> ${e.hp}</span></p>
			</td>
		</tr>
        `
        dukuhs.push(tr)
    }
    const joinDukuh = dukuhs.join("")
    
    for (let iiii = 0; iiii < bpkal.length; iiii++) {
        const e = bpkal[iiii];
        const img = (e.photo == null || e.photo == "") ? '/assets/images/avatar_default.png' : '/pamong/bpkal/' + e.photo
        const tr = `
        <tr>
			<td>
				<img src="${img}" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>${e.nama}</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>${e.jabatan}</b></p>
				<p style="font-size: 12px; line-height: 4px;">${e.alamat} | <span style="color: #337ab7;"> ${e.hp}</span></p>
			</td>
		</tr>
        `
        bpkals.push(tr)
    }
    const joinBpkals = bpkals.join("")
    
    for (let iiiii = 0; iiiii < lpmkal.length; iiiii++) {
        const e = lpmkal[iiiii];
        const img = (e.photo == null || e.photo == "") ? '/assets/images/avatar_default.png' : '/pamong/lpmkal/' + e.photo
        const tr = `
        <tr>
			<td>
				<img src="${img}" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>${e.nama}</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>${e.jabatan}</b></p>
				<p style="font-size: 12px; line-height: 4px;">${e.alamat}</p>
			</td>
		</tr>
        `
        lpmkals.push(tr)
    }
    const joinLpmkal = lpmkals.join("")
    
    for (let iiiiii = 0; iiiiii < lembaga.length; iiiiii++) {
        const e = lembaga[iiiiii];
        const img = (e.photo == null || e.photo == "") ? '/assets/images/avatar_default.png' : '/pamong/lembaga/' + e.photo
        const tr = `
        <tr>
			<td>
				<img src="${img}" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>${e.nama}</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>${e.jabatan}</b></p>
				<p style="font-size: 12px; line-height: 4px;">${e.alamat}</p>
			</td>
		</tr>
        `
        lembagas.push(tr)
    }
    const joinLembaga= lembagas.join("")

    $('#pamong-title').html(`<h4 style="color: #161616;"><b>Struktur ${title}</b></h4>`)
    $('#ListPamong').html(`
    <p style="font-size: 15px; line-height: 12px; color: #161616;"><b>Daftar Pamong Tamanmartani</b></p>
    <table style="line-height: 14px; width: 90%; border: 0px solid black;  font-family: 'Montserrat', sans-serif; color: #161616;">
		<tr>
			<td>
				<img src="/assets/images/avatar_default.png" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>Gandang Hardjanata</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>Lurah</b></p>
				<p style="font-size: 12px; line-height: 4px;">Kepatihan | <span style="color: #337ab7;"> 081392427888</span></p>
			</td>
		</tr>
        <tr>
            <td>
				<img src="/assets/images/avatar_default.png" alt="Avatar" class="avatar2">
			</td>
			<td>
				<p style="font-size: 14px; line-height: 4px;"><b>Tomi Nugraha</b></p>
				<p style="font-size: 12px; line-height: 4px;"><b>Carik</b></p>
				<p style="font-size: 12px; line-height: 4px;">Cageran | <span style="color: #337ab7;"> 085643334919</span></p>
			</td>
        </tr>
	</table>
    <br>
    <p style="font-size: 16px; line-height: 12px; color: #161616;"><b>Kepala Bagian</b></p>
    <table style="line-height: 14px; width: 90%; border: 0px solid black;  font-family: 'Montserrat', sans-serif; color: #161616;">
		${joinKabag}
	</table>
    <br>
    
    <p style="font-size: 16px; line-height: 12px; color: #161616;"><b>Staff Kaluraha</b></p>
    <table style="line-height: 14px; width: 90%; border: 0px solid black;  font-family: 'Montserrat', sans-serif; color: #161616;">
		${joinStaffKal}
	</table>
    <br>

    <p style="font-size: 16px; line-height: 12px; color: #161616;"><b>Dukuh</b></p>
    <table style="line-height: 14px; width: 90%; border: 0px solid black;  font-family: 'Montserrat', sans-serif; color: #161616;">
		${joinDukuh}
	</table>
    `)

    $('#ListBPKal').html(`
    <p style="font-size: 15px; line-height: 12px; color: #161616;"><b>Daftar BPKal Tamanmartani</b></p>
    <table style="line-height: 14px; width: 90%; border: 0px solid black;  font-family: 'Montserrat', sans-serif; color: #161616;">
		${joinBpkals}
	</table>
    `)

    $('#ListLPMKAL').html(`
    <p style="font-size: 15px; line-height: 12px; color: #161616;"><b>Daftar LPMKAL Tamanmartani</b></p>
    <table style="line-height: 14px; width: 90%; border: 0px solid black;  font-family: 'Montserrat', sans-serif; color: #161616;">
		${joinLpmkal}
	</table>
    `)

    $('#ListLembaga').html(`
    <p style="font-size: 15px; line-height: 12px; color: #161616;"><b>Daftar Lembaga Tamanmartani</b></p>
    <table style="line-height: 14px; width: 90%; border: 0px solid black;  font-family: 'Montserrat', sans-serif; color: #161616;">
		${joinLembaga}
	</table>
    `)

    
    $('#map-pamong').show();
    init();
}


var fasilitas_kesehatan = L.icon({
    iconUrl: '/assets/images/markers/fasilitas-kesehatan.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var fasilitas_olahraga = L.icon({
    iconUrl: '/assets/images/markers/fasilitas-olahraga.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var fasilitas_pendidikan = L.icon({
    iconUrl: '/assets/images/markers/fasilitas-pendidikan.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var fasilitas_perbelanjaan = L.icon({
    iconUrl: '/assets/images/markers/fasilitas-perbelanjaan.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var fasilitas_sosial = L.icon({
    iconUrl: '/assets/images/markers/fasilitas-sosial.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var jalan = L.icon({
    iconUrl: '/assets/images/markers/jalan.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var jembatan = L.icon({
    iconUrl: '/assets/images/markers/jembatan.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var kesejahteraan_penduduk = L.icon({
    iconUrl: '/assets/images/markers/house.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var tempat_ibadah = L.icon({
    iconUrl: '/assets/images/markers/tempat-ibadah.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var tempat_wisata = L.icon({
    iconUrl: '/assets/images/markers/tempat-wisata.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var fasilitas_keuangan = L.icon({
    iconUrl: '/assets/images/markers/bank.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var irigasi = L.icon({
    iconUrl: '/assets/images/markers/irigasi.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var cagar_budaya = L.icon({
    iconUrl: '/assets/images/markers/cagar-budaya.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var kolam_renang = L.icon({
    iconUrl: '/assets/images/markers/kolam-renang.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var makam = L.icon({
    iconUrl: '/assets/images/markers/makam.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var poskamling = L.icon({
    iconUrl: '/assets/images/markers/poskamling.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var sanggar_kesenian = L.icon({
    iconUrl: '/assets/images/markers/sanggar-kesenian.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var wc_umum = L.icon({
    iconUrl: '/assets/images/markers/wc-umum.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var sumur_resapan = L.icon({
    iconUrl: '/assets/images/markers/sumur-resapan.png',
    iconSize: [35, 35],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var non_lbs = L.icon({
    iconUrl: '/assets/images/markers/non-lbs.png',
    iconSize: [15, 15],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

var lbs = L.icon({
    iconUrl: '/assets/images/markers/lbs.png',
    iconSize: [15, 15],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});
// geojson = L.geoJson(data_geojson, {
//     pointToLayer: function (feature, latlng) {
//         console.log({feature});
//         var mark
//         if (feature.properties.marker =='sd') {
//             mark = blackIcon
//         } else {
//             mark = redIcon
//         }
//         return L.marker(latlng, {icon: mark});
//     },
//     style: function (feature) {
//         return { color: 'red' };
//     },
//     onEachFeature: onEachFeature
// }).addTo(map);

function closeCard() {
    $('#card').hide();
}

function closeMapInfo() {
    $('#map-info').hide();
}

function closeMapInfoLahan() {
    $('#map-info-lahan').hide();
}

function closeMapPamong() {
    $('#map-pamong').hide();
}