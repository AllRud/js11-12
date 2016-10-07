(function($) {
    var defaults = { 'countVisible': '2', };

    $.fn.carouselSimple = function(options){

      // Here you can set the parameters of the slider

        var settings = $.extend({}, defaults, options);
           
        var spacing = +$('.carousel-element').css('margin-right')
                      .substring(0, $('.carousel-element')
                      .css('margin-right').length -2);
      
      // Here you can set an offset value based on the width of the images
      // and the value of distance between the pictures

        var pixelsOffset = spacing + $('.carousel-element img').width();
        
      // Here we define the elements of a slider with 
      // which we will continue to operate

        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');

      // Here we define the starting position of images.
      // Number of images. Allowable values of the minimum 
      // and maximum displacements.

        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - settings.countVisible) * pixelsOffset);
        var maximumOffset = 0;

      // Here we define the values,  
      // including width of controls elements that affect 
      // the width of the container for the slider.
      // Then, we define the width of this container

        var arrowLeft = +$(leftUIEl).css('margin-right')
                        .substring(0, $(leftUIEl).css('margin-right').length -2);
       
        var arrowRight = +$(rightUIEl).css('margin-left')
                        .substring(0, $(rightUIEl).css('margin-left').length -2);
     
        var brdRightHider = +$('.carousel-hider').css('border-right-width')
                            .substring(0, $('.carousel-hider')
                            .css('border-right-width').length -2);

        var brdLeftHider = +$('.carousel-hider').css('border-left-width')
                           .substring(0, $('.carousel-hider')
                           .css('border-left-width').length -2);

        var pdRightHider = +$('.carousel-hider').css('padding-right')
                            .substring(0, $('.carousel-hider')
                            .css('padding-right').length -2);

        var pdLeftHider = +$('.carousel-hider').css('padding-left')
                          .substring(0, $('.carousel-hider')
                          .css('padding-left').length -2);

        $('.carousel-hider').css('width', (+settings.countVisible * pixelsOffset - spacing));
        $('.jcarouselSimple').css('width', (arrowLeft + 
                                           arrowRight +
                                           $('.carousel-arrow-right').width() + 
                                           $('.carousel-arrow-left').width() +
                                           $('.carousel-hider').width()  + 
                                           brdRightHider + 
                                           brdLeftHider+
                                           pdLeftHider+
                                           pdRightHider));

        // Defining the event handlers


        leftUIEl.click(function() {        
            if (currentLeftValue != maximumOffset) {
                currentLeftValue +=pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }        
        });
     
        rightUIEl.click(function() {        
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -=pixelsOffset;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        // Here we set the return value of the function 
        // for supporting sequence of method calls in Jquery

        return this;
    };
    
})(jQuery);
