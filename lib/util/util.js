const templateUrlMap = {
    'mis-vue-cli': '58MIS-FE/mis-vue-cli',
    'mis-react-cli': '58MIS-FE/mis-react-cli',
    'mis-koa':'58MIS-FE/mis-koa'
}

/**
 * 模板
 */
function getTemplateUrlMap(){
    return templateUrlMap
}

function getTemplatesList() {
    return Object.keys(templateUrlMap);
}














exports.getTemplatesList = getTemplatesList;
exports.getTemplateUrlMap = getTemplateUrlMap