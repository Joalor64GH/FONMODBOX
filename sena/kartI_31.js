!function(t, e) {
    var o, i = {}, n = {}, s = {};
    i.ssMetadata = [],
    (i.AnMovieClip = function() {
        this.actionFrames = [],
        this.ignorePause = !1,
        this.gotoAndPlay = function(e) {
            t.MovieClip.prototype.gotoAndPlay.call(this, e)
        }
        ,
        this.play = function() {
            t.MovieClip.prototype.play.call(this)
        }
        ,
        this.gotoAndStop = function(e) {
            t.MovieClip.prototype.gotoAndStop.call(this, e)
        }
        ,
        this.stop = function() {
            t.MovieClip.prototype.stop.call(this)
        }
    }
    ).prototype = o = new t.MovieClip,
    (i._31 = function() {
        this.initialize(s._31)
    }
    ).prototype = o = new t.Bitmap,
    o.nominalBounds = new t.Rectangle(0,0,1372,632),
    (i.karti_31 = function(e, o, n, s) {
        null == n && (n = !0),
        null == s && (s = !1);
        var a = new Object;
        a.mode = e,
        a.startPosition = o,
        a.labels = {},
        a.loop = n,
        a.reversed = s,
        t.MovieClip.apply(this, [a]),
        this.instance = new i._31,
        this.timeline.addTween(t.Tween.get(this.instance).wait(1)),
        this._renderFirstFrame()
    }
    ).prototype = o = new i.AnMovieClip,
    o.nominalBounds = new t.Rectangle(686,316,686,316),
    i.properties = {
        id: "5B616F60D7FF42418C9E4545367363D2",
        width: 1372,
        height: 632,
        fps: 30,
        color: "#FFFFFF",
        opacity: 0,
        manifest: [{
            src: "imag_karti/_31.png",
            id: "_31"
        }],
        preloads: []
    },
    (i.Stage = function(t) {
        createjs.Stage.call(this, t)
    }
    ).prototype = o = new createjs.Stage,
    o.setAutoPlay = function(t) {
        this.tickEnabled = t
    }
    ,
    o.play = function() {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    ,
    o.stop = function(t) {
        t && this.seek(t),
        this.tickEnabled = !1
    }
    ,
    o.seek = function(t) {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndStop(i.properties.fps * t / 1e3)
    }
    ,
    o.getDuration = function() {
        return this.getChildAt(0).totalFrames / i.properties.fps * 1e3
    }
    ,
    o.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / i.properties.fps * 1e3
    }
    ,
    e.bootcompsLoaded = e.bootcompsLoaded || [],
    e.bootstrapListeners || (e.bootstrapListeners = []),
    e.bootstrapCallback = function(t) {
        if (e.bootstrapListeners.push(t),
        e.bootcompsLoaded.length > 0)
            for (var o = 0; o < e.bootcompsLoaded.length; ++o)
                t(e.bootcompsLoaded[o])
    }
    ,
    e.compositions = e.compositions || {},
    e.compositions["5B616F60D7FF42418C9E4545367363D2"] = {
        getStage: function() {
            return exportRoot.stage
        },
        getLibrary: function() {
            return i
        },
        getSpriteSheet: function() {
            return n
        },
        getImages: function() {
            return s
        }
    },
    e.compositionLoaded = function(t) {
        e.bootcompsLoaded.push(t);
        for (var o = 0; o < e.bootstrapListeners.length; o++)
            e.bootstrapListeners[o](t)
    }
    ,
    e.getComposition = function(t) {
        return e.compositions[t]
    }
    ,
    e.makeResponsive = function(t, e, o, n, s) {
        function a() {
            var a = i.properties.width
              , d = i.properties.height
              , l = window.innerWidth
              , h = window.innerHeight
              , u = window.devicePixelRatio || 1
              , g = l / a
              , f = h / d
              , m = 1;
            t && ("width" == e && r == l || "height" == e && p == h ? m = c : o ? 1 == n ? m = Math.min(g, f) : 2 == n && (m = Math.max(g, f)) : (a > l || d > h) && (m = Math.min(g, f))),
            s[0].width = a * u * m,
            s[0].height = d * u * m,
            s.forEach(function(t) {
                t.style.width = a * m + "px",
                t.style.height = d * m + "px"
            }),
            stage.scaleX = u * m,
            stage.scaleY = u * m,
            r = l,
            p = h,
            c = m,
            stage.tickOnUpdate = !1,
            stage.update(),
            stage.tickOnUpdate = !0
        }
        var r, p, c = 1;
        window.addEventListener("resize", a),
        a()
    }
    ,
    e.handleSoundStreamOnTick = function(t) {
        if (!t.paused) {
            var e = stage.getChildAt(0);
            (!e.paused || e.ignorePause) && e.syncStreamSounds()
        }
    }
}(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
