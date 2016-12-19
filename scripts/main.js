$('header').affix({
    offset: {
        top: function () {
            return  $('.welcome-section').outerHeight();
        }
    }
});