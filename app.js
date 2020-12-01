$('#experience-timeline').each(function() {

  $this = $(this); // Store reference to this
  $userContent = $this.children('div'); // user content

  // Create each timeline block
  $userContent.each(function() {
      $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
  });

  // Add icons to each block
  $this.find('.vtimeline-point').each(function() {
      $(this).prepend('<div class="vtimeline-icon"><i class="fas fa-map-marker-alt"></i></div>');
  });

  // Add dates to the timeline if exists
  $this.find('.vtimeline-content').each(function() {
      var date = $(this).data('date');
      if (date) { // Prepend if exists
          $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
      }
  });

});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function scrolltoskills() {
  document.getElementById("tech-section").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltofoot() {
  document.getElementById("foot").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltoexp() {
  document.getElementById("experience-section").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltoedu() {
  document.getElementById("education-section").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltoabout() {
  document.getElementById("about-section").scrollIntoView({
    behavior: "smooth",
  });
}

function scrolltocontact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}
