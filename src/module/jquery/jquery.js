// npm i jquery
import $ from 'jquery' 

$('<h1 />')
    .text('Hello webpak. Title from JQuery')
    .css({
        textAlign: 'center',
        color: '#2F4F4F'
    })
    .appendTo($('header'))
    