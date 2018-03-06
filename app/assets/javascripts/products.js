// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var currentProduct = {} 
var products = {} 

$(document).ready( function() {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    type: 'GET',
    dataType: 'JSON'
    }).done( function(data){
    products = data 
    })
  })

