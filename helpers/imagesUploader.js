const fs = require('fs');
const { generate } = require("../helpers/randGen")

const _getExt = (name) => {
    return _getDataLastIndex(name.split('.'))
}

const _getDataLastIndex = (datas) => {
    return datas[datas.length-1]
}

const imagesUploader = async (image, path = null) => {
    // console.log({images, path, length: images.length})
    const fileNames = []

    if(!fs.existsSync(path)) {
        fs.mkdirSync(path, {recursive: true}, err => {})
    }

    let generated_name = await generate(20, false)
    let ext = await _getExt(image.name)
    var newFileName = Date.now().toString() + '_' + generated_name+'.'+ext;
    // console.log({newFileName});
    
    image.mv(path+newFileName)

    return newFileName
}

module.exports = {
    imagesUploader
}