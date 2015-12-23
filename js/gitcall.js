$(function(){
  $('#ghsubmitbtn').on('click', function(e){
    e.preventDefault();
    $('#ghapidata').html('<div id="loader"></div>');
    
    var username = $('#username').val();
    var main   = 'https://api.github.com/users/'+username;
    var repourl  = 'https://api.github.com/users/'+username+'/repos';
  }