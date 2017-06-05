/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data/product.json', function (data) {
  // ALL YOUR CODE GOES BELOW HERE //
  
//Item Appearance Baseline
  
    let $body = $('body');
    let allData = data;
    let $productLaunch = $('#container');
    
    let $productsOnly = $('<div>')
        .appendTo($productLaunch);

//dropDown madness

    const dropDown = allData.reduce( function(array, item) {
          if (!array.includes(item.type)) {
              array.push(item.type);
          } 
          return array;
        }, [] );

    let $dropDownLive = dropDown.forEach( function(ell, x, arr){
        $('<option>')
            .text(ell)
            .css('color', 'black')
            .css('padding-left', '10px')
            .css('cursor', 'pointer')
            .appendTo('#dropdown-menu');
    });
    
    console.log(dropDown);
    
// search functionality
    
    function getPhone(event) {
        let phoneData = event.data;
        let searchTerm = $('#my-input').val();
        let dropDownSelected = $('#dropdown-menu').val();
        var results = [];
            $productsOnly.empty()
            for (let j = 0; j < phoneData.length; j++) {
                if (productSearch(phoneData[j], searchTerm) === true && phoneData[j].type===dropDownSelected) 
                {
                    display(phoneData[j])
                    
                    results.push(phoneData[j]);
                }
            }
            console.log(results)
            return results; 
            
        }
        
        function productSearch(coll, searchTerm) { //coll is a phone 
            //console.log(1, coll, searchTerm)
            if (typeof coll != 'string'){
                return _.some(coll, function(nextLevel){
                    return productSearch(nextLevel, searchTerm);
                     });
                 }
            else {
            var collWordsLower = coll.toLowerCase();
            var collWords = collWordsLower.split(' ');
            var inputWordsLower = searchTerm.toLowerCase();
            var inputWords = inputWordsLower.split(' ');
            if (  _.every(inputWords, function(inputWord) {
                //console.log(4, collWords, inputWord)
                if  (_.contains(collWords, inputWord)){ //console.log(5, collWords, inputWord)}
                
                return _.contains(collWords, inputWord);
                }}))
                {
                    return true;   
                }
            }
            
        }

    $body
        .css('color', 'white')
        .css('background-color','#FFD700');
  
// Controlling button action

    let $buttonReal = $('#btn-real');
    
    $buttonReal
        .on('click', allData, getPhone)
        .css('font-weight', 'bold');
  
// Here all our items show up

    
    function display(item) {
    
        let $itemList = $('<div>');
     
        $productsOnly.append(($itemList)
            .css('border-radius', '10px')
            .css('min-height', '200px')
            .css('background-color', '#74AD1B')
            .css('margin', '20px auto')
            .css('padding', '25px')
            .css('cursor', 'pointer')
            .css('max-width', '600px')
            .attr('id', item.id));
            
        let $itemDesc = $('<div>');
        
        $itemList.append(($itemDesc)
            .text((item.desc))
            .css('font-family', 'verdana')
            .css('text-align', 'left')
            .css('max-width', '350px')
            .css('float', 'left'));
        
        let $itemThumbDiv = $('<div>');
        
        $itemList.append($itemThumbDiv);
        
        let $itemThumb = $('<img>');
        
        $itemThumbDiv.append(($itemThumb)
            .attr('src', 'img/product/thumbs/' + item.image)
            .css('float', 'right')
            .css('border-radius', '10%')
            .css('max-width', '120px')
            .css('margin-top', '10px'));
           
        let $itemPrice = $('<div>');
        
        $itemList.append(($itemPrice)
            .text("$"+item.price)
            .css('font-weight', 'bold')
            .css('font-size', '1.1em')
            .css('padding', '50px')
            .css('max-width', '120px')
            .css('float', 'right'));

// Make new pop-out modal divs

            $(function(event) {
            //----- OPEN
            
            
                $itemList.on('click', function(event)  {
                
                console.log('click');
                
                let nowID = event.currentTarget.id;
                console.log(nowID)
                
                let divInfo = allData.forEach(function (ell, x, arr){
                    console.log(ell.id, nowID);
                    if (ell.id.toString() === nowID) {
                
                console.log(event);
                let $itemPopDiv = 
                    $('<div>')
                    .css('height', '60%')
                    .css('width', '40%')
                    .css('background-color', '#74AD1B')
                    .css('border-radius', '10px')
                    .css('position', 'fixed')
                    .css('border', '#FFD700 5px solid')
                    .css('top', '30%')
                    .css('left', '30%')
                    .appendTo($body);
                     console.log('click');
                    // .addClass('popup')
                    // .css('class', 'popup-inner');
                
                let $itemPopDesc = $('<div>');
                
                $itemPopDiv.append(($itemPopDesc)
                .text(item.desc)
                .css('padding', '15px')
                .css('text-align', 'right')
                .css('font-weight', 'bold')
                .css('text-color', 'white'));
                console.log('string string string');
                
                let $itemPopColor =
                    $('<div>')
                    .text(item.color)
                    .css('padding-top', '15%')
                    .css('padding-left', '20px')
                    .css('font-style', 'italic')
                    .css('text-align', 'left')
                    .css('color', 'white')
                    .appendTo($itemPopDiv);
                
                
                let $itemPopImg =
                    $('<img>')
                    .attr('src', 'img/product/' + item.image)
                    .css('padding', '40px')
                    .css('max-height', '200px')
                    .appendTo($itemPopDesc);
            };
                });

        //     //----- CLOSE
        //         $('[data-popup-close]').on('click', function(e)  {
        //         var targeted_popup_class = (this).attr('data-popup-close');
        //         $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        //         e.preventDefault();
        //     });
        });
            
            
        //         $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);    
            
      });
    };
  
  var items = _.map(allData, function(phones){
      display(phones)
      });
  // ALL YOUR CODE GOES ABOVE HERE //

   
});
});