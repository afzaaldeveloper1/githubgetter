$(function(){
  $('#ghsubmitbtn').on('click', function(e){
    e.preventDefault();
    $('#ghapidata').html('<div id="loader"></div>');
    
    var username = $('#username').val();
    var main   = 'https://api.github.com/users/'+username;
    var repourl  = 'https://api.github.com/users/'+username+'/repos';
  }
  getInfo(main, function(data) {
      if(data.message == "Not Found" || username == '') {
        $('#gallery').html("<h2>No User Info Found</h2>");
      }
      
      else {
        var fullname   = data.name;
        var username   = data.login;
        var reposnum   = data.public_repos;
        
        var outhtml = '<ul><div>'+ "Repos:" + reposnum;
        var repositories;
        $.getJSON(repourl, function(data){
          repositories = data;   
          outputRepo();                
        });
        function outputRepo() {
          if(repositories.length == 0) { 
          outhtml = outhtml + '<p>No repos!</p></div>'; 
          }else {
            outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
            $.each(repositories, function(index) {
              outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
            });
            outhtml = outhtml + '</ul></div>'; 
          }
          $('#ghapidata').html(outhtml);
        } 
      } 
    }); 
  }); 
  