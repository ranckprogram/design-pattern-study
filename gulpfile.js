var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

const run = require("gulp-run");

gulp.task("default", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task("run", function () {
  return run("node dist/factory/index.js").exec();
});

gulp.task("runAbstract", function () {
  return run("node dist/abstract/index.js").exec();
});

gulp.task("runEach", function () {
  return run("node dist/each/index.js").exec();
});

gulp.task("runBridge", function () {
  return run("node dist/bridge/index.js").exec();
});

gulp.task("runMain", function () {
  return run("node dist/main.js").exec();
});


gulp.watch(
  "ts-design-patterns/**/*.ts",
  gulp.series("default", "run", "runAbstract", "runEach", "runBridge", "runMain")
);
