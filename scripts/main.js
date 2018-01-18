$(document).ready(function(){


  $('[name=social_share]').each(function() {
      var $this = $(this);
      $this.attr('share_url',
                 $this.attr('share_url').replace('link',
                                                 document.location.host));
  }




}); // this closes the functions
