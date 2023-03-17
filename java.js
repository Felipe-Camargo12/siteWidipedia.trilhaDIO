var createjs = window.createjs,
  libAn;
(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.rain = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#CCCCCC").ss(3, 1, 1).p("ACWlzIkrLn");
    this.shape.setTransform(0.025, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-16.5, -38.6, 33.1, 77.30000000000001);

  (lib.rainan = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.rain("synched", 0);

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#CCCCCC")
      .ss(3, 1, 1)
      .p(
        "AEzAAQAAA6haApQhZAoiAAAQh+AAhagoQhagpAAg6QAAg5BagoQBagpB+AAQCAAABZApQBaAoAAA5g"
      );
    this.shape.setTransform(-119.45, 298.95);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("rgba(204,204,204,0.949)")
      .ss(3, 1, 1)
      .p(
        "AlOAAQAAg+BigtQBigtCKAAQCLAABiAtQBiAtAAA+QAAA/hiAtQhiAtiLAAQiKAAhigtQhigtAAg/g"
      );
    this.shape_1.setTransform(-119.475, 298.95);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f()
      .s("rgba(204,204,204,0.894)")
      .ss(3, 1, 1)
      .p(
        "AlrAAQAAhEBrgwQBrgwCVAAQCXAABqAwQBrAwAABEQAABEhrAxQhqAwiXAAQiVAAhrgwQhrgxAAhEg"
      );
    this.shape_2.setTransform(-119.45, 298.975);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("rgba(204,204,204,0.843)")
      .ss(3, 1, 1)
      .p(
        "AmHAAQAAhJBzg0QBzg0ChAAQCjAAByA0QBzA0AABJQAABKhzA0QhyA0ijAAQihAAhzg0Qhzg0AAhKg"
      );
    this.shape_3.setTransform(-119.475, 298.975);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f()
      .s("rgba(204,204,204,0.788)")
      .ss(3, 1, 1)
      .p(
        "AmjAAQAAhOB7g4QB7g4CtAAQCuAAB7A4QB7A4AABOQAABPh7A4Qh7A4iuAAQitAAh7g4Qh7g4AAhPg"
      );
    this.shape_4.setTransform(-119.475, 298.975);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f()
      .s("rgba(204,204,204,0.737)")
      .ss(3, 1, 1)
      .p(
        "Am/AAQAAhTCDg8QCDg8C5AAQC6AACDA8QCDA8AABTQAABUiDA8QiDA8i6AAQi5AAiDg8QiDg8AAhUg"
      );
    this.shape_5.setTransform(-119.475, 298.975);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("rgba(204,204,204,0.682)")
      .ss(3, 1, 1)
      .p(
        "AncAAQAAhZCMg/QCMg/DEAAQDGAACLA/QCMA/AABZQAABZiMBAQiLA/jGAAQjEAAiMg/QiMhAAAhZg"
      );
    this.shape_6.setTransform(-119.475, 299);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("rgba(204,204,204,0.631)")
      .ss(3, 1, 1)
      .p(
        "An4AAQAAheCUhDQCUhDDQAAQDRAACUBDQCUBDAABeQAABfiUBDQiUBDjRAAQjQAAiUhDQiUhDAAhfg"
      );
    this.shape_7.setTransform(-119.475, 299);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f()
      .s("rgba(204,204,204,0.58)")
      .ss(3, 1, 1)
      .p(
        "AoUAAQAAhkCchGQCchHDcAAQDdAACcBHQCcBGAABkQAABkicBHQicBHjdAAQjcAAichHQichHAAhkg"
      );
    this.shape_8.setTransform(-119.475, 299.025);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f()
      .s("rgba(204,204,204,0.525)")
      .ss(3, 1, 1)
      .p(
        "AoxAAQAAhpClhKQCkhLDoAAQDpAACkBLQClBKAABpQAABqilBKQikBLjpAAQjoAAikhLQilhKAAhqg"
      );
    this.shape_9.setTransform(-119.5, 299.025);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f()
      .s("rgba(204,204,204,0.475)")
      .ss(3, 1, 1)
      .p(
        "ApNAAQAAhuCthOQCthPDzAAQD0AACtBPQCtBOAABuQAABvitBOQitBPj0AAQjzAAithPQithOAAhvg"
      );
    this.shape_10.setTransform(-119.475, 299.025);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f()
      .s("rgba(204,204,204,0.42)")
      .ss(3, 1, 1)
      .p(
        "AppAAQAAhzC1hSQC1hTD/AAQEAAAC1BTQC1BSAABzQAAB0i1BSQi1BTkAAAQj/AAi1hTQi1hSAAh0g"
      );
    this.shape_11.setTransform(-119.5, 299.025);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f()
      .s("rgba(204,204,204,0.369)")
      .ss(3, 1, 1)
      .p(
        "AqGAAQAAh5C+hVQC9hWELAAQEMAAC9BWQC+BVAAB5QAAB6i+BWQi9BWkMAAQkLAAi9hWQi+hWAAh6g"
      );
    this.shape_12.setTransform(-119.5, 299.05);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f()
      .s("rgba(204,204,204,0.318)")
      .ss(3, 1, 1)
      .p(
        "AqhAAQAAh+DFhZQDGhaEWAAQEYAADFBaQDGBZAAB+QAAB/jGBaQjFBakYAAQkWAAjGhaQjFhaAAh/g"
      );
    this.shape_13.setTransform(-119.5, 299.05);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f()
      .s("rgba(204,204,204,0.263)")
      .ss(3, 1, 1)
      .p(
        "Aq+AAQAAiEDOhdQDOhdEiAAQEjAADOBdQDOBdAACEQAACEjOBdQjOBekjAAQkiAAjOheQjOhdAAiEg"
      );
    this.shape_14.setTransform(-119.5, 299.075);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f()
      .s("rgba(204,204,204,0.212)")
      .ss(3, 1, 1)
      .p(
        "AraAAQAAiJDVhhQDXhhEuAAQEvAADWBhQDWBhAACJQAACKjWBhQjWBhkvAAQkuAAjXhhQjVhhAAiKg"
      );
    this.shape_15.setTransform(-119.5, 299.075);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f()
      .s("rgba(204,204,204,0.157)")
      .ss(3, 1, 1)
      .p(
        "Ar2AAQAAiODdhlQDghlE5AAQE7AADeBlQDfBlAACOQAACPjfBlQjeBlk7AAQk5AAjghlQjdhlAAiPg"
      );
    this.shape_16.setTransform(-119.5, 299.075);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f()
      .s("rgba(204,204,204,0.106)")
      .ss(3, 1, 1)
      .p(
        "AsTAAQAAiTDnhpQDnhpFFAAQFGAADnBpQDnBpAACTQAACUjnBpQjnBplGAAQlFAAjnhpQjnhpAAiUg"
      );
    this.shape_17.setTransform(-119.525, 299.075);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f()
      .s("rgba(204,204,204,0.051)")
      .ss(3, 1, 1)
      .p(
        "AsvAAQAAiZDuhsQDwhtFRAAQFSAADvBtQDvBsAACZQAACZjvBtQjvBslSAAQlRAAjwhsQjuhtAAiZg"
      );
    this.shape_18.setTransform(-119.5, 299.1);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f()
      .s("rgba(204,204,204,0)")
      .ss(3, 1, 1)
      .p(
        "ANMAAQAACfj3BwQj3BwleAAQldAAj3hwQj3hwAAifQAAieD3hwQD3hxFdAAQFeAAD3BxQD3BwAACeg"
      );
    this.shape_19.setTransform(-119.525, 299.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance }] }, 9)
        .to({ state: [{ t: this.shape }] }, 1)
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .to({ x: -106, y: 259.45 }, 9)
        .to({ _off: true }, 1)
        .wait(20)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-205.4, -38.6, 222, 377.6);

  (lib.rt = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.rainan("synched", 0);
    this.instance.setTransform(-0.05, 0.05, 1, 1, 0, 0, 0, -94.5, 150.2);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-111, -188.8, 222, 377.6);

  // stage content:
  (lib.rainpg = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);
  // library properties:
  lib.properties = {
    id: "4CC64214A4D9475CA93C7205BA2C1067",
    width: 960,
    height: 640,
    fps: 30,
    color: "#333333",
    opacity: 1.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["4CC64214A4D9475CA93C7205BA2C1067"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
})((createjs = createjs || {}), (libAn = libAn || {}));

// ===============

var frame, stageW, stageH, anLib, i;
var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation;
function init() {
  canvas = document.getElementById("rain-pg_canvas");
  anim_container = document.getElementById("rain-pg_animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp = libAn.getComposition("4CC64214A4D9475CA93C7205BA2C1067");
  var lib = comp.getLibrary();
  handleComplete({}, comp);
}
function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.rainpg();
  stage = new lib.Stage(canvas);
  // ZIM SHIM - V.2
  stage = new zim.Stage(canvas);
  stage.enableMouseOver();
  createjs.Touch.enable(stage);
  stage.width = stageW = canvas.width;
  stage.height = stageH = canvas.height;
  stage.setBounds(0, 0, stageW, stageH);
  frame = new zim.Frame({ shim: { stage: stage, canvas: canvas } });
  // END ZIM SHIM
  anLib = lib;
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  };
  //Code to support hidpi screens and responsive scaling.
  libAn.makeResponsive(true, "both", true, 1, [
    canvas,
    anim_container,
    dom_overlay_container,
  ]);
  libAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

// ===============

function getAnInfo() {
  return {
    stage,
    exportRoot,
    anObjects: {},
    anClasses: {
      AnMovieClip: anLib.AnMovieClip,
      rain: anLib.rain,
      rainan: anLib.rainan,
      rt: anLib.rt,
      rainpg: anLib.rainpg,
      Stage: anLib.Stage,
    },
  };
}

export { init, getAnInfo };

const getWrapZimify = (obj, x, y, width, height) => {
  const oo = zimify(obj);
  oo.setBounds(x, y, width, height);
  return oo;
};

document.addEventListener("DOMContentLoaded", function (event) {
  init();

  const rainCount = 80;
  const info = getAnInfo();

  const zContainer = getWrapZimify(
    info.exportRoot,
    0,
    0,
    info.stage.width,
    info.stage.height
  );

  Array.from(Array(rainCount).keys()).forEach((v, i) => {
    const wait = zim.rand(0, 6, false);
    const rX = zim.rand(160, 800); // 960
    const rY = zim.rand(160, 480); // 640
    const rRate = zim.rand(0.1, 1, false);
    // console.log(`==> `, wait, rX, rY, rRate);
    zim.timeout(wait, () => {
      const zRt = getWrapZimify(new info.anClasses.rt(), 0, 0, 30, 75).pos(
        0 + rX,
        0 + rY,
        false,
        false,
        zContainer
      );
      zRt.sca(rRate);
    });
  });
});
