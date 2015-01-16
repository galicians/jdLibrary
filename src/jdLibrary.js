// console.log('hello')
var jdLibrary = function(selector) {
    this.elements;    
}
jdLibrary.prototype.isClass = function (selector) {
    return selector[0] == '.'
}
jdLibrary.prototype.isId = function (selector) {
    return selector[0] == '#'
}
jdLibrary.prototype.isTag = function (selector) {
    return ['#','.'].indexOf(selector[0]) == -1
}
jdLibrary.prototype.getByClass = function (selector) {
    return document.getElementsByClassName('some_class')
}
jdLibrary.prototype.getById = function (selector) {
    // console.log('body',document.getElementsByTagName('div'))
    // console.log('id',document.getElementById('some_id'))
    // console.log('class',document.getElementsByClassName('some_class'))

    console.log(document.getElementById(selector.slice(1)))
    return 1
}

