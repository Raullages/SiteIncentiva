$(document).ready(function(){
	
  $(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 150) {
        $('.menu').addClass('menuFixo');
        
    } else {
        $('.menu').removeClass('menuFixo');
       
    }
  });

});
/*insert into dia values ("","5446","18","2017/07/13");
insert into dia values ("","6644","15","2017/07/13");
insert into dia values ("","3100","25","2017/07/13");
insert into dia values ("","1990","23","2017/07/13");
insert into dia values ("","2821","12","2017/07/13") */