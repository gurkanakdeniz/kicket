$(document).ready(function() {
  $("#expand").click(function() {
    $("#view").toggleClass("view-passive");
    $("#view").toggleClass("view-active");
    //$("#expand-icon").toggleClass("fa-angle-down");
    //$("#expand-icon").toggleClass("fa-angle-up");
  });
  history();
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

function history() {
  $("#uuid-list-view").empty();
  let uuidHistoryObj = [];
  if (localStorage.getItem("uuids") === null) {
    $("#uuid-list-view").append(
      '<div class="row"><div class="col-12 text-center"><p>Hmm... We think, humanity has not discovered yet this place.</p><div id="wtf-face" style="width: 200px; margin: auto;"></div></div></div>'
    );
    lottie.loadAnimation({
      container: document.getElementById("wtf-face"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "../styles/json/wtf.json"
    });
  } else {
    var count = 0;
    uuidHistoryObj = JSON.parse(localStorage.getItem("uuids"));
    uuidHistoryObj.forEach(function(el) {
      if (el.platform === "html") {
        el.platform = "html5";
      } else if (el.platform === "go") {
        el.platform = "gofore";
      }
      $("#uuid-list-view").append(
        '<div class="row"><div class="col-1"></div><div class="uuid-hover col-10" style="display: flex; line-height: 30px;"><p class="hover-date mr-3"><i>' +
          el.date +
          '</i></p><i id="platform-icon" class="fab fa-' +
          el.platform +
          ' icon-size mr-5"></i><p id="line" class="m-0">http://kicket.herokuapp.com/api/run/' +
          el.uuid +
          '</p><input id="line-' +
          count +
          '" type="hidden" value="' +
          el.uuid +
          '" /><button class="btn btn-outline-primary waves effect hover-btn" line="' +
          count +
          '"><i class="fas fa-file-import"></i></button></div><div class="col-1"></div></div>'
      );
      count = count + 1;
      $(".hover-btn").click(function() {
        var lineNo = $(this).attr("line");
        $("#basic-url").val($("#line-" + lineNo).val());
        goToByScroll("testapi");
      });
    });
  }
}
