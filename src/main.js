import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Poem } from './haikuCheck.js';

$(document).ready(function() {
    $('form').submit(function(event){
        event.preventDefault();
        var haiku = new Poem($('#enterPoem').val());
        console.log(haiku);

    });
});
