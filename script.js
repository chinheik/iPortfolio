var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
});
typewriter
  .typeString(
    '<span style="text-decoration: underline 2px lightblue; ">Frontend Web Developer.</span>'
  )
  .pauseFor(2500)
  .deleteAll()
  .typeString("<strong>Excited!</strong>")
  .pauseFor(2500)
  .deleteAll()
  .typeString("<em>haha.</em>")
  .pauseFor(2500)
  .start();
