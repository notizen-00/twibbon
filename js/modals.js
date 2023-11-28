        (function($) {
            "use strict";
                $(document).ready(function() {
                        $('.modal-link').on('click', function() {
                        $('body').addClass("modal-open");
                    });
                    $('.close-modal').on('click', function() {
                        $('body').removeClass("modal-open");
                    });
                });
        }(jQuery));
