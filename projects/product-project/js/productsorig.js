/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data/product.json', function (data) {
        var products=data
        _.map(data, function(item, index, data) {
            var i=$('<div>')
                .appendTo($('.container'))
                .append('<h3>'+item.desc+'</h3>')
            for (var deets in item) {
                if (deets==='image'){ 
                    var source="img/product/"+item.image
                    var pic=$('<div>')
                        .append("<img id=phone src="+source+"></img>")
                        .appendTo($('.container'))
                }
                var l=$('<div>')
                    .appendTo($('.container'))
                    .text(deets+' is '+item[deets])
            }
        })
//Product Search
        function getPhone(data, searchTerm) {
            return _.map(data, function(phone) {
                if (productSearch(phone, searchTerm)){
                    return phone
                }} )
        }
        console.log(getPhone(data, 'galaxy'))
          var arrayTerms=["galaxy", 'iphone 5', '32gb', 'galaxy cars', 'galaxy s6']
        _.each(arrayTerms, function(term) {
            console.log(term, getPhone(data, term))
        })
        function productSearch(coll, searchTerm) { //coll is a phone 
            
            if (typeof coll != 'string'){
                return _.some(coll, function(nextLevel){
                    return productSearch(nextLevel, searchTerm)
                     })
                 }
            else {
            var collWordsLower=coll.toLowerCase()
            var collWords=collWordsLower.split(' ')
            var inputWordsLower=searchTerm.toLowerCase()
            var inputWords=inputWordsLower.split(' ')
            if (  _.every(inputWords, function(inputWord) {
                //console.log(4, collWords, inputWord)
                if  (_.contains(collWords, inputWord)){ //console.log(5, collWords, inputWord)}
                
                return _.contains(collWords, inputWord)
                }}))
                {
                    //console.log(9, coll, inputWords)
                    return true   
                }
                //needs to return something bc will be at least one recurse deep 
                //when called inside the if statement above
            }
            
        }
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on products failed!'); });
});
