function loadEvents() {
  $.ajax({
    url: "http://localhost:5000/timeline/getAllEvents",
    type: "get",
    success: (x) => {
      console.log(x);
      for (i = 0; i < x.length; i++) {
        $("main").append(
          `
        <p>
            Text: ${x[i].text}
        <br>
            Time: ${x[i].time}
        <br>
            Hits: ${x[i].hits}
        <br>
            <button class="LikeButton" id="${x[i]["_id"]}"> Like! </button>
        <br>
            <button class="DeleteButton" id="${x[i]["_id"]}"> Delete </button>

        <p/>
          
          `
        );
      }
    },
  });
}

function deleteData() {
  x = this.id;
  $.ajax({
    url: `http://localhost:5000/timeline/remove/${x}`,
    type: "get",
    success: (e) => {
      console.log(e);
    },
  });
}

function increamentHitsByOne() {
  x = this.id;
  $.ajax({
    url: `http://localhost:5000/timeline/increaseHits/${x}`,
    type: "get",
    success: (e) => {
      console.log(e);
    },
  });

  //   reload the main div
  //   $("main").load(location.href + " main");
}

function setup() {
  loadEvents();

  $("body").on("click", ".LikeButton", increamentHitsByOne);
  $("body").on("click", ".DeleteButton", deleteData);
}

$(document).ready(setup);
