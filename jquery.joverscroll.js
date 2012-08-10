/*!
    Copyright (c) 2012 Pixel Union, http://pixelunion.net

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function($){
    $.fn.extend({
        jOverscroll: function(options) {
            this.defaultOptions = {
                width: null,
                scrollTime: 500,
                scrollBackTime: 100
            };

            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {
                var $this = $(this);
                $this.css({ 'white-space': 'pre', overflow: 'hidden' });
                if (settings.width) {
                    $this.css({ width: settings.width });
                }
                $this.hover(function(){
                    var difference = $this.get(0).scrollWidth - $this.width();
                    if (difference > 0) {
                        $this.stop().animate({ 'text-indent': -difference}, settings.scrollTime);
                    }
                }, function(){
                    $this.stop().animate({ 'text-indent': 0}, settings.scrollBackTime);
                });
            });
        }
    });
})(jQuery);
