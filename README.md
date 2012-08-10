# jOverscroll.js

A simple jQuery plugin handling text scrolling on hover. We found it a relatively common occurence that a design might need to accommodate text areas that on rare occasions contain more text than is expected (or fits) in situations where wrapping to the next line is not a good solution. We solve this problem in a few places by hiding the overflow and scrolling the text when the mouse hovered it, and having it snap back to normal when the mouse comes off it.

## Usage

The plugin is super easy to use:

    $('#some .selector').jOverscroll();

You can override the default values (Note: if you don't set width, the plugin will not override the element's width):

    $('#some .selector').jOverscroll({ width: 'auto', scrollTime: 500, scrollBackTime: 100 });

And you can chain it:

    $('#some .selector').jOverscroll().css({ color: '#ff00ff' });

## Details

Keep in mind that it implicitly sets two CSS properties on the element(s) you pass it: whitespace to pre, and overflow to hidden. To scroll the text it is animating the text-indent property.
