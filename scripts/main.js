$(document).ready(function(){


  $('[name=social_share]').each(function() {
      var $this = $(this);
      $this.attr('href',
                 $this.attr('href').replace('link',
                                                 document.location.host));
  }




}); // this closes the functions
