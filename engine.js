this.Cube = function() {
        console.log("%cLazyTong's Cube\n       \u3000  \u3000\u2583\u2586\u2588\u2587\u2584\u2596\n\u3000 \u3000 \u3000 \u259F\u25E4\u2596\u3000\u3000\u3000\u25E5\u2588\u258E\n   \u3000 \u25E2\u25E4\u3000 \u2590\u3000\u3000\u3000 \u3000\u2590\u2589\n\u3000 \u2597\u25E4\u3000\u3000\u3000\u2582\u3000\u2597\u2596\u3000\u3000\u2595\u2588\u258E\n\u3000\u25E4\u3000\u2597\u2585\u2596\u25E5\u2584\u3000\u2580\u25E3\u3000\u3000\u2588\u258A\n\u2590\u3000\u2595\u258E\u25E5\u2596\u25E3\u25E4\u3000\u3000\u3000\u3000\u25E2\u2588\u2588\n\u2588\u25E3\u3000\u25E5\u2585\u2588\u2580\u3000\u3000\u3000\u3000\u2590\u2588\u2588\u25E4\n\u2590\u2588\u2599\u2582\u3000\u3000     \u3000\u25E2\u2588\u2588\u25E4\n\u25E5\u2588\u2588\u25E3\u3000\u3000\u3000\u3000\u25E2\u2584\u25E4\n \u3000\u3000\u2580\u2588\u2588\u2585\u2587\u2580\nVer 1.0.0\nhttps://lt.js.org ", "color:green;font-weight:bolder");
        let N = 2 * Math.PI,
          c = function(t, a) {
            for (let r in a) t[r] = a[r];
            return t
          },
          s = function(t, a, r) {
            return (a - t) * r + t
          },
          R = function(e, t) {
            return (e % t + t) % t
          },
          o = function() {},
          u = {};
        u.begin = function(t) {
          t.beginPath()
        }, u.move = function(t, a, r) {
          t.moveTo(r.x, r.y)
        }, u.line = function(t, a, r) {
          t.lineTo(r.x, r.y)
        }, u.bezier = function(r, o, d, e, t) {
          r.bezierCurveTo(d.x, d.y, e.x, e.y, t.x, t.y)
        }, u.closePath = function(t) {
          t.closePath()
        }, u.setPath = function() {}, u.renderPath = function(a, r, o, e) {
          this.begin(a, r), o.forEach(function(t) {
            t.render(a, r, u)
          }), e && this.closePath(a, r)
        }, u.stroke = function(r, o, d, e, t) {
          d && (r.strokeStyle = e, r.lineWidth = t, r.stroke())
        }, u.fill = function(a, r, o, e) {
          o && (a.fillStyle = e, a.fill())
        }, u.end = function() {};
        let k = function(t) {
          this.set(t)
        };
        k.prototype.set = function(t) {
          return this.x = t && t.x || 0, this.y = t && t.y || 0, this.z = t && t.z || 0, this
        }, k.prototype.write = function(t) {
          return t ? (this.x = null == t.x ? this.x : t.x, this.y = null == t.y ? this.y : t.y, this.z = null == t.z ? this.z : t.z, this) : this
        }, k.prototype.rotate = function(t) {
          if (t) return this.rotateZ(t.z), this.rotateY(t.y), this.rotateX(t.x), this
        }, k.prototype.rotateZ = function(t) {
          j(this, t, "x", "y")
        }, k.prototype.rotateX = function(t) {
          j(this, t, "y", "z")
        }, k.prototype.rotateY = function(t) {
          j(this, t, "x", "z")
        };
        let j = function(l, a, e, t) {
          if (a && 0 != a % N) {
            let r = Math.cos(a),
              o = Math.sin(a),
              d = l[e],
              p = l[t];
            l[e] = d * r - p * o, l[t] = p * r + d * o
          }
        };
        k.prototype.isSame = function(t) {
          return !!t && this.x === t.x && this.y === t.y && this.z === t.z
        }, k.prototype.add = function(t) {
          return t ? (this.x += t.x || 0, this.y += t.y || 0, this.z += t.z || 0, this) : this
        }, k.prototype.subtract = function(t) {
          return t ? (this.x -= t.x || 0, this.y -= t.y || 0, this.z -= t.z || 0, this) : this
        }, k.prototype.multiply = function(t) {
          return null == t ? this : ("number" == typeof t ? (this.x *= t, this.y *= t, this.z *= t) : (this.x *= null == t.x ? 1 : t.x, this.y *= null == t.y ? 1 : t.y, this.z *= null == t.z ? 1 : t.z), this)
        }, k.prototype.transform = function(t, a, r) {
          return this.multiply(r), this.rotate(a), this.add(t), this
        }, k.prototype.lerp = function(e, t) {
          return this.x = s(this.x, e.x || 0, t), this.y = s(this.y, e.y || 0, t), this.z = s(this.z, e.z || 0, t), this
        }, k.prototype.magnitude = function() {
          let t = this.x * this.x + this.y * this.y + this.z * this.z;
          return r(t)
        };
        let r = function(t) {
          return 1e-8 > Math.abs(t - 1) ? 1 : Math.sqrt(t)
        };
        k.prototype.magnitude2d = function() {
          let t = this.x * this.x + this.y * this.y;
          return r(t)
        }, k.prototype.copy = function() {
          return new k(this)
        };
        let a = {
            x: 1,
            y: 1,
            z: 1
          },
          d = function(t) {
            this.create(t || {})
          };
        d.prototype.create = function(t) {
          this.children = [], c(this, this.constructor.defaults), this.setOptions(t), this.translate = new k(t.translate), this.rotate = new k(t.rotate), this.scale = new k(a).multiply(this.scale), this.origin = new k, this.renderOrigin = new k, this.addTo && this.addTo.addChild(this)
        }, d.defaults = {}, d.optionKeys = Object.keys(d.defaults).concat(["rotate", "translate", "scale", "addTo"]), d.prototype.setOptions = function(t) {
          let a = this.constructor.optionKeys;
          for (let r in t) - 1 != a.indexOf(r) && (this[r] = t[r])
        }, d.prototype.addChild = function(t) {
          -1 != this.children.indexOf(t) || (t.remove(), t.addTo = this, this.children.push(t))
        }, d.prototype.removeChild = function(e) {
          let t = this.children.indexOf(e); - 1 != t && this.children.splice(t, 1)
        }, d.prototype.remove = function() {
          this.addTo && this.addTo.removeChild(this)
        }, d.prototype.update = function() {
          this.reset(), this.children.forEach(function(t) {
            t.update()
          }), this.transform(this.translate, this.rotate, this.scale)
        }, d.prototype.reset = function() {
          this.renderOrigin.set(this.origin)
        }, d.prototype.transform = function(a, r, o) {
          this.renderOrigin.transform(a, r, o), this.children.forEach(function(e) {
            e.transform(a, r, o)
          })
        }, d.prototype.updateGraph = function() {
          this.update(), this.updateFlatGraph(), this.flatGraph.forEach(function(t) {
            t.updateSortValue()
          }), this.flatGraph.sort(d.shapeSorter)
        }, d.shapeSorter = function(e, t) {
          return e.sortValue - t.sortValue
        }, Object.defineProperty(d.prototype, "flatGraph", {
          get: function() {
            return this._flatGraph || this.updateFlatGraph(), this._flatGraph
          },
          set: function(t) {
            this._flatGraph = t
          }
        }), d.prototype.updateFlatGraph = function() {
          this.flatGraph = this.getFlatGraph()
        }, d.prototype.getFlatGraph = function() {
          let t = [this];
          return this.addChildFlatGraph(t)
        }, d.prototype.addChildFlatGraph = function(t) {
          return this.children.forEach(function(a) {
            let r = a.getFlatGraph();
            Array.prototype.push.apply(t, r)
          }), t
        }, d.prototype.updateSortValue = function() {
          this.sortValue = this.renderOrigin.z
        }, d.prototype.render = function() {}, d.prototype.renderGraphCanvas = function(e) {
          if (!e) throw new Error("[Cube]\u672A\u63D0\u4F9B\u6E32\u67D3\u4E0A\u4E0B\u6587");
          this.flatGraph.forEach(function(t) {
            t.render(e, u)
          })
        }, d.prototype.copy = function(a) {
          let r = {},
            o = this.constructor.optionKeys;
          o.forEach(function(t) {
            r[t] = this[t]
          }, this), c(r, a);
          let t = this.constructor;
          return new t(r)
        }, d.prototype.copyGraph = function(t) {
          let r = this.copy(t);
          return this.children.forEach(function(t) {
            t.copyGraph({
              addTo: r
            })
          }), r
        }, d.prototype.normalizeRotate = function() {
          this.rotate.x = R(this.rotate.x, N), this.rotate.y = R(this.rotate.y, N), this.rotate.z = R(this.rotate.z, N)
        };
        let T = function(a) {
          return function(r) {
            let t = function(t) {
              this.create(t || {})
            };
            return t.prototype = Object.create(a.prototype), t.prototype.constructor = t, t.defaults = c({}, a.defaults), c(t.defaults, r), t.optionKeys = a.optionKeys.slice(0), Object.keys(t.defaults).forEach(function(e) {
              1 != !t.optionKeys.indexOf(e) && t.optionKeys.push(e)
            }), t.subclass = T(t), t
          }
        };
        d.subclass = T(d);
        let e = "undefined" != typeof window,
          t = "mousedown",
          l = "mousemove",
          q = "mouseup";
        e && (window.PointerEvent ? (t = "pointerdown", l = "pointermove", q = "pointerup") : "ontouchstart" in window && (t = "touchstart", l = "touchmove", q = "touchend"));
        let G = function(t) {
          this.create(t || {})
        };
        G.prototype.create = function(e) {
          this.onDragStart = e.onDragStart || o, this.onDragMove = e.onDragMove || o, this.onDragEnd = e.onDragEnd || o, this.bindDrag(e.startElement)
        }, G.prototype.bindDrag = function(a) {
          a = this.getQueryElement(a), a && (a.style.touchAction = "none", a.addEventListener(t, this))
        }, G.prototype.getQueryElement = function(t) {
          return "string" == typeof t && (t = document.querySelector(t)), t
        }, G.prototype.handleEvent = function(e) {
          let t = this["on" + e.type];
          t && t.call(this, e)
        }, G.prototype.onmousedown = G.prototype.onpointerdown = function(t) {
          this.dragStart(t, t)
        }, G.prototype.ontouchstart = function(t) {
          this.dragStart(t, t.changedTouches[0])
        }, G.prototype.dragStart = function(t, r) {
          t.preventDefault(), this.dragStartX = r.pageX, this.dragStartY = r.pageY, e && (window.addEventListener(l, this), window.addEventListener(q, this)), this.onDragStart(r)
        }, G.prototype.ontouchmove = function(t) {
          this.dragMove(t, t.changedTouches[0])
        }, G.prototype.onmousemove = G.prototype.onpointermove = function(t) {
          this.dragMove(t, t)
        }, G.prototype.dragMove = function(a, r) {
          a.preventDefault();
          let o = r.pageX - this.dragStartX,
            e = r.pageY - this.dragStartY;
          this.onDragMove(r, o, e)
        }, G.prototype.onmouseup = G.prototype.onpointerup = G.prototype.ontouchend = G.prototype.dragEnd = function() {
          window.removeEventListener(l, this), window.removeEventListener(q, this), this.onDragEnd()
        };
        let w = d.subclass({
          element: void 0,
          centered: !0,
          zoom: 1,
          dragRotate: !1,
          resize: !1,
          onPrerender: o,
          onDragStart: o,
          onDragMove: o,
          onDragEnd: o,
          onResize: o
        });
        c(w.prototype, G.prototype), w.prototype.create = function(t) {
          d.prototype.create.call(this, t), G.prototype.create.call(this, t), this.setElement(this.element), this.setDragRotate(this.dragRotate), this.setResize(this.resize)
        }, w.prototype.setElement = function(t) {
          if (t = this.element, !t) throw new Error("[Cube]\u672A\u6307\u5B9A\u5143\u7D20");
          this.setCanvas(t)
        }, w.prototype.setSize = function(a, r) {
          a = Math.round(a), r = Math.round(r), this.setSizeCanvas(a, r)
        }, w.prototype.setResize = function(t) {
          this.resize = t, this.resizeListener || (this.resizeListener = this.onWindowResize.bind(this)), t ? (window.addEventListener("resize", this.resizeListener), this.onWindowResize()) : window.removeEventListener("resize", this.resizeListener)
        }, w.prototype.onWindowResize = function() {
          this.setMeasuredSize(), this.onResize(this.width, this.height)
        }, w.prototype.setMeasuredSize = function() {
          let o, d, r = "fullscreen" == this.resize;
          if (r) o = window.innerWidth, d = window.innerHeight;
          else {
            let e = this.element.getBoundingClientRect();
            o = e.width, d = e.height
          }
          this.setSize(o, d)
        }, w.prototype.renderGraph = function(t) {
          this.renderGraphCanvas(t)
        }, w.prototype.updateRenderGraph = function(t) {
          this.updateGraph(), this.renderGraph(t)
        }, w.prototype.setCanvas = function(t) {
          this.element = t, this.ctx = this.element.getContext("2d"), this.setSizeCanvas(t.width, t.height)
        }, w.prototype.setSizeCanvas = function(a, r) {
          this.width = a, this.height = r;
          let o = this.pixelRatio = window.devicePixelRatio || 1;
          this.element.width = this.canvasWidth = a * o, this.element.height = this.canvasHeight = r * o;
          let e = 1 < o && !this.resize;
          e && (this.element.style.width = a + "px", this.element.style.height = r + "px")
        }, w.prototype.renderGraphCanvas = function(t) {
          t = t || this, this.prerenderCanvas(), d.prototype.renderGraphCanvas.call(t, this.ctx), this.postrenderCanvas()
        }, w.prototype.prerenderCanvas = function() {
          let o = this.ctx;
          if (o.lineCap = "round", o.lineJoin = "round", o.clearRect(0, 0, this.canvasWidth, this.canvasHeight), o.save(), this.centered) {
            let t = this.width / 2 * this.pixelRatio,
              a = this.height / 2 * this.pixelRatio;
            o.translate(t, a)
          }
          let e = this.pixelRatio * this.zoom;
          o.scale(e, e), this.onPrerender(o)
        }, w.prototype.postrenderCanvas = function() {
          this.ctx.restore()
        }, w.prototype.setDragRotate = function(t) {
          t && (!0 === t && (t = this), this.dragRotate = t, this.bindDrag(this.element))
        }, w.prototype.dragStart = function() {
          this.dragStartRX = this.dragRotate.rotate.x, this.dragStartRY = this.dragRotate.rotate.y, G.prototype.dragStart.apply(this, arguments)
        }, w.prototype.dragMove = function(o, d) {
          let e = d.pageX - this.dragStartX,
            t = d.pageY - this.dragStartY,
            a = Math.min(this.width, this.height);
          this.dragRotate.rotate.x = this.dragStartRX - t / a * N, this.dragRotate.rotate.y = this.dragStartRY - e / a * N, G.prototype.dragMove.apply(this, arguments)
        };
        let D = function(t, a, r) {
            this.method = t, this.points = a.map(M), this.renderPoints = a.map(V), this.previousPoint = r, this.endRenderPoint = this.renderPoints[this.renderPoints.length - 1], "arc" == t && (this.controlPoints = [new k, new k])
          },
          M = function(t) {
            return t instanceof k ? t : new k(t)
          },
          V = function(t) {
            return new k(t)
          };
        D.prototype.reset = function() {
          let a = this.points;
          this.renderPoints.forEach(function(r, o) {
            let e = a[o];
            r.set(e)
          })
        }, D.prototype.transform = function(a, r, o) {
          this.renderPoints.forEach(function(e) {
            e.transform(a, r, o)
          })
        }, D.prototype.render = function(t, a, r) {
          return this[this.method](t, a, r)
        }, D.prototype.move = function(t, a, r) {
          return r.move(t, a, this.renderPoints[0])
        }, D.prototype.line = function(t, a, r) {
          return r.line(t, a, this.renderPoints[0])
        }, D.prototype.bezier = function(o, d, l) {
          let e = this.renderPoints[0],
            t = this.renderPoints[1],
            a = this.renderPoints[2];
          return l.bezier(o, d, e, t, a)
        };
        let E = 9 / 16;
        D.prototype.arc = function(p, T, l) {
          let e = this.previousPoint,
            t = this.renderPoints[0],
            a = this.renderPoints[1],
            r = this.controlPoints[0],
            o = this.controlPoints[1];
          return r.set(e).lerp(t, E), o.set(a).lerp(t, E), l.bezier(p, T, r, o, a)
        };
        let m = d.subclass({
          stroke: 1,
          fill: !1,
          color: "#333",
          closed: !0,
          visible: !0,
          path: [{}],
          front: {
            z: 1
          },
          backface: !0
        });
        m.prototype.create = function(t) {
          d.prototype.create.call(this, t), this.updatePath(), this.front = new k(t.front || this.front), this.renderFront = new k(this.front), this.renderNormal = new k
        };
        let y = ["move", "line", "bezier", "arc"];
        m.prototype.updatePath = function() {
          this.setPath(), this.updatePathCommands()
        }, m.prototype.setPath = function() {}, m.prototype.updatePathCommands = function() {
          let r;
          this.pathCommands = this.path.map(function(o, d) {
            let e = Object.keys(o),
              t = e[0],
              l = o[t],
              c = 1 == e.length && -1 != y.indexOf(t);
            c || (t = "line", l = o);
            let i = "line" == t || "move" == t,
              s = Array.isArray(l);
            i && !s && (l = [l]), t = 0 === d ? "move" : t;
            let p = new D(t, l, r);
            return r = p.endRenderPoint, p
          })
        }, m.prototype.reset = function() {
          this.renderOrigin.set(this.origin), this.renderFront.set(this.front), this.pathCommands.forEach(function(t) {
            t.reset()
          })
        }, m.prototype.transform = function(a, r, o) {
          this.renderOrigin.transform(a, r, o), this.renderFront.transform(a, r, o), this.renderNormal.set(this.renderOrigin).subtract(this.renderFront), this.pathCommands.forEach(function(e) {
            e.transform(a, r, o)
          }), this.children.forEach(function(e) {
            e.transform(a, r, o)
          })
        }, m.prototype.updateSortValue = function() {
          let r = this.pathCommands.length,
            d = this.pathCommands[0].endRenderPoint,
            e = this.pathCommands[r - 1].endRenderPoint,
            l = 2 < r && d.isSame(e);
          l && (r -= 1);
          let T = 0;
          for (let e = 0; e < r; e++) T += this.pathCommands[e].endRenderPoint.z;
          this.sortValue = T / r
        }, m.prototype.render = function(t, a) {
          let r = this.pathCommands.length;
          if (this.visible && r && (this.isFacingBack = 0 < this.renderNormal.z, this.backface || !this.isFacingBack)) {
            if (!a) throw new Error("[Cube]\u672A\u63D0\u4F9B\u6E32\u67D3\u5668");
            a.isCanvas && 1 == r ? this.renderCanvasDot(t, a) : this.renderPath(t, a)
          }
        }, m.prototype.renderCanvasDot = function(a) {
          let r = this.getLineWidth();
          if (r) {
            a.fillStyle = this.getRenderColor();
            let e = this.pathCommands[0].endRenderPoint;
            a.beginPath(), a.arc(e.x, e.y, r / 2, 0, N), a.fill()
          }
        }, m.prototype.getLineWidth = function() {
          return this.stroke ? !0 == this.stroke ? 1 : this.stroke : 0
        }, m.prototype.getRenderColor = function() {
          let e = "string" == typeof this.backface && this.isFacingBack,
            t = e ? this.backface : this.color;
          return t
        }, m.prototype.renderPath = function(o, d) {
          let l, e = 2 == this.pathCommands.length && "line" == this.pathCommands[1].method,
            t = !e && this.closed,
            a = this.getRenderColor();
          d.renderPath(o, l, this.pathCommands, t), d.stroke(o, l, this.stroke, a, this.getLineWidth()), d.fill(o, l, this.fill, a), d.end(o, l)
        };
        let h = d.subclass({
          updateSort: !1,
          visible: !0
        });
        h.prototype.updateSortValue = function() {
          let e = 0;
          this.flatGraph.forEach(function(t) {
            t.updateSortValue(), e += t.sortValue
          }), this.sortValue = e / this.flatGraph.length, this.updateSort && this.flatGraph.sort(d.shapeSorter)
        }, h.prototype.render = function(t, a) {
          this.visible && this.flatGraph.forEach(function(r) {
            r.render(t, a)
          })
        }, h.prototype.updateFlatGraph = function() {
          this.flatGraph = this.addChildFlatGraph([])
        }, h.prototype.getFlatGraph = function() {
          return [this]
        };
        let U = m.subclass({
          width: 1,
          height: 1
        });
        U.prototype.setPath = function() {
          let e = this.width / 2,
            t = this.height / 2;
          this.path = [{
            x: -e,
            y: -t
          }, {
            x: e,
            y: -t
          }, {
            x: e,
            y: t
          }, {
            x: -e,
            y: t
          }]
        };
        let X = m.subclass({
          width: 1,
          height: 1,
          cornerRadius: .25,
          closed: !1
        });
        X.prototype.setPath = function() {
          let d = this.width / 2,
            l = this.height / 2,
            T = Math.min(d, l),
            e = Math.min(this.cornerRadius, T),
            t = d - e,
            a = l - e,
            r = [{
              x: t,
              y: -l
            }, {
              arc: [{
                x: d,
                y: -l
              }, {
                x: d,
                y: -a
              }]
            }];
          a && r.push({
            x: d,
            y: a
          }), r.push({
            arc: [{
              x: d,
              y: l
            }, {
              x: t,
              y: l
            }]
          }), t && r.push({
            x: -t,
            y: l
          }), r.push({
            arc: [{
              x: -d,
              y: l
            }, {
              x: -d,
              y: a
            }]
          }), a && r.push({
            x: -d,
            y: -a
          }), r.push({
            arc: [{
              x: -d,
              y: -l
            }, {
              x: -t,
              y: -l
            }]
          }), t && r.push({
            x: t,
            y: -l
          }), this.path = r
        };
        let z = m.subclass({
          diameter: 1,
          width: void 0,
          height: void 0,
          quarters: 4,
          closed: !1
        });
        z.prototype.setPath = function() {
          let a = null == this.width ? this.diameter : this.width,
            r = null == this.height ? this.diameter : this.height,
            o = a / 2,
            e = r / 2;
          this.path = [{
            x: 0,
            y: -e
          }, {
            arc: [{
              x: o,
              y: -e
            }, {
              x: o,
              y: 0
            }]
          }], 1 < this.quarters && this.path.push({
            arc: [{
              x: o,
              y: e
            }, {
              x: 0,
              y: e
            }]
          }), 2 < this.quarters && this.path.push({
            arc: [{
              x: -o,
              y: e
            }, {
              x: -o,
              y: 0
            }]
          }), 3 < this.quarters && this.path.push({
            arc: [{
              x: -o,
              y: -e
            }, {
              x: 0,
              y: -e
            }]
          })
        };
        let b = m.subclass({
          sides: 3,
          radius: .5
        });
        b.prototype.setPath = function() {
          this.path = [];
          for (let r = 0; r < this.sides; r++) {
            let o = r / this.sides * N - N / 4,
              e = Math.cos(o) * this.radius,
              t = Math.sin(o) * this.radius;
            this.path.push({
              x: e,
              y: t
            })
          }
        };
        let g = z.subclass({
          fill: !0
        });
        g.prototype.create = function() {
          z.prototype.create.apply(this, arguments), this.apex = new d({
            addTo: this,
            translate: {
              z: this.diameter / 2
            }
          }), this.renderCentroid = new k
        }, g.prototype.updateSortValue = function() {
          this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin, 3 / 8), this.sortValue = this.renderCentroid.z
        }, g.prototype.render = function(e, t) {
          this.renderDome(e, t), z.prototype.render.apply(this, arguments)
        }, g.prototype.renderDome = function(d, l) {
          if (this.visible) {
            let T = this.getDomeRenderElement(d, l),
              e = Math.atan2(this.renderNormal.y, this.renderNormal.x),
              t = this.diameter / 2 * this.renderNormal.magnitude(),
              a = this.renderOrigin.x,
              r = this.renderOrigin.y;
            l.stroke(d, T, this.stroke, this.color, this.getLineWidth()), l.fill(d, T, this.fill, this.color), l.end(d, T)
          }
        };
        let f = h.subclass({
          color: "#333",
          updateSort: !0
        });
        f.prototype.create = function() {
          h.prototype.create.apply(this, arguments), this.pathCommands = [new D("move", [{}]), new D("line", [{}])]
        }, f.prototype.render = function(e, t) {
          this.renderCylinderSurface(e, t), h.prototype.render.apply(this, arguments)
        }, f.prototype.renderCylinderSurface = function(d, l) {
          if (this.visible) {
            let T, e = this.frontBase,
              t = this.rearBase,
              a = e.renderNormal.magnitude(),
              r = e.diameter * a + e.getLineWidth();
            this.pathCommands[0].renderPoints[0].set(e.renderOrigin), this.pathCommands[1].renderPoints[0].set(t.renderOrigin), l.renderPath(d, T, this.pathCommands), l.stroke(d, T, !0, this.color, r), l.end(d, T)
          }
        }, f.prototype.copyGraph = o;
        let x = z.subclass();
        x.prototype.copyGraph = o;
        let F = m.subclass({
          diameter: 1,
          length: 1,
          frontFace: void 0,
          fill: !0
        });
        F.prototype.create = function() {
          m.prototype.create.apply(this, arguments), this.group = new f({
            addTo: this,
            color: this.color,
            visible: this.visible
          });
          let t = this.length / 2,
            a = this.backface || !0;
          this.frontBase = this.group.frontBase = new z({
            addTo: this.group,
            diameter: this.diameter,
            translate: {
              z: t
            },
            rotate: {
              y: N / 2
            },
            color: this.color,
            stroke: this.stroke,
            fill: this.fill,
            backface: this.frontFace || a,
            visible: this.visible
          }), this.rearBase = this.group.rearBase = this.frontBase.copy({
            translate: {
              z: -t
            },
            rotate: {
              y: 0
            },
            backface: a
          })
        }, F.prototype.render = function() {}, ["stroke", "fill", "color", "visible"].forEach(function(t) {
          let a = "_" + t;
          Object.defineProperty(F.prototype, t, {
            get: function() {
              return this[a]
            },
            set: function(r) {
              this[a] = r, this.frontBase && (this.frontBase[t] = r, this.rearBase[t] = r, this.group[t] = r)
            }
          })
        });
        let O = z.subclass({
          length: 1,
          fill: !0
        });
        O.prototype.create = function() {
          z.prototype.create.apply(this, arguments), this.apex = new d({
            addTo: this,
            translate: {
              z: this.length
            }
          }), this.renderApex = new k, this.renderCentroid = new k, this.tangentA = new k, this.tangentB = new k, this.surfacePathCommands = [new D("move", [{}]), new D("line", [{}]), new D("line", [{}])]
        }, O.prototype.updateSortValue = function() {
          this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin, 1 / 3), this.sortValue = this.renderCentroid.z
        }, O.prototype.render = function(e, t) {
          this.renderConeSurface(e, t), z.prototype.render.apply(this, arguments)
        }, O.prototype.renderConeSurface = function(l, T) {
          if (this.visible) {
            this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin);
            let e = this.renderNormal.magnitude(),
              n = this.renderApex.magnitude2d(),
              t = this.renderNormal.magnitude2d(),
              a = Math.acos(t / e),
              i = Math.sin(a),
              c = this.diameter / 2 * e;
            if (c * i < n) {
              let e = Math.atan2(this.renderNormal.y, this.renderNormal.x) + N / 2,
                t = Math.acos(c / (n / i)),
                a = this.tangentA,
                r = this.tangentB;
              a.x = Math.cos(t) * c * i, a.y = Math.sin(t) * c, r.set(this.tangentA), r.y *= -1, a.rotateZ(e), r.rotateZ(e), a.add(this.renderOrigin), r.add(this.renderOrigin), this.setSurfaceRenderPoint(0, a), this.setSurfaceRenderPoint(1, this.apex.renderOrigin), this.setSurfaceRenderPoint(2, r);
              let o = this.getSurfaceRenderElement(l, T);
              T.renderPath(l, o, this.surfacePathCommands), T.stroke(l, o, this.stroke, this.color, this.getLineWidth()), T.fill(l, o, this.fill, this.color), T.end(l, o)
            }
          }
        }, O.prototype.setSurfaceRenderPoint = function(t, a) {
          let r = this.surfacePathCommands[t].renderPoints[0];
          r.set(a)
        };
        let W = U.subclass();
        W.prototype.copyGraph = function() {};
        let Z = ["frontFace", "rearFace", "leftFace", "rightFace", "topFace", "bottomFace"],
          C = c({}, m.defaults);
        delete C.path, Z.forEach(function(t) {
          C[t] = !0
        }), c(C, {
          width: 1,
          height: 1,
          depth: 1,
          fill: !0
        });
        let J = d.subclass(C);
        return J.prototype.create = function(t) {
          d.prototype.create.call(this, t), this.updatePath(), this.fill = this.fill
        }, J.prototype.updatePath = function() {
          Z.forEach(function(t) {
            this[t] = this[t]
          }, this)
        }, Z.forEach(function(t) {
          let a = "_" + t;
          Object.defineProperty(J.prototype, t, {
            get: function() {
              return this[a]
            },
            set: function(r) {
              this[a] = r, this.setFace(t, r)
            }
          })
        }), J.prototype.setFace = function(a, r) {
          let o = a + "Rect",
            e = this[o];
          if (!r) return void this.removeChild(e);
          let l = this.getFaceOptions(a);
          l.color = "string" == typeof r ? r : this.color, e ? e.setOptions(l) : e = this[o] = new W(l), e.updatePath(), this.addChild(e)
        }, J.prototype.getFaceOptions = function(e) {
          return {
            frontFace: {
              width: this.width,
              height: this.height,
              translate: {
                z: this.depth / 2
              }
            },
            rearFace: {
              width: this.width,
              height: this.height,
              translate: {
                z: -this.depth / 2
              },
              rotate: {
                y: N / 2
              }
            },
            leftFace: {
              width: this.depth,
              height: this.height,
              translate: {
                x: -this.width / 2
              },
              rotate: {
                y: -N / 4
              }
            },
            rightFace: {
              width: this.depth,
              height: this.height,
              translate: {
                x: this.width / 2
              },
              rotate: {
                y: N / 4
              }
            },
            topFace: {
              width: this.width,
              height: this.depth,
              translate: {
                y: -this.height / 2
              },
              rotate: {
                x: -N / 4
              }
            },
            bottomFace: {
              width: this.width,
              height: this.depth,
              translate: {
                y: this.height / 2
              },
              rotate: {
                x: N / 4
              }
            }
          } [e]
        }, ["color", "stroke", "fill", "backface", "front", "visible"].forEach(function(a) {
          let e = "_" + a;
          Object.defineProperty(J.prototype, a, {
            get: function() {
              return this[e]
            },
            set: function(r) {
              this[e] = r, Z.forEach(function(o) {
                let d = this[o + "Rect"],
                  e = "string" == typeof this[o];
                d && !("color" == a && e) && (d[a] = r)
              }, this)
            }
          })
        }), {
          init: w,
          custom: m,
          rect: U,
          roundedRect: X,
          ellipse: z,
          polygon: b,
          hemisphere: g,
          cylinder: F,
          cone: O,
          box: J
        }
      }();
