
module.exports = function(answers) {
    let packageConfig = {
        base:{},
        template:{}
    }
    packageConfig.base = {
        name:answers['name'],
        author: answers['author'],
    }
    packageConfig.template = {
        name: answers['template']
    }

    return packageConfig
}