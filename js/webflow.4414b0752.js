/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var u = (e, t) => () => (t || e((t = {
		exports: {}
	}).exports, t), t.exports);
	var Ui = u(() => {
		window.tram = function(e) {
			function t(l, T) {
				var S = new f.Bare;
				return S.init(l, T)
			}

			function r(l) {
				return l.replace(/[A-Z]/g, function(T) {
					return "-" + T.toLowerCase()
				})
			}

			function n(l) {
				var T = parseInt(l.slice(1), 16),
					S = T >> 16 & 255,
					C = T >> 8 & 255,
					O = 255 & T;
				return [S, C, O]
			}

			function o(l, T, S) {
				return "#" + (1 << 24 | l << 16 | T << 8 | S).toString(16).slice(1)
			}

			function i() {}

			function a(l, T) {
				h("Type warning: Expected: [" + l + "] Got: [" + typeof T + "] " + T)
			}

			function s(l, T, S) {
				h("Units do not match [" + l + "]: " + T + ", " + S)
			}

			function c(l, T, S) {
				if (T !== void 0 && (S = T), l === void 0) return S;
				var C = S;
				return xe.test(l) || !Me.test(l) ? C = parseInt(l, 10) : Me.test(l) && (C = 1e3 * parseFloat(l)), 0 > C && (C = 0), C === C ? C : S
			}

			function h(l) {
				oe.debug && window && window.console.warn(l)
			}

			function y(l) {
				for (var T = -1, S = l ? l.length : 0, C = []; ++T < S;) {
					var O = l[T];
					O && C.push(O)
				}
				return C
			}
			var d = function(l, T, S) {
					function C(se) {
						return typeof se == "object"
					}

					function O(se) {
						return typeof se == "function"
					}

					function L() {}

					function te(se, _e) {
						function K() {
							var Fe = new fe;
							return O(Fe.init) && Fe.init.apply(Fe, arguments), Fe
						}

						function fe() {}
						_e === S && (_e = se, se = Object), K.Bare = fe;
						var de, we = L[l] = se[l],
							ot = fe[l] = K[l] = new L;
						return ot.constructor = K, K.mixin = function(Fe) {
							return fe[l] = K[l] = te(K, Fe)[l], K
						}, K.open = function(Fe) {
							if (de = {}, O(Fe) ? de = Fe.call(K, ot, we, K, se) : C(Fe) && (de = Fe), C(de))
								for (var Or in de) T.call(de, Or) && (ot[Or] = de[Or]);
							return O(ot.init) || (ot.init = se), K
						}, K.open(_e)
					}
					return te
				}("prototype", {}.hasOwnProperty),
				I = {
					ease: ["ease", function(l, T, S, C) {
						var O = (l /= C) * l,
							L = O * l;
						return T + S * (-2.75 * L * O + 11 * O * O + -15.5 * L + 8 * O + .25 * l)
					}],
					"ease-in": ["ease-in", function(l, T, S, C) {
						var O = (l /= C) * l,
							L = O * l;
						return T + S * (-1 * L * O + 3 * O * O + -3 * L + 2 * O)
					}],
					"ease-out": ["ease-out", function(l, T, S, C) {
						var O = (l /= C) * l,
							L = O * l;
						return T + S * (.3 * L * O + -1.6 * O * O + 2.2 * L + -1.8 * O + 1.9 * l)
					}],
					"ease-in-out": ["ease-in-out", function(l, T, S, C) {
						var O = (l /= C) * l,
							L = O * l;
						return T + S * (2 * L * O + -5 * O * O + 2 * L + 2 * O)
					}],
					linear: ["linear", function(l, T, S, C) {
						return S * l / C + T
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, T, S, C) {
						return S * (l /= C) * l + T
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, T, S, C) {
						return -S * (l /= C) * (l - 2) + T
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, T, S, C) {
						return (l /= C / 2) < 1 ? S / 2 * l * l + T : -S / 2 * (--l * (l - 2) - 1) + T
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, T, S, C) {
						return S * (l /= C) * l * l + T
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, T, S, C) {
						return S * ((l = l / C - 1) * l * l + 1) + T
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, T, S, C) {
						return (l /= C / 2) < 1 ? S / 2 * l * l * l + T : S / 2 * ((l -= 2) * l * l + 2) + T
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, T, S, C) {
						return S * (l /= C) * l * l * l + T
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, T, S, C) {
						return -S * ((l = l / C - 1) * l * l * l - 1) + T
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, T, S, C) {
						return (l /= C / 2) < 1 ? S / 2 * l * l * l * l + T : -S / 2 * ((l -= 2) * l * l * l - 2) + T
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, T, S, C) {
						return S * (l /= C) * l * l * l * l + T
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, T, S, C) {
						return S * ((l = l / C - 1) * l * l * l * l + 1) + T
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, T, S, C) {
						return (l /= C / 2) < 1 ? S / 2 * l * l * l * l * l + T : S / 2 * ((l -= 2) * l * l * l * l + 2) + T
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, T, S, C) {
						return -S * Math.cos(l / C * (Math.PI / 2)) + S + T
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, T, S, C) {
						return S * Math.sin(l / C * (Math.PI / 2)) + T
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, T, S, C) {
						return -S / 2 * (Math.cos(Math.PI * l / C) - 1) + T
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, T, S, C) {
						return l === 0 ? T : S * Math.pow(2, 10 * (l / C - 1)) + T
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, T, S, C) {
						return l === C ? T + S : S * (-Math.pow(2, -10 * l / C) + 1) + T
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, T, S, C) {
						return l === 0 ? T : l === C ? T + S : (l /= C / 2) < 1 ? S / 2 * Math.pow(2, 10 * (l - 1)) + T : S / 2 * (-Math.pow(2, -10 * --l) + 2) + T
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, T, S, C) {
						return -S * (Math.sqrt(1 - (l /= C) * l) - 1) + T
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, T, S, C) {
						return S * Math.sqrt(1 - (l = l / C - 1) * l) + T
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, T, S, C) {
						return (l /= C / 2) < 1 ? -S / 2 * (Math.sqrt(1 - l * l) - 1) + T : S / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + T
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, T, S, C, O) {
						return O === void 0 && (O = 1.70158), S * (l /= C) * l * ((O + 1) * l - O) + T
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, T, S, C, O) {
						return O === void 0 && (O = 1.70158), S * ((l = l / C - 1) * l * ((O + 1) * l + O) + 1) + T
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, T, S, C, O) {
						return O === void 0 && (O = 1.70158), (l /= C / 2) < 1 ? S / 2 * l * l * (((O *= 1.525) + 1) * l - O) + T : S / 2 * ((l -= 2) * l * (((O *= 1.525) + 1) * l + O) + 2) + T
					}]
				},
				_ = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				m = document,
				w = window,
				x = "bkwld-tram",
				R = /[\-\.0-9]/g,
				N = /[A-Z]/,
				A = "number",
				M = /^(rgb|#)/,
				q = /(em|cm|mm|in|pt|pc|px)$/,
				D = /(em|cm|mm|in|pt|pc|px|%)$/,
				B = /(deg|rad|turn)$/,
				Q = "unitless",
				Z = /(all|none) 0s ease 0s/,
				ae = /^(width|height)$/,
				re = " ",
				W = m.createElement("a"),
				b = ["Webkit", "Moz", "O", "ms"],
				F = ["-webkit-", "-moz-", "-o-", "-ms-"],
				X = function(l) {
					if (l in W.style) return {
						dom: l,
						css: l
					};
					var T, S, C = "",
						O = l.split("-");
					for (T = 0; T < O.length; T++) C += O[T].charAt(0).toUpperCase() + O[T].slice(1);
					for (T = 0; T < b.length; T++)
						if (S = b[T] + C, S in W.style) return {
							dom: S,
							css: F[T] + l
						}
				},
				U = t.support = {
					bind: Function.prototype.bind,
					transform: X("transform"),
					transition: X("transition"),
					backface: X("backface-visibility"),
					timing: X("transition-timing-function")
				};
			if (U.transition) {
				var J = U.timing.dom;
				if (W.style[J] = I["ease-in-back"][0], !W.style[J])
					for (var ne in _) I[ne][0] = _[ne]
			}
			var G = t.frame = function() {
					var l = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame;
					return l && U.bind ? l.bind(w) : function(T) {
						w.setTimeout(T, 16)
					}
				}(),
				k = t.now = function() {
					var l = w.performance,
						T = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
					return T && U.bind ? T.bind(l) : Date.now || function() {
						return +new Date
					}
				}(),
				p = d(function(l) {
					function T(ie, ve) {
						var Te = y(("" + ie).split(re)),
							ge = Te[0];
						ve = ve || {};
						var Ge = j[ge];
						if (!Ge) return h("Unsupported property: " + ge);
						if (!ve.weak || !this.props[ge]) {
							var Qe = Ge[0],
								Be = this.props[ge];
							return Be || (Be = this.props[ge] = new Qe.Bare), Be.init(this.$el, Te, Ge, ve), Be
						}
					}

					function S(ie, ve, Te) {
						if (ie) {
							var ge = typeof ie;
							if (ve || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ge == "number" && ve) return this.timer = new ee({
								duration: ie,
								context: this,
								complete: L
							}), void(this.active = !0);
							if (ge == "string" && ve) {
								switch (ie) {
									case "hide":
										K.call(this);
										break;
									case "stop":
										te.call(this);
										break;
									case "redraw":
										fe.call(this);
										break;
									default:
										T.call(this, ie, Te && Te[1])
								}
								return L.call(this)
							}
							if (ge == "function") return void ie.call(this, this);
							if (ge == "object") {
								var Ge = 0;
								ot.call(this, ie, function(Se, Hy) {
									Se.span > Ge && (Ge = Se.span), Se.stop(), Se.animate(Hy)
								}, function(Se) {
									"wait" in Se && (Ge = c(Se.wait, 0))
								}), we.call(this), Ge > 0 && (this.timer = new ee({
									duration: Ge,
									context: this
								}), this.active = !0, ve && (this.timer.complete = L));
								var Qe = this,
									Be = !1,
									fn = {};
								G(function() {
									ot.call(Qe, ie, function(Se) {
										Se.active && (Be = !0, fn[Se.name] = Se.nextStyle)
									}), Be && Qe.$el.css(fn)
								})
							}
						}
					}

					function C(ie) {
						ie = c(ie, 0), this.active ? this.queue.push({
							options: ie
						}) : (this.timer = new ee({
							duration: ie,
							context: this,
							complete: L
						}), this.active = !0)
					}

					function O(ie) {
						return this.active ? (this.queue.push({
							options: ie,
							args: arguments
						}), void(this.timer.complete = L)) : h("No active transition timer. Use start() or wait() before then().")
					}

					function L() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var ie = this.queue.shift();
							S.call(this, ie.options, !0, ie.args)
						}
					}

					function te(ie) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var ve;
						typeof ie == "string" ? (ve = {}, ve[ie] = 1) : ve = typeof ie == "object" && ie != null ? ie : this.props, ot.call(this, ve, Fe), we.call(this)
					}

					function se(ie) {
						te.call(this, ie), ot.call(this, ie, Or, By)
					}

					function _e(ie) {
						typeof ie != "string" && (ie = "block"), this.el.style.display = ie
					}

					function K() {
						te.call(this), this.el.style.display = "none"
					}

					function fe() {
						this.el.offsetHeight
					}

					function de() {
						te.call(this), e.removeData(this.el, x), this.$el = this.el = null
					}

					function we() {
						var ie, ve, Te = [];
						this.upstream && Te.push(this.upstream);
						for (ie in this.props) ve = this.props[ie], ve.active && Te.push(ve.string);
						Te = Te.join(","), this.style !== Te && (this.style = Te, this.el.style[U.transition.dom] = Te)
					}

					function ot(ie, ve, Te) {
						var ge, Ge, Qe, Be, fn = ve !== Fe,
							Se = {};
						for (ge in ie) Qe = ie[ge], ge in pe ? (Se.transform || (Se.transform = {}), Se.transform[ge] = Qe) : (N.test(ge) && (ge = r(ge)), ge in j ? Se[ge] = Qe : (Be || (Be = {}), Be[ge] = Qe));
						for (ge in Se) {
							if (Qe = Se[ge], Ge = this.props[ge], !Ge) {
								if (!fn) continue;
								Ge = T.call(this, ge)
							}
							ve.call(this, Ge, Qe)
						}
						Te && Be && Te.call(this, Be)
					}

					function Fe(ie) {
						ie.stop()
					}

					function Or(ie, ve) {
						ie.set(ve)
					}

					function By(ie) {
						this.$el.css(ie)
					}

					function Ye(ie, ve) {
						l[ie] = function() {
							return this.children ? ky.call(this, ve, arguments) : (this.el && ve.apply(this, arguments), this)
						}
					}

					function ky(ie, ve) {
						var Te, ge = this.children.length;
						for (Te = 0; ge > Te; Te++) ie.apply(this.children[Te], ve);
						return this
					}
					l.init = function(ie) {
						if (this.$el = e(ie), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, oe.keepInherited && !oe.fallback) {
							var ve = V(this.el, "transition");
							ve && !Z.test(ve) && (this.upstream = ve)
						}
						U.backface && oe.hideBackface && E(this.el, U.backface.css, "hidden")
					}, Ye("add", T), Ye("start", S), Ye("wait", C), Ye("then", O), Ye("next", L), Ye("stop", te), Ye("set", se), Ye("show", _e), Ye("hide", K), Ye("redraw", fe), Ye("destroy", de)
				}),
				f = d(p, function(l) {
					function T(S, C) {
						var O = e.data(S, x) || e.data(S, x, new p.Bare);
						return O.el || O.init(S), C ? O.start(C) : O
					}
					l.init = function(S, C) {
						var O = e(S);
						if (!O.length) return this;
						if (O.length === 1) return T(O[0], C);
						var L = [];
						return O.each(function(te, se) {
							L.push(T(se, C))
						}), this.children = L, this
					}
				}),
				v = d(function(l) {
					function T() {
						var L = this.get();
						this.update("auto");
						var te = this.get();
						return this.update(L), te
					}

					function S(L, te, se) {
						return te !== void 0 && (se = te), L in I ? L : se
					}

					function C(L) {
						var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(L);
						return (te ? o(te[1], te[2], te[3]) : L).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var O = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					l.init = function(L, te, se, _e) {
						this.$el = L, this.el = L[0];
						var K = te[0];
						se[2] && (K = se[2]), $[K] && (K = $[K]), this.name = K, this.type = se[1], this.duration = c(te[1], this.duration, O.duration), this.ease = S(te[2], this.ease, O.ease), this.delay = c(te[3], this.delay, O.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = ae.test(this.name), this.unit = _e.unit || this.unit || oe.defaultUnit, this.angle = _e.angle || this.angle || oe.defaultAngle, oe.fallback || _e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + I[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
					}, l.set = function(L) {
						L = this.convert(L, this.type), this.update(L), this.redraw()
					}, l.transition = function(L) {
						this.active = !0, L = this.convert(L, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), L == "auto" && (L = T.call(this))), this.nextStyle = L
					}, l.fallback = function(L) {
						var te = this.el.style[this.name] || this.convert(this.get(), this.type);
						L = this.convert(L, this.type), this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)), L == "auto" && (L = T.call(this))), this.tween = new z({
							from: te,
							to: L,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.get = function() {
						return V(this.el, this.name)
					}, l.update = function(L) {
						E(this.el, this.name, L)
					}, l.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, E(this.el, this.name, this.get()));
						var L = this.tween;
						L && L.context && L.destroy()
					}, l.convert = function(L, te) {
						if (L == "auto" && this.auto) return L;
						var se, _e = typeof L == "number",
							K = typeof L == "string";
						switch (te) {
							case A:
								if (_e) return L;
								if (K && L.replace(R, "") === "") return +L;
								se = "number(unitless)";
								break;
							case M:
								if (K) {
									if (L === "" && this.original) return this.original;
									if (te.test(L)) return L.charAt(0) == "#" && L.length == 7 ? L : C(L)
								}
								se = "hex or rgb string";
								break;
							case q:
								if (_e) return L + this.unit;
								if (K && te.test(L)) return L;
								se = "number(px) or string(unit)";
								break;
							case D:
								if (_e) return L + this.unit;
								if (K && te.test(L)) return L;
								se = "number(px) or string(unit or %)";
								break;
							case B:
								if (_e) return L + this.angle;
								if (K && te.test(L)) return L;
								se = "number(deg) or string(angle)";
								break;
							case Q:
								if (_e || K && D.test(L)) return L;
								se = "number(unitless) or string(unit or %)"
						}
						return a(se, L), L
					}, l.redraw = function() {
						this.el.offsetHeight
					}
				}),
				g = d(v, function(l, T) {
					l.init = function() {
						T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), M))
					}
				}),
				H = d(v, function(l, T) {
					l.init = function() {
						T.init.apply(this, arguments), this.animate = this.fallback
					}, l.get = function() {
						return this.$el[this.name]()
					}, l.update = function(S) {
						this.$el[this.name](S)
					}
				}),
				Y = d(v, function(l, T) {
					function S(C, O) {
						var L, te, se, _e, K;
						for (L in C) _e = pe[L], se = _e[0], te = _e[1] || L, K = this.convert(C[L], se), O.call(this, te, K, se)
					}
					l.init = function() {
						T.init.apply(this, arguments), this.current || (this.current = {}, pe.perspective && oe.perspective && (this.current.perspective = oe.perspective, E(this.el, this.name, this.style(this.current)), this.redraw()))
					}, l.set = function(C) {
						S.call(this, C, function(O, L) {
							this.current[O] = L
						}), E(this.el, this.name, this.style(this.current)), this.redraw()
					}, l.transition = function(C) {
						var O = this.values(C);
						this.tween = new he({
							current: this.current,
							values: O,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var L, te = {};
						for (L in this.current) te[L] = L in O ? O[L] : this.current[L];
						this.active = !0, this.nextStyle = this.style(te)
					}, l.fallback = function(C) {
						var O = this.values(C);
						this.tween = new he({
							current: this.current,
							values: O,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.update = function() {
						E(this.el, this.name, this.style(this.current))
					}, l.style = function(C) {
						var O, L = "";
						for (O in C) L += O + "(" + C[O] + ") ";
						return L
					}, l.values = function(C) {
						var O, L = {};
						return S.call(this, C, function(te, se, _e) {
							L[te] = se, this.current[te] === void 0 && (O = 0, ~te.indexOf("scale") && (O = 1), this.current[te] = this.convert(O, _e))
						}), L
					}
				}),
				z = d(function(l) {
					function T(K) {
						se.push(K) === 1 && G(S)
					}

					function S() {
						var K, fe, de, we = se.length;
						if (we)
							for (G(S), fe = k(), K = we; K--;) de = se[K], de && de.render(fe)
					}

					function C(K) {
						var fe, de = e.inArray(K, se);
						de >= 0 && (fe = se.slice(de + 1), se.length = de, fe.length && (se = se.concat(fe)))
					}

					function O(K) {
						return Math.round(K * _e) / _e
					}

					function L(K, fe, de) {
						return o(K[0] + de * (fe[0] - K[0]), K[1] + de * (fe[1] - K[1]), K[2] + de * (fe[2] - K[2]))
					}
					var te = {
						ease: I.ease[1],
						from: 0,
						to: 1
					};
					l.init = function(K) {
						this.duration = K.duration || 0, this.delay = K.delay || 0;
						var fe = K.ease || te.ease;
						I[fe] && (fe = I[fe][1]), typeof fe != "function" && (fe = te.ease), this.ease = fe, this.update = K.update || i, this.complete = K.complete || i, this.context = K.context || this, this.name = K.name;
						var de = K.from,
							we = K.to;
						de === void 0 && (de = te.from), we === void 0 && (we = te.to), this.unit = K.unit || "", typeof de == "number" && typeof we == "number" ? (this.begin = de, this.change = we - de) : this.format(we, de), this.value = this.begin + this.unit, this.start = k(), K.autoplay !== !1 && this.play()
					}, l.play = function() {
						this.active || (this.start || (this.start = k()), this.active = !0, T(this))
					}, l.stop = function() {
						this.active && (this.active = !1, C(this))
					}, l.render = function(K) {
						var fe, de = K - this.start;
						if (this.delay) {
							if (de <= this.delay) return;
							de -= this.delay
						}
						if (de < this.duration) {
							var we = this.ease(de, 0, 1, this.duration);
							return fe = this.startRGB ? L(this.startRGB, this.endRGB, we) : O(this.begin + we * this.change), this.value = fe + this.unit, void this.update.call(this.context, this.value)
						}
						fe = this.endHex || this.begin + this.change, this.value = fe + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, l.format = function(K, fe) {
						if (fe += "", K += "", K.charAt(0) == "#") return this.startRGB = n(fe), this.endRGB = n(K), this.endHex = K, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var de = fe.replace(R, ""),
								we = K.replace(R, "");
							de !== we && s("tween", fe, K), this.unit = de
						}
						fe = parseFloat(fe), K = parseFloat(K), this.begin = this.value = fe, this.change = K - fe
					}, l.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = i
					};
					var se = [],
						_e = 1e3
				}),
				ee = d(z, function(l) {
					l.init = function(T) {
						this.duration = T.duration || 0, this.complete = T.complete || i, this.context = T.context, this.play()
					}, l.render = function(T) {
						var S = T - this.start;
						S < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				he = d(z, function(l, T) {
					l.init = function(S) {
						this.context = S.context, this.update = S.update, this.tweens = [], this.current = S.current;
						var C, O;
						for (C in S.values) O = S.values[C], this.current[C] !== O && this.tweens.push(new z({
							name: C,
							from: this.current[C],
							to: O,
							duration: S.duration,
							delay: S.delay,
							ease: S.ease,
							autoplay: !1
						}));
						this.play()
					}, l.render = function(S) {
						var C, O, L = this.tweens.length,
							te = !1;
						for (C = L; C--;) O = this.tweens[C], O.context && (O.render(S), this.current[O.name] = O.value, te = !0);
						return te ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, l.destroy = function() {
						if (T.destroy.call(this), this.tweens) {
							var S, C = this.tweens.length;
							for (S = C; S--;) this.tweens[S].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				oe = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !U.transition,
					agentTests: []
				};
			t.fallback = function(l) {
				if (!U.transition) return oe.fallback = !0;
				oe.agentTests.push("(" + l + ")");
				var T = new RegExp(oe.agentTests.join("|"), "i");
				oe.fallback = T.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
				return new z(l)
			}, t.delay = function(l, T, S) {
				return new ee({
					complete: T,
					duration: l,
					context: S
				})
			}, e.fn.tram = function(l) {
				return t.call(null, this, l)
			};
			var E = e.style,
				V = e.css,
				$ = {
					transform: U.transform && U.transform.css
				},
				j = {
					color: [g, M],
					background: [g, M, "background-color"],
					"outline-color": [g, M],
					"border-color": [g, M],
					"border-top-color": [g, M],
					"border-right-color": [g, M],
					"border-bottom-color": [g, M],
					"border-left-color": [g, M],
					"border-width": [v, q],
					"border-top-width": [v, q],
					"border-right-width": [v, q],
					"border-bottom-width": [v, q],
					"border-left-width": [v, q],
					"border-spacing": [v, q],
					"letter-spacing": [v, q],
					margin: [v, q],
					"margin-top": [v, q],
					"margin-right": [v, q],
					"margin-bottom": [v, q],
					"margin-left": [v, q],
					padding: [v, q],
					"padding-top": [v, q],
					"padding-right": [v, q],
					"padding-bottom": [v, q],
					"padding-left": [v, q],
					"outline-width": [v, q],
					opacity: [v, A],
					top: [v, D],
					right: [v, D],
					bottom: [v, D],
					left: [v, D],
					"font-size": [v, D],
					"text-indent": [v, D],
					"word-spacing": [v, D],
					width: [v, D],
					"min-width": [v, D],
					"max-width": [v, D],
					height: [v, D],
					"min-height": [v, D],
					"max-height": [v, D],
					"line-height": [v, Q],
					"scroll-top": [H, A, "scrollTop"],
					"scroll-left": [H, A, "scrollLeft"]
				},
				pe = {};
			U.transform && (j.transform = [Y], pe = {
				x: [D, "translateX"],
				y: [D, "translateY"],
				rotate: [B],
				rotateX: [B],
				rotateY: [B],
				scale: [A],
				scaleX: [A],
				scaleY: [A],
				skew: [B],
				skewX: [B],
				skewY: [B]
			}), U.transform && U.backface && (pe.z = [D, "translateZ"], pe.rotateZ = [B], pe.scaleZ = [A], pe.perspective = [q]);
			var xe = /ms/,
				Me = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var As = u((vB, Ss) => {
		var jy = window.$,
			Ky = Ui() && jy.tram;
		Ss.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				o = Function.prototype,
				i = r.push,
				a = r.slice,
				s = r.concat,
				c = n.toString,
				h = n.hasOwnProperty,
				y = r.forEach,
				d = r.map,
				I = r.reduce,
				_ = r.reduceRight,
				m = r.filter,
				w = r.every,
				x = r.some,
				R = r.indexOf,
				N = r.lastIndexOf,
				A = Array.isArray,
				M = Object.keys,
				q = o.bind,
				D = e.each = e.forEach = function(b, F, X) {
					if (b == null) return b;
					if (y && b.forEach === y) b.forEach(F, X);
					else if (b.length === +b.length) {
						for (var U = 0, J = b.length; U < J; U++)
							if (F.call(X, b[U], U, b) === t) return
					} else
						for (var ne = e.keys(b), U = 0, J = ne.length; U < J; U++)
							if (F.call(X, b[ne[U]], ne[U], b) === t) return;
					return b
				};
			e.map = e.collect = function(b, F, X) {
				var U = [];
				return b == null ? U : d && b.map === d ? b.map(F, X) : (D(b, function(J, ne, G) {
					U.push(F.call(X, J, ne, G))
				}), U)
			}, e.find = e.detect = function(b, F, X) {
				var U;
				return B(b, function(J, ne, G) {
					if (F.call(X, J, ne, G)) return U = J, !0
				}), U
			}, e.filter = e.select = function(b, F, X) {
				var U = [];
				return b == null ? U : m && b.filter === m ? b.filter(F, X) : (D(b, function(J, ne, G) {
					F.call(X, J, ne, G) && U.push(J)
				}), U)
			};
			var B = e.some = e.any = function(b, F, X) {
				F || (F = e.identity);
				var U = !1;
				return b == null ? U : x && b.some === x ? b.some(F, X) : (D(b, function(J, ne, G) {
					if (U || (U = F.call(X, J, ne, G))) return t
				}), !!U)
			};
			e.contains = e.include = function(b, F) {
				return b == null ? !1 : R && b.indexOf === R ? b.indexOf(F) != -1 : B(b, function(X) {
					return X === F
				})
			}, e.delay = function(b, F) {
				var X = a.call(arguments, 2);
				return setTimeout(function() {
					return b.apply(null, X)
				}, F)
			}, e.defer = function(b) {
				return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)))
			}, e.throttle = function(b) {
				var F, X, U;
				return function() {
					F || (F = !0, X = arguments, U = this, Ky.frame(function() {
						F = !1, b.apply(U, X)
					}))
				}
			}, e.debounce = function(b, F, X) {
				var U, J, ne, G, k, p = function() {
					var f = e.now() - G;
					f < F ? U = setTimeout(p, F - f) : (U = null, X || (k = b.apply(ne, J), ne = J = null))
				};
				return function() {
					ne = this, J = arguments, G = e.now();
					var f = X && !U;
					return U || (U = setTimeout(p, F)), f && (k = b.apply(ne, J), ne = J = null), k
				}
			}, e.defaults = function(b) {
				if (!e.isObject(b)) return b;
				for (var F = 1, X = arguments.length; F < X; F++) {
					var U = arguments[F];
					for (var J in U) b[J] === void 0 && (b[J] = U[J])
				}
				return b
			}, e.keys = function(b) {
				if (!e.isObject(b)) return [];
				if (M) return M(b);
				var F = [];
				for (var X in b) e.has(b, X) && F.push(X);
				return F
			}, e.has = function(b, F) {
				return h.call(b, F)
			}, e.isObject = function(b) {
				return b === Object(b)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var Q = /(.)^/,
				Z = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				ae = /\\|'|\r|\n|\u2028|\u2029/g,
				re = function(b) {
					return "\\" + Z[b]
				},
				W = /^\s*(\w|\$)+\s*$/;
			return e.template = function(b, F, X) {
				!F && X && (F = X), F = e.defaults({}, F, e.templateSettings);
				var U = RegExp([(F.escape || Q).source, (F.interpolate || Q).source, (F.evaluate || Q).source].join("|") + "|$", "g"),
					J = 0,
					ne = "__p+='";
				b.replace(U, function(f, v, g, H, Y) {
					return ne += b.slice(J, Y).replace(ae, re), J = Y + f.length, v ? ne += `'+
((__t=(` + v + `))==null?'':_.escape(__t))+
'` : g ? ne += `'+
((__t=(` + g + `))==null?'':__t)+
'` : H && (ne += `';
` + H + `
__p+='`), f
				}), ne += `';
`;
				var G = F.variable;
				if (G) {
					if (!W.test(G)) throw new Error("variable is not a bare identifier: " + G)
				} else ne = `with(obj||{}){
` + ne + `}
`, G = "obj";
				ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
				var k;
				try {
					k = new Function(F.variable || "obj", "_", ne)
				} catch (f) {
					throw f.source = ne, f
				}
				var p = function(f) {
					return k.call(this, f, e)
				};
				return p.source = "function(" + G + `){
` + ne + "}", p
			}, e
		}()
	});
	var Xe = u((hB, Ds) => {
		var Ee = {},
			Kt = {},
			zt = [],
			Vi = window.Webflow || [],
			It = window.jQuery,
			Ze = It(window),
			zy = It(document),
			at = It.isFunction,
			$e = Ee._ = As(),
			xs = Ee.tram = Ui() && It.tram,
			pn = !1,
			Bi = !1;
		xs.config.hideBackface = !1;
		xs.config.keepInherited = !0;
		Ee.define = function(e, t, r) {
			Kt[e] && Ns(Kt[e]);
			var n = Kt[e] = t(It, $e, r) || {};
			return Cs(n), n
		};
		Ee.require = function(e) {
			return Kt[e]
		};

		function Cs(e) {
			Ee.env() && (at(e.design) && Ze.on("__wf_design", e.design), at(e.preview) && Ze.on("__wf_preview", e.preview)), at(e.destroy) && Ze.on("__wf_destroy", e.destroy), e.ready && at(e.ready) && Yy(e)
		}

		function Yy(e) {
			if (pn) {
				e.ready();
				return
			}
			$e.contains(zt, e.ready) || zt.push(e.ready)
		}

		function Ns(e) {
			at(e.design) && Ze.off("__wf_design", e.design), at(e.preview) && Ze.off("__wf_preview", e.preview), at(e.destroy) && Ze.off("__wf_destroy", e.destroy), e.ready && at(e.ready) && Qy(e)
		}

		function Qy(e) {
			zt = $e.filter(zt, function(t) {
				return t !== e.ready
			})
		}
		Ee.push = function(e) {
			if (pn) {
				at(e) && e();
				return
			}
			Vi.push(e)
		};
		Ee.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var dn = navigator.userAgent.toLowerCase(),
			Ls = Ee.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			$y = Ee.env.chrome = /chrome/.test(dn) && /Google/.test(navigator.vendor) && parseInt(dn.match(/chrome\/(\d+)\./)[1], 10),
			Zy = Ee.env.ios = /(ipod|iphone|ipad)/.test(dn);
		Ee.env.safari = /safari/.test(dn) && !$y && !Zy;
		var Wi;
		Ls && zy.on("touchstart mousedown", function(e) {
			Wi = e.target
		});
		Ee.validClick = Ls ? function(e) {
			return e === Wi || It.contains(e, Wi)
		} : function() {
			return !0
		};
		var qs = "resize.webflow orientationchange.webflow load.webflow",
			Jy = "scroll.webflow " + qs;
		Ee.resize = ki(Ze, qs);
		Ee.scroll = ki(Ze, Jy);
		Ee.redraw = ki();

		function ki(e, t) {
			var r = [],
				n = {};
			return n.up = $e.throttle(function(o) {
				$e.each(r, function(i) {
					i(o)
				})
			}), e && t && e.on(t, n.up), n.on = function(o) {
				typeof o == "function" && ($e.contains(r, o) || r.push(o))
			}, n.off = function(o) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = $e.filter(r, function(i) {
					return i !== o
				})
			}, n
		}
		Ee.location = function(e) {
			window.location = e
		};
		Ee.env() && (Ee.location = function() {});
		Ee.ready = function() {
			pn = !0, Bi ? eI() : $e.each(zt, Rs), $e.each(Vi, Rs), Ee.resize.up()
		};

		function Rs(e) {
			at(e) && e()
		}

		function eI() {
			Bi = !1, $e.each(Kt, Cs)
		}
		var qt;
		Ee.load = function(e) {
			qt.then(e)
		};

		function Ps() {
			qt && (qt.reject(), Ze.off("load", qt.resolve)), qt = new It.Deferred, Ze.on("load", qt.resolve)
		}
		Ee.destroy = function(e) {
			e = e || {}, Bi = !0, Ze.triggerHandler("__wf_destroy"), e.domready != null && (pn = e.domready), $e.each(Kt, Ns), Ee.resize.off(), Ee.scroll.off(), Ee.redraw.off(), zt = [], Vi = [], qt.state() === "pending" && Ps()
		};
		It(Ee.ready);
		Ps();
		Ds.exports = window.Webflow = Ee
	});
	var Fs = u((gB, Ms) => {
		var vn = Xe();
		vn.define("scroll", Ms.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = m() ? null : window.history,
				o = e(window),
				i = e(document),
				a = e(document.body),
				s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(W) {
					window.setTimeout(W, 15)
				},
				c = vn.env("editor") ? ".w-editor-body" : "body",
				h = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
				y = 'a[href="#"]',
				d = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
				I = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				_ = document.createElement("style");
			_.appendChild(document.createTextNode(I));

			function m() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var w = /^#[a-zA-Z0-9][\w:.-]*$/;

			function x(W) {
				return w.test(W.hash) && W.host + W.pathname === r.host + r.pathname
			}
			let R = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function N() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || R.matches
			}

			function A(W, b) {
				var F;
				switch (b) {
					case "add":
						F = W.attr("tabindex"), F ? W.attr("data-wf-tabindex-swap", F) : W.attr("tabindex", "-1");
						break;
					case "remove":
						F = W.attr("data-wf-tabindex-swap"), F ? (W.attr("tabindex", F), W.removeAttr("data-wf-tabindex-swap")) : W.removeAttr("tabindex");
						break
				}
				W.toggleClass("wf-force-outline-none", b === "add")
			}

			function M(W) {
				var b = W.currentTarget;
				if (!(vn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className))) {
					var F = x(b) ? b.hash : "";
					if (F !== "") {
						var X = e(F);
						X.length && (W && (W.preventDefault(), W.stopPropagation()), q(F, W), window.setTimeout(function() {
							D(X, function() {
								A(X, "add"), X.get(0).focus({
									preventScroll: !0
								}), A(X, "remove")
							})
						}, W ? 0 : 300))
					}
				}
			}

			function q(W) {
				if (r.hash !== W && n && n.pushState && !(vn.env.chrome && r.protocol === "file:")) {
					var b = n.state && n.state.hash;
					b !== W && n.pushState({
						hash: W
					}, "", W)
				}
			}

			function D(W, b) {
				var F = o.scrollTop(),
					X = B(W);
				if (F !== X) {
					var U = Q(W, F, X),
						J = Date.now(),
						ne = function() {
							var G = Date.now() - J;
							window.scroll(0, Z(F, X, G, U)), G <= U ? s(ne) : typeof b == "function" && b()
						};
					s(ne)
				}
			}

			function B(W) {
				var b = e(h),
					F = b.css("position") === "fixed" ? b.outerHeight() : 0,
					X = W.offset().top - F;
				if (W.data("scroll") === "mid") {
					var U = o.height() - F,
						J = W.outerHeight();
					J < U && (X -= Math.round((U - J) / 2))
				}
				return X
			}

			function Q(W, b, F) {
				if (N()) return 0;
				var X = 1;
				return a.add(W).each(function(U, J) {
					var ne = parseFloat(J.getAttribute("data-scroll-time"));
					!isNaN(ne) && ne >= 0 && (X = ne)
				}), (472.143 * Math.log(Math.abs(b - F) + 125) - 2e3) * X
			}

			function Z(W, b, F, X) {
				return F > X ? b : W + (b - W) * ae(F / X)
			}

			function ae(W) {
				return W < .5 ? 4 * W * W * W : (W - 1) * (2 * W - 2) * (2 * W - 2) + 1
			}

			function re() {
				var {
					WF_CLICK_EMPTY: W,
					WF_CLICK_SCROLL: b
				} = t;
				i.on(b, d, M), i.on(W, y, function(F) {
					F.preventDefault()
				}), document.head.insertBefore(_, document.head.firstChild)
			}
			return {
				ready: re
			}
		})
	});
	var Xs = u((EB, Gs) => {
		var tI = Xe();
		tI.define("touch", Gs.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(i) {
				return i = typeof i == "string" ? e(i).get(0) : i, i ? new n(i) : null
			};

			function n(i) {
				var a = !1,
					s = !1,
					c = Math.min(Math.round(window.innerWidth * .04), 40),
					h, y;
				i.addEventListener("touchstart", d, !1), i.addEventListener("touchmove", I, !1), i.addEventListener("touchend", _, !1), i.addEventListener("touchcancel", m, !1), i.addEventListener("mousedown", d, !1), i.addEventListener("mousemove", I, !1), i.addEventListener("mouseup", _, !1), i.addEventListener("mouseout", m, !1);

				function d(x) {
					var R = x.touches;
					R && R.length > 1 || (a = !0, R ? (s = !0, h = R[0].clientX) : h = x.clientX, y = h)
				}

				function I(x) {
					if (a) {
						if (s && x.type === "mousemove") {
							x.preventDefault(), x.stopPropagation();
							return
						}
						var R = x.touches,
							N = R ? R[0].clientX : x.clientX,
							A = N - y;
						y = N, Math.abs(A) > c && r && String(r()) === "" && (o("swipe", x, {
							direction: A > 0 ? "right" : "left"
						}), m())
					}
				}

				function _(x) {
					if (a && (a = !1, s && x.type === "mouseup")) {
						x.preventDefault(), x.stopPropagation(), s = !1;
						return
					}
				}

				function m() {
					a = !1
				}

				function w() {
					i.removeEventListener("touchstart", d, !1), i.removeEventListener("touchmove", I, !1), i.removeEventListener("touchend", _, !1), i.removeEventListener("touchcancel", m, !1), i.removeEventListener("mousedown", d, !1), i.removeEventListener("mousemove", I, !1), i.removeEventListener("mouseup", _, !1), i.removeEventListener("mouseout", m, !1), i = null
				}
				this.destroy = w
			}

			function o(i, a, s) {
				var c = e.Event(i, {
					originalEvent: a
				});
				e(a.target).trigger(c, s)
			}
			return t.instance = t.init(document), t
		})
	});
	var Ws = u((_B, Us) => {
		var Hi = Xe();
		Hi.define("edit", Us.exports = function(e, t, r) {
			if (r = r || {}, (Hi.env("test") || Hi.env("frame")) && !r.fixture && !rI()) return {
				exit: 1
			};
			var n = {},
				o = e(window),
				i = e(document.documentElement),
				a = document.location,
				s = "hashchange",
				c, h = r.load || I,
				y = !1;
			try {
				y = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			y ? h() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && h() : o.on(s, d).triggerHandler(s);

			function d() {
				c || /\?edit/.test(a.hash) && h()
			}

			function I() {
				c = !0, window.WebflowEditor = !0, o.off(s, d), N(function(M) {
					e.ajax({
						url: R("https://editor-api.webflow.com/api/editor/view"),
						data: {
							siteId: i.attr("data-wf-site")
						},
						xhrFields: {
							withCredentials: !0
						},
						dataType: "json",
						crossDomain: !0,
						success: _(M)
					})
				})
			}

			function _(M) {
				return function(q) {
					if (!q) {
						console.error("Could not load editor data");
						return
					}
					q.thirdPartyCookiesSupported = M, m(x(q.bugReporterScriptPath), function() {
						m(x(q.scriptPath), function() {
							window.WebflowEditor(q)
						})
					})
				}
			}

			function m(M, q) {
				e.ajax({
					type: "GET",
					url: M,
					dataType: "script",
					cache: !0
				}).then(q, w)
			}

			function w(M, q, D) {
				throw console.error("Could not load editor script: " + q), D
			}

			function x(M) {
				return M.indexOf("//") >= 0 ? M : R("https://editor-api.webflow.com" + M)
			}

			function R(M) {
				return M.replace(/([^:])\/\//g, "$1/")
			}

			function N(M) {
				var q = window.document.createElement("iframe");
				q.src = "https://webflow.com/site/third-party-cookie-check.html", q.style.display = "none", q.sandbox = "allow-scripts allow-same-origin";
				var D = function(B) {
					B.data === "WF_third_party_cookies_unsupported" ? (A(q, D), M(!1)) : B.data === "WF_third_party_cookies_supported" && (A(q, D), M(!0))
				};
				q.onerror = function() {
					A(q, D), M(!1)
				}, window.addEventListener("message", D, !1), window.document.body.appendChild(q)
			}

			function A(M, q) {
				window.removeEventListener("message", q, !1), M.remove()
			}
			return n
		});

		function rI() {
			try {
				return window.top.__Cypress__
			} catch {
				return !1
			}
		}
	});
	var Bs = u((mB, Vs) => {
		var nI = Xe();
		nI.define("focus-visible", Vs.exports = function() {
			function e(r) {
				var n = !0,
					o = !1,
					i = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function s(A) {
					return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
				}

				function c(A) {
					var M = A.type,
						q = A.tagName;
					return !!(q === "INPUT" && a[M] && !A.readOnly || q === "TEXTAREA" && !A.readOnly || A.isContentEditable)
				}

				function h(A) {
					A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
				}

				function y(A) {
					A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
				}

				function d(A) {
					A.metaKey || A.altKey || A.ctrlKey || (s(r.activeElement) && h(r.activeElement), n = !0)
				}

				function I() {
					n = !1
				}

				function _(A) {
					s(A.target) && (n || c(A.target)) && h(A.target)
				}

				function m(A) {
					s(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (o = !0, window.clearTimeout(i), i = window.setTimeout(function() {
						o = !1
					}, 100), y(A.target))
				}

				function w() {
					document.visibilityState === "hidden" && (o && (n = !0), x())
				}

				function x() {
					document.addEventListener("mousemove", N), document.addEventListener("mousedown", N), document.addEventListener("mouseup", N), document.addEventListener("pointermove", N), document.addEventListener("pointerdown", N), document.addEventListener("pointerup", N), document.addEventListener("touchmove", N), document.addEventListener("touchstart", N), document.addEventListener("touchend", N)
				}

				function R() {
					document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", N), document.removeEventListener("mouseup", N), document.removeEventListener("pointermove", N), document.removeEventListener("pointerdown", N), document.removeEventListener("pointerup", N), document.removeEventListener("touchmove", N), document.removeEventListener("touchstart", N), document.removeEventListener("touchend", N)
				}

				function N(A) {
					A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (n = !1, R())
				}
				document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", I, !0), document.addEventListener("pointerdown", I, !0), document.addEventListener("touchstart", I, !0), document.addEventListener("visibilitychange", w, !0), x(), r.addEventListener("focus", _, !0), r.addEventListener("blur", m, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var Hs = u((yB, ks) => {
		var Yt = Xe();
		Yt.define("links", ks.exports = function(e, t) {
			var r = {},
				n = e(window),
				o, i = Yt.env(),
				a = window.location,
				s = document.createElement("a"),
				c = "w--current",
				h = /index\.(html|php)$/,
				y = /\/$/,
				d, I;
			r.ready = r.design = r.preview = _;

			function _() {
				o = i && Yt.env("design"), I = Yt.env("slug") || a.pathname || "", Yt.scroll.off(w), d = [];
				for (var R = document.links, N = 0; N < R.length; ++N) m(R[N]);
				d.length && (Yt.scroll.on(w), w())
			}

			function m(R) {
				var N = o && R.getAttribute("href-disabled") || R.getAttribute("href");
				if (s.href = N, !(N.indexOf(":") >= 0)) {
					var A = e(R);
					if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
						if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
						var M = e(s.hash);
						M.length && d.push({
							link: A,
							sec: M,
							active: !1
						});
						return
					}
					if (!(N === "#" || N === "")) {
						var q = s.href === a.href || N === I || h.test(N) && y.test(I);
						x(A, c, q)
					}
				}
			}

			function w() {
				var R = n.scrollTop(),
					N = n.height();
				t.each(d, function(A) {
					var M = A.link,
						q = A.sec,
						D = q.offset().top,
						B = q.outerHeight(),
						Q = N * .5,
						Z = q.is(":visible") && D + B - Q >= R && D + Q <= R + N;
					A.active !== Z && (A.active = Z, x(M, c, Z))
				})
			}

			function x(R, N, A) {
				var M = R.hasClass(N);
				A && M || !A && !M || (A ? R.addClass(N) : R.removeClass(N))
			}
			return r
		})
	});
	var zs = u((IB, Ks) => {
		var js = Xe();
		js.define("focus", Ks.exports = function() {
			var e = [],
				t = !1;

			function r(a) {
				t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
			}

			function n(a) {
				var s = a.target,
					c = s.tagName;
				return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
			}

			function o(a) {
				n(a) && (t = !0, setTimeout(() => {
					for (t = !1, a.target.focus(); e.length > 0;) {
						var s = e.pop();
						s.target.dispatchEvent(new MouseEvent(s.type, s))
					}
				}, 0))
			}

			function i() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && js.env.safari && (document.addEventListener("mousedown", o, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: i
			}
		})
	});
	var $s = u((TB, Qs) => {
		"use strict";
		var ji = window.jQuery,
			st = {},
			hn = [],
			Ys = ".w-ix",
			gn = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, ji(t).triggerHandler(st.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, ji(t).triggerHandler(st.types.OUTRO))
				}
			};
		st.triggers = {};
		st.types = {
			INTRO: "w-ix-intro" + Ys,
			OUTRO: "w-ix-outro" + Ys
		};
		st.init = function() {
			for (var e = hn.length, t = 0; t < e; t++) {
				var r = hn[t];
				r[0](0, r[1])
			}
			hn = [], ji.extend(st.triggers, gn)
		};
		st.async = function() {
			for (var e in gn) {
				var t = gn[e];
				gn.hasOwnProperty(e) && (st.triggers[e] = function(r, n) {
					hn.push([t, n])
				})
			}
		};
		st.async();
		Qs.exports = st
	});
	var _n = u((bB, eu) => {
		"use strict";
		var Ki = $s();

		function Zs(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var iI = window.jQuery,
			En = {},
			Js = ".w-ix",
			oI = {
				reset: function(e, t) {
					Ki.triggers.reset(e, t)
				},
				intro: function(e, t) {
					Ki.triggers.intro(e, t), Zs(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					Ki.triggers.outro(e, t), Zs(t, "COMPONENT_INACTIVE")
				}
			};
		En.triggers = {};
		En.types = {
			INTRO: "w-ix-intro" + Js,
			OUTRO: "w-ix-outro" + Js
		};
		iI.extend(En.triggers, oI);
		eu.exports = En
	});
	var ru = u((OB, tu) => {
		var aI = Xe();
		aI.define("focus-within", tu.exports = function() {
			function e(i) {
				for (var a = [i], s = null; s = i.parentNode || i.host || i.defaultView;) a.push(s), i = s;
				return a
			}

			function t(i) {
				typeof i.getAttribute != "function" || i.getAttribute("data-wf-focus-within") || i.setAttribute("data-wf-focus-within", "true")
			}

			function r(i) {
				typeof i.getAttribute != "function" || !i.getAttribute("data-wf-focus-within") || i.removeAttribute("data-wf-focus-within")
			}

			function n() {
				var i = function(a) {
					var s;

					function c() {
						s = !1, a.type === "blur" && Array.prototype.slice.call(e(a.target)).forEach(r), a.type === "focus" && Array.prototype.slice.call(e(a.target)).forEach(t)
					}
					s || (window.requestAnimationFrame(c), s = !0)
				};
				return document.addEventListener("focus", i, !0), document.addEventListener("blur", i, !0), t(document.body), !0
			}

			function o() {
				if (typeof document < "u" && document.body.hasAttribute("data-wf-focus-within")) try {
					document.querySelector(":focus-within")
				} catch {
					n()
				}
			}
			return {
				ready: o
			}
		})
	});
	var ou = u((wB, iu) => {
		var nu = Xe();
		nu.define("brand", iu.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				o = e("body"),
				i = ".w-webflow-badge",
				a = window.location,
				s = /PhantomJS/i.test(navigator.userAgent),
				c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				h;
			t.ready = function() {
				var _ = n.attr("data-wf-status"),
					m = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(m) && a.hostname !== m && (_ = !0), _ && !s && (h = h || d(), I(), setTimeout(I, 500), e(r).off(c, y).on(c, y))
			};

			function y() {
				var _ = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(h).attr("style", _ ? "display: none !important;" : "")
			}

			function h() {
				  var I = e('<a class="w-webflow-badge"></a>').attr("href", "https://savagearun.github.io/arun"),
				    A = e("<img>").attr("src", "favicon-16x16.png").attr("alt", "").css({
				      marginRight: "0px",
				      width: "0px"
				    }),
				    w = e("<img>").attr("src", "favicon-16x16.png").attr("alt", "Made by Arun");
				  return I.append(A, w), I[0]
			}

			function I() {
				var _ = o.children(i),
					m = _.length && _.get(0) === h,
					w = nu.env("editor");
				if (m) {
					w && _.remove();
					return
				}
				_.length && _.remove(), w || o.append(h)
			}
			return t
		})
	});
	var su = u((SB, au) => {
		var Tt = Xe(),
			sI = _n(),
			Ne = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		Tt.define("navbar", au.exports = function(e, t) {
			var r = {},
				n = e.tram,
				o = e(window),
				i = e(document),
				a = t.debounce,
				s, c, h, y, d = Tt.env(),
				I = '<div class="w-nav-overlay" data-wf-ignore />',
				_ = ".w-nav",
				m = "w--open",
				w = "w--nav-dropdown-open",
				x = "w--nav-dropdown-toggle-open",
				R = "w--nav-dropdown-list-open",
				N = "w--nav-link-open",
				A = sI.triggers,
				M = e();
			r.ready = r.design = r.preview = q, r.destroy = function() {
				M = e(), D(), c && c.length && c.each(ae)
			};

			function q() {
				h = d && Tt.env("design"), y = Tt.env("editor"), s = e(document.body), c = i.find(_), c.length && (c.each(Z), D(), B())
			}

			function D() {
				Tt.resize.off(Q)
			}

			function B() {
				Tt.resize.on(Q)
			}

			function Q() {
				c.each(v)
			}

			function Z(E, V) {
				var $ = e(V),
					j = e.data(V, _);
				j || (j = e.data(V, _, {
					open: !1,
					el: $,
					config: {},
					selectedIdx: -1
				})), j.menu = $.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = $.find(".w-nav-button"), j.container = $.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + E, j.outside = p(j);
				var pe = $.find(".w-nav-brand");
				pe && pe.attr("href") === "/" && pe.attr("aria-label") == null && pe.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(_), j.button.off(_), j.menu.off(_), b(j), h ? (re(j), j.el.on("setting" + _, F(j))) : (W(j), j.button.on("click" + _, G(j)), j.menu.on("click" + _, "a", k(j)), j.button.on("keydown" + _, X(j)), j.el.on("keydown" + _, U(j))), v(E, V)
			}

			function ae(E, V) {
				var $ = e.data(V, _);
				$ && (re($), e.removeData(V, _))
			}

			function re(E) {
				E.overlay && (oe(E, !0), E.overlay.remove(), E.overlay = null)
			}

			function W(E) {
				E.overlay || (E.overlay = e(I).appendTo(E.el), E.overlay.attr("id", E.overlayContainerId), E.parent = E.menu.parent(), oe(E, !0))
			}

			function b(E) {
				var V = {},
					$ = E.config || {},
					j = V.animation = E.el.attr("data-animation") || "default";
				V.animOver = /^over/.test(j), V.animDirect = /left$/.test(j) ? -1 : 1, $.animation !== j && E.open && t.defer(ne, E), V.easing = E.el.attr("data-easing") || "ease", V.easing2 = E.el.attr("data-easing2") || "ease";
				var pe = E.el.attr("data-duration");
				V.duration = pe != null ? Number(pe) : 400, V.docHeight = E.el.attr("data-doc-height"), E.config = V
			}

			function F(E) {
				return function(V, $) {
					$ = $ || {};
					var j = o.width();
					b(E), $.open === !0 && ee(E, !0), $.open === !1 && oe(E, !0), E.open && t.defer(function() {
						j !== o.width() && ne(E)
					})
				}
			}

			function X(E) {
				return function(V) {
					switch (V.keyCode) {
						case Ne.SPACE:
						case Ne.ENTER:
							return G(E)(), V.preventDefault(), V.stopPropagation();
						case Ne.ESCAPE:
							return oe(E), V.preventDefault(), V.stopPropagation();
						case Ne.ARROW_RIGHT:
						case Ne.ARROW_DOWN:
						case Ne.HOME:
						case Ne.END:
							return E.open ? (V.keyCode === Ne.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, J(E), V.preventDefault(), V.stopPropagation()) : (V.preventDefault(), V.stopPropagation())
					}
				}
			}

			function U(E) {
				return function(V) {
					if (E.open) switch (E.selectedIdx = E.links.index(document.activeElement), V.keyCode) {
						case Ne.HOME:
						case Ne.END:
							return V.keyCode === Ne.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, J(E), V.preventDefault(), V.stopPropagation();
						case Ne.ESCAPE:
							return oe(E), E.button.focus(), V.preventDefault(), V.stopPropagation();
						case Ne.ARROW_LEFT:
						case Ne.ARROW_UP:
							return E.selectedIdx = Math.max(-1, E.selectedIdx - 1), J(E), V.preventDefault(), V.stopPropagation();
						case Ne.ARROW_RIGHT:
						case Ne.ARROW_DOWN:
							return E.selectedIdx = Math.min(E.links.length - 1, E.selectedIdx + 1), J(E), V.preventDefault(), V.stopPropagation()
					}
				}
			}

			function J(E) {
				if (E.links[E.selectedIdx]) {
					var V = E.links[E.selectedIdx];
					V.focus(), k(V)
				}
			}

			function ne(E) {
				E.open && (oe(E, !0), ee(E, !0))
			}

			function G(E) {
				return a(function() {
					E.open ? oe(E) : ee(E)
				})
			}

			function k(E) {
				return function(V) {
					var $ = e(this),
						j = $.attr("href");
					if (!Tt.validClick(V.currentTarget)) {
						V.preventDefault();
						return
					}
					j && j.indexOf("#") === 0 && E.open && oe(E)
				}
			}

			function p(E) {
				return E.outside && i.off("click" + _, E.outside),
					function(V) {
						var $ = e(V.target);
						y && $.closest(".w-editor-bem-EditorOverlay").length || f(E, $)
					}
			}
			var f = a(function(E, V) {
				if (E.open) {
					var $ = V.closest(".w-nav-menu");
					E.menu.is($) || oe(E)
				}
			});

			function v(E, V) {
				var $ = e.data(V, _),
					j = $.collapsed = $.button.css("display") !== "none";
				if ($.open && !j && !h && oe($, !0), $.container.length) {
					var pe = H($);
					$.links.each(pe), $.dropdowns.each(pe)
				}
				$.open && he($)
			}
			var g = "max-width";

			function H(E) {
				var V = E.container.css(g);
				return V === "none" && (V = ""),
					function($, j) {
						j = e(j), j.css(g, ""), j.css(g) === "none" && j.css(g, V)
					}
			}

			function Y(E, V) {
				V.setAttribute("data-nav-menu-open", "")
			}

			function z(E, V) {
				V.removeAttribute("data-nav-menu-open")
			}

			function ee(E, V) {
				if (E.open) return;
				E.open = !0, E.menu.each(Y), E.links.addClass(N), E.dropdowns.addClass(w), E.dropdownToggle.addClass(x), E.dropdownList.addClass(R), E.button.addClass(m);
				var $ = E.config,
					j = $.animation;
				(j === "none" || !n.support.transform || $.duration <= 0) && (V = !0);
				var pe = he(E),
					xe = E.menu.outerHeight(!0),
					Me = E.menu.outerWidth(!0),
					l = E.el.height(),
					T = E.el[0];
				if (v(0, T), A.intro(0, T), Tt.redraw.up(), h || i.on("click" + _, E.outside), V) {
					O();
					return
				}
				var S = "transform " + $.duration + "ms " + $.easing;
				if (E.overlay && (M = E.menu.prev(), E.overlay.show().append(E.menu)), $.animOver) {
					n(E.menu).add(S).set({
						x: $.animDirect * Me,
						height: pe
					}).start({
						x: 0
					}).then(O), E.overlay && E.overlay.width(Me);
					return
				}
				var C = l + xe;
				n(E.menu).add(S).set({
					y: -C
				}).start({
					y: 0
				}).then(O);

				function O() {
					E.button.attr("aria-expanded", "true")
				}
			}

			function he(E) {
				var V = E.config,
					$ = V.docHeight ? i.height() : s.height();
				return V.animOver ? E.menu.height($) : E.el.css("position") !== "fixed" && ($ -= E.el.outerHeight(!0)), E.overlay && E.overlay.height($), $
			}

			function oe(E, V) {
				if (!E.open) return;
				E.open = !1, E.button.removeClass(m);
				var $ = E.config;
				if (($.animation === "none" || !n.support.transform || $.duration <= 0) && (V = !0), A.outro(0, E.el[0]), i.off("click" + _, E.outside), V) {
					n(E.menu).stop(), T();
					return
				}
				var j = "transform " + $.duration + "ms " + $.easing2,
					pe = E.menu.outerHeight(!0),
					xe = E.menu.outerWidth(!0),
					Me = E.el.height();
				if ($.animOver) {
					n(E.menu).add(j).start({
						x: xe * $.animDirect
					}).then(T);
					return
				}
				var l = Me + pe;
				n(E.menu).add(j).start({
					y: -l
				}).then(T);

				function T() {
					E.menu.height(""), n(E.menu).set({
						x: 0,
						y: 0
					}), E.menu.each(z), E.links.removeClass(N), E.dropdowns.removeClass(w), E.dropdownToggle.removeClass(x), E.dropdownList.removeClass(R), E.overlay && E.overlay.children().length && (M.length ? E.menu.insertAfter(M) : E.menu.prependTo(E.parent), E.overlay.attr("style", "").hide()), E.el.triggerHandler("w-close"), E.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	var lu = u((AB, cu) => {
		var bt = Xe(),
			uI = _n(),
			ut = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			},
			uu = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
		bt.define("slider", cu.exports = function(e, t) {
			var r = {},
				n = e.tram,
				o = e(document),
				i, a, s = bt.env(),
				c = ".w-slider",
				h = '<div class="w-slider-dot" data-wf-ignore />',
				y = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
				d = "w-slider-force-show",
				I = uI.triggers,
				_, m = !1;
			r.ready = function() {
				a = bt.env("design"), w()
			}, r.design = function() {
				a = !0, setTimeout(w, 1e3)
			}, r.preview = function() {
				a = !1, w()
			}, r.redraw = function() {
				m = !0, w(), m = !1
			}, r.destroy = x;

			function w() {
				i = o.find(c), i.length && (i.each(A), !_ && (x(), R()))
			}

			function x() {
				bt.resize.off(N), bt.redraw.off(r.redraw)
			}

			function R() {
				bt.resize.on(N), bt.redraw.on(r.redraw)
			}

			function N() {
				i.filter(":visible").each(U)
			}

			function A(p, f) {
				var v = e(f),
					g = e.data(f, c);
				g || (g = e.data(f, c, {
					index: 0,
					depth: 1,
					hasFocus: {
						keyboard: !1,
						mouse: !1
					},
					el: v,
					config: {}
				})), g.mask = v.children(".w-slider-mask"), g.left = v.children(".w-slider-arrow-left"), g.right = v.children(".w-slider-arrow-right"), g.nav = v.children(".w-slider-nav"), g.slides = g.mask.children(".w-slide"), g.slides.each(I.reset), m && (g.maskWidth = 0), v.attr("role") === void 0 && v.attr("role", "region"), v.attr("aria-label") === void 0 && v.attr("aria-label", "carousel");
				var H = g.mask.attr("id");
				if (H || (H = "w-slider-mask-" + p, g.mask.attr("id", H)), !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(y).appendTo(g.mask)), g.left.attr("role", "button"), g.left.attr("tabindex", "0"), g.left.attr("aria-controls", H), g.left.attr("aria-label") === void 0 && g.left.attr("aria-label", "previous slide"), g.right.attr("role", "button"), g.right.attr("tabindex", "0"), g.right.attr("aria-controls", H), g.right.attr("aria-label") === void 0 && g.right.attr("aria-label", "next slide"), !n.support.transform) {
					g.left.hide(), g.right.hide(), g.nav.hide(), _ = !0;
					return
				}
				g.el.off(c), g.left.off(c), g.right.off(c), g.nav.off(c), M(g), a ? (g.el.on("setting" + c, b(g)), W(g), g.hasTimer = !1) : (g.el.on("swipe" + c, b(g)), g.left.on("click" + c, Q(g)), g.right.on("click" + c, Z(g)), g.left.on("keydown" + c, B(g, Q)), g.right.on("keydown" + c, B(g, Z)), g.nav.on("keydown" + c, "> div", b(g)), g.config.autoplay && !g.hasTimer && (g.hasTimer = !0, g.timerCount = 1, re(g)), g.el.on("mouseenter" + c, D(g, !0, "mouse")), g.el.on("focusin" + c, D(g, !0, "keyboard")), g.el.on("mouseleave" + c, D(g, !1, "mouse")), g.el.on("focusout" + c, D(g, !1, "keyboard"))), g.nav.on("click" + c, "> div", b(g)), s || g.mask.contents().filter(function() {
					return this.nodeType === 3
				}).remove();
				var Y = v.filter(":hidden");
				Y.addClass(d);
				var z = v.parents(":hidden");
				z.addClass(d), m || U(p, f), Y.removeClass(d), z.removeClass(d)
			}

			function M(p) {
				var f = {};
				f.crossOver = 0, f.animation = p.el.attr("data-animation") || "slide", f.animation === "outin" && (f.animation = "cross", f.crossOver = .5), f.easing = p.el.attr("data-easing") || "ease";
				var v = p.el.attr("data-duration");
				if (f.duration = v != null ? parseInt(v, 10) : 500, q(p.el.attr("data-infinite")) && (f.infinite = !0), q(p.el.attr("data-disable-swipe")) && (f.disableSwipe = !0), q(p.el.attr("data-hide-arrows")) ? f.hideArrows = !0 : p.config.hideArrows && (p.left.show(), p.right.show()), q(p.el.attr("data-autoplay"))) {
					f.autoplay = !0, f.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3, f.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10);
					var g = "mousedown" + c + " touchstart" + c;
					a || p.el.off(g).one(g, function() {
						W(p)
					})
				}
				var H = p.right.width();
				f.edge = H ? H + 40 : 100, p.config = f
			}

			function q(p) {
				return p === "1" || p === "true"
			}

			function D(p, f, v) {
				return function(g) {
					if (f) p.hasFocus[v] = f;
					else if (e.contains(p.el.get(0), g.relatedTarget) || (p.hasFocus[v] = f, p.hasFocus.mouse && v === "keyboard" || p.hasFocus.keyboard && v === "mouse")) return;
					f ? (p.ariaLiveLabel.attr("aria-live", "polite"), p.hasTimer && W(p)) : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && re(p))
				}
			}

			function B(p, f) {
				return function(v) {
					switch (v.keyCode) {
						case ut.SPACE:
						case ut.ENTER:
							return f(p)(), v.preventDefault(), v.stopPropagation()
					}
				}
			}

			function Q(p) {
				return function() {
					X(p, {
						index: p.index - 1,
						vector: -1
					})
				}
			}

			function Z(p) {
				return function() {
					X(p, {
						index: p.index + 1,
						vector: 1
					})
				}
			}

			function ae(p, f) {
				var v = null;
				f === p.slides.length && (w(), J(p)), t.each(p.anchors, function(g, H) {
					e(g.els).each(function(Y, z) {
						e(z).index() === f && (v = H)
					})
				}), v != null && X(p, {
					index: v,
					immediate: !0
				})
			}

			function re(p) {
				W(p);
				var f = p.config,
					v = f.timerMax;
				v && p.timerCount++ > v || (p.timerId = window.setTimeout(function() {
					p.timerId == null || a || (Z(p)(), re(p))
				}, f.delay))
			}

			function W(p) {
				window.clearTimeout(p.timerId), p.timerId = null
			}

			function b(p) {
				return function(f, v) {
					v = v || {};
					var g = p.config;
					if (a && f.type === "setting") {
						if (v.select === "prev") return Q(p)();
						if (v.select === "next") return Z(p)();
						if (M(p), J(p), v.select == null) return;
						ae(p, v.select);
						return
					}
					if (f.type === "swipe") return g.disableSwipe || bt.env("editor") ? void 0 : v.direction === "left" ? Z(p)() : v.direction === "right" ? Q(p)() : void 0;
					if (p.nav.has(f.target).length) {
						var H = e(f.target).index();
						if (f.type === "click" && X(p, {
								index: H
							}), f.type === "keydown") switch (f.keyCode) {
							case ut.ENTER:
							case ut.SPACE: {
								X(p, {
									index: H
								}), f.preventDefault();
								break
							}
							case ut.ARROW_LEFT:
							case ut.ARROW_UP: {
								F(p.nav, Math.max(H - 1, 0)), f.preventDefault();
								break
							}
							case ut.ARROW_RIGHT:
							case ut.ARROW_DOWN: {
								F(p.nav, Math.min(H + 1, p.pages)), f.preventDefault();
								break
							}
							case ut.HOME: {
								F(p.nav, 0), f.preventDefault();
								break
							}
							case ut.END: {
								F(p.nav, p.pages), f.preventDefault();
								break
							}
							default:
								return
						}
					}
				}
			}

			function F(p, f) {
				var v = p.children().eq(f).focus();
				p.children().not(v)
			}

			function X(p, f) {
				f = f || {};
				var v = p.config,
					g = p.anchors;
				p.previous = p.index;
				var H = f.index,
					Y = {};
				H < 0 ? (H = g.length - 1, v.infinite && (Y.x = -p.endX, Y.from = 0, Y.to = g[0].width)) : H >= g.length && (H = 0, v.infinite && (Y.x = g[g.length - 1].width, Y.from = -g[g.length - 1].x, Y.to = Y.from - Y.x)), p.index = H;
				var z = p.nav.children().eq(H).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
				p.nav.children().not(z).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), v.hideArrows && (p.index === g.length - 1 ? p.right.hide() : p.right.show(), p.index === 0 ? p.left.hide() : p.left.show());
				var ee = p.offsetX || 0,
					he = p.offsetX = -g[p.index].x,
					oe = {
						x: he,
						opacity: 1,
						visibility: ""
					},
					E = e(g[p.index].els),
					V = e(g[p.previous] && g[p.previous].els),
					$ = p.slides.not(E),
					j = v.animation,
					pe = v.easing,
					xe = Math.round(v.duration),
					Me = f.vector || (p.index > p.previous ? 1 : -1),
					l = "opacity " + xe + "ms " + pe,
					T = "transform " + xe + "ms " + pe;
				if (E.find(uu).removeAttr("tabindex"), E.removeAttr("aria-hidden"), E.find("*").removeAttr("aria-hidden"), $.find(uu).attr("tabindex", "-1"), $.attr("aria-hidden", "true"), $.find("*").attr("aria-hidden", "true"), a || (E.each(I.intro), $.each(I.outro)), f.immediate && !m) {
					n(E).set(oe), O();
					return
				}
				if (p.index === p.previous) return;
				if (a || p.ariaLiveLabel.text(`Slide ${H+1} of ${g.length}.`), j === "cross") {
					var S = Math.round(xe - xe * v.crossOver),
						C = Math.round(xe - S);
					l = "opacity " + S + "ms " + pe, n(V).set({
						visibility: ""
					}).add(l).start({
						opacity: 0
					}), n(E).set({
						visibility: "",
						x: he,
						opacity: 0,
						zIndex: p.depth++
					}).add(l).wait(C).then({
						opacity: 1
					}).then(O);
					return
				}
				if (j === "fade") {
					n(V).set({
						visibility: ""
					}).stop(), n(E).set({
						visibility: "",
						x: he,
						opacity: 0,
						zIndex: p.depth++
					}).add(l).start({
						opacity: 1
					}).then(O);
					return
				}
				if (j === "over") {
					oe = {
						x: p.endX
					}, n(V).set({
						visibility: ""
					}).stop(), n(E).set({
						visibility: "",
						zIndex: p.depth++,
						x: he + g[p.index].width * Me
					}).add(T).start({
						x: he
					}).then(O);
					return
				}
				v.infinite && Y.x ? (n(p.slides.not(V)).set({
					visibility: "",
					x: Y.x
				}).add(T).start({
					x: he
				}), n(V).set({
					visibility: "",
					x: Y.from
				}).add(T).start({
					x: Y.to
				}), p.shifted = V) : (v.infinite && p.shifted && (n(p.shifted).set({
					visibility: "",
					x: ee
				}), p.shifted = null), n(p.slides).set({
					visibility: ""
				}).add(T).start({
					x: he
				}));

				function O() {
					E = e(g[p.index].els), $ = p.slides.not(E), j !== "slide" && (oe.visibility = "hidden"), n($).set(oe)
				}
			}

			function U(p, f) {
				var v = e.data(f, c);
				if (v) {
					if (G(v)) return J(v);
					a && k(v) && J(v)
				}
			}

			function J(p) {
				var f = 1,
					v = 0,
					g = 0,
					H = 0,
					Y = p.maskWidth,
					z = Y - p.config.edge;
				z < 0 && (z = 0), p.anchors = [{
					els: [],
					x: 0,
					width: 0
				}], p.slides.each(function(he, oe) {
					g - v > z && (f++, v += Y, p.anchors[f - 1] = {
						els: [],
						x: g,
						width: 0
					}), H = e(oe).outerWidth(!0), g += H, p.anchors[f - 1].width += H, p.anchors[f - 1].els.push(oe);
					var E = he + 1 + " of " + p.slides.length;
					e(oe).attr("aria-label", E), e(oe).attr("role", "group")
				}), p.endX = g, a && (p.pages = null), p.nav.length && p.pages !== f && (p.pages = f, ne(p));
				var ee = p.index;
				ee >= f && (ee = f - 1), X(p, {
					immediate: !0,
					index: ee
				})
			}

			function ne(p) {
				var f = [],
					v, g = p.el.attr("data-nav-spacing");
				g && (g = parseFloat(g) + "px");
				for (var H = 0, Y = p.pages; H < Y; H++) v = e(h), v.attr("aria-label", "Show slide " + (H + 1) + " of " + Y).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), p.nav.hasClass("w-num") && v.text(H + 1), g != null && v.css({
					"margin-left": g,
					"margin-right": g
				}), f.push(v);
				p.nav.empty().append(f)
			}

			function G(p) {
				var f = p.mask.width();
				return p.maskWidth !== f ? (p.maskWidth = f, !0) : !1
			}

			function k(p) {
				var f = 0;
				return p.slides.each(function(v, g) {
					f += e(g).outerWidth(!0)
				}), p.slidesWidth !== f ? (p.slidesWidth = f, !0) : !1
			}
			return r
		})
	});
	var pu = u((RB, du) => {
		var zi = Xe(),
			fu = "w-condition-invisible",
			cI = "." + fu;

		function lI(e) {
			return e.filter(function(t) {
				return !Sr(t)
			})
		}

		function Sr(e) {
			return !!(e.$el && e.$el.closest(cI).length)
		}

		function Yi(e, t) {
			for (var r = e; r >= 0; r--)
				if (!Sr(t[r])) return r;
			return -1
		}

		function Qi(e, t) {
			for (var r = e; r <= t.length - 1; r++)
				if (!Sr(t[r])) return r;
			return -1
		}

		function fI(e, t) {
			return Yi(e - 1, t) === -1
		}

		function dI(e, t) {
			return Qi(e + 1, t) === -1
		}

		function wr(e, t) {
			e.attr("aria-label") || e.attr("aria-label", t)
		}

		function pI(e, t, r, n) {
			var o = r.tram,
				i = Array.isArray,
				a = "w-lightbox",
				s = a + "-",
				c = /(^|\s+)/g,
				h = [],
				y, d, I, _ = [];

			function m(f, v) {
				return h = i(f) ? f : [f], d || m.build(), lI(h).length > 1 && (d.items = d.empty, h.forEach(function(g, H) {
					var Y = k("thumbnail"),
						z = k("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(Y);
					wr(z, `show item ${H+1} of ${h.length}`), Sr(g) && z.addClass(fu), d.items = d.items.add(z), ae(g.thumbnailUrl || g.url, function(ee) {
						ee.prop("width") > ee.prop("height") ? U(ee, "wide") : U(ee, "tall"), Y.append(U(ee, "thumbnail-image"))
					})
				}), d.strip.empty().append(d.items), U(d.content, "group")), o(J(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
					opacity: 1
				}), U(d.html, "noscroll"), m.show(v || 0)
			}
			m.build = function() {
				return m.destroy(), d = {
					html: r(t.documentElement),
					empty: r()
				}, d.arrowLeft = k("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.arrowRight = k("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.close = k("control close").attr("role", "button"), wr(d.arrowLeft, "previous image"), wr(d.arrowRight, "next image"), wr(d.close, "close lightbox"), d.spinner = k("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), d.strip = k("strip").attr("role", "tablist"), I = new b(d.spinner, F("hide")), d.content = k("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close), d.container = k("container").append(d.content, d.strip), d.lightbox = k("backdrop hide").append(d.container), d.strip.on("click", X("item"), A), d.content.on("swipe", M).on("click", X("left"), x).on("click", X("right"), R).on("click", X("close"), N).on("click", X("image, caption"), R), d.container.on("click", X("view"), N).on("dragstart", X("img"), D), d.lightbox.on("keydown", B).on("focusin", q), r(n).append(d.lightbox), m
			}, m.destroy = function() {
				d && (J(d.html, "noscroll"), d.lightbox.remove(), d = void 0)
			}, m.show = function(f) {
				if (f !== y) {
					var v = h[f];
					if (!v) return m.hide();
					if (Sr(v)) {
						if (f < y) {
							var g = Yi(f - 1, h);
							f = g > -1 ? g : f
						} else {
							var H = Qi(f + 1, h);
							f = H > -1 ? H : f
						}
						v = h[f]
					}
					var Y = y;
					y = f, d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), I.show();
					var z = v.html && p(v.width, v.height) || v.url;
					return ae(z, function(ee) {
						if (f !== y) return;
						var he = k("figure", "figure").append(U(ee, "image")),
							oe = k("frame").append(he),
							E = k("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(oe),
							V, $;
						v.html && (V = r(v.html), $ = V.is("iframe"), $ && V.on("load", j), he.append(U(V, "embed"))), v.caption && he.append(k("caption", "figcaption").text(v.caption)), d.spinner.before(E), $ || j();

						function j() {
							if (d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), I.hide(), f !== y) {
								E.remove();
								return
							}
							let pe = fI(f, h);
							ne(d.arrowLeft, "inactive", pe), G(d.arrowLeft, pe), pe && d.arrowLeft.is(":focus") && d.arrowRight.focus();
							let xe = dI(f, h);
							if (ne(d.arrowRight, "inactive", xe), G(d.arrowRight, xe), xe && d.arrowRight.is(":focus") && d.arrowLeft.focus(), d.view ? (o(d.view).add("opacity .3s").start({
									opacity: 0
								}).then(re(d.view)), o(E).add("opacity .3s").add("transform .3s").set({
									x: f > Y ? "80px" : "-80px"
								}).start({
									opacity: 1,
									x: 0
								})) : E.css("opacity", 1), d.view = E, d.view.prop("tabIndex", 0), d.items) {
								J(d.items, "active"), d.items.removeAttr("aria-selected");
								var Me = d.items.eq(f);
								U(Me, "active"), Me.attr("aria-selected", !0), W(Me)
							}
						}
					}), d.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), _.length === 0 && (r("body").children().each(function() {
						r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (_.push({
							node: r(this),
							hidden: r(this).attr("aria-hidden"),
							tabIndex: r(this).attr("tabIndex")
						}), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
					}), d.close.focus()), m
				}
			}, m.hide = function() {
				return o(d.lightbox).add("opacity .3s").start({
					opacity: 0
				}).then(Z), m
			}, m.prev = function() {
				var f = Yi(y - 1, h);
				f > -1 && m.show(f)
			}, m.next = function() {
				var f = Qi(y + 1, h);
				f > -1 && m.show(f)
			};

			function w(f) {
				return function(v) {
					this === v.target && (v.stopPropagation(), v.preventDefault(), f())
				}
			}
			var x = w(m.prev),
				R = w(m.next),
				N = w(m.hide),
				A = function(f) {
					var v = r(this).index();
					f.preventDefault(), m.show(v)
				},
				M = function(f, v) {
					f.preventDefault(), v.direction === "left" ? m.next() : v.direction === "right" && m.prev()
				},
				q = function() {
					this.focus()
				};

			function D(f) {
				f.preventDefault()
			}

			function B(f) {
				var v = f.keyCode;
				v === 27 || Q(v, "close") ? m.hide() : v === 37 || Q(v, "left") ? m.prev() : v === 39 || Q(v, "right") ? m.next() : Q(v, "item") && r(":focus").click()
			}

			function Q(f, v) {
				if (f !== 13 && f !== 32) return !1;
				var g = r(":focus").attr("class"),
					H = F(v).trim();
				return g.includes(H)
			}

			function Z() {
				d && (d.strip.scrollLeft(0).empty(), J(d.html, "noscroll"), U(d.lightbox, "hide"), d.view && d.view.remove(), J(d.content, "group"), U(d.arrowLeft, "inactive"), U(d.arrowRight, "inactive"), y = d.view = void 0, _.forEach(function(f) {
					var v = f.node;
					v && (f.hidden ? v.attr("aria-hidden", f.hidden) : v.removeAttr("aria-hidden"), f.tabIndex ? v.attr("tabIndex", f.tabIndex) : v.removeAttr("tabIndex"))
				}), _ = [], r(".active-lightbox").removeClass("active-lightbox").focus())
			}

			function ae(f, v) {
				var g = k("img", "img");
				return g.one("load", function() {
					v(g)
				}), g.attr("src", f), g
			}

			function re(f) {
				return function() {
					f.remove()
				}
			}

			function W(f) {
				var v = f.get(0),
					g = d.strip.get(0),
					H = v.offsetLeft,
					Y = v.clientWidth,
					z = g.scrollLeft,
					ee = g.clientWidth,
					he = g.scrollWidth - ee,
					oe;
				H < z ? oe = Math.max(0, H + Y - ee) : H + Y > ee + z && (oe = Math.min(H, he)), oe != null && o(d.strip).add("scroll-left 500ms").start({
					"scroll-left": oe
				})
			}

			function b(f, v, g) {
				this.$element = f, this.className = v, this.delay = g || 200, this.hide()
			}
			b.prototype.show = function() {
				var f = this;
				f.timeoutId || (f.timeoutId = setTimeout(function() {
					f.$element.removeClass(f.className), delete f.timeoutId
				}, f.delay))
			}, b.prototype.hide = function() {
				var f = this;
				if (f.timeoutId) {
					clearTimeout(f.timeoutId), delete f.timeoutId;
					return
				}
				f.$element.addClass(f.className)
			};

			function F(f, v) {
				return f.replace(c, (v ? " ." : " ") + s)
			}

			function X(f) {
				return F(f, !0)
			}

			function U(f, v) {
				return f.addClass(F(v))
			}

			function J(f, v) {
				return f.removeClass(F(v))
			}

			function ne(f, v, g) {
				return f.toggleClass(F(v), g)
			}

			function G(f, v) {
				return f.attr("aria-hidden", v).attr("tabIndex", v ? -1 : 0)
			}

			function k(f, v) {
				return U(r(t.createElement(v || "div")), f)
			}

			function p(f, v) {
				var g = '<svg xmlns="http://www.w3.org/2000/svg" width="' + f + '" height="' + v + '"/>';
				return "data:image/svg+xml;charset=utf-8," + encodeURI(g)
			}
			return function() {
				var f = e.navigator.userAgent,
					v = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
					g = f.match(v),
					H = f.indexOf("Android ") > -1 && f.indexOf("Chrome") === -1;
				if (!H && (!g || g[2] > 7)) return;
				var Y = t.createElement("style");
				t.head.appendChild(Y), e.addEventListener("resize", z, !0);

				function z() {
					var ee = e.innerHeight,
						he = e.innerWidth,
						oe = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + ee + "px}.w-lightbox-view {width:" + he + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * ee + "px}.w-lightbox-image {max-width:" + he + "px;max-height:" + ee + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * ee + "px}.w-lightbox-strip {padding: 0 " + .01 * ee + "px}.w-lightbox-item {width:" + .1 * ee + "px;padding:" + .02 * ee + "px " + .01 * ee + "px}.w-lightbox-thumbnail {height:" + .1 * ee + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * ee + "px}.w-lightbox-content {margin-top:" + .02 * ee + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * ee + "px}.w-lightbox-image {max-width:" + .96 * he + "px;max-height:" + .96 * ee + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * he + "px;max-height:" + .84 * ee + "px}}";
					Y.textContent = oe
				}
				z()
			}(), m
		}
		zi.define("lightbox", du.exports = function(e) {
			var t = {},
				r = zi.env(),
				n = pI(window, document, e, r ? "#lightbox-mountpoint" : "body"),
				o = e(document),
				i, a, s = ".w-lightbox",
				c;
			t.ready = t.design = t.preview = h;

			function h() {
				a = r && zi.env("design"), n.destroy(), c = {}, i = o.find(s), i.webflowLightBox(), i.each(function() {
					wr(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
				})
			}
			jQuery.fn.extend({
				webflowLightBox: function() {
					var _ = this;
					e.each(_, function(m, w) {
						var x = e.data(w, s);
						x || (x = e.data(w, s, {
							el: e(w),
							mode: "images",
							images: [],
							embed: ""
						})), x.el.off(s), y(x), a ? x.el.on("setting" + s, y.bind(null, x)) : x.el.on("click" + s, d(x)).on("click" + s, function(R) {
							R.preventDefault()
						})
					})
				}
			});

			function y(_) {
				var m = _.el.children(".w-json").html(),
					w, x;
				if (!m) {
					_.items = [];
					return
				}
				try {
					m = JSON.parse(m)
				} catch (R) {
					console.error("Malformed lightbox JSON configuration.", R)
				}
				I(m), m.items.forEach(function(R) {
					R.$el = _.el
				}), w = m.group, w ? (x = c[w], x || (x = c[w] = []), _.items = x, m.items.length && (_.index = x.length, x.push.apply(x, m.items))) : (_.items = m.items, _.index = 0)
			}

			function d(_) {
				return function() {
					_.items.length && n(_.items, _.index || 0)
				}
			}

			function I(_) {
				_.images && (_.images.forEach(function(m) {
					m.type = "image"
				}), _.items = _.images), _.embed && (_.embed.type = "video", _.items = [_.embed]), _.groupId && (_.group = _.groupId)
			}
			return t
		})
	});
	var vu = u((xB, Et) => {
		function $i(e) {
			return Et.exports = $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, Et.exports.__esModule = !0, Et.exports.default = Et.exports, $i(e)
		}
		Et.exports = $i, Et.exports.__esModule = !0, Et.exports.default = Et.exports
	});
	var Qt = u((CB, Ar) => {
		var vI = vu().default;

		function hu(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (hu = function(o) {
				return o ? r : t
			})(e)
		}

		function hI(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || vI(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var r = hu(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				o = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
					var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
				} return n.default = e, r && r.set(e, n), n
		}
		Ar.exports = hI, Ar.exports.__esModule = !0, Ar.exports.default = Ar.exports
	});
	var ct = u((NB, Rr) => {
		function gI(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Rr.exports = gI, Rr.exports.__esModule = !0, Rr.exports.default = Rr.exports
	});
	var Ie = u((LB, gu) => {
		var mn = function(e) {
			return e && e.Math == Math && e
		};
		gu.exports = mn(typeof globalThis == "object" && globalThis) || mn(typeof window == "object" && window) || mn(typeof self == "object" && self) || mn(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var $t = u((qB, Eu) => {
		Eu.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var Pt = u((PB, _u) => {
		var EI = $t();
		_u.exports = !EI(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var yn = u((DB, mu) => {
		var xr = Function.prototype.call;
		mu.exports = xr.bind ? xr.bind(xr) : function() {
			return xr.apply(xr, arguments)
		}
	});
	var bu = u(Tu => {
		"use strict";
		var yu = {}.propertyIsEnumerable,
			Iu = Object.getOwnPropertyDescriptor,
			_I = Iu && !yu.call({
				1: 2
			}, 1);
		Tu.f = _I ? function(t) {
			var r = Iu(this, t);
			return !!r && r.enumerable
		} : yu
	});
	var Zi = u((FB, Ou) => {
		Ou.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var Je = u((GB, Su) => {
		var wu = Function.prototype,
			Ji = wu.bind,
			eo = wu.call,
			mI = Ji && Ji.bind(eo);
		Su.exports = Ji ? function(e) {
			return e && mI(eo, e)
		} : function(e) {
			return e && function() {
				return eo.apply(e, arguments)
			}
		}
	});
	var xu = u((XB, Ru) => {
		var Au = Je(),
			yI = Au({}.toString),
			II = Au("".slice);
		Ru.exports = function(e) {
			return II(yI(e), 8, -1)
		}
	});
	var Nu = u((UB, Cu) => {
		var TI = Ie(),
			bI = Je(),
			OI = $t(),
			wI = xu(),
			to = TI.Object,
			SI = bI("".split);
		Cu.exports = OI(function() {
			return !to("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return wI(e) == "String" ? SI(e, "") : to(e)
		} : to
	});
	var ro = u((WB, Lu) => {
		var AI = Ie(),
			RI = AI.TypeError;
		Lu.exports = function(e) {
			if (e == null) throw RI("Can't call method on " + e);
			return e
		}
	});
	var Cr = u((VB, qu) => {
		var xI = Nu(),
			CI = ro();
		qu.exports = function(e) {
			return xI(CI(e))
		}
	});
	var lt = u((BB, Pu) => {
		Pu.exports = function(e) {
			return typeof e == "function"
		}
	});
	var Zt = u((kB, Du) => {
		var NI = lt();
		Du.exports = function(e) {
			return typeof e == "object" ? e !== null : NI(e)
		}
	});
	var Nr = u((HB, Mu) => {
		var no = Ie(),
			LI = lt(),
			qI = function(e) {
				return LI(e) ? e : void 0
			};
		Mu.exports = function(e, t) {
			return arguments.length < 2 ? qI(no[e]) : no[e] && no[e][t]
		}
	});
	var Gu = u((jB, Fu) => {
		var PI = Je();
		Fu.exports = PI({}.isPrototypeOf)
	});
	var Uu = u((KB, Xu) => {
		var DI = Nr();
		Xu.exports = DI("navigator", "userAgent") || ""
	});
	var Ku = u((zB, ju) => {
		var Hu = Ie(),
			io = Uu(),
			Wu = Hu.process,
			Vu = Hu.Deno,
			Bu = Wu && Wu.versions || Vu && Vu.version,
			ku = Bu && Bu.v8,
			et, In;
		ku && (et = ku.split("."), In = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1]));
		!In && io && (et = io.match(/Edge\/(\d+)/), (!et || et[1] >= 74) && (et = io.match(/Chrome\/(\d+)/), et && (In = +et[1])));
		ju.exports = In
	});
	var oo = u((YB, Yu) => {
		var zu = Ku(),
			MI = $t();
		Yu.exports = !!Object.getOwnPropertySymbols && !MI(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && zu && zu < 41
		})
	});
	var ao = u((QB, Qu) => {
		var FI = oo();
		Qu.exports = FI && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var so = u(($B, $u) => {
		var GI = Ie(),
			XI = Nr(),
			UI = lt(),
			WI = Gu(),
			VI = ao(),
			BI = GI.Object;
		$u.exports = VI ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = XI("Symbol");
			return UI(t) && WI(t.prototype, BI(e))
		}
	});
	var Ju = u((ZB, Zu) => {
		var kI = Ie(),
			HI = kI.String;
		Zu.exports = function(e) {
			try {
				return HI(e)
			} catch {
				return "Object"
			}
		}
	});
	var tc = u((JB, ec) => {
		var jI = Ie(),
			KI = lt(),
			zI = Ju(),
			YI = jI.TypeError;
		ec.exports = function(e) {
			if (KI(e)) return e;
			throw YI(zI(e) + " is not a function")
		}
	});
	var nc = u((ek, rc) => {
		var QI = tc();
		rc.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : QI(r)
		}
	});
	var oc = u((tk, ic) => {
		var $I = Ie(),
			uo = yn(),
			co = lt(),
			lo = Zt(),
			ZI = $I.TypeError;
		ic.exports = function(e, t) {
			var r, n;
			if (t === "string" && co(r = e.toString) && !lo(n = uo(r, e)) || co(r = e.valueOf) && !lo(n = uo(r, e)) || t !== "string" && co(r = e.toString) && !lo(n = uo(r, e))) return n;
			throw ZI("Can't convert object to primitive value")
		}
	});
	var sc = u((rk, ac) => {
		ac.exports = !1
	});
	var Tn = u((nk, cc) => {
		var uc = Ie(),
			JI = Object.defineProperty;
		cc.exports = function(e, t) {
			try {
				JI(uc, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				uc[e] = t
			}
			return t
		}
	});
	var bn = u((ik, fc) => {
		var eT = Ie(),
			tT = Tn(),
			lc = "__core-js_shared__",
			rT = eT[lc] || tT(lc, {});
		fc.exports = rT
	});
	var fo = u((ok, pc) => {
		var nT = sc(),
			dc = bn();
		(pc.exports = function(e, t) {
			return dc[e] || (dc[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: nT ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var hc = u((ak, vc) => {
		var iT = Ie(),
			oT = ro(),
			aT = iT.Object;
		vc.exports = function(e) {
			return aT(oT(e))
		}
	});
	var Ot = u((sk, gc) => {
		var sT = Je(),
			uT = hc(),
			cT = sT({}.hasOwnProperty);
		gc.exports = Object.hasOwn || function(t, r) {
			return cT(uT(t), r)
		}
	});
	var po = u((uk, Ec) => {
		var lT = Je(),
			fT = 0,
			dT = Math.random(),
			pT = lT(1 .toString);
		Ec.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + pT(++fT + dT, 36)
		}
	});
	var vo = u((ck, Tc) => {
		var vT = Ie(),
			hT = fo(),
			_c = Ot(),
			gT = po(),
			mc = oo(),
			Ic = ao(),
			Jt = hT("wks"),
			Dt = vT.Symbol,
			yc = Dt && Dt.for,
			ET = Ic ? Dt : Dt && Dt.withoutSetter || gT;
		Tc.exports = function(e) {
			if (!_c(Jt, e) || !(mc || typeof Jt[e] == "string")) {
				var t = "Symbol." + e;
				mc && _c(Dt, e) ? Jt[e] = Dt[e] : Ic && yc ? Jt[e] = yc(t) : Jt[e] = ET(t)
			}
			return Jt[e]
		}
	});
	var Sc = u((lk, wc) => {
		var _T = Ie(),
			mT = yn(),
			bc = Zt(),
			Oc = so(),
			yT = nc(),
			IT = oc(),
			TT = vo(),
			bT = _T.TypeError,
			OT = TT("toPrimitive");
		wc.exports = function(e, t) {
			if (!bc(e) || Oc(e)) return e;
			var r = yT(e, OT),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = mT(r, e, t), !bc(n) || Oc(n)) return n;
				throw bT("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), IT(e, t)
		}
	});
	var ho = u((fk, Ac) => {
		var wT = Sc(),
			ST = so();
		Ac.exports = function(e) {
			var t = wT(e, "string");
			return ST(t) ? t : t + ""
		}
	});
	var Eo = u((dk, xc) => {
		var AT = Ie(),
			Rc = Zt(),
			go = AT.document,
			RT = Rc(go) && Rc(go.createElement);
		xc.exports = function(e) {
			return RT ? go.createElement(e) : {}
		}
	});
	var _o = u((pk, Cc) => {
		var xT = Pt(),
			CT = $t(),
			NT = Eo();
		Cc.exports = !xT && !CT(function() {
			return Object.defineProperty(NT("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var mo = u(Lc => {
		var LT = Pt(),
			qT = yn(),
			PT = bu(),
			DT = Zi(),
			MT = Cr(),
			FT = ho(),
			GT = Ot(),
			XT = _o(),
			Nc = Object.getOwnPropertyDescriptor;
		Lc.f = LT ? Nc : function(t, r) {
			if (t = MT(t), r = FT(r), XT) try {
				return Nc(t, r)
			} catch {}
			if (GT(t, r)) return DT(!qT(PT.f, t, r), t[r])
		}
	});
	var Lr = u((hk, Pc) => {
		var qc = Ie(),
			UT = Zt(),
			WT = qc.String,
			VT = qc.TypeError;
		Pc.exports = function(e) {
			if (UT(e)) return e;
			throw VT(WT(e) + " is not an object")
		}
	});
	var qr = u(Fc => {
		var BT = Ie(),
			kT = Pt(),
			HT = _o(),
			Dc = Lr(),
			jT = ho(),
			KT = BT.TypeError,
			Mc = Object.defineProperty;
		Fc.f = kT ? Mc : function(t, r, n) {
			if (Dc(t), r = jT(r), Dc(n), HT) try {
				return Mc(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw KT("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var On = u((Ek, Gc) => {
		var zT = Pt(),
			YT = qr(),
			QT = Zi();
		Gc.exports = zT ? function(e, t, r) {
			return YT.f(e, t, QT(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var Io = u((_k, Xc) => {
		var $T = Je(),
			ZT = lt(),
			yo = bn(),
			JT = $T(Function.toString);
		ZT(yo.inspectSource) || (yo.inspectSource = function(e) {
			return JT(e)
		});
		Xc.exports = yo.inspectSource
	});
	var Vc = u((mk, Wc) => {
		var eb = Ie(),
			tb = lt(),
			rb = Io(),
			Uc = eb.WeakMap;
		Wc.exports = tb(Uc) && /native code/.test(rb(Uc))
	});
	var To = u((yk, kc) => {
		var nb = fo(),
			ib = po(),
			Bc = nb("keys");
		kc.exports = function(e) {
			return Bc[e] || (Bc[e] = ib(e))
		}
	});
	var wn = u((Ik, Hc) => {
		Hc.exports = {}
	});
	var $c = u((Tk, Qc) => {
		var ob = Vc(),
			Yc = Ie(),
			bo = Je(),
			ab = Zt(),
			sb = On(),
			Oo = Ot(),
			wo = bn(),
			ub = To(),
			cb = wn(),
			jc = "Object already initialized",
			Ao = Yc.TypeError,
			lb = Yc.WeakMap,
			Sn, Pr, An, fb = function(e) {
				return An(e) ? Pr(e) : Sn(e, {})
			},
			db = function(e) {
				return function(t) {
					var r;
					if (!ab(t) || (r = Pr(t)).type !== e) throw Ao("Incompatible receiver, " + e + " required");
					return r
				}
			};
		ob || wo.state ? (wt = wo.state || (wo.state = new lb), Kc = bo(wt.get), So = bo(wt.has), zc = bo(wt.set), Sn = function(e, t) {
			if (So(wt, e)) throw new Ao(jc);
			return t.facade = e, zc(wt, e, t), t
		}, Pr = function(e) {
			return Kc(wt, e) || {}
		}, An = function(e) {
			return So(wt, e)
		}) : (Mt = ub("state"), cb[Mt] = !0, Sn = function(e, t) {
			if (Oo(e, Mt)) throw new Ao(jc);
			return t.facade = e, sb(e, Mt, t), t
		}, Pr = function(e) {
			return Oo(e, Mt) ? e[Mt] : {}
		}, An = function(e) {
			return Oo(e, Mt)
		});
		var wt, Kc, So, zc, Mt;
		Qc.exports = {
			set: Sn,
			get: Pr,
			has: An,
			enforce: fb,
			getterFor: db
		}
	});
	var el = u((bk, Jc) => {
		var Ro = Pt(),
			pb = Ot(),
			Zc = Function.prototype,
			vb = Ro && Object.getOwnPropertyDescriptor,
			xo = pb(Zc, "name"),
			hb = xo && function() {}.name === "something",
			gb = xo && (!Ro || Ro && vb(Zc, "name").configurable);
		Jc.exports = {
			EXISTS: xo,
			PROPER: hb,
			CONFIGURABLE: gb
		}
	});
	var ol = u((Ok, il) => {
		var Eb = Ie(),
			tl = lt(),
			_b = Ot(),
			rl = On(),
			mb = Tn(),
			yb = Io(),
			nl = $c(),
			Ib = el().CONFIGURABLE,
			Tb = nl.get,
			bb = nl.enforce,
			Ob = String(String).split("String");
		(il.exports = function(e, t, r, n) {
			var o = n ? !!n.unsafe : !1,
				i = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				c;
			if (tl(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!_b(r, "name") || Ib && r.name !== s) && rl(r, "name", s), c = bb(r), c.source || (c.source = Ob.join(typeof s == "string" ? s : ""))), e === Eb) {
				i ? e[t] = r : mb(t, r);
				return
			} else o ? !a && e[t] && (i = !0) : delete e[t];
			i ? e[t] = r : rl(e, t, r)
		})(Function.prototype, "toString", function() {
			return tl(this) && Tb(this).source || yb(this)
		})
	});
	var Co = u((wk, al) => {
		var wb = Math.ceil,
			Sb = Math.floor;
		al.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? Sb : wb)(t)
		}
	});
	var ul = u((Sk, sl) => {
		var Ab = Co(),
			Rb = Math.max,
			xb = Math.min;
		sl.exports = function(e, t) {
			var r = Ab(e);
			return r < 0 ? Rb(r + t, 0) : xb(r, t)
		}
	});
	var ll = u((Ak, cl) => {
		var Cb = Co(),
			Nb = Math.min;
		cl.exports = function(e) {
			return e > 0 ? Nb(Cb(e), 9007199254740991) : 0
		}
	});
	var dl = u((Rk, fl) => {
		var Lb = ll();
		fl.exports = function(e) {
			return Lb(e.length)
		}
	});
	var No = u((xk, vl) => {
		var qb = Cr(),
			Pb = ul(),
			Db = dl(),
			pl = function(e) {
				return function(t, r, n) {
					var o = qb(t),
						i = Db(o),
						a = Pb(n, i),
						s;
					if (e && r != r) {
						for (; i > a;)
							if (s = o[a++], s != s) return !0
					} else
						for (; i > a; a++)
							if ((e || a in o) && o[a] === r) return e || a || 0;
					return !e && -1
				}
			};
		vl.exports = {
			includes: pl(!0),
			indexOf: pl(!1)
		}
	});
	var qo = u((Ck, gl) => {
		var Mb = Je(),
			Lo = Ot(),
			Fb = Cr(),
			Gb = No().indexOf,
			Xb = wn(),
			hl = Mb([].push);
		gl.exports = function(e, t) {
			var r = Fb(e),
				n = 0,
				o = [],
				i;
			for (i in r) !Lo(Xb, i) && Lo(r, i) && hl(o, i);
			for (; t.length > n;) Lo(r, i = t[n++]) && (~Gb(o, i) || hl(o, i));
			return o
		}
	});
	var Rn = u((Nk, El) => {
		El.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var ml = u(_l => {
		var Ub = qo(),
			Wb = Rn(),
			Vb = Wb.concat("length", "prototype");
		_l.f = Object.getOwnPropertyNames || function(t) {
			return Ub(t, Vb)
		}
	});
	var Il = u(yl => {
		yl.f = Object.getOwnPropertySymbols
	});
	var bl = u((Pk, Tl) => {
		var Bb = Nr(),
			kb = Je(),
			Hb = ml(),
			jb = Il(),
			Kb = Lr(),
			zb = kb([].concat);
		Tl.exports = Bb("Reflect", "ownKeys") || function(t) {
			var r = Hb.f(Kb(t)),
				n = jb.f;
			return n ? zb(r, n(t)) : r
		}
	});
	var wl = u((Dk, Ol) => {
		var Yb = Ot(),
			Qb = bl(),
			$b = mo(),
			Zb = qr();
		Ol.exports = function(e, t) {
			for (var r = Qb(t), n = Zb.f, o = $b.f, i = 0; i < r.length; i++) {
				var a = r[i];
				Yb(e, a) || n(e, a, o(t, a))
			}
		}
	});
	var Al = u((Mk, Sl) => {
		var Jb = $t(),
			eO = lt(),
			tO = /#|\.prototype\./,
			Dr = function(e, t) {
				var r = nO[rO(e)];
				return r == oO ? !0 : r == iO ? !1 : eO(t) ? Jb(t) : !!t
			},
			rO = Dr.normalize = function(e) {
				return String(e).replace(tO, ".").toLowerCase()
			},
			nO = Dr.data = {},
			iO = Dr.NATIVE = "N",
			oO = Dr.POLYFILL = "P";
		Sl.exports = Dr
	});
	var xl = u((Fk, Rl) => {
		var Po = Ie(),
			aO = mo().f,
			sO = On(),
			uO = ol(),
			cO = Tn(),
			lO = wl(),
			fO = Al();
		Rl.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				o = e.stat,
				i, a, s, c, h, y;
			if (n ? a = Po : o ? a = Po[r] || cO(r, {}) : a = (Po[r] || {}).prototype, a)
				for (s in t) {
					if (h = t[s], e.noTargetGet ? (y = aO(a, s), c = y && y.value) : c = a[s], i = fO(n ? s : r + (o ? "." : "#") + s, e.forced), !i && c !== void 0) {
						if (typeof h == typeof c) continue;
						lO(h, c)
					}(e.sham || c && c.sham) && sO(h, "sham", !0), uO(a, s, h, e)
				}
		}
	});
	var Nl = u((Gk, Cl) => {
		var dO = qo(),
			pO = Rn();
		Cl.exports = Object.keys || function(t) {
			return dO(t, pO)
		}
	});
	var ql = u((Xk, Ll) => {
		var vO = Pt(),
			hO = qr(),
			gO = Lr(),
			EO = Cr(),
			_O = Nl();
		Ll.exports = vO ? Object.defineProperties : function(t, r) {
			gO(t);
			for (var n = EO(r), o = _O(r), i = o.length, a = 0, s; i > a;) hO.f(t, s = o[a++], n[s]);
			return t
		}
	});
	var Dl = u((Uk, Pl) => {
		var mO = Nr();
		Pl.exports = mO("document", "documentElement")
	});
	var Bl = u((Wk, Vl) => {
		var yO = Lr(),
			IO = ql(),
			Ml = Rn(),
			TO = wn(),
			bO = Dl(),
			OO = Eo(),
			wO = To(),
			Fl = ">",
			Gl = "<",
			Mo = "prototype",
			Fo = "script",
			Ul = wO("IE_PROTO"),
			Do = function() {},
			Wl = function(e) {
				return Gl + Fo + Fl + e + Gl + "/" + Fo + Fl
			},
			Xl = function(e) {
				e.write(Wl("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			SO = function() {
				var e = OO("iframe"),
					t = "java" + Fo + ":",
					r;
				return e.style.display = "none", bO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Wl("document.F=Object")), r.close(), r.F
			},
			xn, Cn = function() {
				try {
					xn = new ActiveXObject("htmlfile")
				} catch {}
				Cn = typeof document < "u" ? document.domain && xn ? Xl(xn) : SO() : Xl(xn);
				for (var e = Ml.length; e--;) delete Cn[Mo][Ml[e]];
				return Cn()
			};
		TO[Ul] = !0;
		Vl.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (Do[Mo] = yO(t), n = new Do, Do[Mo] = null, n[Ul] = t) : n = Cn(), r === void 0 ? n : IO(n, r)
		}
	});
	var Hl = u((Vk, kl) => {
		var AO = vo(),
			RO = Bl(),
			xO = qr(),
			Go = AO("unscopables"),
			Xo = Array.prototype;
		Xo[Go] == null && xO.f(Xo, Go, {
			configurable: !0,
			value: RO(null)
		});
		kl.exports = function(e) {
			Xo[Go][e] = !0
		}
	});
	var jl = u(() => {
		"use strict";
		var CO = xl(),
			NO = No().includes,
			LO = Hl();
		CO({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return NO(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		LO("includes")
	});
	var zl = u((Hk, Kl) => {
		var qO = Ie(),
			PO = Je();
		Kl.exports = function(e, t) {
			return PO(qO[e].prototype[t])
		}
	});
	var Ql = u((jk, Yl) => {
		jl();
		var DO = zl();
		Yl.exports = DO("Array", "includes")
	});
	var Zl = u((Kk, $l) => {
		var MO = Ql();
		$l.exports = MO
	});
	var ef = u((zk, Jl) => {
		var FO = Zl();
		Jl.exports = FO
	});
	var rf = u((Yk, tf) => {
		var GO = typeof global == "object" && global && global.Object === Object && global;
		tf.exports = GO
	});
	var of = u((Qk, nf) => {
		var XO = rf(),
			UO = typeof self == "object" && self && self.Object === Object && self,
			WO = XO || UO || Function("return this")();
		nf.exports = WO
	});
	var Uo = u(($k, af) => {
		var VO = of(),
			BO = VO.Symbol;
		af.exports = BO
	});
	var lf = u((Zk, cf) => {
		var sf = Uo(),
			uf = Object.prototype,
			kO = uf.hasOwnProperty,
			HO = uf.toString,
			Mr = sf ? sf.toStringTag : void 0;

		function jO(e) {
			var t = kO.call(e, Mr),
				r = e[Mr];
			try {
				e[Mr] = void 0;
				var n = !0
			} catch {}
			var o = HO.call(e);
			return n && (t ? e[Mr] = r : delete e[Mr]), o
		}
		cf.exports = jO
	});
	var df = u((Jk, ff) => {
		var KO = Object.prototype,
			zO = KO.toString;

		function YO(e) {
			return zO.call(e)
		}
		ff.exports = YO
	});
	var gf = u((eH, hf) => {
		var pf = Uo(),
			QO = lf(),
			$O = df(),
			ZO = "[object Null]",
			JO = "[object Undefined]",
			vf = pf ? pf.toStringTag : void 0;

		function ew(e) {
			return e == null ? e === void 0 ? JO : ZO : vf && vf in Object(e) ? QO(e) : $O(e)
		}
		hf.exports = ew
	});
	var _f = u((tH, Ef) => {
		function tw(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		Ef.exports = tw
	});
	var yf = u((rH, mf) => {
		var rw = _f(),
			nw = rw(Object.getPrototypeOf, Object);
		mf.exports = nw
	});
	var Tf = u((nH, If) => {
		function iw(e) {
			return e != null && typeof e == "object"
		}
		If.exports = iw
	});
	var Wo = u((iH, Of) => {
		var ow = gf(),
			aw = yf(),
			sw = Tf(),
			uw = "[object Object]",
			cw = Function.prototype,
			lw = Object.prototype,
			bf = cw.toString,
			fw = lw.hasOwnProperty,
			dw = bf.call(Object);

		function pw(e) {
			if (!sw(e) || ow(e) != uw) return !1;
			var t = aw(e);
			if (t === null) return !0;
			var r = fw.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && bf.call(r) == dw
		}
		Of.exports = pw
	});
	var wf = u(Vo => {
		"use strict";
		Object.defineProperty(Vo, "__esModule", {
			value: !0
		});
		Vo.default = vw;

		function vw(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var Sf = u((ko, Bo) => {
		"use strict";
		Object.defineProperty(ko, "__esModule", {
			value: !0
		});
		var hw = wf(),
			gw = Ew(hw);

		function Ew(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var er;
		typeof self < "u" ? er = self : typeof window < "u" ? er = window : typeof global < "u" ? er = global : typeof Bo < "u" ? er = Bo : er = Function("return this")();
		var _w = (0, gw.default)(er);
		ko.default = _w
	});
	var Ho = u(Fr => {
		"use strict";
		Fr.__esModule = !0;
		Fr.ActionTypes = void 0;
		Fr.default = Cf;
		var mw = Wo(),
			yw = xf(mw),
			Iw = Sf(),
			Af = xf(Iw);

		function xf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var Rf = Fr.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function Cf(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(Cf)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var o = e,
				i = t,
				a = [],
				s = a,
				c = !1;

			function h() {
				s === a && (s = a.slice())
			}

			function y() {
				return i
			}

			function d(w) {
				if (typeof w != "function") throw new Error("Expected listener to be a function.");
				var x = !0;
				return h(), s.push(w),
					function() {
						if (x) {
							x = !1, h();
							var N = s.indexOf(w);
							s.splice(N, 1)
						}
					}
			}

			function I(w) {
				if (!(0, yw.default)(w)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof w.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (c) throw new Error("Reducers may not dispatch actions.");
				try {
					c = !0, i = o(i, w)
				} finally {
					c = !1
				}
				for (var x = a = s, R = 0; R < x.length; R++) x[R]();
				return w
			}

			function _(w) {
				if (typeof w != "function") throw new Error("Expected the nextReducer to be a function.");
				o = w, I({
					type: Rf.INIT
				})
			}

			function m() {
				var w, x = d;
				return w = {
					subscribe: function(N) {
						if (typeof N != "object") throw new TypeError("Expected the observer to be an object.");

						function A() {
							N.next && N.next(y())
						}
						A();
						var M = x(A);
						return {
							unsubscribe: M
						}
					}
				}, w[Af.default] = function() {
					return this
				}, w
			}
			return I({
				type: Rf.INIT
			}), n = {
				dispatch: I,
				subscribe: d,
				getState: y,
				replaceReducer: _
			}, n[Af.default] = m, n
		}
	});
	var Ko = u(jo => {
		"use strict";
		jo.__esModule = !0;
		jo.default = Tw;

		function Tw(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var qf = u(zo => {
		"use strict";
		zo.__esModule = !0;
		zo.default = Aw;
		var Nf = Ho(),
			bw = Wo(),
			uH = Lf(bw),
			Ow = Ko(),
			cH = Lf(Ow);

		function Lf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function ww(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function Sw(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: Nf.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: o
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Nf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function Aw(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var o = t[n];
				typeof e[o] == "function" && (r[o] = e[o])
			}
			var i = Object.keys(r);
			if (!1) var a;
			var s;
			try {
				Sw(r)
			} catch (c) {
				s = c
			}
			return function() {
				var h = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					y = arguments[1];
				if (s) throw s;
				if (!1) var d;
				for (var I = !1, _ = {}, m = 0; m < i.length; m++) {
					var w = i[m],
						x = r[w],
						R = h[w],
						N = x(R, y);
					if (typeof N > "u") {
						var A = ww(w, y);
						throw new Error(A)
					}
					_[w] = N, I = I || N !== R
				}
				return I ? _ : h
			}
		}
	});
	var Df = u(Yo => {
		"use strict";
		Yo.__esModule = !0;
		Yo.default = Rw;

		function Pf(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function Rw(e, t) {
			if (typeof e == "function") return Pf(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
				var i = r[o],
					a = e[i];
				typeof a == "function" && (n[i] = Pf(a, t))
			}
			return n
		}
	});
	var $o = u(Qo => {
		"use strict";
		Qo.__esModule = !0;
		Qo.default = xw;

		function xw() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(i) {
				return i
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				o = t.slice(0, -1);
			return function() {
				return o.reduceRight(function(i, a) {
					return a(i)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var Mf = u(Zo => {
		"use strict";
		Zo.__esModule = !0;
		var Cw = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		Zo.default = Pw;
		var Nw = $o(),
			Lw = qw(Nw);

		function qw(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function Pw() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(o, i, a) {
					var s = n(o, i, a),
						c = s.dispatch,
						h = [],
						y = {
							getState: s.getState,
							dispatch: function(I) {
								return c(I)
							}
						};
					return h = t.map(function(d) {
						return d(y)
					}), c = Lw.default.apply(void 0, h)(s.dispatch), Cw({}, s, {
						dispatch: c
					})
				}
			}
		}
	});
	var Jo = u(Ke => {
		"use strict";
		Ke.__esModule = !0;
		Ke.compose = Ke.applyMiddleware = Ke.bindActionCreators = Ke.combineReducers = Ke.createStore = void 0;
		var Dw = Ho(),
			Mw = tr(Dw),
			Fw = qf(),
			Gw = tr(Fw),
			Xw = Df(),
			Uw = tr(Xw),
			Ww = Mf(),
			Vw = tr(Ww),
			Bw = $o(),
			kw = tr(Bw),
			Hw = Ko(),
			vH = tr(Hw);

		function tr(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Ke.createStore = Mw.default;
		Ke.combineReducers = Gw.default;
		Ke.bindActionCreators = Uw.default;
		Ke.applyMiddleware = Vw.default;
		Ke.compose = kw.default
	});
	var Ff = u(Le => {
		"use strict";
		Object.defineProperty(Le, "__esModule", {
			value: !0
		});
		Le.QuickEffectIds = Le.QuickEffectDirectionConsts = Le.EventTypeConsts = Le.EventLimitAffectedElements = Le.EventContinuousMouseAxes = Le.EventBasedOn = Le.EventAppliesTo = void 0;
		var jw = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		};
		Le.EventTypeConsts = jw;
		var Kw = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		};
		Le.EventAppliesTo = Kw;
		var zw = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		};
		Le.EventBasedOn = zw;
		var Yw = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		};
		Le.EventContinuousMouseAxes = Yw;
		var Qw = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		};
		Le.EventLimitAffectedElements = Qw;
		var $w = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		};
		Le.QuickEffectIds = $w;
		var Zw = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		};
		Le.QuickEffectDirectionConsts = Zw
	});
	var ea = u(rr => {
		"use strict";
		Object.defineProperty(rr, "__esModule", {
			value: !0
		});
		rr.ActionTypeConsts = rr.ActionAppliesTo = void 0;
		var Jw = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		};
		rr.ActionTypeConsts = Jw;
		var eS = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		};
		rr.ActionAppliesTo = eS
	});
	var Gf = u(Nn => {
		"use strict";
		Object.defineProperty(Nn, "__esModule", {
			value: !0
		});
		Nn.InteractionTypeConsts = void 0;
		var tS = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		};
		Nn.InteractionTypeConsts = tS
	});
	var Xf = u(Ln => {
		"use strict";
		Object.defineProperty(Ln, "__esModule", {
			value: !0
		});
		Ln.ReducedMotionTypes = void 0;
		var rS = ea(),
			{
				TRANSFORM_MOVE: nS,
				TRANSFORM_SCALE: iS,
				TRANSFORM_ROTATE: oS,
				TRANSFORM_SKEW: aS,
				STYLE_SIZE: sS,
				STYLE_FILTER: uS,
				STYLE_FONT_VARIATION: cS
			} = rS.ActionTypeConsts,
			lS = {
				[nS]: !0,
				[iS]: !0,
				[oS]: !0,
				[aS]: !0,
				[sS]: !0,
				[uS]: !0,
				[cS]: !0
			};
		Ln.ReducedMotionTypes = lS
	});
	var Uf = u(ce => {
		"use strict";
		Object.defineProperty(ce, "__esModule", {
			value: !0
		});
		ce.IX2_VIEWPORT_WIDTH_CHANGED = ce.IX2_TEST_FRAME_RENDERED = ce.IX2_STOP_REQUESTED = ce.IX2_SESSION_STOPPED = ce.IX2_SESSION_STARTED = ce.IX2_SESSION_INITIALIZED = ce.IX2_RAW_DATA_IMPORTED = ce.IX2_PREVIEW_REQUESTED = ce.IX2_PLAYBACK_REQUESTED = ce.IX2_PARAMETER_CHANGED = ce.IX2_MEDIA_QUERIES_DEFINED = ce.IX2_INSTANCE_STARTED = ce.IX2_INSTANCE_REMOVED = ce.IX2_INSTANCE_ADDED = ce.IX2_EVENT_STATE_CHANGED = ce.IX2_EVENT_LISTENER_ADDED = ce.IX2_ELEMENT_STATE_CHANGED = ce.IX2_CLEAR_REQUESTED = ce.IX2_ANIMATION_FRAME_CHANGED = ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
		var fS = "IX2_RAW_DATA_IMPORTED";
		ce.IX2_RAW_DATA_IMPORTED = fS;
		var dS = "IX2_SESSION_INITIALIZED";
		ce.IX2_SESSION_INITIALIZED = dS;
		var pS = "IX2_SESSION_STARTED";
		ce.IX2_SESSION_STARTED = pS;
		var vS = "IX2_SESSION_STOPPED";
		ce.IX2_SESSION_STOPPED = vS;
		var hS = "IX2_PREVIEW_REQUESTED";
		ce.IX2_PREVIEW_REQUESTED = hS;
		var gS = "IX2_PLAYBACK_REQUESTED";
		ce.IX2_PLAYBACK_REQUESTED = gS;
		var ES = "IX2_STOP_REQUESTED";
		ce.IX2_STOP_REQUESTED = ES;
		var _S = "IX2_CLEAR_REQUESTED";
		ce.IX2_CLEAR_REQUESTED = _S;
		var mS = "IX2_EVENT_LISTENER_ADDED";
		ce.IX2_EVENT_LISTENER_ADDED = mS;
		var yS = "IX2_EVENT_STATE_CHANGED";
		ce.IX2_EVENT_STATE_CHANGED = yS;
		var IS = "IX2_ANIMATION_FRAME_CHANGED";
		ce.IX2_ANIMATION_FRAME_CHANGED = IS;
		var TS = "IX2_PARAMETER_CHANGED";
		ce.IX2_PARAMETER_CHANGED = TS;
		var bS = "IX2_INSTANCE_ADDED";
		ce.IX2_INSTANCE_ADDED = bS;
		var OS = "IX2_INSTANCE_STARTED";
		ce.IX2_INSTANCE_STARTED = OS;
		var wS = "IX2_INSTANCE_REMOVED";
		ce.IX2_INSTANCE_REMOVED = wS;
		var SS = "IX2_ELEMENT_STATE_CHANGED";
		ce.IX2_ELEMENT_STATE_CHANGED = SS;
		var AS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
		ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = AS;
		var RS = "IX2_VIEWPORT_WIDTH_CHANGED";
		ce.IX2_VIEWPORT_WIDTH_CHANGED = RS;
		var xS = "IX2_MEDIA_QUERIES_DEFINED";
		ce.IX2_MEDIA_QUERIES_DEFINED = xS;
		var CS = "IX2_TEST_FRAME_RENDERED";
		ce.IX2_TEST_FRAME_RENDERED = CS
	});
	var Wf = u(P => {
		"use strict";
		Object.defineProperty(P, "__esModule", {
			value: !0
		});
		P.W_MOD_JS = P.W_MOD_IX = P.WILL_CHANGE = P.WIDTH = P.WF_PAGE = P.TRANSLATE_Z = P.TRANSLATE_Y = P.TRANSLATE_X = P.TRANSLATE_3D = P.TRANSFORM = P.SKEW_Y = P.SKEW_X = P.SKEW = P.SIBLINGS = P.SCALE_Z = P.SCALE_Y = P.SCALE_X = P.SCALE_3D = P.ROTATE_Z = P.ROTATE_Y = P.ROTATE_X = P.RENDER_TRANSFORM = P.RENDER_STYLE = P.RENDER_PLUGIN = P.RENDER_GENERAL = P.PRESERVE_3D = P.PLAIN_OBJECT = P.PARENT = P.OPACITY = P.IX2_ID_DELIMITER = P.IMMEDIATE_CHILDREN = P.HTML_ELEMENT = P.HEIGHT = P.FONT_VARIATION_SETTINGS = P.FLEX = P.FILTER = P.DISPLAY = P.CONFIG_Z_VALUE = P.CONFIG_Z_UNIT = P.CONFIG_Y_VALUE = P.CONFIG_Y_UNIT = P.CONFIG_X_VALUE = P.CONFIG_X_UNIT = P.CONFIG_VALUE = P.CONFIG_UNIT = P.COMMA_DELIMITER = P.COLOR = P.COLON_DELIMITER = P.CHILDREN = P.BOUNDARY_SELECTOR = P.BORDER_COLOR = P.BAR_DELIMITER = P.BACKGROUND_COLOR = P.BACKGROUND = P.AUTO = P.ABSTRACT_NODE = void 0;
		var NS = "|";
		P.IX2_ID_DELIMITER = NS;
		var LS = "data-wf-page";
		P.WF_PAGE = LS;
		var qS = "w-mod-js";
		P.W_MOD_JS = qS;
		var PS = "w-mod-ix";
		P.W_MOD_IX = PS;
		var DS = ".w-dyn-item";
		P.BOUNDARY_SELECTOR = DS;
		var MS = "xValue";
		P.CONFIG_X_VALUE = MS;
		var FS = "yValue";
		P.CONFIG_Y_VALUE = FS;
		var GS = "zValue";
		P.CONFIG_Z_VALUE = GS;
		var XS = "value";
		P.CONFIG_VALUE = XS;
		var US = "xUnit";
		P.CONFIG_X_UNIT = US;
		var WS = "yUnit";
		P.CONFIG_Y_UNIT = WS;
		var VS = "zUnit";
		P.CONFIG_Z_UNIT = VS;
		var BS = "unit";
		P.CONFIG_UNIT = BS;
		var kS = "transform";
		P.TRANSFORM = kS;
		var HS = "translateX";
		P.TRANSLATE_X = HS;
		var jS = "translateY";
		P.TRANSLATE_Y = jS;
		var KS = "translateZ";
		P.TRANSLATE_Z = KS;
		var zS = "translate3d";
		P.TRANSLATE_3D = zS;
		var YS = "scaleX";
		P.SCALE_X = YS;
		var QS = "scaleY";
		P.SCALE_Y = QS;
		var $S = "scaleZ";
		P.SCALE_Z = $S;
		var ZS = "scale3d";
		P.SCALE_3D = ZS;
		var JS = "rotateX";
		P.ROTATE_X = JS;
		var eA = "rotateY";
		P.ROTATE_Y = eA;
		var tA = "rotateZ";
		P.ROTATE_Z = tA;
		var rA = "skew";
		P.SKEW = rA;
		var nA = "skewX";
		P.SKEW_X = nA;
		var iA = "skewY";
		P.SKEW_Y = iA;
		var oA = "opacity";
		P.OPACITY = oA;
		var aA = "filter";
		P.FILTER = aA;
		var sA = "font-variation-settings";
		P.FONT_VARIATION_SETTINGS = sA;
		var uA = "width";
		P.WIDTH = uA;
		var cA = "height";
		P.HEIGHT = cA;
		var lA = "backgroundColor";
		P.BACKGROUND_COLOR = lA;
		var fA = "background";
		P.BACKGROUND = fA;
		var dA = "borderColor";
		P.BORDER_COLOR = dA;
		var pA = "color";
		P.COLOR = pA;
		var vA = "display";
		P.DISPLAY = vA;
		var hA = "flex";
		P.FLEX = hA;
		var gA = "willChange";
		P.WILL_CHANGE = gA;
		var EA = "AUTO";
		P.AUTO = EA;
		var _A = ",";
		P.COMMA_DELIMITER = _A;
		var mA = ":";
		P.COLON_DELIMITER = mA;
		var yA = "|";
		P.BAR_DELIMITER = yA;
		var IA = "CHILDREN";
		P.CHILDREN = IA;
		var TA = "IMMEDIATE_CHILDREN";
		P.IMMEDIATE_CHILDREN = TA;
		var bA = "SIBLINGS";
		P.SIBLINGS = bA;
		var OA = "PARENT";
		P.PARENT = OA;
		var wA = "preserve-3d";
		P.PRESERVE_3D = wA;
		var SA = "HTML_ELEMENT";
		P.HTML_ELEMENT = SA;
		var AA = "PLAIN_OBJECT";
		P.PLAIN_OBJECT = AA;
		var RA = "ABSTRACT_NODE";
		P.ABSTRACT_NODE = RA;
		var xA = "RENDER_TRANSFORM";
		P.RENDER_TRANSFORM = xA;
		var CA = "RENDER_GENERAL";
		P.RENDER_GENERAL = CA;
		var NA = "RENDER_STYLE";
		P.RENDER_STYLE = NA;
		var LA = "RENDER_PLUGIN";
		P.RENDER_PLUGIN = LA
	});
	var ke = u(Ae => {
		"use strict";
		var Vf = Qt().default;
		Object.defineProperty(Ae, "__esModule", {
			value: !0
		});
		var qn = {
			IX2EngineActionTypes: !0,
			IX2EngineConstants: !0
		};
		Ae.IX2EngineConstants = Ae.IX2EngineActionTypes = void 0;
		var ta = Ff();
		Object.keys(ta).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(qn, e) || e in Ae && Ae[e] === ta[e] || Object.defineProperty(Ae, e, {
				enumerable: !0,
				get: function() {
					return ta[e]
				}
			})
		});
		var ra = ea();
		Object.keys(ra).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(qn, e) || e in Ae && Ae[e] === ra[e] || Object.defineProperty(Ae, e, {
				enumerable: !0,
				get: function() {
					return ra[e]
				}
			})
		});
		var na = Gf();
		Object.keys(na).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(qn, e) || e in Ae && Ae[e] === na[e] || Object.defineProperty(Ae, e, {
				enumerable: !0,
				get: function() {
					return na[e]
				}
			})
		});
		var ia = Xf();
		Object.keys(ia).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(qn, e) || e in Ae && Ae[e] === ia[e] || Object.defineProperty(Ae, e, {
				enumerable: !0,
				get: function() {
					return ia[e]
				}
			})
		});
		var qA = Vf(Uf());
		Ae.IX2EngineActionTypes = qA;
		var PA = Vf(Wf());
		Ae.IX2EngineConstants = PA
	});
	var Bf = u(Pn => {
		"use strict";
		Object.defineProperty(Pn, "__esModule", {
			value: !0
		});
		Pn.ixData = void 0;
		var DA = ke(),
			{
				IX2_RAW_DATA_IMPORTED: MA
			} = DA.IX2EngineActionTypes,
			FA = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case MA:
						return t.payload.ixData || Object.freeze({});
					default:
						return e
				}
			};
		Pn.ixData = FA
	});
	var Gr = u((OH, _t) => {
		function oa() {
			return _t.exports = oa = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			}, _t.exports.__esModule = !0, _t.exports.default = _t.exports, oa.apply(this, arguments)
		}
		_t.exports = oa, _t.exports.__esModule = !0, _t.exports.default = _t.exports
	});
	var nr = u(be => {
		"use strict";
		Object.defineProperty(be, "__esModule", {
			value: !0
		});
		var GA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		be.clone = Mn;
		be.addLast = jf;
		be.addFirst = Kf;
		be.removeLast = zf;
		be.removeFirst = Yf;
		be.insert = Qf;
		be.removeAt = $f;
		be.replaceAt = Zf;
		be.getIn = Fn;
		be.set = Gn;
		be.setIn = Xn;
		be.update = ed;
		be.updateIn = td;
		be.merge = rd;
		be.mergeDeep = nd;
		be.mergeIn = id;
		be.omit = od;
		be.addDefaults = ad;
		var kf = "INVALID_ARGS";

		function Hf(e) {
			throw new Error(e)
		}

		function aa(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var XA = {}.hasOwnProperty;

		function Mn(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = aa(e), r = {}, n = 0; n < t.length; n++) {
				var o = t[n];
				r[o] = e[o]
			}
			return r
		}

		function He(e, t, r) {
			var n = r;
			n == null && Hf(kf);
			for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
			for (var c = 0; c < a.length; c++) {
				var h = a[c];
				if (h != null) {
					var y = aa(h);
					if (y.length)
						for (var d = 0; d <= y.length; d++) {
							var I = y[d];
							if (!(e && n[I] !== void 0)) {
								var _ = h[I];
								t && Dn(n[I]) && Dn(_) && (_ = He(e, t, n[I], _)), !(_ === void 0 || _ === n[I]) && (o || (o = !0, n = Mn(n)), n[I] = _)
							}
						}
				}
			}
			return n
		}

		function Dn(e) {
			var t = typeof e > "u" ? "undefined" : GA(e);
			return e != null && (t === "object" || t === "function")
		}

		function jf(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function Kf(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function zf(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function Yf(e) {
			return e.length ? e.slice(1) : e
		}

		function Qf(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function $f(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function Zf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
			return o[t] = r, o
		}

		function Fn(e, t) {
			if (!Array.isArray(t) && Hf(kf), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var o = t[n];
					if (r = r?.[o], r === void 0) return r
				}
				return r
			}
		}

		function Gn(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				o = e ?? n;
			if (o[t] === r) return o;
			var i = Mn(o);
			return i[t] = r, i
		}

		function Jf(e, t, r, n) {
			var o = void 0,
				i = t[n];
			if (n === t.length - 1) o = r;
			else {
				var a = Dn(e) && Dn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
				o = Jf(a, t, r, n + 1)
			}
			return Gn(e, i, o)
		}

		function Xn(e, t, r) {
			return t.length ? Jf(e, t, r, 0) : r
		}

		function ed(e, t, r) {
			var n = e?.[t],
				o = r(n);
			return Gn(e, t, o)
		}

		function td(e, t, r) {
			var n = Fn(e, t),
				o = r(n);
			return Xn(e, t, o)
		}

		function rd(e, t, r, n, o, i) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? He.call.apply(He, [null, !1, !1, e, t, r, n, o, i].concat(s)) : He(!1, !1, e, t, r, n, o, i)
		}

		function nd(e, t, r, n, o, i) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? He.call.apply(He, [null, !1, !0, e, t, r, n, o, i].concat(s)) : He(!1, !0, e, t, r, n, o, i)
		}

		function id(e, t, r, n, o, i, a) {
			var s = Fn(e, t);
			s == null && (s = {});
			for (var c = void 0, h = arguments.length, y = Array(h > 7 ? h - 7 : 0), d = 7; d < h; d++) y[d - 7] = arguments[d];
			return y.length ? c = He.call.apply(He, [null, !1, !1, s, r, n, o, i, a].concat(y)) : c = He(!1, !1, s, r, n, o, i, a), Xn(e, t, c)
		}

		function od(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
				if (XA.call(e, r[o])) {
					n = !0;
					break
				} if (!n) return e;
			for (var i = {}, a = aa(e), s = 0; s < a.length; s++) {
				var c = a[s];
				r.indexOf(c) >= 0 || (i[c] = e[c])
			}
			return i
		}

		function ad(e, t, r, n, o, i) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? He.call.apply(He, [null, !0, !1, e, t, r, n, o, i].concat(s)) : He(!0, !1, e, t, r, n, o, i)
		}
		var UA = {
			clone: Mn,
			addLast: jf,
			addFirst: Kf,
			removeLast: zf,
			removeFirst: Yf,
			insert: Qf,
			removeAt: $f,
			replaceAt: Zf,
			getIn: Fn,
			set: Gn,
			setIn: Xn,
			update: ed,
			updateIn: td,
			merge: rd,
			mergeDeep: nd,
			mergeIn: id,
			omit: od,
			addDefaults: ad
		};
		be.default = UA
	});
	var ud = u(Un => {
		"use strict";
		var WA = ct().default;
		Object.defineProperty(Un, "__esModule", {
			value: !0
		});
		Un.ixRequest = void 0;
		var VA = WA(Gr()),
			BA = ke(),
			kA = nr(),
			{
				IX2_PREVIEW_REQUESTED: HA,
				IX2_PLAYBACK_REQUESTED: jA,
				IX2_STOP_REQUESTED: KA,
				IX2_CLEAR_REQUESTED: zA
			} = BA.IX2EngineActionTypes,
			YA = {
				preview: {},
				playback: {},
				stop: {},
				clear: {}
			},
			sd = Object.create(null, {
				[HA]: {
					value: "preview"
				},
				[jA]: {
					value: "playback"
				},
				[KA]: {
					value: "stop"
				},
				[zA]: {
					value: "clear"
				}
			}),
			QA = (e = YA, t) => {
				if (t.type in sd) {
					let r = [sd[t.type]];
					return (0, kA.setIn)(e, [r], (0, VA.default)({}, t.payload))
				}
				return e
			};
		Un.ixRequest = QA
	});
	var ld = u(Wn => {
		"use strict";
		Object.defineProperty(Wn, "__esModule", {
			value: !0
		});
		Wn.ixSession = void 0;
		var $A = ke(),
			ft = nr(),
			{
				IX2_SESSION_INITIALIZED: ZA,
				IX2_SESSION_STARTED: JA,
				IX2_TEST_FRAME_RENDERED: e0,
				IX2_SESSION_STOPPED: t0,
				IX2_EVENT_LISTENER_ADDED: r0,
				IX2_EVENT_STATE_CHANGED: n0,
				IX2_ANIMATION_FRAME_CHANGED: i0,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: o0,
				IX2_VIEWPORT_WIDTH_CHANGED: a0,
				IX2_MEDIA_QUERIES_DEFINED: s0
			} = $A.IX2EngineActionTypes,
			cd = {
				active: !1,
				tick: 0,
				eventListeners: [],
				eventState: {},
				playbackState: {},
				viewportWidth: 0,
				mediaQueryKey: null,
				hasBoundaryNodes: !1,
				hasDefinedMediaQueries: !1,
				reducedMotion: !1
			},
			u0 = 20,
			c0 = (e = cd, t) => {
				switch (t.type) {
					case ZA: {
						let {
							hasBoundaryNodes: r,
							reducedMotion: n
						} = t.payload;
						return (0, ft.merge)(e, {
							hasBoundaryNodes: r,
							reducedMotion: n
						})
					}
					case JA:
						return (0, ft.set)(e, "active", !0);
					case e0: {
						let {
							payload: {
								step: r = u0
							}
						} = t;
						return (0, ft.set)(e, "tick", e.tick + r)
					}
					case t0:
						return cd;
					case i0: {
						let {
							payload: {
								now: r
							}
						} = t;
						return (0, ft.set)(e, "tick", r)
					}
					case r0: {
						let r = (0, ft.addLast)(e.eventListeners, t.payload);
						return (0, ft.set)(e, "eventListeners", r)
					}
					case n0: {
						let {
							stateKey: r,
							newState: n
						} = t.payload;
						return (0, ft.setIn)(e, ["eventState", r], n)
					}
					case o0: {
						let {
							actionListId: r,
							isPlaying: n
						} = t.payload;
						return (0, ft.setIn)(e, ["playbackState", r], n)
					}
					case a0: {
						let {
							width: r,
							mediaQueries: n
						} = t.payload, o = n.length, i = null;
						for (let a = 0; a < o; a++) {
							let {
								key: s,
								min: c,
								max: h
							} = n[a];
							if (r >= c && r <= h) {
								i = s;
								break
							}
						}
						return (0, ft.merge)(e, {
							viewportWidth: r,
							mediaQueryKey: i
						})
					}
					case s0:
						return (0, ft.set)(e, "hasDefinedMediaQueries", !0);
					default:
						return e
				}
			};
		Wn.ixSession = c0
	});
	var dd = u((RH, fd) => {
		function l0() {
			this.__data__ = [], this.size = 0
		}
		fd.exports = l0
	});
	var Vn = u((xH, pd) => {
		function f0(e, t) {
			return e === t || e !== e && t !== t
		}
		pd.exports = f0
	});
	var Xr = u((CH, vd) => {
		var d0 = Vn();

		function p0(e, t) {
			for (var r = e.length; r--;)
				if (d0(e[r][0], t)) return r;
			return -1
		}
		vd.exports = p0
	});
	var gd = u((NH, hd) => {
		var v0 = Xr(),
			h0 = Array.prototype,
			g0 = h0.splice;

		function E0(e) {
			var t = this.__data__,
				r = v0(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : g0.call(t, r, 1), --this.size, !0
		}
		hd.exports = E0
	});
	var _d = u((LH, Ed) => {
		var _0 = Xr();

		function m0(e) {
			var t = this.__data__,
				r = _0(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		Ed.exports = m0
	});
	var yd = u((qH, md) => {
		var y0 = Xr();

		function I0(e) {
			return y0(this.__data__, e) > -1
		}
		md.exports = I0
	});
	var Td = u((PH, Id) => {
		var T0 = Xr();

		function b0(e, t) {
			var r = this.__data__,
				n = T0(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		Id.exports = b0
	});
	var Ur = u((DH, bd) => {
		var O0 = dd(),
			w0 = gd(),
			S0 = _d(),
			A0 = yd(),
			R0 = Td();

		function ir(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		ir.prototype.clear = O0;
		ir.prototype.delete = w0;
		ir.prototype.get = S0;
		ir.prototype.has = A0;
		ir.prototype.set = R0;
		bd.exports = ir
	});
	var wd = u((MH, Od) => {
		var x0 = Ur();

		function C0() {
			this.__data__ = new x0, this.size = 0
		}
		Od.exports = C0
	});
	var Ad = u((FH, Sd) => {
		function N0(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		Sd.exports = N0
	});
	var xd = u((GH, Rd) => {
		function L0(e) {
			return this.__data__.get(e)
		}
		Rd.exports = L0
	});
	var Nd = u((XH, Cd) => {
		function q0(e) {
			return this.__data__.has(e)
		}
		Cd.exports = q0
	});
	var sa = u((UH, Ld) => {
		var P0 = typeof global == "object" && global && global.Object === Object && global;
		Ld.exports = P0
	});
	var tt = u((WH, qd) => {
		var D0 = sa(),
			M0 = typeof self == "object" && self && self.Object === Object && self,
			F0 = D0 || M0 || Function("return this")();
		qd.exports = F0
	});
	var or = u((VH, Pd) => {
		var G0 = tt(),
			X0 = G0.Symbol;
		Pd.exports = X0
	});
	var Gd = u((BH, Fd) => {
		var Dd = or(),
			Md = Object.prototype,
			U0 = Md.hasOwnProperty,
			W0 = Md.toString,
			Wr = Dd ? Dd.toStringTag : void 0;

		function V0(e) {
			var t = U0.call(e, Wr),
				r = e[Wr];
			try {
				e[Wr] = void 0;
				var n = !0
			} catch {}
			var o = W0.call(e);
			return n && (t ? e[Wr] = r : delete e[Wr]), o
		}
		Fd.exports = V0
	});
	var Ud = u((kH, Xd) => {
		var B0 = Object.prototype,
			k0 = B0.toString;

		function H0(e) {
			return k0.call(e)
		}
		Xd.exports = H0
	});
	var Ft = u((HH, Bd) => {
		var Wd = or(),
			j0 = Gd(),
			K0 = Ud(),
			z0 = "[object Null]",
			Y0 = "[object Undefined]",
			Vd = Wd ? Wd.toStringTag : void 0;

		function Q0(e) {
			return e == null ? e === void 0 ? Y0 : z0 : Vd && Vd in Object(e) ? j0(e) : K0(e)
		}
		Bd.exports = Q0
	});
	var dt = u((jH, kd) => {
		function $0(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		kd.exports = $0
	});
	var ua = u((KH, Hd) => {
		var Z0 = Ft(),
			J0 = dt(),
			eR = "[object AsyncFunction]",
			tR = "[object Function]",
			rR = "[object GeneratorFunction]",
			nR = "[object Proxy]";

		function iR(e) {
			if (!J0(e)) return !1;
			var t = Z0(e);
			return t == tR || t == rR || t == eR || t == nR
		}
		Hd.exports = iR
	});
	var Kd = u((zH, jd) => {
		var oR = tt(),
			aR = oR["__core-js_shared__"];
		jd.exports = aR
	});
	var Qd = u((YH, Yd) => {
		var ca = Kd(),
			zd = function() {
				var e = /[^.]+$/.exec(ca && ca.keys && ca.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function sR(e) {
			return !!zd && zd in e
		}
		Yd.exports = sR
	});
	var la = u((QH, $d) => {
		var uR = Function.prototype,
			cR = uR.toString;

		function lR(e) {
			if (e != null) {
				try {
					return cR.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		$d.exports = lR
	});
	var Jd = u(($H, Zd) => {
		var fR = ua(),
			dR = Qd(),
			pR = dt(),
			vR = la(),
			hR = /[\\^$.*+?()[\]{}|]/g,
			gR = /^\[object .+?Constructor\]$/,
			ER = Function.prototype,
			_R = Object.prototype,
			mR = ER.toString,
			yR = _R.hasOwnProperty,
			IR = RegExp("^" + mR.call(yR).replace(hR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function TR(e) {
			if (!pR(e) || dR(e)) return !1;
			var t = fR(e) ? IR : gR;
			return t.test(vR(e))
		}
		Zd.exports = TR
	});
	var tp = u((ZH, ep) => {
		function bR(e, t) {
			return e?.[t]
		}
		ep.exports = bR
	});
	var St = u((JH, rp) => {
		var OR = Jd(),
			wR = tp();

		function SR(e, t) {
			var r = wR(e, t);
			return OR(r) ? r : void 0
		}
		rp.exports = SR
	});
	var Bn = u((ej, np) => {
		var AR = St(),
			RR = tt(),
			xR = AR(RR, "Map");
		np.exports = xR
	});
	var Vr = u((tj, ip) => {
		var CR = St(),
			NR = CR(Object, "create");
		ip.exports = NR
	});
	var sp = u((rj, ap) => {
		var op = Vr();

		function LR() {
			this.__data__ = op ? op(null) : {}, this.size = 0
		}
		ap.exports = LR
	});
	var cp = u((nj, up) => {
		function qR(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		up.exports = qR
	});
	var fp = u((ij, lp) => {
		var PR = Vr(),
			DR = "__lodash_hash_undefined__",
			MR = Object.prototype,
			FR = MR.hasOwnProperty;

		function GR(e) {
			var t = this.__data__;
			if (PR) {
				var r = t[e];
				return r === DR ? void 0 : r
			}
			return FR.call(t, e) ? t[e] : void 0
		}
		lp.exports = GR
	});
	var pp = u((oj, dp) => {
		var XR = Vr(),
			UR = Object.prototype,
			WR = UR.hasOwnProperty;

		function VR(e) {
			var t = this.__data__;
			return XR ? t[e] !== void 0 : WR.call(t, e)
		}
		dp.exports = VR
	});
	var hp = u((aj, vp) => {
		var BR = Vr(),
			kR = "__lodash_hash_undefined__";

		function HR(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = BR && t === void 0 ? kR : t, this
		}
		vp.exports = HR
	});
	var Ep = u((sj, gp) => {
		var jR = sp(),
			KR = cp(),
			zR = fp(),
			YR = pp(),
			QR = hp();

		function ar(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		ar.prototype.clear = jR;
		ar.prototype.delete = KR;
		ar.prototype.get = zR;
		ar.prototype.has = YR;
		ar.prototype.set = QR;
		gp.exports = ar
	});
	var yp = u((uj, mp) => {
		var _p = Ep(),
			$R = Ur(),
			ZR = Bn();

		function JR() {
			this.size = 0, this.__data__ = {
				hash: new _p,
				map: new(ZR || $R),
				string: new _p
			}
		}
		mp.exports = JR
	});
	var Tp = u((cj, Ip) => {
		function ex(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		Ip.exports = ex
	});
	var Br = u((lj, bp) => {
		var tx = Tp();

		function rx(e, t) {
			var r = e.__data__;
			return tx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		bp.exports = rx
	});
	var wp = u((fj, Op) => {
		var nx = Br();

		function ix(e) {
			var t = nx(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		Op.exports = ix
	});
	var Ap = u((dj, Sp) => {
		var ox = Br();

		function ax(e) {
			return ox(this, e).get(e)
		}
		Sp.exports = ax
	});
	var xp = u((pj, Rp) => {
		var sx = Br();

		function ux(e) {
			return sx(this, e).has(e)
		}
		Rp.exports = ux
	});
	var Np = u((vj, Cp) => {
		var cx = Br();

		function lx(e, t) {
			var r = cx(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		Cp.exports = lx
	});
	var kn = u((hj, Lp) => {
		var fx = yp(),
			dx = wp(),
			px = Ap(),
			vx = xp(),
			hx = Np();

		function sr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		sr.prototype.clear = fx;
		sr.prototype.delete = dx;
		sr.prototype.get = px;
		sr.prototype.has = vx;
		sr.prototype.set = hx;
		Lp.exports = sr
	});
	var Pp = u((gj, qp) => {
		var gx = Ur(),
			Ex = Bn(),
			_x = kn(),
			mx = 200;

		function yx(e, t) {
			var r = this.__data__;
			if (r instanceof gx) {
				var n = r.__data__;
				if (!Ex || n.length < mx - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new _x(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		qp.exports = yx
	});
	var fa = u((Ej, Dp) => {
		var Ix = Ur(),
			Tx = wd(),
			bx = Ad(),
			Ox = xd(),
			wx = Nd(),
			Sx = Pp();

		function ur(e) {
			var t = this.__data__ = new Ix(e);
			this.size = t.size
		}
		ur.prototype.clear = Tx;
		ur.prototype.delete = bx;
		ur.prototype.get = Ox;
		ur.prototype.has = wx;
		ur.prototype.set = Sx;
		Dp.exports = ur
	});
	var Fp = u((_j, Mp) => {
		var Ax = "__lodash_hash_undefined__";

		function Rx(e) {
			return this.__data__.set(e, Ax), this
		}
		Mp.exports = Rx
	});
	var Xp = u((mj, Gp) => {
		function xx(e) {
			return this.__data__.has(e)
		}
		Gp.exports = xx
	});
	var Wp = u((yj, Up) => {
		var Cx = kn(),
			Nx = Fp(),
			Lx = Xp();

		function Hn(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new Cx; ++t < r;) this.add(e[t])
		}
		Hn.prototype.add = Hn.prototype.push = Nx;
		Hn.prototype.has = Lx;
		Up.exports = Hn
	});
	var Bp = u((Ij, Vp) => {
		function qx(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		Vp.exports = qx
	});
	var Hp = u((Tj, kp) => {
		function Px(e, t) {
			return e.has(t)
		}
		kp.exports = Px
	});
	var da = u((bj, jp) => {
		var Dx = Wp(),
			Mx = Bp(),
			Fx = Hp(),
			Gx = 1,
			Xx = 2;

		function Ux(e, t, r, n, o, i) {
			var a = r & Gx,
				s = e.length,
				c = t.length;
			if (s != c && !(a && c > s)) return !1;
			var h = i.get(e),
				y = i.get(t);
			if (h && y) return h == t && y == e;
			var d = -1,
				I = !0,
				_ = r & Xx ? new Dx : void 0;
			for (i.set(e, t), i.set(t, e); ++d < s;) {
				var m = e[d],
					w = t[d];
				if (n) var x = a ? n(w, m, d, t, e, i) : n(m, w, d, e, t, i);
				if (x !== void 0) {
					if (x) continue;
					I = !1;
					break
				}
				if (_) {
					if (!Mx(t, function(R, N) {
							if (!Fx(_, N) && (m === R || o(m, R, r, n, i))) return _.push(N)
						})) {
						I = !1;
						break
					}
				} else if (!(m === w || o(m, w, r, n, i))) {
					I = !1;
					break
				}
			}
			return i.delete(e), i.delete(t), I
		}
		jp.exports = Ux
	});
	var zp = u((Oj, Kp) => {
		var Wx = tt(),
			Vx = Wx.Uint8Array;
		Kp.exports = Vx
	});
	var Qp = u((wj, Yp) => {
		function Bx(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, o) {
				r[++t] = [o, n]
			}), r
		}
		Yp.exports = Bx
	});
	var Zp = u((Sj, $p) => {
		function kx(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		$p.exports = kx
	});
	var nv = u((Aj, rv) => {
		var Jp = or(),
			ev = zp(),
			Hx = Vn(),
			jx = da(),
			Kx = Qp(),
			zx = Zp(),
			Yx = 1,
			Qx = 2,
			$x = "[object Boolean]",
			Zx = "[object Date]",
			Jx = "[object Error]",
			eC = "[object Map]",
			tC = "[object Number]",
			rC = "[object RegExp]",
			nC = "[object Set]",
			iC = "[object String]",
			oC = "[object Symbol]",
			aC = "[object ArrayBuffer]",
			sC = "[object DataView]",
			tv = Jp ? Jp.prototype : void 0,
			pa = tv ? tv.valueOf : void 0;

		function uC(e, t, r, n, o, i, a) {
			switch (r) {
				case sC:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case aC:
					return !(e.byteLength != t.byteLength || !i(new ev(e), new ev(t)));
				case $x:
				case Zx:
				case tC:
					return Hx(+e, +t);
				case Jx:
					return e.name == t.name && e.message == t.message;
				case rC:
				case iC:
					return e == t + "";
				case eC:
					var s = Kx;
				case nC:
					var c = n & Yx;
					if (s || (s = zx), e.size != t.size && !c) return !1;
					var h = a.get(e);
					if (h) return h == t;
					n |= Qx, a.set(e, t);
					var y = jx(s(e), s(t), n, o, i, a);
					return a.delete(e), y;
				case oC:
					if (pa) return pa.call(e) == pa.call(t)
			}
			return !1
		}
		rv.exports = uC
	});
	var jn = u((Rj, iv) => {
		function cC(e, t) {
			for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
			return e
		}
		iv.exports = cC
	});
	var qe = u((xj, ov) => {
		var lC = Array.isArray;
		ov.exports = lC
	});
	var va = u((Cj, av) => {
		var fC = jn(),
			dC = qe();

		function pC(e, t, r) {
			var n = t(e);
			return dC(e) ? n : fC(n, r(e))
		}
		av.exports = pC
	});
	var uv = u((Nj, sv) => {
		function vC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n;) {
				var a = e[r];
				t(a, r, e) && (i[o++] = a)
			}
			return i
		}
		sv.exports = vC
	});
	var ha = u((Lj, cv) => {
		function hC() {
			return []
		}
		cv.exports = hC
	});
	var ga = u((qj, fv) => {
		var gC = uv(),
			EC = ha(),
			_C = Object.prototype,
			mC = _C.propertyIsEnumerable,
			lv = Object.getOwnPropertySymbols,
			yC = lv ? function(e) {
				return e == null ? [] : (e = Object(e), gC(lv(e), function(t) {
					return mC.call(e, t)
				}))
			} : EC;
		fv.exports = yC
	});
	var pv = u((Pj, dv) => {
		function IC(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		dv.exports = IC
	});
	var At = u((Dj, vv) => {
		function TC(e) {
			return e != null && typeof e == "object"
		}
		vv.exports = TC
	});
	var gv = u((Mj, hv) => {
		var bC = Ft(),
			OC = At(),
			wC = "[object Arguments]";

		function SC(e) {
			return OC(e) && bC(e) == wC
		}
		hv.exports = SC
	});
	var kr = u((Fj, mv) => {
		var Ev = gv(),
			AC = At(),
			_v = Object.prototype,
			RC = _v.hasOwnProperty,
			xC = _v.propertyIsEnumerable,
			CC = Ev(function() {
				return arguments
			}()) ? Ev : function(e) {
				return AC(e) && RC.call(e, "callee") && !xC.call(e, "callee")
			};
		mv.exports = CC
	});
	var Iv = u((Gj, yv) => {
		function NC() {
			return !1
		}
		yv.exports = NC
	});
	var Kn = u((Hr, cr) => {
		var LC = tt(),
			qC = Iv(),
			Ov = typeof Hr == "object" && Hr && !Hr.nodeType && Hr,
			Tv = Ov && typeof cr == "object" && cr && !cr.nodeType && cr,
			PC = Tv && Tv.exports === Ov,
			bv = PC ? LC.Buffer : void 0,
			DC = bv ? bv.isBuffer : void 0,
			MC = DC || qC;
		cr.exports = MC
	});
	var zn = u((Xj, wv) => {
		var FC = 9007199254740991,
			GC = /^(?:0|[1-9]\d*)$/;

		function XC(e, t) {
			var r = typeof e;
			return t = t ?? FC, !!t && (r == "number" || r != "symbol" && GC.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		wv.exports = XC
	});
	var Yn = u((Uj, Sv) => {
		var UC = 9007199254740991;

		function WC(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= UC
		}
		Sv.exports = WC
	});
	var Rv = u((Wj, Av) => {
		var VC = Ft(),
			BC = Yn(),
			kC = At(),
			HC = "[object Arguments]",
			jC = "[object Array]",
			KC = "[object Boolean]",
			zC = "[object Date]",
			YC = "[object Error]",
			QC = "[object Function]",
			$C = "[object Map]",
			ZC = "[object Number]",
			JC = "[object Object]",
			eN = "[object RegExp]",
			tN = "[object Set]",
			rN = "[object String]",
			nN = "[object WeakMap]",
			iN = "[object ArrayBuffer]",
			oN = "[object DataView]",
			aN = "[object Float32Array]",
			sN = "[object Float64Array]",
			uN = "[object Int8Array]",
			cN = "[object Int16Array]",
			lN = "[object Int32Array]",
			fN = "[object Uint8Array]",
			dN = "[object Uint8ClampedArray]",
			pN = "[object Uint16Array]",
			vN = "[object Uint32Array]",
			ye = {};
		ye[aN] = ye[sN] = ye[uN] = ye[cN] = ye[lN] = ye[fN] = ye[dN] = ye[pN] = ye[vN] = !0;
		ye[HC] = ye[jC] = ye[iN] = ye[KC] = ye[oN] = ye[zC] = ye[YC] = ye[QC] = ye[$C] = ye[ZC] = ye[JC] = ye[eN] = ye[tN] = ye[rN] = ye[nN] = !1;

		function hN(e) {
			return kC(e) && BC(e.length) && !!ye[VC(e)]
		}
		Av.exports = hN
	});
	var Cv = u((Vj, xv) => {
		function gN(e) {
			return function(t) {
				return e(t)
			}
		}
		xv.exports = gN
	});
	var Lv = u((jr, lr) => {
		var EN = sa(),
			Nv = typeof jr == "object" && jr && !jr.nodeType && jr,
			Kr = Nv && typeof lr == "object" && lr && !lr.nodeType && lr,
			_N = Kr && Kr.exports === Nv,
			Ea = _N && EN.process,
			mN = function() {
				try {
					var e = Kr && Kr.require && Kr.require("util").types;
					return e || Ea && Ea.binding && Ea.binding("util")
				} catch {}
			}();
		lr.exports = mN
	});
	var Qn = u((Bj, Dv) => {
		var yN = Rv(),
			IN = Cv(),
			qv = Lv(),
			Pv = qv && qv.isTypedArray,
			TN = Pv ? IN(Pv) : yN;
		Dv.exports = TN
	});
	var _a = u((kj, Mv) => {
		var bN = pv(),
			ON = kr(),
			wN = qe(),
			SN = Kn(),
			AN = zn(),
			RN = Qn(),
			xN = Object.prototype,
			CN = xN.hasOwnProperty;

		function NN(e, t) {
			var r = wN(e),
				n = !r && ON(e),
				o = !r && !n && SN(e),
				i = !r && !n && !o && RN(e),
				a = r || n || o || i,
				s = a ? bN(e.length, String) : [],
				c = s.length;
			for (var h in e)(t || CN.call(e, h)) && !(a && (h == "length" || o && (h == "offset" || h == "parent") || i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || AN(h, c))) && s.push(h);
			return s
		}
		Mv.exports = NN
	});
	var $n = u((Hj, Fv) => {
		var LN = Object.prototype;

		function qN(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || LN;
			return e === r
		}
		Fv.exports = qN
	});
	var ma = u((jj, Gv) => {
		function PN(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		Gv.exports = PN
	});
	var Uv = u((Kj, Xv) => {
		var DN = ma(),
			MN = DN(Object.keys, Object);
		Xv.exports = MN
	});
	var Zn = u((zj, Wv) => {
		var FN = $n(),
			GN = Uv(),
			XN = Object.prototype,
			UN = XN.hasOwnProperty;

		function WN(e) {
			if (!FN(e)) return GN(e);
			var t = [];
			for (var r in Object(e)) UN.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		Wv.exports = WN
	});
	var Gt = u((Yj, Vv) => {
		var VN = ua(),
			BN = Yn();

		function kN(e) {
			return e != null && BN(e.length) && !VN(e)
		}
		Vv.exports = kN
	});
	var zr = u((Qj, Bv) => {
		var HN = _a(),
			jN = Zn(),
			KN = Gt();

		function zN(e) {
			return KN(e) ? HN(e) : jN(e)
		}
		Bv.exports = zN
	});
	var Hv = u(($j, kv) => {
		var YN = va(),
			QN = ga(),
			$N = zr();

		function ZN(e) {
			return YN(e, $N, QN)
		}
		kv.exports = ZN
	});
	var zv = u((Zj, Kv) => {
		var jv = Hv(),
			JN = 1,
			eL = Object.prototype,
			tL = eL.hasOwnProperty;

		function rL(e, t, r, n, o, i) {
			var a = r & JN,
				s = jv(e),
				c = s.length,
				h = jv(t),
				y = h.length;
			if (c != y && !a) return !1;
			for (var d = c; d--;) {
				var I = s[d];
				if (!(a ? I in t : tL.call(t, I))) return !1
			}
			var _ = i.get(e),
				m = i.get(t);
			if (_ && m) return _ == t && m == e;
			var w = !0;
			i.set(e, t), i.set(t, e);
			for (var x = a; ++d < c;) {
				I = s[d];
				var R = e[I],
					N = t[I];
				if (n) var A = a ? n(N, R, I, t, e, i) : n(R, N, I, e, t, i);
				if (!(A === void 0 ? R === N || o(R, N, r, n, i) : A)) {
					w = !1;
					break
				}
				x || (x = I == "constructor")
			}
			if (w && !x) {
				var M = e.constructor,
					q = t.constructor;
				M != q && "constructor" in e && "constructor" in t && !(typeof M == "function" && M instanceof M && typeof q == "function" && q instanceof q) && (w = !1)
			}
			return i.delete(e), i.delete(t), w
		}
		Kv.exports = rL
	});
	var Qv = u((Jj, Yv) => {
		var nL = St(),
			iL = tt(),
			oL = nL(iL, "DataView");
		Yv.exports = oL
	});
	var Zv = u((e5, $v) => {
		var aL = St(),
			sL = tt(),
			uL = aL(sL, "Promise");
		$v.exports = uL
	});
	var eh = u((t5, Jv) => {
		var cL = St(),
			lL = tt(),
			fL = cL(lL, "Set");
		Jv.exports = fL
	});
	var ya = u((r5, th) => {
		var dL = St(),
			pL = tt(),
			vL = dL(pL, "WeakMap");
		th.exports = vL
	});
	var Jn = u((n5, uh) => {
		var Ia = Qv(),
			Ta = Bn(),
			ba = Zv(),
			Oa = eh(),
			wa = ya(),
			sh = Ft(),
			fr = la(),
			rh = "[object Map]",
			hL = "[object Object]",
			nh = "[object Promise]",
			ih = "[object Set]",
			oh = "[object WeakMap]",
			ah = "[object DataView]",
			gL = fr(Ia),
			EL = fr(Ta),
			_L = fr(ba),
			mL = fr(Oa),
			yL = fr(wa),
			Xt = sh;
		(Ia && Xt(new Ia(new ArrayBuffer(1))) != ah || Ta && Xt(new Ta) != rh || ba && Xt(ba.resolve()) != nh || Oa && Xt(new Oa) != ih || wa && Xt(new wa) != oh) && (Xt = function(e) {
			var t = sh(e),
				r = t == hL ? e.constructor : void 0,
				n = r ? fr(r) : "";
			if (n) switch (n) {
				case gL:
					return ah;
				case EL:
					return rh;
				case _L:
					return nh;
				case mL:
					return ih;
				case yL:
					return oh
			}
			return t
		});
		uh.exports = Xt
	});
	var gh = u((i5, hh) => {
		var Sa = fa(),
			IL = da(),
			TL = nv(),
			bL = zv(),
			ch = Jn(),
			lh = qe(),
			fh = Kn(),
			OL = Qn(),
			wL = 1,
			dh = "[object Arguments]",
			ph = "[object Array]",
			ei = "[object Object]",
			SL = Object.prototype,
			vh = SL.hasOwnProperty;

		function AL(e, t, r, n, o, i) {
			var a = lh(e),
				s = lh(t),
				c = a ? ph : ch(e),
				h = s ? ph : ch(t);
			c = c == dh ? ei : c, h = h == dh ? ei : h;
			var y = c == ei,
				d = h == ei,
				I = c == h;
			if (I && fh(e)) {
				if (!fh(t)) return !1;
				a = !0, y = !1
			}
			if (I && !y) return i || (i = new Sa), a || OL(e) ? IL(e, t, r, n, o, i) : TL(e, t, c, r, n, o, i);
			if (!(r & wL)) {
				var _ = y && vh.call(e, "__wrapped__"),
					m = d && vh.call(t, "__wrapped__");
				if (_ || m) {
					var w = _ ? e.value() : e,
						x = m ? t.value() : t;
					return i || (i = new Sa), o(w, x, r, n, i)
				}
			}
			return I ? (i || (i = new Sa), bL(e, t, r, n, o, i)) : !1
		}
		hh.exports = AL
	});
	var Aa = u((o5, mh) => {
		var RL = gh(),
			Eh = At();

		function _h(e, t, r, n, o) {
			return e === t ? !0 : e == null || t == null || !Eh(e) && !Eh(t) ? e !== e && t !== t : RL(e, t, r, n, _h, o)
		}
		mh.exports = _h
	});
	var Ih = u((a5, yh) => {
		var xL = fa(),
			CL = Aa(),
			NL = 1,
			LL = 2;

		function qL(e, t, r, n) {
			var o = r.length,
				i = o,
				a = !n;
			if (e == null) return !i;
			for (e = Object(e); o--;) {
				var s = r[o];
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
			}
			for (; ++o < i;) {
				s = r[o];
				var c = s[0],
					h = e[c],
					y = s[1];
				if (a && s[2]) {
					if (h === void 0 && !(c in e)) return !1
				} else {
					var d = new xL;
					if (n) var I = n(h, y, c, e, t, d);
					if (!(I === void 0 ? CL(y, h, NL | LL, n, d) : I)) return !1
				}
			}
			return !0
		}
		yh.exports = qL
	});
	var Ra = u((s5, Th) => {
		var PL = dt();

		function DL(e) {
			return e === e && !PL(e)
		}
		Th.exports = DL
	});
	var Oh = u((u5, bh) => {
		var ML = Ra(),
			FL = zr();

		function GL(e) {
			for (var t = FL(e), r = t.length; r--;) {
				var n = t[r],
					o = e[n];
				t[r] = [n, o, ML(o)]
			}
			return t
		}
		bh.exports = GL
	});
	var xa = u((c5, wh) => {
		function XL(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		wh.exports = XL
	});
	var Ah = u((l5, Sh) => {
		var UL = Ih(),
			WL = Oh(),
			VL = xa();

		function BL(e) {
			var t = WL(e);
			return t.length == 1 && t[0][2] ? VL(t[0][0], t[0][1]) : function(r) {
				return r === e || UL(r, e, t)
			}
		}
		Sh.exports = BL
	});
	var Yr = u((f5, Rh) => {
		var kL = Ft(),
			HL = At(),
			jL = "[object Symbol]";

		function KL(e) {
			return typeof e == "symbol" || HL(e) && kL(e) == jL
		}
		Rh.exports = KL
	});
	var ti = u((d5, xh) => {
		var zL = qe(),
			YL = Yr(),
			QL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			$L = /^\w*$/;

		function ZL(e, t) {
			if (zL(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || YL(e) ? !0 : $L.test(e) || !QL.test(e) || t != null && e in Object(t)
		}
		xh.exports = ZL
	});
	var Lh = u((p5, Nh) => {
		var Ch = kn(),
			JL = "Expected a function";

		function Ca(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(JL);
			var r = function() {
				var n = arguments,
					o = t ? t.apply(this, n) : n[0],
					i = r.cache;
				if (i.has(o)) return i.get(o);
				var a = e.apply(this, n);
				return r.cache = i.set(o, a) || i, a
			};
			return r.cache = new(Ca.Cache || Ch), r
		}
		Ca.Cache = Ch;
		Nh.exports = Ca
	});
	var Ph = u((v5, qh) => {
		var eq = Lh(),
			tq = 500;

		function rq(e) {
			var t = eq(e, function(n) {
					return r.size === tq && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		qh.exports = rq
	});
	var Mh = u((h5, Dh) => {
		var nq = Ph(),
			iq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			oq = /\\(\\)?/g,
			aq = nq(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(iq, function(r, n, o, i) {
					t.push(o ? i.replace(oq, "$1") : n || r)
				}), t
			});
		Dh.exports = aq
	});
	var Na = u((g5, Fh) => {
		function sq(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
			return o
		}
		Fh.exports = sq
	});
	var Bh = u((E5, Vh) => {
		var Gh = or(),
			uq = Na(),
			cq = qe(),
			lq = Yr(),
			fq = 1 / 0,
			Xh = Gh ? Gh.prototype : void 0,
			Uh = Xh ? Xh.toString : void 0;

		function Wh(e) {
			if (typeof e == "string") return e;
			if (cq(e)) return uq(e, Wh) + "";
			if (lq(e)) return Uh ? Uh.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -fq ? "-0" : t
		}
		Vh.exports = Wh
	});
	var Hh = u((_5, kh) => {
		var dq = Bh();

		function pq(e) {
			return e == null ? "" : dq(e)
		}
		kh.exports = pq
	});
	var Qr = u((m5, jh) => {
		var vq = qe(),
			hq = ti(),
			gq = Mh(),
			Eq = Hh();

		function _q(e, t) {
			return vq(e) ? e : hq(e, t) ? [e] : gq(Eq(e))
		}
		jh.exports = _q
	});
	var dr = u((y5, Kh) => {
		var mq = Yr(),
			yq = 1 / 0;

		function Iq(e) {
			if (typeof e == "string" || mq(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -yq ? "-0" : t
		}
		Kh.exports = Iq
	});
	var ri = u((I5, zh) => {
		var Tq = Qr(),
			bq = dr();

		function Oq(e, t) {
			t = Tq(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[bq(t[r++])];
			return r && r == n ? e : void 0
		}
		zh.exports = Oq
	});
	var ni = u((T5, Yh) => {
		var wq = ri();

		function Sq(e, t, r) {
			var n = e == null ? void 0 : wq(e, t);
			return n === void 0 ? r : n
		}
		Yh.exports = Sq
	});
	var $h = u((b5, Qh) => {
		function Aq(e, t) {
			return e != null && t in Object(e)
		}
		Qh.exports = Aq
	});
	var Jh = u((O5, Zh) => {
		var Rq = Qr(),
			xq = kr(),
			Cq = qe(),
			Nq = zn(),
			Lq = Yn(),
			qq = dr();

		function Pq(e, t, r) {
			t = Rq(t, e);
			for (var n = -1, o = t.length, i = !1; ++n < o;) {
				var a = qq(t[n]);
				if (!(i = e != null && r(e, a))) break;
				e = e[a]
			}
			return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && Lq(o) && Nq(a, o) && (Cq(e) || xq(e)))
		}
		Zh.exports = Pq
	});
	var tg = u((w5, eg) => {
		var Dq = $h(),
			Mq = Jh();

		function Fq(e, t) {
			return e != null && Mq(e, t, Dq)
		}
		eg.exports = Fq
	});
	var ng = u((S5, rg) => {
		var Gq = Aa(),
			Xq = ni(),
			Uq = tg(),
			Wq = ti(),
			Vq = Ra(),
			Bq = xa(),
			kq = dr(),
			Hq = 1,
			jq = 2;

		function Kq(e, t) {
			return Wq(e) && Vq(t) ? Bq(kq(e), t) : function(r) {
				var n = Xq(r, e);
				return n === void 0 && n === t ? Uq(r, e) : Gq(t, n, Hq | jq)
			}
		}
		rg.exports = Kq
	});
	var ii = u((A5, ig) => {
		function zq(e) {
			return e
		}
		ig.exports = zq
	});
	var La = u((R5, og) => {
		function Yq(e) {
			return function(t) {
				return t?.[e]
			}
		}
		og.exports = Yq
	});
	var sg = u((x5, ag) => {
		var Qq = ri();

		function $q(e) {
			return function(t) {
				return Qq(t, e)
			}
		}
		ag.exports = $q
	});
	var cg = u((C5, ug) => {
		var Zq = La(),
			Jq = sg(),
			eP = ti(),
			tP = dr();

		function rP(e) {
			return eP(e) ? Zq(tP(e)) : Jq(e)
		}
		ug.exports = rP
	});
	var Rt = u((N5, lg) => {
		var nP = Ah(),
			iP = ng(),
			oP = ii(),
			aP = qe(),
			sP = cg();

		function uP(e) {
			return typeof e == "function" ? e : e == null ? oP : typeof e == "object" ? aP(e) ? iP(e[0], e[1]) : nP(e) : sP(e)
		}
		lg.exports = uP
	});
	var qa = u((L5, fg) => {
		var cP = Rt(),
			lP = Gt(),
			fP = zr();

		function dP(e) {
			return function(t, r, n) {
				var o = Object(t);
				if (!lP(t)) {
					var i = cP(r, 3);
					t = fP(t), r = function(s) {
						return i(o[s], s, o)
					}
				}
				var a = e(t, r, n);
				return a > -1 ? o[i ? t[a] : a] : void 0
			}
		}
		fg.exports = dP
	});
	var Pa = u((q5, dg) => {
		function pP(e, t, r, n) {
			for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
				if (t(e[i], i, e)) return i;
			return -1
		}
		dg.exports = pP
	});
	var vg = u((P5, pg) => {
		var vP = /\s/;

		function hP(e) {
			for (var t = e.length; t-- && vP.test(e.charAt(t)););
			return t
		}
		pg.exports = hP
	});
	var gg = u((D5, hg) => {
		var gP = vg(),
			EP = /^\s+/;

		function _P(e) {
			return e && e.slice(0, gP(e) + 1).replace(EP, "")
		}
		hg.exports = _P
	});
	var oi = u((M5, mg) => {
		var mP = gg(),
			Eg = dt(),
			yP = Yr(),
			_g = 0 / 0,
			IP = /^[-+]0x[0-9a-f]+$/i,
			TP = /^0b[01]+$/i,
			bP = /^0o[0-7]+$/i,
			OP = parseInt;

		function wP(e) {
			if (typeof e == "number") return e;
			if (yP(e)) return _g;
			if (Eg(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = Eg(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = mP(e);
			var r = TP.test(e);
			return r || bP.test(e) ? OP(e.slice(2), r ? 2 : 8) : IP.test(e) ? _g : +e
		}
		mg.exports = wP
	});
	var Tg = u((F5, Ig) => {
		var SP = oi(),
			yg = 1 / 0,
			AP = 17976931348623157e292;

		function RP(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = SP(e), e === yg || e === -yg) {
				var t = e < 0 ? -1 : 1;
				return t * AP
			}
			return e === e ? e : 0
		}
		Ig.exports = RP
	});
	var Da = u((G5, bg) => {
		var xP = Tg();

		function CP(e) {
			var t = xP(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		bg.exports = CP
	});
	var wg = u((X5, Og) => {
		var NP = Pa(),
			LP = Rt(),
			qP = Da(),
			PP = Math.max;

		function DP(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var o = r == null ? 0 : qP(r);
			return o < 0 && (o = PP(n + o, 0)), NP(e, LP(t, 3), o)
		}
		Og.exports = DP
	});
	var Ma = u((U5, Sg) => {
		var MP = qa(),
			FP = wg(),
			GP = MP(FP);
		Sg.exports = GP
	});
	var si = u(Ue => {
		"use strict";
		var XP = ct().default;
		Object.defineProperty(Ue, "__esModule", {
			value: !0
		});
		Ue.withBrowser = Ue.TRANSFORM_STYLE_PREFIXED = Ue.TRANSFORM_PREFIXED = Ue.IS_BROWSER_ENV = Ue.FLEX_PREFIXED = Ue.ELEMENT_MATCHES = void 0;
		var UP = XP(Ma()),
			Rg = typeof window < "u";
		Ue.IS_BROWSER_ENV = Rg;
		var ai = (e, t) => Rg ? e() : t;
		Ue.withBrowser = ai;
		var WP = ai(() => (0, UP.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
		Ue.ELEMENT_MATCHES = WP;
		var VP = ai(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let o = 0; o < n; o++) {
					let i = t[o];
					if (e.style.display = i, e.style.display === i) return i
				}
				return r
			} catch {
				return r
			}
		}, "flex");
		Ue.FLEX_PREFIXED = VP;
		var xg = ai(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let o = 0; o < n; o++) {
					let i = t[o] + r;
					if (e.style[i] !== void 0) return i
				}
			}
			return "transform"
		}, "transform");
		Ue.TRANSFORM_PREFIXED = xg;
		var Ag = xg.split("transform")[0],
			BP = Ag ? Ag + "TransformStyle" : "transformStyle";
		Ue.TRANSFORM_STYLE_PREFIXED = BP
	});
	var Fa = u((V5, Pg) => {
		var kP = 4,
			HP = .001,
			jP = 1e-7,
			KP = 10,
			$r = 11,
			ui = 1 / ($r - 1),
			zP = typeof Float32Array == "function";

		function Cg(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function Ng(e, t) {
			return 3 * t - 6 * e
		}

		function Lg(e) {
			return 3 * e
		}

		function ci(e, t, r) {
			return ((Cg(t, r) * e + Ng(t, r)) * e + Lg(t)) * e
		}

		function qg(e, t, r) {
			return 3 * Cg(t, r) * e * e + 2 * Ng(t, r) * e + Lg(t)
		}

		function YP(e, t, r, n, o) {
			var i, a, s = 0;
			do a = t + (r - t) / 2, i = ci(a, n, o) - e, i > 0 ? r = a : t = a; while (Math.abs(i) > jP && ++s < KP);
			return a
		}

		function QP(e, t, r, n) {
			for (var o = 0; o < kP; ++o) {
				var i = qg(t, r, n);
				if (i === 0) return t;
				var a = ci(t, r, n) - e;
				t -= a / i
			}
			return t
		}
		Pg.exports = function(t, r, n, o) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var i = zP ? new Float32Array($r) : new Array($r);
			if (t !== r || n !== o)
				for (var a = 0; a < $r; ++a) i[a] = ci(a * ui, t, n);

			function s(c) {
				for (var h = 0, y = 1, d = $r - 1; y !== d && i[y] <= c; ++y) h += ui;
				--y;
				var I = (c - i[y]) / (i[y + 1] - i[y]),
					_ = h + I * ui,
					m = qg(_, t, n);
				return m >= HP ? QP(c, _, t, n) : m === 0 ? _ : YP(c, h, h + ui, t, n)
			}
			return function(h) {
				return t === r && n === o ? h : h === 0 ? 0 : h === 1 ? 1 : ci(s(h), r, o)
			}
		}
	});
	var Ga = u(ue => {
		"use strict";
		var $P = ct().default;
		Object.defineProperty(ue, "__esModule", {
			value: !0
		});
		ue.bounce = qD;
		ue.bouncePast = PD;
		ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
		ue.inBack = OD;
		ue.inCirc = yD;
		ue.inCubic = oD;
		ue.inElastic = AD;
		ue.inExpo = ED;
		ue.inOutBack = SD;
		ue.inOutCirc = TD;
		ue.inOutCubic = sD;
		ue.inOutElastic = xD;
		ue.inOutExpo = mD;
		ue.inOutQuad = iD;
		ue.inOutQuart = lD;
		ue.inOutQuint = pD;
		ue.inOutSine = gD;
		ue.inQuad = rD;
		ue.inQuart = uD;
		ue.inQuint = fD;
		ue.inSine = vD;
		ue.outBack = wD;
		ue.outBounce = bD;
		ue.outCirc = ID;
		ue.outCubic = aD;
		ue.outElastic = RD;
		ue.outExpo = _D;
		ue.outQuad = nD;
		ue.outQuart = cD;
		ue.outQuint = dD;
		ue.outSine = hD;
		ue.swingFrom = ND;
		ue.swingFromTo = CD;
		ue.swingTo = LD;
		var li = $P(Fa()),
			mt = 1.70158,
			ZP = (0, li.default)(.25, .1, .25, 1);
		ue.ease = ZP;
		var JP = (0, li.default)(.42, 0, 1, 1);
		ue.easeIn = JP;
		var eD = (0, li.default)(0, 0, .58, 1);
		ue.easeOut = eD;
		var tD = (0, li.default)(.42, 0, .58, 1);
		ue.easeInOut = tD;

		function rD(e) {
			return Math.pow(e, 2)
		}

		function nD(e) {
			return -(Math.pow(e - 1, 2) - 1)
		}

		function iD(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
		}

		function oD(e) {
			return Math.pow(e, 3)
		}

		function aD(e) {
			return Math.pow(e - 1, 3) + 1
		}

		function sD(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
		}

		function uD(e) {
			return Math.pow(e, 4)
		}

		function cD(e) {
			return -(Math.pow(e - 1, 4) - 1)
		}

		function lD(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
		}

		function fD(e) {
			return Math.pow(e, 5)
		}

		function dD(e) {
			return Math.pow(e - 1, 5) + 1
		}

		function pD(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
		}

		function vD(e) {
			return -Math.cos(e * (Math.PI / 2)) + 1
		}

		function hD(e) {
			return Math.sin(e * (Math.PI / 2))
		}

		function gD(e) {
			return -.5 * (Math.cos(Math.PI * e) - 1)
		}

		function ED(e) {
			return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
		}

		function _D(e) {
			return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
		}

		function mD(e) {
			return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
		}

		function yD(e) {
			return -(Math.sqrt(1 - e * e) - 1)
		}

		function ID(e) {
			return Math.sqrt(1 - Math.pow(e - 1, 2))
		}

		function TD(e) {
			return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
		}

		function bD(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function OD(e) {
			let t = mt;
			return e * e * ((t + 1) * e - t)
		}

		function wD(e) {
			let t = mt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function SD(e) {
			let t = mt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function AD(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
		}

		function RD(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
		}

		function xD(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
		}

		function CD(e) {
			let t = mt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function ND(e) {
			let t = mt;
			return e * e * ((t + 1) * e - t)
		}

		function LD(e) {
			let t = mt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function qD(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function PD(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
		}
	});
	var Ua = u(Zr => {
		"use strict";
		var DD = ct().default,
			MD = Qt().default;
		Object.defineProperty(Zr, "__esModule", {
			value: !0
		});
		Zr.applyEasing = XD;
		Zr.createBezierEasing = GD;
		Zr.optimizeFloat = Xa;
		var Dg = MD(Ga()),
			FD = DD(Fa());

		function Xa(e, t = 5, r = 10) {
			let n = Math.pow(r, t),
				o = Number(Math.round(e * n) / n);
			return Math.abs(o) > 1e-4 ? o : 0
		}

		function GD(e) {
			return (0, FD.default)(...e)
		}

		function XD(e, t, r) {
			return t === 0 ? 0 : t === 1 ? 1 : Xa(r ? t > 0 ? r(t) : t : t > 0 && e && Dg[e] ? Dg[e](t) : t)
		}
	});
	var Xg = u(pr => {
		"use strict";
		Object.defineProperty(pr, "__esModule", {
			value: !0
		});
		pr.createElementState = Gg;
		pr.ixElements = void 0;
		pr.mergeActionState = Wa;
		var fi = nr(),
			Fg = ke(),
			{
				HTML_ELEMENT: H5,
				PLAIN_OBJECT: UD,
				ABSTRACT_NODE: j5,
				CONFIG_X_VALUE: WD,
				CONFIG_Y_VALUE: VD,
				CONFIG_Z_VALUE: BD,
				CONFIG_VALUE: kD,
				CONFIG_X_UNIT: HD,
				CONFIG_Y_UNIT: jD,
				CONFIG_Z_UNIT: KD,
				CONFIG_UNIT: zD
			} = Fg.IX2EngineConstants,
			{
				IX2_SESSION_STOPPED: YD,
				IX2_INSTANCE_ADDED: QD,
				IX2_ELEMENT_STATE_CHANGED: $D
			} = Fg.IX2EngineActionTypes,
			Mg = {},
			ZD = "refState",
			JD = (e = Mg, t = {}) => {
				switch (t.type) {
					case YD:
						return Mg;
					case QD: {
						let {
							elementId: r,
							element: n,
							origin: o,
							actionItem: i,
							refType: a
						} = t.payload, {
							actionTypeId: s
						} = i, c = e;
						return (0, fi.getIn)(c, [r, n]) !== n && (c = Gg(c, n, a, r, i)), Wa(c, r, s, o, i)
					}
					case $D: {
						let {
							elementId: r,
							actionTypeId: n,
							current: o,
							actionItem: i
						} = t.payload;
						return Wa(e, r, n, o, i)
					}
					default:
						return e
				}
			};
		pr.ixElements = JD;

		function Gg(e, t, r, n, o) {
			let i = r === UD ? (0, fi.getIn)(o, ["config", "target", "objectId"]) : null;
			return (0, fi.mergeIn)(e, [n], {
				id: n,
				ref: t,
				refId: i,
				refType: r
			})
		}

		function Wa(e, t, r, n, o) {
			let i = tM(o),
				a = [t, ZD, r];
			return (0, fi.mergeIn)(e, a, n, i)
		}
		var eM = [
			[WD, HD],
			[VD, jD],
			[BD, KD],
			[kD, zD]
		];

		function tM(e) {
			let {
				config: t
			} = e;
			return eM.reduce((r, n) => {
				let o = n[0],
					i = n[1],
					a = t[o],
					s = t[i];
				return a != null && s != null && (r[i] = s), r
			}, {})
		}
	});
	var Ug = u(Pe => {
		"use strict";
		Object.defineProperty(Pe, "__esModule", {
			value: !0
		});
		Pe.renderPlugin = Pe.getPluginOrigin = Pe.getPluginDuration = Pe.getPluginDestination = Pe.getPluginConfig = Pe.createPluginInstance = Pe.clearPlugin = void 0;
		var rM = e => e.value;
		Pe.getPluginConfig = rM;
		var nM = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		Pe.getPluginDuration = nM;
		var iM = e => e || {
			value: 0
		};
		Pe.getPluginOrigin = iM;
		var oM = e => ({
			value: e.value
		});
		Pe.getPluginDestination = oM;
		var aM = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		Pe.createPluginInstance = aM;
		var sM = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		Pe.renderPlugin = sM;
		var uM = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		Pe.clearPlugin = uM
	});
	var Va = u(Ce => {
		"use strict";
		Object.defineProperty(Ce, "__esModule", {
			value: !0
		});
		Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
		Ce.isPluginType = fM;
		Ce.renderPlugin = void 0;
		var Ut = Ug(),
			Wg = ke(),
			cM = si(),
			lM = {
				[Wg.ActionTypeConsts.PLUGIN_LOTTIE]: {
					getConfig: Ut.getPluginConfig,
					getOrigin: Ut.getPluginOrigin,
					getDuration: Ut.getPluginDuration,
					getDestination: Ut.getPluginDestination,
					createInstance: Ut.createPluginInstance,
					render: Ut.renderPlugin,
					clear: Ut.clearPlugin
				}
			};

		function fM(e) {
			return e === Wg.ActionTypeConsts.PLUGIN_LOTTIE
		}
		var Wt = e => t => {
				if (!cM.IS_BROWSER_ENV) return () => null;
				let r = lM[t];
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
				let n = r[e];
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
				return n
			},
			dM = Wt("getConfig");
		Ce.getPluginConfig = dM;
		var pM = Wt("getOrigin");
		Ce.getPluginOrigin = pM;
		var vM = Wt("getDuration");
		Ce.getPluginDuration = vM;
		var hM = Wt("getDestination");
		Ce.getPluginDestination = hM;
		var gM = Wt("createInstance");
		Ce.createPluginInstance = gM;
		var EM = Wt("render");
		Ce.renderPlugin = EM;
		var _M = Wt("clear");
		Ce.clearPlugin = _M
	});
	var Bg = u((Q5, Vg) => {
		function mM(e, t) {
			return e == null || e !== e ? t : e
		}
		Vg.exports = mM
	});
	var Hg = u(($5, kg) => {
		function yM(e, t, r, n) {
			var o = -1,
				i = e == null ? 0 : e.length;
			for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
			return r
		}
		kg.exports = yM
	});
	var Kg = u((Z5, jg) => {
		function IM(e) {
			return function(t, r, n) {
				for (var o = -1, i = Object(t), a = n(t), s = a.length; s--;) {
					var c = a[e ? s : ++o];
					if (r(i[c], c, i) === !1) break
				}
				return t
			}
		}
		jg.exports = IM
	});
	var Yg = u((J5, zg) => {
		var TM = Kg(),
			bM = TM();
		zg.exports = bM
	});
	var Ba = u((eK, Qg) => {
		var OM = Yg(),
			wM = zr();

		function SM(e, t) {
			return e && OM(e, t, wM)
		}
		Qg.exports = SM
	});
	var Zg = u((tK, $g) => {
		var AM = Gt();

		function RM(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!AM(r)) return e(r, n);
				for (var o = r.length, i = t ? o : -1, a = Object(r);
					(t ? i-- : ++i < o) && n(a[i], i, a) !== !1;);
				return r
			}
		}
		$g.exports = RM
	});
	var ka = u((rK, Jg) => {
		var xM = Ba(),
			CM = Zg(),
			NM = CM(xM);
		Jg.exports = NM
	});
	var tE = u((nK, eE) => {
		function LM(e, t, r, n, o) {
			return o(e, function(i, a, s) {
				r = n ? (n = !1, i) : t(r, i, a, s)
			}), r
		}
		eE.exports = LM
	});
	var nE = u((iK, rE) => {
		var qM = Hg(),
			PM = ka(),
			DM = Rt(),
			MM = tE(),
			FM = qe();

		function GM(e, t, r) {
			var n = FM(e) ? qM : MM,
				o = arguments.length < 3;
			return n(e, DM(t, 4), r, o, PM)
		}
		rE.exports = GM
	});
	var oE = u((oK, iE) => {
		var XM = Pa(),
			UM = Rt(),
			WM = Da(),
			VM = Math.max,
			BM = Math.min;

		function kM(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var o = n - 1;
			return r !== void 0 && (o = WM(r), o = r < 0 ? VM(n + o, 0) : BM(o, n - 1)), XM(e, UM(t, 3), o, !0)
		}
		iE.exports = kM
	});
	var sE = u((aK, aE) => {
		var HM = qa(),
			jM = oE(),
			KM = HM(jM);
		aE.exports = KM
	});
	var cE = u(di => {
		"use strict";
		Object.defineProperty(di, "__esModule", {
			value: !0
		});
		di.default = void 0;
		var zM = Object.prototype.hasOwnProperty;

		function uE(e, t) {
			return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
		}

		function YM(e, t) {
			if (uE(e, t)) return !0;
			if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
			let r = Object.keys(e),
				n = Object.keys(t);
			if (r.length !== n.length) return !1;
			for (let o = 0; o < r.length; o++)
				if (!zM.call(t, r[o]) || !uE(e[r[o]], t[r[o]])) return !1;
			return !0
		}
		var QM = YM;
		di.default = QM
	});
	var CE = u(me => {
		"use strict";
		var hi = ct().default;
		Object.defineProperty(me, "__esModule", {
			value: !0
		});
		me.cleanupHTMLElement = K1;
		me.clearAllStyles = j1;
		me.getActionListProgress = Y1;
		me.getAffectedElements = Qa;
		me.getComputedStyle = I1;
		me.getDestinationValues = R1;
		me.getElementId = E1;
		me.getInstanceId = h1;
		me.getInstanceOrigin = O1;
		me.getItemConfigByKey = void 0;
		me.getMaxDurationItemIndex = xE;
		me.getNamespacedParameterId = Z1;
		me.getRenderType = SE;
		me.getStyleProp = x1;
		me.mediaQueriesEqual = eF;
		me.observeStore = y1;
		me.reduceListToGroup = Q1;
		me.reifyState = _1;
		me.renderHTMLElement = C1;
		Object.defineProperty(me, "shallowEqual", {
			enumerable: !0,
			get: function() {
				return mE.default
			}
		});
		me.shouldAllowMediaQuery = J1;
		me.shouldNamespaceEventParameter = $1;
		me.stringifyTarget = tF;
		var xt = hi(Bg()),
			ja = hi(nE()),
			Ha = hi(sE()),
			lE = nr(),
			Vt = ke(),
			mE = hi(cE()),
			$M = Ua(),
			ht = Va(),
			We = si(),
			{
				BACKGROUND: ZM,
				TRANSFORM: JM,
				TRANSLATE_3D: e1,
				SCALE_3D: t1,
				ROTATE_X: r1,
				ROTATE_Y: n1,
				ROTATE_Z: i1,
				SKEW: o1,
				PRESERVE_3D: a1,
				FLEX: s1,
				OPACITY: pi,
				FILTER: Jr,
				FONT_VARIATION_SETTINGS: en,
				WIDTH: pt,
				HEIGHT: vt,
				BACKGROUND_COLOR: yE,
				BORDER_COLOR: u1,
				COLOR: c1,
				CHILDREN: fE,
				IMMEDIATE_CHILDREN: l1,
				SIBLINGS: dE,
				PARENT: f1,
				DISPLAY: vi,
				WILL_CHANGE: vr,
				AUTO: Ct,
				COMMA_DELIMITER: tn,
				COLON_DELIMITER: d1,
				BAR_DELIMITER: pE,
				RENDER_TRANSFORM: IE,
				RENDER_GENERAL: Ka,
				RENDER_STYLE: za,
				RENDER_PLUGIN: TE
			} = Vt.IX2EngineConstants,
			{
				TRANSFORM_MOVE: hr,
				TRANSFORM_SCALE: gr,
				TRANSFORM_ROTATE: Er,
				TRANSFORM_SKEW: rn,
				STYLE_OPACITY: bE,
				STYLE_FILTER: nn,
				STYLE_FONT_VARIATION: on,
				STYLE_SIZE: _r,
				STYLE_BACKGROUND_COLOR: mr,
				STYLE_BORDER: yr,
				STYLE_TEXT_COLOR: Ir,
				GENERAL_DISPLAY: gi
			} = Vt.ActionTypeConsts,
			p1 = "OBJECT_VALUE",
			OE = e => e.trim(),
			Ya = Object.freeze({
				[mr]: yE,
				[yr]: u1,
				[Ir]: c1
			}),
			wE = Object.freeze({
				[We.TRANSFORM_PREFIXED]: JM,
				[yE]: ZM,
				[pi]: pi,
				[Jr]: Jr,
				[pt]: pt,
				[vt]: vt,
				[en]: en
			}),
			vE = {},
			v1 = 1;

		function h1() {
			return "i" + v1++
		}
		var g1 = 1;

		function E1(e, t) {
			for (let r in e) {
				let n = e[r];
				if (n && n.ref === t) return n.id
			}
			return "e" + g1++
		}

		function _1({
			events: e,
			actionLists: t,
			site: r
		} = {}) {
			let n = (0, ja.default)(e, (a, s) => {
					let {
						eventTypeId: c
					} = s;
					return a[c] || (a[c] = {}), a[c][s.id] = s, a
				}, {}),
				o = r && r.mediaQueries,
				i = [];
			return o ? i = o.map(a => a.key) : (o = [], console.warn("IX2 missing mediaQueries in site data")), {
				ixData: {
					events: e,
					actionLists: t,
					eventTypeMap: n,
					mediaQueries: o,
					mediaQueryKeys: i
				}
			}
		}
		var m1 = (e, t) => e === t;

		function y1({
			store: e,
			select: t,
			onChange: r,
			comparator: n = m1
		}) {
			let {
				getState: o,
				subscribe: i
			} = e, a = i(c), s = t(o());

			function c() {
				let h = t(o());
				if (h == null) {
					a();
					return
				}
				n(h, s) || (s = h, r(s, e))
			}
			return a
		}

		function hE(e) {
			let t = typeof e;
			if (t === "string") return {
				id: e
			};
			if (e != null && t === "object") {
				let {
					id: r,
					objectId: n,
					selector: o,
					selectorGuids: i,
					appliesTo: a,
					useEventTarget: s
				} = e;
				return {
					id: r,
					objectId: n,
					selector: o,
					selectorGuids: i,
					appliesTo: a,
					useEventTarget: s
				}
			}
			return {}
		}

		function Qa({
			config: e,
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: o
		}) {
			var i, a, s;
			if (!o) throw new Error("IX2 missing elementApi");
			let {
				targets: c
			} = e;
			if (Array.isArray(c) && c.length > 0) return c.reduce((X, U) => X.concat(Qa({
				config: {
					target: U
				},
				event: t,
				eventTarget: r,
				elementRoot: n,
				elementApi: o
			})), []);
			let {
				getValidDocument: h,
				getQuerySelector: y,
				queryDocument: d,
				getChildElements: I,
				getSiblingElements: _,
				matchSelector: m,
				elementContains: w,
				isSiblingNode: x
			} = o, {
				target: R
			} = e;
			if (!R) return [];
			let {
				id: N,
				objectId: A,
				selector: M,
				selectorGuids: q,
				appliesTo: D,
				useEventTarget: B
			} = hE(R);
			if (A) return [vE[A] || (vE[A] = {})];
			if (D === Vt.EventAppliesTo.PAGE) {
				let X = h(N);
				return X ? [X] : []
			}
			let Z = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[N || M] || {},
				ae = !!(Z.id || Z.selector),
				re, W, b, F = t && y(hE(t.target));
			if (ae ? (re = Z.limitAffectedElements, W = F, b = y(Z)) : W = b = y({
					id: N,
					selector: M,
					selectorGuids: q
				}), t && B) {
				let X = r && (b || B === !0) ? [r] : d(F);
				if (b) {
					if (B === f1) return d(b).filter(U => X.some(J => w(U, J)));
					if (B === fE) return d(b).filter(U => X.some(J => w(J, U)));
					if (B === dE) return d(b).filter(U => X.some(J => x(J, U)))
				}
				return X
			}
			return W == null || b == null ? [] : We.IS_BROWSER_ENV && n ? d(b).filter(X => n.contains(X)) : re === fE ? d(W, b) : re === l1 ? I(d(W)).filter(m(b)) : re === dE ? _(d(W)).filter(m(b)) : d(b)
		}

		function I1({
			element: e,
			actionItem: t
		}) {
			if (!We.IS_BROWSER_ENV) return {};
			let {
				actionTypeId: r
			} = t;
			switch (r) {
				case _r:
				case mr:
				case yr:
				case Ir:
				case gi:
					return window.getComputedStyle(e);
				default:
					return {}
			}
		}
		var gE = /px/,
			T1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = N1[n.type]), r), e || {}),
			b1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = L1[n.type] || n.defaultValue || 0), r), e || {});

		function O1(e, t = {}, r = {}, n, o) {
			let {
				getStyle: i
			} = o, {
				actionTypeId: a
			} = n;
			if ((0, ht.isPluginType)(a)) return (0, ht.getPluginOrigin)(a)(t[a]);
			switch (n.actionTypeId) {
				case hr:
				case gr:
				case Er:
				case rn:
					return t[n.actionTypeId] || $a[n.actionTypeId];
				case nn:
					return T1(t[n.actionTypeId], n.config.filters);
				case on:
					return b1(t[n.actionTypeId], n.config.fontVariations);
				case bE:
					return {
						value: (0, xt.default)(parseFloat(i(e, pi)), 1)
					};
				case _r: {
					let s = i(e, pt),
						c = i(e, vt),
						h, y;
					return n.config.widthUnit === Ct ? h = gE.test(s) ? parseFloat(s) : parseFloat(r.width) : h = (0, xt.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === Ct ? y = gE.test(c) ? parseFloat(c) : parseFloat(r.height) : y = (0, xt.default)(parseFloat(c), parseFloat(r.height)), {
						widthValue: h,
						heightValue: y
					}
				}
				case mr:
				case yr:
				case Ir:
					return B1({
						element: e,
						actionTypeId: n.actionTypeId,
						computedStyle: r,
						getStyle: i
					});
				case gi:
					return {
						value: (0, xt.default)(i(e, vi), r.display)
					};
				case p1:
					return t[n.actionTypeId] || {
						value: 0
					};
				default:
					return
			}
		}
		var w1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
			S1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
			A1 = (e, t, r) => {
				if ((0, ht.isPluginType)(e)) return (0, ht.getPluginConfig)(e)(r, t);
				switch (e) {
					case nn: {
						let n = (0, Ha.default)(r.filters, ({
							type: o
						}) => o === t);
						return n ? n.value : 0
					}
					case on: {
						let n = (0, Ha.default)(r.fontVariations, ({
							type: o
						}) => o === t);
						return n ? n.value : 0
					}
					default:
						return r[t]
				}
			};
		me.getItemConfigByKey = A1;

		function R1({
			element: e,
			actionItem: t,
			elementApi: r
		}) {
			if ((0, ht.isPluginType)(t.actionTypeId)) return (0, ht.getPluginDestination)(t.actionTypeId)(t.config);
			switch (t.actionTypeId) {
				case hr:
				case gr:
				case Er:
				case rn: {
					let {
						xValue: n,
						yValue: o,
						zValue: i
					} = t.config;
					return {
						xValue: n,
						yValue: o,
						zValue: i
					}
				}
				case _r: {
					let {
						getStyle: n,
						setStyle: o,
						getProperty: i
					} = r, {
						widthUnit: a,
						heightUnit: s
					} = t.config, {
						widthValue: c,
						heightValue: h
					} = t.config;
					if (!We.IS_BROWSER_ENV) return {
						widthValue: c,
						heightValue: h
					};
					if (a === Ct) {
						let y = n(e, pt);
						o(e, pt, ""), c = i(e, "offsetWidth"), o(e, pt, y)
					}
					if (s === Ct) {
						let y = n(e, vt);
						o(e, vt, ""), h = i(e, "offsetHeight"), o(e, vt, y)
					}
					return {
						widthValue: c,
						heightValue: h
					}
				}
				case mr:
				case yr:
				case Ir: {
					let {
						rValue: n,
						gValue: o,
						bValue: i,
						aValue: a
					} = t.config;
					return {
						rValue: n,
						gValue: o,
						bValue: i,
						aValue: a
					}
				}
				case nn:
					return t.config.filters.reduce(w1, {});
				case on:
					return t.config.fontVariations.reduce(S1, {});
				default: {
					let {
						value: n
					} = t.config;
					return {
						value: n
					}
				}
			}
		}

		function SE(e) {
			if (/^TRANSFORM_/.test(e)) return IE;
			if (/^STYLE_/.test(e)) return za;
			if (/^GENERAL_/.test(e)) return Ka;
			if (/^PLUGIN_/.test(e)) return TE
		}

		function x1(e, t) {
			return e === za ? t.replace("STYLE_", "").toLowerCase() : null
		}

		function C1(e, t, r, n, o, i, a, s, c) {
			switch (s) {
				case IE:
					return D1(e, t, r, o, a);
				case za:
					return k1(e, t, r, o, i, a);
				case Ka:
					return H1(e, o, a);
				case TE: {
					let {
						actionTypeId: h
					} = o;
					if ((0, ht.isPluginType)(h)) return (0, ht.renderPlugin)(h)(c, t, o)
				}
			}
		}
		var $a = {
				[hr]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[gr]: Object.freeze({
					xValue: 1,
					yValue: 1,
					zValue: 1
				}),
				[Er]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[rn]: Object.freeze({
					xValue: 0,
					yValue: 0
				})
			},
			N1 = Object.freeze({
				blur: 0,
				"hue-rotate": 0,
				invert: 0,
				grayscale: 0,
				saturate: 100,
				sepia: 0,
				contrast: 100,
				brightness: 100
			}),
			L1 = Object.freeze({
				wght: 0,
				opsz: 0,
				wdth: 0,
				slnt: 0
			}),
			q1 = (e, t) => {
				let r = (0, Ha.default)(t.filters, ({
					type: n
				}) => n === e);
				if (r && r.unit) return r.unit;
				switch (e) {
					case "blur":
						return "px";
					case "hue-rotate":
						return "deg";
					default:
						return "%"
				}
			},
			P1 = Object.keys($a);

		function D1(e, t, r, n, o) {
			let i = P1.map(s => {
					let c = $a[s],
						{
							xValue: h = c.xValue,
							yValue: y = c.yValue,
							zValue: d = c.zValue,
							xUnit: I = "",
							yUnit: _ = "",
							zUnit: m = ""
						} = t[s] || {};
					switch (s) {
						case hr:
							return `${e1}(${h}${I}, ${y}${_}, ${d}${m})`;
						case gr:
							return `${t1}(${h}${I}, ${y}${_}, ${d}${m})`;
						case Er:
							return `${r1}(${h}${I}) ${n1}(${y}${_}) ${i1}(${d}${m})`;
						case rn:
							return `${o1}(${h}${I}, ${y}${_})`;
						default:
							return ""
					}
				}).join(" "),
				{
					setStyle: a
				} = o;
			Bt(e, We.TRANSFORM_PREFIXED, o), a(e, We.TRANSFORM_PREFIXED, i), G1(n, r) && a(e, We.TRANSFORM_STYLE_PREFIXED, a1)
		}

		function M1(e, t, r, n) {
			let o = (0, ja.default)(t, (a, s, c) => `${a} ${c}(${s}${q1(c,r)})`, ""),
				{
					setStyle: i
				} = n;
			Bt(e, Jr, n), i(e, Jr, o)
		}

		function F1(e, t, r, n) {
			let o = (0, ja.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
				{
					setStyle: i
				} = n;
			Bt(e, en, n), i(e, en, o)
		}

		function G1({
			actionTypeId: e
		}, {
			xValue: t,
			yValue: r,
			zValue: n
		}) {
			return e === hr && n !== void 0 || e === gr && n !== void 0 || e === Er && (t !== void 0 || r !== void 0)
		}
		var X1 = "\\(([^)]+)\\)",
			U1 = /^rgb/,
			W1 = RegExp(`rgba?${X1}`);

		function V1(e, t) {
			let r = e.exec(t);
			return r ? r[1] : ""
		}

		function B1({
			element: e,
			actionTypeId: t,
			computedStyle: r,
			getStyle: n
		}) {
			let o = Ya[t],
				i = n(e, o),
				a = U1.test(i) ? i : r[o],
				s = V1(W1, a).split(tn);
			return {
				rValue: (0, xt.default)(parseInt(s[0], 10), 255),
				gValue: (0, xt.default)(parseInt(s[1], 10), 255),
				bValue: (0, xt.default)(parseInt(s[2], 10), 255),
				aValue: (0, xt.default)(parseFloat(s[3]), 1)
			}
		}

		function k1(e, t, r, n, o, i) {
			let {
				setStyle: a
			} = i;
			switch (n.actionTypeId) {
				case _r: {
					let {
						widthUnit: s = "",
						heightUnit: c = ""
					} = n.config, {
						widthValue: h,
						heightValue: y
					} = r;
					h !== void 0 && (s === Ct && (s = "px"), Bt(e, pt, i), a(e, pt, h + s)), y !== void 0 && (c === Ct && (c = "px"), Bt(e, vt, i), a(e, vt, y + c));
					break
				}
				case nn: {
					M1(e, r, n.config, i);
					break
				}
				case on: {
					F1(e, r, n.config, i);
					break
				}
				case mr:
				case yr:
				case Ir: {
					let s = Ya[n.actionTypeId],
						c = Math.round(r.rValue),
						h = Math.round(r.gValue),
						y = Math.round(r.bValue),
						d = r.aValue;
					Bt(e, s, i), a(e, s, d >= 1 ? `rgb(${c},${h},${y})` : `rgba(${c},${h},${y},${d})`);
					break
				}
				default: {
					let {
						unit: s = ""
					} = n.config;
					Bt(e, o, i), a(e, o, r.value + s);
					break
				}
			}
		}

		function H1(e, t, r) {
			let {
				setStyle: n
			} = r;
			switch (t.actionTypeId) {
				case gi: {
					let {
						value: o
					} = t.config;
					o === s1 && We.IS_BROWSER_ENV ? n(e, vi, We.FLEX_PREFIXED) : n(e, vi, o);
					return
				}
			}
		}

		function Bt(e, t, r) {
			if (!We.IS_BROWSER_ENV) return;
			let n = wE[t];
			if (!n) return;
			let {
				getStyle: o,
				setStyle: i
			} = r, a = o(e, vr);
			if (!a) {
				i(e, vr, n);
				return
			}
			let s = a.split(tn).map(OE);
			s.indexOf(n) === -1 && i(e, vr, s.concat(n).join(tn))
		}

		function AE(e, t, r) {
			if (!We.IS_BROWSER_ENV) return;
			let n = wE[t];
			if (!n) return;
			let {
				getStyle: o,
				setStyle: i
			} = r, a = o(e, vr);
			!a || a.indexOf(n) === -1 || i(e, vr, a.split(tn).map(OE).filter(s => s !== n).join(tn))
		}

		function j1({
			store: e,
			elementApi: t
		}) {
			let {
				ixData: r
			} = e.getState(), {
				events: n = {},
				actionLists: o = {}
			} = r;
			Object.keys(n).forEach(i => {
				let a = n[i],
					{
						config: s
					} = a.action,
					{
						actionListId: c
					} = s,
					h = o[c];
				h && EE({
					actionList: h,
					event: a,
					elementApi: t
				})
			}), Object.keys(o).forEach(i => {
				EE({
					actionList: o[i],
					elementApi: t
				})
			})
		}

		function EE({
			actionList: e = {},
			event: t,
			elementApi: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: o
			} = e;
			n && n.forEach(i => {
				_E({
					actionGroup: i,
					event: t,
					elementApi: r
				})
			}), o && o.forEach(i => {
				let {
					continuousActionGroups: a
				} = i;
				a.forEach(s => {
					_E({
						actionGroup: s,
						event: t,
						elementApi: r
					})
				})
			})
		}

		function _E({
			actionGroup: e,
			event: t,
			elementApi: r
		}) {
			let {
				actionItems: n
			} = e;
			n.forEach(({
				actionTypeId: o,
				config: i
			}) => {
				let a;
				(0, ht.isPluginType)(o) ? a = (0, ht.clearPlugin)(o): a = RE({
					effect: z1,
					actionTypeId: o,
					elementApi: r
				}), Qa({
					config: i,
					event: t,
					elementApi: r
				}).forEach(a)
			})
		}

		function K1(e, t, r) {
			let {
				setStyle: n,
				getStyle: o
			} = r, {
				actionTypeId: i
			} = t;
			if (i === _r) {
				let {
					config: a
				} = t;
				a.widthUnit === Ct && n(e, pt, ""), a.heightUnit === Ct && n(e, vt, "")
			}
			o(e, vr) && RE({
				effect: AE,
				actionTypeId: i,
				elementApi: r
			})(e)
		}
		var RE = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case hr:
				case gr:
				case Er:
				case rn:
					e(n, We.TRANSFORM_PREFIXED, r);
					break;
				case nn:
					e(n, Jr, r);
					break;
				case on:
					e(n, en, r);
					break;
				case bE:
					e(n, pi, r);
					break;
				case _r:
					e(n, pt, r), e(n, vt, r);
					break;
				case mr:
				case yr:
				case Ir:
					e(n, Ya[t], r);
					break;
				case gi:
					e(n, vi, r);
					break
			}
		};

		function z1(e, t, r) {
			let {
				setStyle: n
			} = r;
			AE(e, t, r), n(e, t, ""), t === We.TRANSFORM_PREFIXED && n(e, We.TRANSFORM_STYLE_PREFIXED, "")
		}

		function xE(e) {
			let t = 0,
				r = 0;
			return e.forEach((n, o) => {
				let {
					config: i
				} = n, a = i.delay + i.duration;
				a >= t && (t = a, r = o)
			}), r
		}

		function Y1(e, t) {
			let {
				actionItemGroups: r,
				useFirstGroupAsInitialState: n
			} = e, {
				actionItem: o,
				verboseTimeElapsed: i = 0
			} = t, a = 0, s = 0;
			return r.forEach((c, h) => {
				if (n && h === 0) return;
				let {
					actionItems: y
				} = c, d = y[xE(y)], {
					config: I,
					actionTypeId: _
				} = d;
				o.id === d.id && (s = a + i);
				let m = SE(_) === Ka ? 0 : I.duration;
				a += I.delay + m
			}), a > 0 ? (0, $M.optimizeFloat)(s / a) : 0
		}

		function Q1({
			actionList: e,
			actionItemId: t,
			rawData: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: o
			} = e, i = [], a = s => (i.push((0, lE.mergeIn)(s, ["config"], {
				delay: 0,
				duration: 0
			})), s.id === t);
			return n && n.some(({
				actionItems: s
			}) => s.some(a)), o && o.some(s => {
				let {
					continuousActionGroups: c
				} = s;
				return c.some(({
					actionItems: h
				}) => h.some(a))
			}), (0, lE.setIn)(r, ["actionLists"], {
				[e.id]: {
					id: e.id,
					actionItemGroups: [{
						actionItems: i
					}]
				}
			})
		}

		function $1(e, {
			basedOn: t
		}) {
			return e === Vt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Vt.EventBasedOn.ELEMENT || t == null) || e === Vt.EventTypeConsts.MOUSE_MOVE && t === Vt.EventBasedOn.ELEMENT
		}

		function Z1(e, t) {
			return e + d1 + t
		}

		function J1(e, t) {
			return t == null ? !0 : e.indexOf(t) !== -1
		}

		function eF(e, t) {
			return (0, mE.default)(e && e.sort(), t && t.sort())
		}

		function tF(e) {
			if (typeof e == "string") return e;
			let {
				id: t = "",
				selector: r = "",
				useEventTarget: n = ""
			} = e;
			return t + pE + r + pE + n
		}
	});
	var kt = u(Ve => {
		"use strict";
		var Tr = Qt().default;
		Object.defineProperty(Ve, "__esModule", {
			value: !0
		});
		Ve.IX2VanillaUtils = Ve.IX2VanillaPlugins = Ve.IX2ElementsReducer = Ve.IX2Easings = Ve.IX2EasingUtils = Ve.IX2BrowserSupport = void 0;
		var rF = Tr(si());
		Ve.IX2BrowserSupport = rF;
		var nF = Tr(Ga());
		Ve.IX2Easings = nF;
		var iF = Tr(Ua());
		Ve.IX2EasingUtils = iF;
		var oF = Tr(Xg());
		Ve.IX2ElementsReducer = oF;
		var aF = Tr(Va());
		Ve.IX2VanillaPlugins = aF;
		var sF = Tr(CE());
		Ve.IX2VanillaUtils = sF
	});
	var PE = u(_i => {
		"use strict";
		Object.defineProperty(_i, "__esModule", {
			value: !0
		});
		_i.ixInstances = void 0;
		var NE = ke(),
			LE = kt(),
			br = nr(),
			{
				IX2_RAW_DATA_IMPORTED: uF,
				IX2_SESSION_STOPPED: cF,
				IX2_INSTANCE_ADDED: lF,
				IX2_INSTANCE_STARTED: fF,
				IX2_INSTANCE_REMOVED: dF,
				IX2_ANIMATION_FRAME_CHANGED: pF
			} = NE.IX2EngineActionTypes,
			{
				optimizeFloat: Ei,
				applyEasing: qE,
				createBezierEasing: vF
			} = LE.IX2EasingUtils,
			{
				RENDER_GENERAL: hF
			} = NE.IX2EngineConstants,
			{
				getItemConfigByKey: Za,
				getRenderType: gF,
				getStyleProp: EF
			} = LE.IX2VanillaUtils,
			_F = (e, t) => {
				let {
					position: r,
					parameterId: n,
					actionGroups: o,
					destinationKeys: i,
					smoothing: a,
					restingValue: s,
					actionTypeId: c,
					customEasingFn: h,
					skipMotion: y,
					skipToValue: d
				} = e, {
					parameters: I
				} = t.payload, _ = Math.max(1 - a, .01), m = I[n];
				m == null && (_ = 1, m = s);
				let w = Math.max(m, 0) || 0,
					x = Ei(w - r),
					R = y ? d : Ei(r + x * _),
					N = R * 100;
				if (R === r && e.current) return e;
				let A, M, q, D;
				for (let Q = 0, {
						length: Z
					} = o; Q < Z; Q++) {
					let {
						keyframe: ae,
						actionItems: re
					} = o[Q];
					if (Q === 0 && (A = re[0]), N >= ae) {
						A = re[0];
						let W = o[Q + 1],
							b = W && N !== ae;
						M = b ? W.actionItems[0] : null, b && (q = ae / 100, D = (W.keyframe - ae) / 100)
					}
				}
				let B = {};
				if (A && !M)
					for (let Q = 0, {
							length: Z
						} = i; Q < Z; Q++) {
						let ae = i[Q];
						B[ae] = Za(c, ae, A.config)
					} else if (A && M && q !== void 0 && D !== void 0) {
						let Q = (R - q) / D,
							Z = A.config.easing,
							ae = qE(Z, Q, h);
						for (let re = 0, {
								length: W
							} = i; re < W; re++) {
							let b = i[re],
								F = Za(c, b, A.config),
								J = (Za(c, b, M.config) - F) * ae + F;
							B[b] = J
						}
					} return (0, br.merge)(e, {
					position: R,
					current: B
				})
			},
			mF = (e, t) => {
				let {
					active: r,
					origin: n,
					start: o,
					immediate: i,
					renderType: a,
					verbose: s,
					actionItem: c,
					destination: h,
					destinationKeys: y,
					pluginDuration: d,
					instanceDelay: I,
					customEasingFn: _,
					skipMotion: m
				} = e, w = c.config.easing, {
					duration: x,
					delay: R
				} = c.config;
				d != null && (x = d), R = I ?? R, a === hF ? x = 0 : (i || m) && (x = R = 0);
				let {
					now: N
				} = t.payload;
				if (r && n) {
					let A = N - (o + R);
					if (s) {
						let Q = N - o,
							Z = x + R,
							ae = Ei(Math.min(Math.max(0, Q / Z), 1));
						e = (0, br.set)(e, "verboseTimeElapsed", Z * ae)
					}
					if (A < 0) return e;
					let M = Ei(Math.min(Math.max(0, A / x), 1)),
						q = qE(w, M, _),
						D = {},
						B = null;
					return y.length && (B = y.reduce((Q, Z) => {
						let ae = h[Z],
							re = parseFloat(n[Z]) || 0,
							b = (parseFloat(ae) - re) * q + re;
						return Q[Z] = b, Q
					}, {})), D.current = B, D.position = M, M === 1 && (D.active = !1, D.complete = !0), (0, br.merge)(e, D)
				}
				return e
			},
			yF = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case uF:
						return t.payload.ixInstances || Object.freeze({});
					case cF:
						return Object.freeze({});
					case lF: {
						let {
							instanceId: r,
							elementId: n,
							actionItem: o,
							eventId: i,
							eventTarget: a,
							eventStateKey: s,
							actionListId: c,
							groupIndex: h,
							isCarrier: y,
							origin: d,
							destination: I,
							immediate: _,
							verbose: m,
							continuous: w,
							parameterId: x,
							actionGroups: R,
							smoothing: N,
							restingValue: A,
							pluginInstance: M,
							pluginDuration: q,
							instanceDelay: D,
							skipMotion: B,
							skipToValue: Q
						} = t.payload, {
							actionTypeId: Z
						} = o, ae = gF(Z), re = EF(ae, Z), W = Object.keys(I).filter(F => I[F] != null), {
							easing: b
						} = o.config;
						return (0, br.set)(e, r, {
							id: r,
							elementId: n,
							active: !1,
							position: 0,
							start: 0,
							origin: d,
							destination: I,
							destinationKeys: W,
							immediate: _,
							verbose: m,
							current: null,
							actionItem: o,
							actionTypeId: Z,
							eventId: i,
							eventTarget: a,
							eventStateKey: s,
							actionListId: c,
							groupIndex: h,
							renderType: ae,
							isCarrier: y,
							styleProp: re,
							continuous: w,
							parameterId: x,
							actionGroups: R,
							smoothing: N,
							restingValue: A,
							pluginInstance: M,
							pluginDuration: q,
							instanceDelay: D,
							skipMotion: B,
							skipToValue: Q,
							customEasingFn: Array.isArray(b) && b.length === 4 ? vF(b) : void 0
						})
					}
					case fF: {
						let {
							instanceId: r,
							time: n
						} = t.payload;
						return (0, br.mergeIn)(e, [r], {
							active: !0,
							complete: !1,
							start: n
						})
					}
					case dF: {
						let {
							instanceId: r
						} = t.payload;
						if (!e[r]) return e;
						let n = {},
							o = Object.keys(e),
							{
								length: i
							} = o;
						for (let a = 0; a < i; a++) {
							let s = o[a];
							s !== r && (n[s] = e[s])
						}
						return n
					}
					case pF: {
						let r = e,
							n = Object.keys(e),
							{
								length: o
							} = n;
						for (let i = 0; i < o; i++) {
							let a = n[i],
								s = e[a],
								c = s.continuous ? _F : mF;
							r = (0, br.set)(r, a, c(s, t))
						}
						return r
					}
					default:
						return e
				}
			};
		_i.ixInstances = yF
	});
	var DE = u(mi => {
		"use strict";
		Object.defineProperty(mi, "__esModule", {
			value: !0
		});
		mi.ixParameters = void 0;
		var IF = ke(),
			{
				IX2_RAW_DATA_IMPORTED: TF,
				IX2_SESSION_STOPPED: bF,
				IX2_PARAMETER_CHANGED: OF
			} = IF.IX2EngineActionTypes,
			wF = (e = {}, t) => {
				switch (t.type) {
					case TF:
						return t.payload.ixParameters || {};
					case bF:
						return {};
					case OF: {
						let {
							key: r,
							value: n
						} = t.payload;
						return e[r] = n, e
					}
					default:
						return e
				}
			};
		mi.ixParameters = wF
	});
	var ME = u(yi => {
		"use strict";
		Object.defineProperty(yi, "__esModule", {
			value: !0
		});
		yi.default = void 0;
		var SF = Jo(),
			AF = Bf(),
			RF = ud(),
			xF = ld(),
			CF = kt(),
			NF = PE(),
			LF = DE(),
			{
				ixElements: qF
			} = CF.IX2ElementsReducer,
			PF = (0, SF.combineReducers)({
				ixData: AF.ixData,
				ixRequest: RF.ixRequest,
				ixSession: xF.ixSession,
				ixElements: qF,
				ixInstances: NF.ixInstances,
				ixParameters: LF.ixParameters
			});
		yi.default = PF
	});
	var FE = u((pK, an) => {
		function DF(e, t) {
			if (e == null) return {};
			var r = {},
				n = Object.keys(e),
				o, i;
			for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
			return r
		}
		an.exports = DF, an.exports.__esModule = !0, an.exports.default = an.exports
	});
	var XE = u((vK, GE) => {
		var MF = Ft(),
			FF = qe(),
			GF = At(),
			XF = "[object String]";

		function UF(e) {
			return typeof e == "string" || !FF(e) && GF(e) && MF(e) == XF
		}
		GE.exports = UF
	});
	var WE = u((hK, UE) => {
		var WF = La(),
			VF = WF("length");
		UE.exports = VF
	});
	var BE = u((gK, VE) => {
		var BF = "\\ud800-\\udfff",
			kF = "\\u0300-\\u036f",
			HF = "\\ufe20-\\ufe2f",
			jF = "\\u20d0-\\u20ff",
			KF = kF + HF + jF,
			zF = "\\ufe0e\\ufe0f",
			YF = "\\u200d",
			QF = RegExp("[" + YF + BF + KF + zF + "]");

		function $F(e) {
			return QF.test(e)
		}
		VE.exports = $F
	});
	var ZE = u((EK, $E) => {
		var HE = "\\ud800-\\udfff",
			ZF = "\\u0300-\\u036f",
			JF = "\\ufe20-\\ufe2f",
			e2 = "\\u20d0-\\u20ff",
			t2 = ZF + JF + e2,
			r2 = "\\ufe0e\\ufe0f",
			n2 = "[" + HE + "]",
			Ja = "[" + t2 + "]",
			es = "\\ud83c[\\udffb-\\udfff]",
			i2 = "(?:" + Ja + "|" + es + ")",
			jE = "[^" + HE + "]",
			KE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			zE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			o2 = "\\u200d",
			YE = i2 + "?",
			QE = "[" + r2 + "]?",
			a2 = "(?:" + o2 + "(?:" + [jE, KE, zE].join("|") + ")" + QE + YE + ")*",
			s2 = QE + YE + a2,
			u2 = "(?:" + [jE + Ja + "?", Ja, KE, zE, n2].join("|") + ")",
			kE = RegExp(es + "(?=" + es + ")|" + u2 + s2, "g");

		function c2(e) {
			for (var t = kE.lastIndex = 0; kE.test(e);) ++t;
			return t
		}
		$E.exports = c2
	});
	var e_ = u((_K, JE) => {
		var l2 = WE(),
			f2 = BE(),
			d2 = ZE();

		function p2(e) {
			return f2(e) ? d2(e) : l2(e)
		}
		JE.exports = p2
	});
	var r_ = u((mK, t_) => {
		var v2 = Zn(),
			h2 = Jn(),
			g2 = Gt(),
			E2 = XE(),
			_2 = e_(),
			m2 = "[object Map]",
			y2 = "[object Set]";

		function I2(e) {
			if (e == null) return 0;
			if (g2(e)) return E2(e) ? _2(e) : e.length;
			var t = h2(e);
			return t == m2 || t == y2 ? e.size : v2(e).length
		}
		t_.exports = I2
	});
	var i_ = u((yK, n_) => {
		var T2 = "Expected a function";

		function b2(e) {
			if (typeof e != "function") throw new TypeError(T2);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		n_.exports = b2
	});
	var ts = u((IK, o_) => {
		var O2 = St(),
			w2 = function() {
				try {
					var e = O2(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		o_.exports = w2
	});
	var rs = u((TK, s_) => {
		var a_ = ts();

		function S2(e, t, r) {
			t == "__proto__" && a_ ? a_(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		s_.exports = S2
	});
	var c_ = u((bK, u_) => {
		var A2 = rs(),
			R2 = Vn(),
			x2 = Object.prototype,
			C2 = x2.hasOwnProperty;

		function N2(e, t, r) {
			var n = e[t];
			(!(C2.call(e, t) && R2(n, r)) || r === void 0 && !(t in e)) && A2(e, t, r)
		}
		u_.exports = N2
	});
	var d_ = u((OK, f_) => {
		var L2 = c_(),
			q2 = Qr(),
			P2 = zn(),
			l_ = dt(),
			D2 = dr();

		function M2(e, t, r, n) {
			if (!l_(e)) return e;
			t = q2(t, e);
			for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i;) {
				var c = D2(t[o]),
					h = r;
				if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
				if (o != a) {
					var y = s[c];
					h = n ? n(y, c, s) : void 0, h === void 0 && (h = l_(y) ? y : P2(t[o + 1]) ? [] : {})
				}
				L2(s, c, h), s = s[c]
			}
			return e
		}
		f_.exports = M2
	});
	var v_ = u((wK, p_) => {
		var F2 = ri(),
			G2 = d_(),
			X2 = Qr();

		function U2(e, t, r) {
			for (var n = -1, o = t.length, i = {}; ++n < o;) {
				var a = t[n],
					s = F2(e, a);
				r(s, a) && G2(i, X2(a, e), s)
			}
			return i
		}
		p_.exports = U2
	});
	var g_ = u((SK, h_) => {
		var W2 = ma(),
			V2 = W2(Object.getPrototypeOf, Object);
		h_.exports = V2
	});
	var __ = u((AK, E_) => {
		var B2 = jn(),
			k2 = g_(),
			H2 = ga(),
			j2 = ha(),
			K2 = Object.getOwnPropertySymbols,
			z2 = K2 ? function(e) {
				for (var t = []; e;) B2(t, H2(e)), e = k2(e);
				return t
			} : j2;
		E_.exports = z2
	});
	var y_ = u((RK, m_) => {
		function Y2(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		m_.exports = Y2
	});
	var T_ = u((xK, I_) => {
		var Q2 = dt(),
			$2 = $n(),
			Z2 = y_(),
			J2 = Object.prototype,
			eG = J2.hasOwnProperty;

		function tG(e) {
			if (!Q2(e)) return Z2(e);
			var t = $2(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !eG.call(e, n)) || r.push(n);
			return r
		}
		I_.exports = tG
	});
	var O_ = u((CK, b_) => {
		var rG = _a(),
			nG = T_(),
			iG = Gt();

		function oG(e) {
			return iG(e) ? rG(e, !0) : nG(e)
		}
		b_.exports = oG
	});
	var S_ = u((NK, w_) => {
		var aG = va(),
			sG = __(),
			uG = O_();

		function cG(e) {
			return aG(e, uG, sG)
		}
		w_.exports = cG
	});
	var R_ = u((LK, A_) => {
		var lG = Na(),
			fG = Rt(),
			dG = v_(),
			pG = S_();

		function vG(e, t) {
			if (e == null) return {};
			var r = lG(pG(e), function(n) {
				return [n]
			});
			return t = fG(t), dG(e, r, function(n, o) {
				return t(n, o[0])
			})
		}
		A_.exports = vG
	});
	var C_ = u((qK, x_) => {
		var hG = Rt(),
			gG = i_(),
			EG = R_();

		function _G(e, t) {
			return EG(e, gG(hG(t)))
		}
		x_.exports = _G
	});
	var L_ = u((PK, N_) => {
		var mG = Zn(),
			yG = Jn(),
			IG = kr(),
			TG = qe(),
			bG = Gt(),
			OG = Kn(),
			wG = $n(),
			SG = Qn(),
			AG = "[object Map]",
			RG = "[object Set]",
			xG = Object.prototype,
			CG = xG.hasOwnProperty;

		function NG(e) {
			if (e == null) return !0;
			if (bG(e) && (TG(e) || typeof e == "string" || typeof e.splice == "function" || OG(e) || SG(e) || IG(e))) return !e.length;
			var t = yG(e);
			if (t == AG || t == RG) return !e.size;
			if (wG(e)) return !mG(e).length;
			for (var r in e)
				if (CG.call(e, r)) return !1;
			return !0
		}
		N_.exports = NG
	});
	var P_ = u((DK, q_) => {
		var LG = rs(),
			qG = Ba(),
			PG = Rt();

		function DG(e, t) {
			var r = {};
			return t = PG(t, 3), qG(e, function(n, o, i) {
				LG(r, o, t(n, o, i))
			}), r
		}
		q_.exports = DG
	});
	var M_ = u((MK, D_) => {
		function MG(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		D_.exports = MG
	});
	var G_ = u((FK, F_) => {
		var FG = ii();

		function GG(e) {
			return typeof e == "function" ? e : FG
		}
		F_.exports = GG
	});
	var U_ = u((GK, X_) => {
		var XG = M_(),
			UG = ka(),
			WG = G_(),
			VG = qe();

		function BG(e, t) {
			var r = VG(e) ? XG : UG;
			return r(e, WG(t))
		}
		X_.exports = BG
	});
	var V_ = u((XK, W_) => {
		var kG = tt(),
			HG = function() {
				return kG.Date.now()
			};
		W_.exports = HG
	});
	var H_ = u((UK, k_) => {
		var jG = dt(),
			ns = V_(),
			B_ = oi(),
			KG = "Expected a function",
			zG = Math.max,
			YG = Math.min;

		function QG(e, t, r) {
			var n, o, i, a, s, c, h = 0,
				y = !1,
				d = !1,
				I = !0;
			if (typeof e != "function") throw new TypeError(KG);
			t = B_(t) || 0, jG(r) && (y = !!r.leading, d = "maxWait" in r, i = d ? zG(B_(r.maxWait) || 0, t) : i, I = "trailing" in r ? !!r.trailing : I);

			function _(D) {
				var B = n,
					Q = o;
				return n = o = void 0, h = D, a = e.apply(Q, B), a
			}

			function m(D) {
				return h = D, s = setTimeout(R, t), y ? _(D) : a
			}

			function w(D) {
				var B = D - c,
					Q = D - h,
					Z = t - B;
				return d ? YG(Z, i - Q) : Z
			}

			function x(D) {
				var B = D - c,
					Q = D - h;
				return c === void 0 || B >= t || B < 0 || d && Q >= i
			}

			function R() {
				var D = ns();
				if (x(D)) return N(D);
				s = setTimeout(R, w(D))
			}

			function N(D) {
				return s = void 0, I && n ? _(D) : (n = o = void 0, a)
			}

			function A() {
				s !== void 0 && clearTimeout(s), h = 0, n = c = o = s = void 0
			}

			function M() {
				return s === void 0 ? a : N(ns())
			}

			function q() {
				var D = ns(),
					B = x(D);
				if (n = arguments, o = this, c = D, B) {
					if (s === void 0) return m(c);
					if (d) return clearTimeout(s), s = setTimeout(R, t), _(c)
				}
				return s === void 0 && (s = setTimeout(R, t)), a
			}
			return q.cancel = A, q.flush = M, q
		}
		k_.exports = QG
	});
	var K_ = u((WK, j_) => {
		var $G = H_(),
			ZG = dt(),
			JG = "Expected a function";

		function eX(e, t, r) {
			var n = !0,
				o = !0;
			if (typeof e != "function") throw new TypeError(JG);
			return ZG(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), $G(e, t, {
				leading: n,
				maxWait: t,
				trailing: o
			})
		}
		j_.exports = eX
	});
	var Ii = u(le => {
		"use strict";
		var tX = ct().default;
		Object.defineProperty(le, "__esModule", {
			value: !0
		});
		le.viewportWidthChanged = le.testFrameRendered = le.stopRequested = le.sessionStopped = le.sessionStarted = le.sessionInitialized = le.rawDataImported = le.previewRequested = le.playbackRequested = le.parameterChanged = le.mediaQueriesDefined = le.instanceStarted = le.instanceRemoved = le.instanceAdded = le.eventStateChanged = le.eventListenerAdded = le.elementStateChanged = le.clearRequested = le.animationFrameChanged = le.actionListPlaybackChanged = void 0;
		var z_ = tX(Gr()),
			Y_ = ke(),
			rX = kt(),
			{
				IX2_RAW_DATA_IMPORTED: nX,
				IX2_SESSION_INITIALIZED: iX,
				IX2_SESSION_STARTED: oX,
				IX2_SESSION_STOPPED: aX,
				IX2_PREVIEW_REQUESTED: sX,
				IX2_PLAYBACK_REQUESTED: uX,
				IX2_STOP_REQUESTED: cX,
				IX2_CLEAR_REQUESTED: lX,
				IX2_EVENT_LISTENER_ADDED: fX,
				IX2_TEST_FRAME_RENDERED: dX,
				IX2_EVENT_STATE_CHANGED: pX,
				IX2_ANIMATION_FRAME_CHANGED: vX,
				IX2_PARAMETER_CHANGED: hX,
				IX2_INSTANCE_ADDED: gX,
				IX2_INSTANCE_STARTED: EX,
				IX2_INSTANCE_REMOVED: _X,
				IX2_ELEMENT_STATE_CHANGED: mX,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: yX,
				IX2_VIEWPORT_WIDTH_CHANGED: IX,
				IX2_MEDIA_QUERIES_DEFINED: TX
			} = Y_.IX2EngineActionTypes,
			{
				reifyState: bX
			} = rX.IX2VanillaUtils,
			OX = e => ({
				type: nX,
				payload: (0, z_.default)({}, bX(e))
			});
		le.rawDataImported = OX;
		var wX = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: iX,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		});
		le.sessionInitialized = wX;
		var SX = () => ({
			type: oX
		});
		le.sessionStarted = SX;
		var AX = () => ({
			type: aX
		});
		le.sessionStopped = AX;
		var RX = ({
			rawData: e,
			defer: t
		}) => ({
			type: sX,
			payload: {
				defer: t,
				rawData: e
			}
		});
		le.previewRequested = RX;
		var xX = ({
			actionTypeId: e = Y_.ActionTypeConsts.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: o,
			immediate: i,
			testManual: a,
			verbose: s,
			rawData: c
		}) => ({
			type: uX,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: o,
				immediate: i,
				verbose: s,
				rawData: c
			}
		});
		le.playbackRequested = xX;
		var CX = e => ({
			type: cX,
			payload: {
				actionListId: e
			}
		});
		le.stopRequested = CX;
		var NX = () => ({
			type: lX
		});
		le.clearRequested = NX;
		var LX = (e, t) => ({
			type: fX,
			payload: {
				target: e,
				listenerParams: t
			}
		});
		le.eventListenerAdded = LX;
		var qX = (e = 1) => ({
			type: dX,
			payload: {
				step: e
			}
		});
		le.testFrameRendered = qX;
		var PX = (e, t) => ({
			type: pX,
			payload: {
				stateKey: e,
				newState: t
			}
		});
		le.eventStateChanged = PX;
		var DX = (e, t) => ({
			type: vX,
			payload: {
				now: e,
				parameters: t
			}
		});
		le.animationFrameChanged = DX;
		var MX = (e, t) => ({
			type: hX,
			payload: {
				key: e,
				value: t
			}
		});
		le.parameterChanged = MX;
		var FX = e => ({
			type: gX,
			payload: (0, z_.default)({}, e)
		});
		le.instanceAdded = FX;
		var GX = (e, t) => ({
			type: EX,
			payload: {
				instanceId: e,
				time: t
			}
		});
		le.instanceStarted = GX;
		var XX = e => ({
			type: _X,
			payload: {
				instanceId: e
			}
		});
		le.instanceRemoved = XX;
		var UX = (e, t, r, n) => ({
			type: mX,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		});
		le.elementStateChanged = UX;
		var WX = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: yX,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		});
		le.actionListPlaybackChanged = WX;
		var VX = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: IX,
			payload: {
				width: e,
				mediaQueries: t
			}
		});
		le.viewportWidthChanged = VX;
		var BX = () => ({
			type: TX
		});
		le.mediaQueriesDefined = BX
	});
	var Z_ = u(De => {
		"use strict";
		Object.defineProperty(De, "__esModule", {
			value: !0
		});
		De.elementContains = tU;
		De.getChildElements = nU;
		De.getClosestElement = void 0;
		De.getProperty = QX;
		De.getQuerySelector = ZX;
		De.getRefType = aU;
		De.getSiblingElements = iU;
		De.getStyle = YX;
		De.getValidDocument = JX;
		De.isSiblingNode = rU;
		De.matchSelector = $X;
		De.queryDocument = eU;
		De.setStyle = zX;
		var kX = kt(),
			HX = ke(),
			{
				ELEMENT_MATCHES: is
			} = kX.IX2BrowserSupport,
			{
				IX2_ID_DELIMITER: Q_,
				HTML_ELEMENT: jX,
				PLAIN_OBJECT: KX,
				WF_PAGE: $_
			} = HX.IX2EngineConstants;

		function zX(e, t, r) {
			e.style[t] = r
		}

		function YX(e, t) {
			return e.style[t]
		}

		function QX(e, t) {
			return e[t]
		}

		function $X(e) {
			return t => t[is](e)
		}

		function ZX({
			id: e,
			selector: t
		}) {
			if (e) {
				let r = e;
				if (e.indexOf(Q_) !== -1) {
					let n = e.split(Q_),
						o = n[0];
					if (r = n[1], o !== document.documentElement.getAttribute($_)) return null
				}
				return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
			}
			return t
		}

		function JX(e) {
			return e == null || e === document.documentElement.getAttribute($_) ? document : null
		}

		function eU(e, t) {
			return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
		}

		function tU(e, t) {
			return e.contains(t)
		}

		function rU(e, t) {
			return e !== t && e.parentNode === t.parentNode
		}

		function nU(e) {
			let t = [];
			for (let r = 0, {
					length: n
				} = e || []; r < n; r++) {
				let {
					children: o
				} = e[r], {
					length: i
				} = o;
				if (i)
					for (let a = 0; a < i; a++) t.push(o[a])
			}
			return t
		}

		function iU(e = []) {
			let t = [],
				r = [];
			for (let n = 0, {
					length: o
				} = e; n < o; n++) {
				let {
					parentNode: i
				} = e[n];
				if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1) continue;
				r.push(i);
				let a = i.firstElementChild;
				for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
			}
			return t
		}
		var oU = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[is] && r[is](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		};
		De.getClosestElement = oU;

		function aU(e) {
			return e != null && typeof e == "object" ? e instanceof Element ? jX : KX : null
		}
	});
	var os = u((kK, em) => {
		var sU = dt(),
			J_ = Object.create,
			uU = function() {
				function e() {}
				return function(t) {
					if (!sU(t)) return {};
					if (J_) return J_(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		em.exports = uU
	});
	var Ti = u((HK, tm) => {
		function cU() {}
		tm.exports = cU
	});
	var Oi = u((jK, rm) => {
		var lU = os(),
			fU = Ti();

		function bi(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		bi.prototype = lU(fU.prototype);
		bi.prototype.constructor = bi;
		rm.exports = bi
	});
	var am = u((KK, om) => {
		var nm = or(),
			dU = kr(),
			pU = qe(),
			im = nm ? nm.isConcatSpreadable : void 0;

		function vU(e) {
			return pU(e) || dU(e) || !!(im && e && e[im])
		}
		om.exports = vU
	});
	var cm = u((zK, um) => {
		var hU = jn(),
			gU = am();

		function sm(e, t, r, n, o) {
			var i = -1,
				a = e.length;
			for (r || (r = gU), o || (o = []); ++i < a;) {
				var s = e[i];
				t > 0 && r(s) ? t > 1 ? sm(s, t - 1, r, n, o) : hU(o, s) : n || (o[o.length] = s)
			}
			return o
		}
		um.exports = sm
	});
	var fm = u((YK, lm) => {
		var EU = cm();

		function _U(e) {
			var t = e == null ? 0 : e.length;
			return t ? EU(e, 1) : []
		}
		lm.exports = _U
	});
	var pm = u((QK, dm) => {
		function mU(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		dm.exports = mU
	});
	var gm = u(($K, hm) => {
		var yU = pm(),
			vm = Math.max;

		function IU(e, t, r) {
			return t = vm(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, o = -1, i = vm(n.length - t, 0), a = Array(i); ++o < i;) a[o] = n[t + o];
					o = -1;
					for (var s = Array(t + 1); ++o < t;) s[o] = n[o];
					return s[t] = r(a), yU(e, this, s)
				}
		}
		hm.exports = IU
	});
	var _m = u((ZK, Em) => {
		function TU(e) {
			return function() {
				return e
			}
		}
		Em.exports = TU
	});
	var Im = u((JK, ym) => {
		var bU = _m(),
			mm = ts(),
			OU = ii(),
			wU = mm ? function(e, t) {
				return mm(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: bU(t),
					writable: !0
				})
			} : OU;
		ym.exports = wU
	});
	var bm = u((ez, Tm) => {
		var SU = 800,
			AU = 16,
			RU = Date.now;

		function xU(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = RU(),
					o = AU - (n - r);
				if (r = n, o > 0) {
					if (++t >= SU) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		Tm.exports = xU
	});
	var wm = u((tz, Om) => {
		var CU = Im(),
			NU = bm(),
			LU = NU(CU);
		Om.exports = LU
	});
	var Am = u((rz, Sm) => {
		var qU = fm(),
			PU = gm(),
			DU = wm();

		function MU(e) {
			return DU(PU(e, void 0, qU), e + "")
		}
		Sm.exports = MU
	});
	var Cm = u((nz, xm) => {
		var Rm = ya(),
			FU = Rm && new Rm;
		xm.exports = FU
	});
	var Lm = u((iz, Nm) => {
		function GU() {}
		Nm.exports = GU
	});
	var as = u((oz, Pm) => {
		var qm = Cm(),
			XU = Lm(),
			UU = qm ? function(e) {
				return qm.get(e)
			} : XU;
		Pm.exports = UU
	});
	var Mm = u((az, Dm) => {
		var WU = {};
		Dm.exports = WU
	});
	var ss = u((sz, Gm) => {
		var Fm = Mm(),
			VU = Object.prototype,
			BU = VU.hasOwnProperty;

		function kU(e) {
			for (var t = e.name + "", r = Fm[t], n = BU.call(Fm, t) ? r.length : 0; n--;) {
				var o = r[n],
					i = o.func;
				if (i == null || i == e) return o.name
			}
			return t
		}
		Gm.exports = kU
	});
	var Si = u((uz, Xm) => {
		var HU = os(),
			jU = Ti(),
			KU = 4294967295;

		function wi(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = KU, this.__views__ = []
		}
		wi.prototype = HU(jU.prototype);
		wi.prototype.constructor = wi;
		Xm.exports = wi
	});
	var Wm = u((cz, Um) => {
		function zU(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		Um.exports = zU
	});
	var Bm = u((lz, Vm) => {
		var YU = Si(),
			QU = Oi(),
			$U = Wm();

		function ZU(e) {
			if (e instanceof YU) return e.clone();
			var t = new QU(e.__wrapped__, e.__chain__);
			return t.__actions__ = $U(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		Vm.exports = ZU
	});
	var jm = u((fz, Hm) => {
		var JU = Si(),
			km = Oi(),
			eW = Ti(),
			tW = qe(),
			rW = At(),
			nW = Bm(),
			iW = Object.prototype,
			oW = iW.hasOwnProperty;

		function Ai(e) {
			if (rW(e) && !tW(e) && !(e instanceof JU)) {
				if (e instanceof km) return e;
				if (oW.call(e, "__wrapped__")) return nW(e)
			}
			return new km(e)
		}
		Ai.prototype = eW.prototype;
		Ai.prototype.constructor = Ai;
		Hm.exports = Ai
	});
	var zm = u((dz, Km) => {
		var aW = Si(),
			sW = as(),
			uW = ss(),
			cW = jm();

		function lW(e) {
			var t = uW(e),
				r = cW[t];
			if (typeof r != "function" || !(t in aW.prototype)) return !1;
			if (e === r) return !0;
			var n = sW(r);
			return !!n && e === n[0]
		}
		Km.exports = lW
	});
	var Zm = u((pz, $m) => {
		var Ym = Oi(),
			fW = Am(),
			dW = as(),
			us = ss(),
			pW = qe(),
			Qm = zm(),
			vW = "Expected a function",
			hW = 8,
			gW = 32,
			EW = 128,
			_W = 256;

		function mW(e) {
			return fW(function(t) {
				var r = t.length,
					n = r,
					o = Ym.prototype.thru;
				for (e && t.reverse(); n--;) {
					var i = t[n];
					if (typeof i != "function") throw new TypeError(vW);
					if (o && !a && us(i) == "wrapper") var a = new Ym([], !0)
				}
				for (n = a ? n : r; ++n < r;) {
					i = t[n];
					var s = us(i),
						c = s == "wrapper" ? dW(i) : void 0;
					c && Qm(c[0]) && c[1] == (EW | hW | gW | _W) && !c[4].length && c[9] == 1 ? a = a[us(c[0])].apply(a, c[3]) : a = i.length == 1 && Qm(i) ? a[s]() : a.thru(i)
				}
				return function() {
					var h = arguments,
						y = h[0];
					if (a && h.length == 1 && pW(y)) return a.plant(y).value();
					for (var d = 0, I = r ? t[d].apply(this, h) : y; ++d < r;) I = t[d].call(this, I);
					return I
				}
			})
		}
		$m.exports = mW
	});
	var ey = u((vz, Jm) => {
		var yW = Zm(),
			IW = yW();
		Jm.exports = IW
	});
	var ry = u((hz, ty) => {
		function TW(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		ty.exports = TW
	});
	var iy = u((gz, ny) => {
		var bW = ry(),
			cs = oi();

		function OW(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = cs(r), r = r === r ? r : 0), t !== void 0 && (t = cs(t), t = t === t ? t : 0), bW(cs(e), t, r)
		}
		ny.exports = OW
	});
	var Ty = u(Li => {
		"use strict";
		var Ni = ct().default;
		Object.defineProperty(Li, "__esModule", {
			value: !0
		});
		Li.default = void 0;
		var ze = Ni(Gr()),
			wW = Ni(ey()),
			SW = Ni(ni()),
			AW = Ni(iy()),
			Ht = ke(),
			ls = vs(),
			Ri = Ii(),
			RW = kt(),
			{
				MOUSE_CLICK: xW,
				MOUSE_SECOND_CLICK: CW,
				MOUSE_DOWN: NW,
				MOUSE_UP: LW,
				MOUSE_OVER: qW,
				MOUSE_OUT: PW,
				DROPDOWN_CLOSE: DW,
				DROPDOWN_OPEN: MW,
				SLIDER_ACTIVE: FW,
				SLIDER_INACTIVE: GW,
				TAB_ACTIVE: XW,
				TAB_INACTIVE: UW,
				NAVBAR_CLOSE: WW,
				NAVBAR_OPEN: VW,
				MOUSE_MOVE: BW,
				PAGE_SCROLL_DOWN: py,
				SCROLL_INTO_VIEW: vy,
				SCROLL_OUT_OF_VIEW: kW,
				PAGE_SCROLL_UP: HW,
				SCROLLING_IN_VIEW: jW,
				PAGE_FINISH: hy,
				ECOMMERCE_CART_CLOSE: KW,
				ECOMMERCE_CART_OPEN: zW,
				PAGE_START: gy,
				PAGE_SCROLL: YW
			} = Ht.EventTypeConsts,
			fs = "COMPONENT_ACTIVE",
			Ey = "COMPONENT_INACTIVE",
			{
				COLON_DELIMITER: oy
			} = Ht.IX2EngineConstants,
			{
				getNamespacedParameterId: ay
			} = RW.IX2VanillaUtils,
			_y = e => t => typeof t == "object" && e(t) ? !0 : t,
			un = _y(({
				element: e,
				nativeEvent: t
			}) => e === t.target),
			QW = _y(({
				element: e,
				nativeEvent: t
			}) => e.contains(t.target)),
			gt = (0, wW.default)([un, QW]),
			my = (e, t) => {
				if (t) {
					let {
						ixData: r
					} = e.getState(), {
						events: n
					} = r, o = n[t];
					if (o && !ZW[o.eventTypeId]) return o
				}
				return null
			},
			$W = ({
				store: e,
				event: t
			}) => {
				let {
					action: r
				} = t, {
					autoStopEventId: n
				} = r.config;
				return !!my(e, n)
			},
			je = ({
				store: e,
				event: t,
				element: r,
				eventStateKey: n
			}, o) => {
				let {
					action: i,
					id: a
				} = t, {
					actionListId: s,
					autoStopEventId: c
				} = i.config, h = my(e, c);
				return h && (0, ls.stopActionGroup)({
					store: e,
					eventId: c,
					eventTarget: r,
					eventStateKey: c + oy + n.split(oy)[1],
					actionListId: (0, SW.default)(h, "action.config.actionListId")
				}), (0, ls.stopActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: s
				}), (0, ls.startActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: s
				}), o
			},
			rt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
			cn = {
				handler: rt(gt, je)
			},
			yy = (0, ze.default)({}, cn, {
				types: [fs, Ey].join(" ")
			}),
			ds = [{
				target: window,
				types: "resize orientationchange",
				throttle: !0
			}, {
				target: document,
				types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
				throttle: !0
			}],
			sy = "mouseover mouseout",
			ps = {
				types: ds
			},
			ZW = {
				PAGE_START: gy,
				PAGE_FINISH: hy
			},
			sn = (() => {
				let e = window.pageXOffset !== void 0,
					r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
				return () => ({
					scrollLeft: e ? window.pageXOffset : r.scrollLeft,
					scrollTop: e ? window.pageYOffset : r.scrollTop,
					stiffScrollTop: (0, AW.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
					scrollWidth: r.scrollWidth,
					scrollHeight: r.scrollHeight,
					clientWidth: r.clientWidth,
					clientHeight: r.clientHeight,
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight
				})
			})(),
			JW = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
			eV = ({
				element: e,
				nativeEvent: t
			}) => {
				let {
					type: r,
					target: n,
					relatedTarget: o
				} = t, i = e.contains(n);
				if (r === "mouseover" && i) return !0;
				let a = e.contains(o);
				return !!(r === "mouseout" && i && a)
			},
			tV = e => {
				let {
					element: t,
					event: {
						config: r
					}
				} = e, {
					clientWidth: n,
					clientHeight: o
				} = sn(), i = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
				return JW(t.getBoundingClientRect(), {
					left: 0,
					top: c,
					right: n,
					bottom: o - c
				})
			},
			Iy = e => (t, r) => {
				let {
					type: n
				} = t.nativeEvent, o = [fs, Ey].indexOf(n) !== -1 ? n === fs : r.isActive, i = (0, ze.default)({}, r, {
					isActive: o
				});
				return (!r || i.isActive !== r.isActive) && e(t, i) || i
			},
			uy = e => (t, r) => {
				let n = {
					elementHovered: eV(t)
				};
				return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
			},
			rV = e => (t, r) => {
				let n = (0, ze.default)({}, r, {
					elementVisible: tV(t)
				});
				return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
			},
			cy = e => (t, r = {}) => {
				let {
					stiffScrollTop: n,
					scrollHeight: o,
					innerHeight: i
				} = sn(), {
					event: {
						config: a,
						eventTypeId: s
					}
				} = t, {
					scrollOffsetValue: c,
					scrollOffsetUnit: h
				} = a, y = h === "PX", d = o - i, I = Number((n / d).toFixed(2));
				if (r && r.percentTop === I) return r;
				let _ = (y ? c : i * (c || 0) / 100) / d,
					m, w, x = 0;
				r && (m = I > r.percentTop, w = r.scrollingDown !== m, x = w ? I : r.anchorTop);
				let R = s === py ? I >= x + _ : I <= x - _,
					N = (0, ze.default)({}, r, {
						percentTop: I,
						inBounds: R,
						anchorTop: x,
						scrollingDown: m
					});
				return r && R && (w || N.inBounds !== r.inBounds) && e(t, N) || N
			},
			nV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
			iV = e => (t, r) => {
				let n = {
					finished: document.readyState === "complete"
				};
				return n.finished && !(r && r.finshed) && e(t), n
			},
			oV = e => (t, r) => {
				let n = {
					started: !0
				};
				return r || e(t), n
			},
			ly = e => (t, r = {
				clickCount: 0
			}) => {
				let n = {
					clickCount: r.clickCount % 2 + 1
				};
				return n.clickCount !== r.clickCount && e(t, n) || n
			},
			xi = (e = !0) => (0, ze.default)({}, yy, {
				handler: rt(e ? gt : un, Iy((t, r) => r.isActive ? cn.handler(t, r) : r))
			}),
			Ci = (e = !0) => (0, ze.default)({}, yy, {
				handler: rt(e ? gt : un, Iy((t, r) => r.isActive ? r : cn.handler(t, r)))
			}),
			fy = (0, ze.default)({}, ps, {
				handler: rV((e, t) => {
					let {
						elementVisible: r
					} = t, {
						event: n,
						store: o
					} = e, {
						ixData: i
					} = o.getState(), {
						events: a
					} = i;
					return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === vy === r ? (je(e), (0, ze.default)({}, t, {
						triggered: !0
					})) : t
				})
			}),
			dy = .05,
			aV = {
				[FW]: xi(),
				[GW]: Ci(),
				[MW]: xi(),
				[DW]: Ci(),
				[VW]: xi(!1),
				[WW]: Ci(!1),
				[XW]: xi(),
				[UW]: Ci(),
				[zW]: {
					types: "ecommerce-cart-open",
					handler: rt(gt, je)
				},
				[KW]: {
					types: "ecommerce-cart-close",
					handler: rt(gt, je)
				},
				[xW]: {
					types: "click",
					handler: rt(gt, ly((e, {
						clickCount: t
					}) => {
						$W(e) ? t === 1 && je(e) : je(e)
					}))
				},
				[CW]: {
					types: "click",
					handler: rt(gt, ly((e, {
						clickCount: t
					}) => {
						t === 2 && je(e)
					}))
				},
				[NW]: (0, ze.default)({}, cn, {
					types: "mousedown"
				}),
				[LW]: (0, ze.default)({}, cn, {
					types: "mouseup"
				}),
				[qW]: {
					types: sy,
					handler: rt(gt, uy((e, t) => {
						t.elementHovered && je(e)
					}))
				},
				[PW]: {
					types: sy,
					handler: rt(gt, uy((e, t) => {
						t.elementHovered || je(e)
					}))
				},
				[BW]: {
					types: "mousemove mouseout scroll",
					handler: ({
						store: e,
						element: t,
						eventConfig: r,
						nativeEvent: n,
						eventStateKey: o
					}, i = {
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0
					}) => {
						let {
							basedOn: a,
							selectedAxis: s,
							continuousParameterGroupId: c,
							reverse: h,
							restingState: y = 0
						} = r, {
							clientX: d = i.clientX,
							clientY: I = i.clientY,
							pageX: _ = i.pageX,
							pageY: m = i.pageY
						} = n, w = s === "X_AXIS", x = n.type === "mouseout", R = y / 100, N = c, A = !1;
						switch (a) {
							case Ht.EventBasedOn.VIEWPORT: {
								R = w ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(I, window.innerHeight) / window.innerHeight;
								break
							}
							case Ht.EventBasedOn.PAGE: {
								let {
									scrollLeft: M,
									scrollTop: q,
									scrollWidth: D,
									scrollHeight: B
								} = sn();
								R = w ? Math.min(M + _, D) / D : Math.min(q + m, B) / B;
								break
							}
							case Ht.EventBasedOn.ELEMENT:
							default: {
								N = ay(o, c);
								let M = n.type.indexOf("mouse") === 0;
								if (M && gt({
										element: t,
										nativeEvent: n
									}) !== !0) break;
								let q = t.getBoundingClientRect(),
									{
										left: D,
										top: B,
										width: Q,
										height: Z
									} = q;
								if (!M && !nV({
										left: d,
										top: I
									}, q)) break;
								A = !0, R = w ? (d - D) / Q : (I - B) / Z;
								break
							}
						}
						return x && (R > 1 - dy || R < dy) && (R = Math.round(R)), (a !== Ht.EventBasedOn.ELEMENT || A || A !== i.elementHovered) && (R = h ? 1 - R : R, e.dispatch((0, Ri.parameterChanged)(N, R))), {
							elementHovered: A,
							clientX: d,
							clientY: I,
							pageX: _,
							pageY: m
						}
					}
				},
				[YW]: {
					types: ds,
					handler: ({
						store: e,
						eventConfig: t
					}) => {
						let {
							continuousParameterGroupId: r,
							reverse: n
						} = t, {
							scrollTop: o,
							scrollHeight: i,
							clientHeight: a
						} = sn(), s = o / (i - a);
						s = n ? 1 - s : s, e.dispatch((0, Ri.parameterChanged)(r, s))
					}
				},
				[jW]: {
					types: ds,
					handler: ({
						element: e,
						store: t,
						eventConfig: r,
						eventStateKey: n
					}, o = {
						scrollPercent: 0
					}) => {
						let {
							scrollLeft: i,
							scrollTop: a,
							scrollWidth: s,
							scrollHeight: c,
							clientHeight: h
						} = sn(), {
							basedOn: y,
							selectedAxis: d,
							continuousParameterGroupId: I,
							startsEntering: _,
							startsExiting: m,
							addEndOffset: w,
							addStartOffset: x,
							addOffsetValue: R = 0,
							endOffsetValue: N = 0
						} = r, A = d === "X_AXIS";
						if (y === Ht.EventBasedOn.VIEWPORT) {
							let M = A ? i / s : a / c;
							return M !== o.scrollPercent && t.dispatch((0, Ri.parameterChanged)(I, M)), {
								scrollPercent: M
							}
						} else {
							let M = ay(n, I),
								q = e.getBoundingClientRect(),
								D = (x ? R : 0) / 100,
								B = (w ? N : 0) / 100;
							D = _ ? D : 1 - D, B = m ? B : 1 - B;
							let Q = q.top + Math.min(q.height * D, h),
								ae = q.top + q.height * B - Q,
								re = Math.min(h + ae, c),
								b = Math.min(Math.max(0, h - Q), re) / re;
							return b !== o.scrollPercent && t.dispatch((0, Ri.parameterChanged)(M, b)), {
								scrollPercent: b
							}
						}
					}
				},
				[vy]: fy,
				[kW]: fy,
				[py]: (0, ze.default)({}, ps, {
					handler: cy((e, t) => {
						t.scrollingDown && je(e)
					})
				}),
				[HW]: (0, ze.default)({}, ps, {
					handler: cy((e, t) => {
						t.scrollingDown || je(e)
					})
				}),
				[hy]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: rt(un, iV(je))
				},
				[gy]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: rt(un, oV(je))
				}
			};
		Li.default = aV
	});
	var vs = u(Lt => {
		"use strict";
		var it = ct().default,
			sV = Qt().default;
		Object.defineProperty(Lt, "__esModule", {
			value: !0
		});
		Lt.observeRequests = MV;
		Lt.startActionGroup = Is;
		Lt.startEngine = Mi;
		Lt.stopActionGroup = ys;
		Lt.stopAllActionGroups = Ny;
		Lt.stopEngine = Fi;
		var uV = it(Gr()),
			cV = it(FE()),
			lV = it(Ma()),
			Nt = it(ni()),
			fV = it(r_()),
			dV = it(C_()),
			pV = it(L_()),
			vV = it(P_()),
			ln = it(U_()),
			hV = it(K_()),
			nt = ke(),
			wy = kt(),
			Oe = Ii(),
			Re = sV(Z_()),
			gV = it(Ty()),
			EV = ["store", "computedStyle"],
			_V = Object.keys(nt.QuickEffectIds),
			hs = e => _V.includes(e),
			{
				COLON_DELIMITER: gs,
				BOUNDARY_SELECTOR: qi,
				HTML_ELEMENT: Sy,
				RENDER_GENERAL: mV,
				W_MOD_IX: by
			} = nt.IX2EngineConstants,
			{
				getAffectedElements: Pi,
				getElementId: yV,
				getDestinationValues: Es,
				observeStore: jt,
				getInstanceId: IV,
				renderHTMLElement: TV,
				clearAllStyles: Ay,
				getMaxDurationItemIndex: bV,
				getComputedStyle: OV,
				getInstanceOrigin: wV,
				reduceListToGroup: SV,
				shouldNamespaceEventParameter: AV,
				getNamespacedParameterId: RV,
				shouldAllowMediaQuery: Di,
				cleanupHTMLElement: xV,
				stringifyTarget: CV,
				mediaQueriesEqual: NV,
				shallowEqual: LV
			} = wy.IX2VanillaUtils,
			{
				isPluginType: _s,
				createPluginInstance: ms,
				getPluginDuration: qV
			} = wy.IX2VanillaPlugins,
			Oy = navigator.userAgent,
			PV = Oy.match(/iPad/i) || Oy.match(/iPhone/),
			DV = 12;

		function MV(e) {
			jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.preview,
				onChange: XV
			}), jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.playback,
				onChange: UV
			}), jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.stop,
				onChange: WV
			}), jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.clear,
				onChange: VV
			})
		}

		function FV(e) {
			jt({
				store: e,
				select: ({
					ixSession: t
				}) => t.mediaQueryKey,
				onChange: () => {
					Fi(e), Ay({
						store: e,
						elementApi: Re
					}), Mi({
						store: e,
						allowEvents: !0
					}), Ry()
				}
			})
		}

		function GV(e, t) {
			let r = jt({
				store: e,
				select: ({
					ixSession: n
				}) => n.tick,
				onChange: n => {
					t(n), r()
				}
			})
		}

		function XV({
			rawData: e,
			defer: t
		}, r) {
			let n = () => {
				Mi({
					store: r,
					rawData: e,
					allowEvents: !0
				}), Ry()
			};
			t ? setTimeout(n, 0) : n()
		}

		function Ry() {
			document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
		}

		function UV(e, t) {
			let {
				actionTypeId: r,
				actionListId: n,
				actionItemId: o,
				eventId: i,
				allowEvents: a,
				immediate: s,
				testManual: c,
				verbose: h = !0
			} = e, {
				rawData: y
			} = e;
			if (n && o && y && s) {
				let d = y.actionLists[n];
				d && (y = SV({
					actionList: d,
					actionItemId: o,
					rawData: y
				}))
			}
			if (Mi({
					store: t,
					rawData: y,
					allowEvents: a,
					testManual: c
				}), n && r === nt.ActionTypeConsts.GENERAL_START_ACTION || hs(r)) {
				ys({
					store: t,
					actionListId: n
				}), Cy({
					store: t,
					actionListId: n,
					eventId: i
				});
				let d = Is({
					store: t,
					eventId: i,
					actionListId: n,
					immediate: s,
					verbose: h
				});
				h && d && t.dispatch((0, Oe.actionListPlaybackChanged)({
					actionListId: n,
					isPlaying: !s
				}))
			}
		}

		function WV({
			actionListId: e
		}, t) {
			e ? ys({
				store: t,
				actionListId: e
			}) : Ny({
				store: t
			}), Fi(t)
		}

		function VV(e, t) {
			Fi(t), Ay({
				store: t,
				elementApi: Re
			})
		}

		function Mi({
			store: e,
			rawData: t,
			allowEvents: r,
			testManual: n
		}) {
			let {
				ixSession: o
			} = e.getState();
			t && e.dispatch((0, Oe.rawDataImported)(t)), o.active || (e.dispatch((0, Oe.sessionInitialized)({
				hasBoundaryNodes: !!document.querySelector(qi),
				reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
			})), r && (zV(e), BV(), e.getState().ixSession.hasDefinedMediaQueries && FV(e)), e.dispatch((0, Oe.sessionStarted)()), kV(e, n))
		}

		function BV() {
			let {
				documentElement: e
			} = document;
			e.className.indexOf(by) === -1 && (e.className += ` ${by}`)
		}

		function kV(e, t) {
			let r = n => {
				let {
					ixSession: o,
					ixParameters: i
				} = e.getState();
				o.active && (e.dispatch((0, Oe.animationFrameChanged)(n, i)), t ? GV(e, r) : requestAnimationFrame(r))
			};
			r(window.performance.now())
		}

		function Fi(e) {
			let {
				ixSession: t
			} = e.getState();
			if (t.active) {
				let {
					eventListeners: r
				} = t;
				r.forEach(HV), e.dispatch((0, Oe.sessionStopped)())
			}
		}

		function HV({
			target: e,
			listenerParams: t
		}) {
			e.removeEventListener.apply(e, t)
		}

		function jV({
			store: e,
			eventStateKey: t,
			eventTarget: r,
			eventId: n,
			eventConfig: o,
			actionListId: i,
			parameterGroup: a,
			smoothing: s,
			restingValue: c
		}) {
			let {
				ixData: h,
				ixSession: y
			} = e.getState(), {
				events: d
			} = h, I = d[n], {
				eventTypeId: _
			} = I, m = {}, w = {}, x = [], {
				continuousActionGroups: R
			} = a, {
				id: N
			} = a;
			AV(_, o) && (N = RV(t, N));
			let A = y.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
			R.forEach(M => {
				let {
					keyframe: q,
					actionItems: D
				} = M;
				D.forEach(B => {
					let {
						actionTypeId: Q
					} = B, {
						target: Z
					} = B.config;
					if (!Z) return;
					let ae = Z.boundaryMode ? A : null,
						re = CV(Z) + gs + Q;
					if (w[re] = KV(w[re], q, B), !m[re]) {
						m[re] = !0;
						let {
							config: W
						} = B;
						Pi({
							config: W,
							event: I,
							eventTarget: r,
							elementRoot: ae,
							elementApi: Re
						}).forEach(b => {
							x.push({
								element: b,
								key: re
							})
						})
					}
				})
			}), x.forEach(({
				element: M,
				key: q
			}) => {
				let D = w[q],
					B = (0, Nt.default)(D, "[0].actionItems[0]", {}),
					{
						actionTypeId: Q
					} = B,
					Z = _s(Q) ? ms(Q)(M, B) : null,
					ae = Es({
						element: M,
						actionItem: B,
						elementApi: Re
					}, Z);
				Ts({
					store: e,
					element: M,
					eventId: n,
					actionListId: i,
					actionItem: B,
					destination: ae,
					continuous: !0,
					parameterId: N,
					actionGroups: D,
					smoothing: s,
					restingValue: c,
					pluginInstance: Z
				})
			})
		}

		function KV(e = [], t, r) {
			let n = [...e],
				o;
			return n.some((i, a) => i.keyframe === t ? (o = a, !0) : !1), o == null && (o = n.length, n.push({
				keyframe: t,
				actionItems: []
			})), n[o].actionItems.push(r), n
		}

		function zV(e) {
			let {
				ixData: t
			} = e.getState(), {
				eventTypeMap: r
			} = t;
			xy(e), (0, ln.default)(r, (o, i) => {
				let a = gV.default[i];
				if (!a) {
					console.warn(`IX2 event type not configured: ${i}`);
					return
				}
				eB({
					logic: a,
					store: e,
					events: o
				})
			});
			let {
				ixSession: n
			} = e.getState();
			n.eventListeners.length && QV(e)
		}
		var YV = ["resize", "orientationchange"];

		function QV(e) {
			let t = () => {
				xy(e)
			};
			YV.forEach(r => {
				window.addEventListener(r, t), e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]))
			}), t()
		}

		function xy(e) {
			let {
				ixSession: t,
				ixData: r
			} = e.getState(), n = window.innerWidth;
			if (n !== t.viewportWidth) {
				let {
					mediaQueries: o
				} = r;
				e.dispatch((0, Oe.viewportWidthChanged)({
					width: n,
					mediaQueries: o
				}))
			}
		}
		var $V = (e, t) => (0, dV.default)((0, vV.default)(e, t), pV.default),
			ZV = (e, t) => {
				(0, ln.default)(e, (r, n) => {
					r.forEach((o, i) => {
						let a = n + gs + i;
						t(o, n, a)
					})
				})
			},
			JV = e => {
				let t = {
					target: e.target,
					targets: e.targets
				};
				return Pi({
					config: t,
					elementApi: Re
				})
			};

		function eB({
			logic: e,
			store: t,
			events: r
		}) {
			tB(r);
			let {
				types: n,
				handler: o
			} = e, {
				ixData: i
			} = t.getState(), {
				actionLists: a
			} = i, s = $V(r, JV);
			if (!(0, fV.default)(s)) return;
			(0, ln.default)(s, (d, I) => {
				let _ = r[I],
					{
						action: m,
						id: w,
						mediaQueries: x = i.mediaQueryKeys
					} = _,
					{
						actionListId: R
					} = m.config;
				NV(x, i.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()), m.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(_.config) ? _.config : [_.config]).forEach(A => {
					let {
						continuousParameterGroupId: M
					} = A, q = (0, Nt.default)(a, `${R}.continuousParameterGroups`, []), D = (0, lV.default)(q, ({
						id: Z
					}) => Z === M), B = (A.smoothing || 0) / 100, Q = (A.restingState || 0) / 100;
					D && d.forEach((Z, ae) => {
						let re = w + gs + ae;
						jV({
							store: t,
							eventStateKey: re,
							eventTarget: Z,
							eventId: w,
							eventConfig: A,
							actionListId: R,
							parameterGroup: D,
							smoothing: B,
							restingValue: Q
						})
					})
				}), (m.actionTypeId === nt.ActionTypeConsts.GENERAL_START_ACTION || hs(m.actionTypeId)) && Cy({
					store: t,
					actionListId: R,
					eventId: w
				})
			});
			let c = d => {
					let {
						ixSession: I
					} = t.getState();
					ZV(s, (_, m, w) => {
						let x = r[m],
							R = I.eventState[w],
							{
								action: N,
								mediaQueries: A = i.mediaQueryKeys
							} = x;
						if (!Di(A, I.mediaQueryKey)) return;
						let M = (q = {}) => {
							let D = o({
								store: t,
								element: _,
								event: x,
								eventConfig: q,
								nativeEvent: d,
								eventStateKey: w
							}, R);
							LV(D, R) || t.dispatch((0, Oe.eventStateChanged)(w, D))
						};
						N.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(M) : M()
					})
				},
				h = (0, hV.default)(c, DV),
				y = ({
					target: d = document,
					types: I,
					throttle: _
				}) => {
					I.split(" ").filter(Boolean).forEach(m => {
						let w = _ ? h : c;
						d.addEventListener(m, w), t.dispatch((0, Oe.eventListenerAdded)(d, [m, w]))
					})
				};
			Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e)
		}

		function tB(e) {
			if (!PV) return;
			let t = {},
				r = "";
			for (let n in e) {
				let {
					eventTypeId: o,
					target: i
				} = e[n], a = Re.getQuerySelector(i);
				t[a] || (o === nt.EventTypeConsts.MOUSE_CLICK || o === nt.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
			}
			if (r) {
				let n = document.createElement("style");
				n.textContent = r, document.body.appendChild(n)
			}
		}

		function Cy({
			store: e,
			actionListId: t,
			eventId: r
		}) {
			let {
				ixData: n,
				ixSession: o
			} = e.getState(), {
				actionLists: i,
				events: a
			} = n, s = a[r], c = i[t];
			if (c && c.useFirstGroupAsInitialState) {
				let h = (0, Nt.default)(c, "actionItemGroups[0].actionItems", []),
					y = (0, Nt.default)(s, "mediaQueries", n.mediaQueryKeys);
				if (!Di(y, o.mediaQueryKey)) return;
				h.forEach(d => {
					var I;
					let {
						config: _,
						actionTypeId: m
					} = d, w = (_ == null || (I = _.target) === null || I === void 0 ? void 0 : I.useEventTarget) === !0 ? {
						target: s.target,
						targets: s.targets
					} : _, x = Pi({
						config: w,
						event: s,
						elementApi: Re
					}), R = _s(m);
					x.forEach(N => {
						let A = R ? ms(m)(N, d) : null;
						Ts({
							destination: Es({
								element: N,
								actionItem: d,
								elementApi: Re
							}, A),
							immediate: !0,
							store: e,
							element: N,
							eventId: r,
							actionItem: d,
							actionListId: t,
							pluginInstance: A
						})
					})
				})
			}
		}

		function Ny({
			store: e
		}) {
			let {
				ixInstances: t
			} = e.getState();
			(0, ln.default)(t, r => {
				if (!r.continuous) {
					let {
						actionListId: n,
						verbose: o
					} = r;
					bs(r, e), o && e.dispatch((0, Oe.actionListPlaybackChanged)({
						actionListId: n,
						isPlaying: !1
					}))
				}
			})
		}

		function ys({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: o
		}) {
			let {
				ixInstances: i,
				ixSession: a
			} = e.getState(), s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null;
			(0, ln.default)(i, c => {
				let h = (0, Nt.default)(c, "actionItem.config.target.boundaryMode"),
					y = n ? c.eventStateKey === n : !0;
				if (c.actionListId === o && c.eventId === t && y) {
					if (s && h && !Re.elementContains(s, c.element)) return;
					bs(c, e), c.verbose && e.dispatch((0, Oe.actionListPlaybackChanged)({
						actionListId: o,
						isPlaying: !1
					}))
				}
			})
		}

		function Is({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: o,
			groupIndex: i = 0,
			immediate: a,
			verbose: s
		}) {
			var c;
			let {
				ixData: h,
				ixSession: y
			} = e.getState(), {
				events: d
			} = h, I = d[t] || {}, {
				mediaQueries: _ = h.mediaQueryKeys
			} = I, m = (0, Nt.default)(h, `actionLists.${o}`, {}), {
				actionItemGroups: w,
				useFirstGroupAsInitialState: x
			} = m;
			if (!w || !w.length) return !1;
			i >= w.length && (0, Nt.default)(I, "config.loop") && (i = 0), i === 0 && x && i++;
			let N = (i === 0 || i === 1 && x) && hs((c = I.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? I.config.delay : void 0,
				A = (0, Nt.default)(w, [i, "actionItems"], []);
			if (!A.length || !Di(_, y.mediaQueryKey)) return !1;
			let M = y.hasBoundaryNodes && r ? Re.getClosestElement(r, qi) : null,
				q = bV(A),
				D = !1;
			return A.forEach((B, Q) => {
				let {
					config: Z,
					actionTypeId: ae
				} = B, re = _s(ae), {
					target: W
				} = Z;
				if (!W) return;
				let b = W.boundaryMode ? M : null;
				Pi({
					config: Z,
					event: I,
					eventTarget: r,
					elementRoot: b,
					elementApi: Re
				}).forEach((X, U) => {
					let J = re ? ms(ae)(X, B) : null,
						ne = re ? qV(ae)(X, B) : null;
					D = !0;
					let G = q === Q && U === 0,
						k = OV({
							element: X,
							actionItem: B
						}),
						p = Es({
							element: X,
							actionItem: B,
							elementApi: Re
						}, J);
					Ts({
						store: e,
						element: X,
						actionItem: B,
						eventId: t,
						eventTarget: r,
						eventStateKey: n,
						actionListId: o,
						groupIndex: i,
						isCarrier: G,
						computedStyle: k,
						destination: p,
						immediate: a,
						verbose: s,
						pluginInstance: J,
						pluginDuration: ne,
						instanceDelay: N
					})
				})
			}), D
		}

		function Ts(e) {
			var t;
			let {
				store: r,
				computedStyle: n
			} = e, o = (0, cV.default)(e, EV), {
				element: i,
				actionItem: a,
				immediate: s,
				pluginInstance: c,
				continuous: h,
				restingValue: y,
				eventId: d
			} = o, I = !h, _ = IV(), {
				ixElements: m,
				ixSession: w,
				ixData: x
			} = r.getState(), R = yV(m, i), {
				refState: N
			} = m[R] || {}, A = Re.getRefType(i), M = w.reducedMotion && nt.ReducedMotionTypes[a.actionTypeId], q;
			if (M && h) switch ((t = x.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId) {
				case nt.EventTypeConsts.MOUSE_MOVE:
				case nt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
					q = y;
					break;
				default:
					q = .5;
					break
			}
			let D = wV(i, N, n, a, Re, c);
			if (r.dispatch((0, Oe.instanceAdded)((0, uV.default)({
					instanceId: _,
					elementId: R,
					origin: D,
					refType: A,
					skipMotion: M,
					skipToValue: q
				}, o))), Ly(document.body, "ix2-animation-started", _), s) {
				rB(r, _);
				return
			}
			jt({
				store: r,
				select: ({
					ixInstances: B
				}) => B[_],
				onChange: qy
			}), I && r.dispatch((0, Oe.instanceStarted)(_, w.tick))
		}

		function bs(e, t) {
			Ly(document.body, "ix2-animation-stopping", {
				instanceId: e.id,
				state: t.getState()
			});
			let {
				elementId: r,
				actionItem: n
			} = e, {
				ixElements: o
			} = t.getState(), {
				ref: i,
				refType: a
			} = o[r] || {};
			a === Sy && xV(i, n, Re), t.dispatch((0, Oe.instanceRemoved)(e.id))
		}

		function Ly(e, t, r) {
			let n = document.createEvent("CustomEvent");
			n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
		}

		function rB(e, t) {
			let {
				ixParameters: r
			} = e.getState();
			e.dispatch((0, Oe.instanceStarted)(t, 0)), e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
			let {
				ixInstances: n
			} = e.getState();
			qy(n[t], e)
		}

		function qy(e, t) {
			let {
				active: r,
				continuous: n,
				complete: o,
				elementId: i,
				actionItem: a,
				actionTypeId: s,
				renderType: c,
				current: h,
				groupIndex: y,
				eventId: d,
				eventTarget: I,
				eventStateKey: _,
				actionListId: m,
				isCarrier: w,
				styleProp: x,
				verbose: R,
				pluginInstance: N
			} = e, {
				ixData: A,
				ixSession: M
			} = t.getState(), {
				events: q
			} = A, D = q[d] || {}, {
				mediaQueries: B = A.mediaQueryKeys
			} = D;
			if (Di(B, M.mediaQueryKey) && (n || r || o)) {
				if (h || c === mV && o) {
					t.dispatch((0, Oe.elementStateChanged)(i, s, h, a));
					let {
						ixElements: Q
					} = t.getState(), {
						ref: Z,
						refType: ae,
						refState: re
					} = Q[i] || {}, W = re && re[s];
					switch (ae) {
						case Sy: {
							TV(Z, re, W, d, a, x, Re, c, N);
							break
						}
					}
				}
				if (o) {
					if (w) {
						let Q = Is({
							store: t,
							eventId: d,
							eventTarget: I,
							eventStateKey: _,
							actionListId: m,
							groupIndex: y + 1,
							verbose: R
						});
						R && !Q && t.dispatch((0, Oe.actionListPlaybackChanged)({
							actionListId: m,
							isPlaying: !1
						}))
					}
					bs(e, t)
				}
			}
		}
	});
	var Dy = u(yt => {
		"use strict";
		var nB = Qt().default,
			iB = ct().default;
		Object.defineProperty(yt, "__esModule", {
			value: !0
		});
		yt.actions = void 0;
		yt.destroy = Py;
		yt.init = cB;
		yt.setEnv = uB;
		yt.store = void 0;
		ef();
		var oB = Jo(),
			aB = iB(ME()),
			Os = vs(),
			sB = nB(Ii());
		yt.actions = sB;
		var Gi = (0, oB.createStore)(aB.default);
		yt.store = Gi;

		function uB(e) {
			e() && (0, Os.observeRequests)(Gi)
		}

		function cB(e) {
			Py(), (0, Os.startEngine)({
				store: Gi,
				rawData: e,
				allowEvents: !0
			})
		}

		function Py() {
			(0, Os.stopEngine)(Gi)
		}
	});
	var Xy = u((yz, Gy) => {
		var My = Xe(),
			Fy = Dy();
		Fy.setEnv(My.env);
		My.define("ix2", Gy.exports = function() {
			return Fy
		})
	});
	var Uy = u(ws => {
		"use strict";
		Object.defineProperty(ws, "__esModule", {
			value: !0
		});
		ws.default = lB;

		function lB(e, t, r, n, o, i, a, s, c, h, y, d, I) {
			return function(_) {
				e(_);
				var m = _.form,
					w = {
						name: m.attr("data-name") || m.attr("name") || "Untitled Form",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(m.html()),
						trackingCookies: n()
					};
				let x = m.attr("data-wf-flow");
				x && (w.wfFlow = x), o(_);
				var R = i(m, w.fields);
				if (R) return a(R);
				if (w.fileUploads = s(m), c(_), !h) {
					y(_);
					return
				}
				d.ajax({
					url: I,
					type: "POST",
					data: w,
					dataType: "json",
					crossDomain: !0
				}).done(function(N) {
					N && N.code === 200 && (_.success = !0), y(_)
				}).fail(function() {
					y(_)
				})
			}
		}
	});
	var Vy = u((Tz, Wy) => {
		var Xi = Xe();
		Xi.define("forms", Wy.exports = function(e, t) {
			var r = {},
				n = e(document),
				o, i = window.location,
				a = window.XDomainRequest && !window.atob,
				s = ".w-form",
				c, h = /e(-)?mail/i,
				y = /^\S+@\S+$/,
				d = window.alert,
				I = Xi.env(),
				_, m, w, x = /list-manage[1-9]?.com/i,
				R = t.debounce(function() {
					d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				N(), !I && !_ && M()
			};

			function N() {
				c = e("html").attr("data-wf-site"), m = "https://webflow.com/api/v1/form/" + c, a && m.indexOf("https://webflow.com") >= 0 && (m = m.replace("https://webflow.com", "https://formdata.webflow.com")), w = `${m}/signFile`, o = e(s + " form"), o.length && o.each(A)
			}

			function A(G, k) {
				var p = e(k),
					f = e.data(k, s);
				f || (f = e.data(k, s, {
					form: p
				})), q(f);
				var v = p.closest("div.w-form");
				f.done = v.find("> .w-form-done"), f.fail = v.find("> .w-form-fail"), f.fileUploads = v.find(".w-file-upload"), f.fileUploads.each(function(Y) {
					U(Y, f)
				});
				var g = f.form.attr("aria-label") || f.form.attr("data-name") || "Form";
				f.done.attr("aria-label") || f.form.attr("aria-label", g), f.done.attr("tabindex", "-1"), f.done.attr("role", "region"), f.done.attr("aria-label") || f.done.attr("aria-label", g + " success"), f.fail.attr("tabindex", "-1"), f.fail.attr("role", "region"), f.fail.attr("aria-label") || f.fail.attr("aria-label", g + " failure");
				var H = f.action = p.attr("action");
				if (f.handler = null, f.redirect = p.attr("data-redirect"), x.test(H)) {
					f.handler = b;
					return
				}
				if (!H) {
					if (c) {
						f.handler = (() => {
							let Y = Uy().default;
							return Y(q, i, Xi, ae, X, B, d, Q, D, c, F, e, m)
						})();
						return
					}
					R()
				}
			}

			function M() {
				_ = !0, n.on("submit", s + " form", function(Y) {
					var z = e.data(this, s);
					z.handler && (z.evt = Y, z.handler(z))
				});
				let G = ".w-checkbox-input",
					k = ".w-radio-input",
					p = "w--redirected-checked",
					f = "w--redirected-focus",
					v = "w--redirected-focus-visible",
					g = ":focus-visible, [data-wf-focus-visible]",
					H = [
						["checkbox", G],
						["radio", k]
					];
				n.on("change", s + ' form input[type="checkbox"]:not(' + G + ")", Y => {
					e(Y.target).siblings(G).toggleClass(p)
				}), n.on("change", s + ' form input[type="radio"]', Y => {
					e(`input[name="${Y.target.name}"]:not(${G})`).map((ee, he) => e(he).siblings(k).removeClass(p));
					let z = e(Y.target);
					z.hasClass("w-radio-input") || z.siblings(k).addClass(p)
				}), H.forEach(([Y, z]) => {
					n.on("focus", s + ` form input[type="${Y}"]:not(` + z + ")", ee => {
						e(ee.target).siblings(z).addClass(f), e(ee.target).filter(g).siblings(z).addClass(v)
					}), n.on("blur", s + ` form input[type="${Y}"]:not(` + z + ")", ee => {
						e(ee.target).siblings(z).removeClass(`${f} ${v}`)
					})
				})
			}

			function q(G) {
				var k = G.btn = G.form.find(':input[type="submit"]');
				G.wait = G.btn.attr("data-wait") || null, G.success = !1, k.prop("disabled", !1), G.label && k.val(G.label)
			}

			function D(G) {
				var k = G.btn,
					p = G.wait;
				k.prop("disabled", !0), p && (G.label = k.val(), k.val(p))
			}

			function B(G, k) {
				var p = null;
				return k = k || {}, G.find(':input:not([type="submit"]):not([type="file"])').each(function(f, v) {
					var g = e(v),
						H = g.attr("type"),
						Y = g.attr("data-name") || g.attr("name") || "Field " + (f + 1),
						z = g.val();
					if (H === "checkbox") z = g.is(":checked");
					else if (H === "radio") {
						if (k[Y] === null || typeof k[Y] == "string") return;
						z = G.find('input[name="' + g.attr("name") + '"]:checked').val() || null
					}
					typeof z == "string" && (z = e.trim(z)), k[Y] = z, p = p || re(g, H, Y, z)
				}), p
			}

			function Q(G) {
				var k = {};
				return G.find(':input[type="file"]').each(function(p, f) {
					var v = e(f),
						g = v.attr("data-name") || v.attr("name") || "File " + (p + 1),
						H = v.attr("data-value");
					typeof H == "string" && (H = e.trim(H)), k[g] = H
				}), k
			}
			let Z = {
				_mkto_trk: "marketo"
			};

			function ae() {
				return document.cookie.split("; ").reduce(function(k, p) {
					let f = p.split("="),
						v = f[0];
					if (v in Z) {
						let g = Z[v],
							H = f.slice(1).join("=");
						k[g] = H
					}
					return k
				}, {})
			}

			function re(G, k, p, f) {
				var v = null;
				return k === "password" ? v = "Passwords cannot be submitted." : G.attr("required") ? f ? h.test(G.attr("type")) && (y.test(f) || (v = "Please enter a valid email address for: " + p)) : v = "Please fill out the required field: " + p : p === "g-recaptcha-response" && !f && (v = "Please confirm you\u2019re not a robot."), v
			}

			function W(G) {
				X(G), F(G)
			}

			function b(G) {
				q(G);
				var k = G.form,
					p = {};
				if (/^https/.test(i.href) && !/^https/.test(G.action)) {
					k.attr("method", "post");
					return
				}
				X(G);
				var f = B(k, p);
				if (f) return d(f);
				D(G);
				var v;
				t.each(p, function(z, ee) {
					h.test(ee) && (p.EMAIL = z), /^((full[ _-]?)?name)$/i.test(ee) && (v = z), /^(first[ _-]?name)$/i.test(ee) && (p.FNAME = z), /^(last[ _-]?name)$/i.test(ee) && (p.LNAME = z)
				}), v && !p.FNAME && (v = v.split(" "), p.FNAME = v[0], p.LNAME = p.LNAME || v[1]);
				var g = G.action.replace("/post?", "/post-json?") + "&c=?",
					H = g.indexOf("u=") + 2;
				H = g.substring(H, g.indexOf("&", H));
				var Y = g.indexOf("id=") + 3;
				Y = g.substring(Y, g.indexOf("&", Y)), p["b_" + H + "_" + Y] = "", e.ajax({
					url: g,
					data: p,
					dataType: "jsonp"
				}).done(function(z) {
					G.success = z.result === "success" || /already/.test(z.msg), G.success || console.info("MailChimp error: " + z.msg), F(G)
				}).fail(function() {
					F(G)
				})
			}

			function F(G) {
				var k = G.form,
					p = G.redirect,
					f = G.success;
				if (f && p) {
					Xi.location(p);
					return
				}
				G.done.toggle(f), G.fail.toggle(!f), f ? G.done.focus() : G.fail.focus(), k.toggle(!f), q(G)
			}

			function X(G) {
				G.evt && G.evt.preventDefault(), G.evt = null
			}

			function U(G, k) {
				if (!k.fileUploads || !k.fileUploads[G]) return;
				var p, f = e(k.fileUploads[G]),
					v = f.find("> .w-file-upload-default"),
					g = f.find("> .w-file-upload-uploading"),
					H = f.find("> .w-file-upload-success"),
					Y = f.find("> .w-file-upload-error"),
					z = v.find(".w-file-upload-input"),
					ee = v.find(".w-file-upload-label"),
					he = ee.children(),
					oe = Y.find(".w-file-upload-error-msg"),
					E = H.find(".w-file-upload-file"),
					V = H.find(".w-file-remove-link"),
					$ = E.find(".w-file-upload-file-name"),
					j = oe.attr("data-w-size-error"),
					pe = oe.attr("data-w-type-error"),
					xe = oe.attr("data-w-generic-error");
				if (I || ee.on("click keydown", function(O) {
						O.type === "keydown" && O.which !== 13 && O.which !== 32 || (O.preventDefault(), z.click())
					}), ee.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), I) z.on("click", function(O) {
					O.preventDefault()
				}), ee.on("click", function(O) {
					O.preventDefault()
				}), he.on("click", function(O) {
					O.preventDefault()
				});
				else {
					V.on("click keydown", function(O) {
						if (O.type === "keydown") {
							if (O.which !== 13 && O.which !== 32) return;
							O.preventDefault()
						}
						z.removeAttr("data-value"), z.val(""), $.html(""), v.toggle(!0), H.toggle(!1), ee.focus()
					}), z.on("change", function(O) {
						p = O.target && O.target.files && O.target.files[0], p && (v.toggle(!1), Y.toggle(!1), g.toggle(!0), g.focus(), $.text(p.name), C() || D(k), k.fileUploads[G].uploading = !0, J(p, T))
					});
					var Me = ee.outerHeight();
					z.height(Me), z.width(1)
				}

				function l(O) {
					var L = O.responseJSON && O.responseJSON.msg,
						te = xe;
					typeof L == "string" && L.indexOf("InvalidFileTypeError") === 0 ? te = pe : typeof L == "string" && L.indexOf("MaxFileSizeError") === 0 && (te = j), oe.text(te), z.removeAttr("data-value"), z.val(""), g.toggle(!1), v.toggle(!0), Y.toggle(!0), Y.focus(), k.fileUploads[G].uploading = !1, C() || q(k)
				}

				function T(O, L) {
					if (O) return l(O);
					var te = L.fileName,
						se = L.postData,
						_e = L.fileId,
						K = L.s3Url;
					z.attr("data-value", _e), ne(K, se, p, te, S)
				}

				function S(O) {
					if (O) return l(O);
					g.toggle(!1), H.css("display", "inline-block"), H.focus(), k.fileUploads[G].uploading = !1, C() || q(k)
				}

				function C() {
					var O = k.fileUploads && k.fileUploads.toArray() || [];
					return O.some(function(L) {
						return L.uploading
					})
				}
			}

			function J(G, k) {
				var p = new URLSearchParams({
					name: G.name,
					size: G.size
				});
				e.ajax({
					type: "GET",
					url: `${w}?${p}`,
					crossDomain: !0
				}).done(function(f) {
					k(null, f)
				}).fail(function(f) {
					k(f)
				})
			}

			function ne(G, k, p, f, v) {
				var g = new FormData;
				for (var H in k) g.append(H, k[H]);
				g.append("file", p, f), e.ajax({
					type: "POST",
					url: G,
					data: g,
					processData: !1,
					contentType: !1
				}).done(function() {
					v(null)
				}).fail(function(Y) {
					v(Y)
				})
			}
			return r
		})
	});
	Fs();
	Xs();
	Ws();
	Bs();
	Hs();
	zs();
	_n();
	ru();
	ou();
	su();
	lu();
	pu();
	Xy();
	Vy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e": {
			"id": "e",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-2"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".fade-in-on-scroll",
				"originalId": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".fade-in-on-scroll",
				"originalId": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1659003967481
		},
		"e-3": {
			"id": "e-3",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-4"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675625338673
		},
		"e-12": {
			"id": "e-12",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-13"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".featured-logo-wrapper",
				"originalId": "6412ec862e856074f8b72d16|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".featured-logo-wrapper",
				"originalId": "6412ec862e856074f8b72d16|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681124152
		},
		"e-14": {
			"id": "e-14",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-15"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".title-container",
				"originalId": "6412ec862e856074f8b72d16|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".title-container",
				"originalId": "6412ec862e856074f8b72d16|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681132576
		},
		"e-16": {
			"id": "e-16",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-17"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".paragraph-holder",
				"originalId": "6412ec862e856074f8b72d16|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".paragraph-holder",
				"originalId": "6412ec862e856074f8b72d16|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681138517
		},
		"e-18": {
			"id": "e-18",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-19"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-tag-holder",
				"originalId": "6412ec862e856074f8b72d16|ede77518-7561-2248-c811-452853b87491",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-tag-holder",
				"originalId": "6412ec862e856074f8b72d16|ede77518-7561-2248-c811-452853b87491",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681172353
		},
		"e-20": {
			"id": "e-20",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-21"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-title-holder",
				"originalId": "6412ec862e856074f8b72d16|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-title-holder",
				"originalId": "6412ec862e856074f8b72d16|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681177413
		},
		"e-22": {
			"id": "e-22",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-23"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-paraghaph-holder",
				"originalId": "6412ec862e856074f8b72d16|4c9c4307-106c-be6d-738d-d09730864a25",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-paraghaph-holder",
				"originalId": "6412ec862e856074f8b72d16|4c9c4307-106c-be6d-738d-d09730864a25",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681183879
		},
		"e-24": {
			"id": "e-24",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-25"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-button-holder",
				"originalId": "6412ec862e856074f8b72d16|2fd1adc7-a016-60a8-e041-af5290c334ea",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-button-holder",
				"originalId": "6412ec862e856074f8b72d16|2fd1adc7-a016-60a8-e041-af5290c334ea",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681189281
		},
		"e-26": {
			"id": "e-26",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-27"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-card",
				"originalId": "6412ec862e856074f8b72d16|833516a5-bfbd-1c0e-23af-a37ca5005d88",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-card",
				"originalId": "6412ec862e856074f8b72d16|833516a5-bfbd-1c0e-23af-a37ca5005d88",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 26,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681443120
		},
		"e-38": {
			"id": "e-38",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-39"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-card-container",
				"originalId": "6412ec862e856074f8b72d16|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-card-container",
				"originalId": "6412ec862e856074f8b72d16|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682286578
		},
		"e-39": {
			"id": "e-39",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-38"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-card-container",
				"originalId": "6412ec862e856074f8b72d16|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-card-container",
				"originalId": "6412ec862e856074f8b72d16|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682286579
		},
		"e-40": {
			"id": "e-40",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-41"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-heading",
				"originalId": "6412ec862e856074f8b72d16|93d70ad6-7625-200b-5dfd-bd850990f3fd",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-heading",
				"originalId": "6412ec862e856074f8b72d16|93d70ad6-7625-200b-5dfd-bd850990f3fd",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682408849
		},
		"e-42": {
			"id": "e-42",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-43"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-paragraph",
				"originalId": "6412ec862e856074f8b72d16|44c6d9db-29c3-2396-72c1-32492179481b",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-paragraph",
				"originalId": "6412ec862e856074f8b72d16|44c6d9db-29c3-2396-72c1-32492179481b",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 7,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682414336
		},
		"e-44": {
			"id": "e-44",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SLIDER_ACTIVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-45"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".testimonial-slide",
				"originalId": "6412ec862e856074f8b72d16|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".testimonial-slide",
				"originalId": "6412ec862e856074f8b72d16|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693241987
		},
		"e-45": {
			"id": "e-45",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SLIDER_INACTIVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-11",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-44"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".testimonial-slide",
				"originalId": "6412ec862e856074f8b72d16|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".testimonial-slide",
				"originalId": "6412ec862e856074f8b72d16|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693241987
		},
		"e-46": {
			"id": "e-46",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-47"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".checked-list-holder",
				"originalId": "6412ec862e856074f8b72d16|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".checked-list-holder",
				"originalId": "6412ec862e856074f8b72d16|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693928036
		},
		"e-48": {
			"id": "e-48",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-49"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-footer-holder",
				"originalId": "6412ec862e856074f8b72d16|4fbcff52-53ec-c681-6c72-16023f59cb28",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-footer-holder",
				"originalId": "6412ec862e856074f8b72d16|4fbcff52-53ec-c681-6c72-16023f59cb28",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693935174
		},
		"e-50": {
			"id": "e-50",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-51"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-list-holder",
				"originalId": "6412ec862e856074f8b72d16|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-list-holder",
				"originalId": "6412ec862e856074f8b72d16|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693940977
		},
		"e-52": {
			"id": "e-52",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-53"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-header",
				"originalId": "6412ec862e856074f8b72d16|e304e7a6-8278-db59-7b91-6f2a88c134da",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-header",
				"originalId": "6412ec862e856074f8b72d16|e304e7a6-8278-db59-7b91-6f2a88c134da",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693947082
		},
		"e-54": {
			"id": "e-54",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-55"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-tag",
				"originalId": "6412ec862e856074f8b72d16|e24521b3-dd2e-36c7-294f-c709844f83f2",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-tag",
				"originalId": "6412ec862e856074f8b72d16|e24521b3-dd2e-36c7-294f-c709844f83f2",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693951690
		},
		"e-56": {
			"id": "e-56",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-57"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|faa9ca08-2111-2b1a-b633-4ab358026219",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|faa9ca08-2111-2b1a-b633-4ab358026219",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678976307372
		},
		"e-57": {
			"id": "e-57",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-56"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|faa9ca08-2111-2b1a-b633-4ab358026219",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|faa9ca08-2111-2b1a-b633-4ab358026219",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678976307373
		},
		"e-58": {
			"id": "e-58",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-59"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|552f2c72-c869-2b6e-ecfb-afd617868af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|552f2c72-c869-2b6e-ecfb-afd617868af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678976697120
		},
		"e-59": {
			"id": "e-59",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-58"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|552f2c72-c869-2b6e-ecfb-afd617868af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|552f2c72-c869-2b6e-ecfb-afd617868af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678976697121
		},
		"e-60": {
			"id": "e-60",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-61"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|87c2bca2-bd0f-f730-2012-d6047e9a6de0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|87c2bca2-bd0f-f730-2012-d6047e9a6de0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678976839126
		},
		"e-61": {
			"id": "e-61",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-60"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|87c2bca2-bd0f-f730-2012-d6047e9a6de0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|87c2bca2-bd0f-f730-2012-d6047e9a6de0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678976839176
		},
		"e-64": {
			"id": "e-64",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-65"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".explanation",
				"originalId": "6412ec862e856074f8b72d16|a293fff8-f0c3-6083-00f8-eb9599926a42",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|a293fff8-f0c3-6083-00f8-eb9599926a42",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679053908725
		},
		"e-65": {
			"id": "e-65",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-64"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".explanation",
				"originalId": "6412ec862e856074f8b72d16|a293fff8-f0c3-6083-00f8-eb9599926a42",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|a293fff8-f0c3-6083-00f8-eb9599926a42",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679053908778
		},
		"e-78": {
			"id": "e-78",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-79"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|9b3bad2a-6636-f09c-1ebc-ed28cd6fc9a0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|9b3bad2a-6636-f09c-1ebc-ed28cd6fc9a0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569364398
		},
		"e-80": {
			"id": "e-80",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-81"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|d4d9df11-fc3e-791e-526a-30e36e696243",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|d4d9df11-fc3e-791e-526a-30e36e696243",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569385418
		},
		"e-88": {
			"id": "e-88",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-89"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|746614f4-07b9-5583-dea1-f2d00476dd48",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|746614f4-07b9-5583-dea1-f2d00476dd48",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569485935
		},
		"e-90": {
			"id": "e-90",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-91"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|fa28993f-70a0-bb0d-9426-0c868b147798",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|fa28993f-70a0-bb0d-9426-0c868b147798",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569493511
		},
		"e-92": {
			"id": "e-92",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-93"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|995e8066-5072-e675-11dc-de7c4f486bb2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|995e8066-5072-e675-11dc-de7c4f486bb2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569506527
		},
		"e-94": {
			"id": "e-94",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-95"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|0efa2af1-442e-b05e-b803-602008419b85",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|0efa2af1-442e-b05e-b803-602008419b85",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569516711
		},
		"e-102": {
			"id": "e-102",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-103"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|add46018-3983-e0b0-938b-12e3e6f34750",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|add46018-3983-e0b0-938b-12e3e6f34750",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569618088
		},
		"e-106": {
			"id": "e-106",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-107"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|83dc9b0f-c0de-08e3-d698-34f8a47d4843",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|83dc9b0f-c0de-08e3-d698-34f8a47d4843",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569756133
		},
		"e-108": {
			"id": "e-108",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-109"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|c3ef0e70-4ca5-802b-ccc6-c073f3326ade",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|c3ef0e70-4ca5-802b-ccc6-c073f3326ade",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569781020
		},
		"e-110": {
			"id": "e-110",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-111"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|4ba98bb9-d762-a837-594a-6989f60687c8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|4ba98bb9-d762-a837-594a-6989f60687c8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569863019
		},
		"e-112": {
			"id": "e-112",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-113"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|a7ddcf75-4bb1-6208-c4fb-2cc3c282a5f2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|a7ddcf75-4bb1-6208-c4fb-2cc3c282a5f2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679569872355
		},
		"e-116": {
			"id": "e-116",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-17",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|c7e40384-736c-6a87-2dd1-d6513da55248",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|c7e40384-736c-6a87-2dd1-d6513da55248",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-17-p",
				"smoothing": 93,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1679570807729
		},
		"e-117": {
			"id": "e-117",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-118"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".explanation-grid",
				"originalId": "6412ec862e856074f8b72d16|cf35668e-5d42-2aeb-3de3-e5855d62e7df",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".explanation-grid",
				"originalId": "6412ec862e856074f8b72d16|cf35668e-5d42-2aeb-3de3-e5855d62e7df",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679674178799
		},
		"e-119": {
			"id": "e-119",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-120"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|9bfecd20-bdba-5144-6f49-1aa513b7934f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|9bfecd20-bdba-5144-6f49-1aa513b7934f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679674680053
		},
		"e-121": {
			"id": "e-121",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-122"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6412ec862e856074f8b72d16|9bfecd20-bdba-5144-6f49-1aa513b79356",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6412ec862e856074f8b72d16|9bfecd20-bdba-5144-6f49-1aa513b79356",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1679674680053
		}
	},
	"actionLists": {
		"a": {
			"id": "a",
			"title": "👁 Fade In On Scroll",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"yValue": 20,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 800,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 800,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1659003970898
		},
		"a-2": {
			"id": "a-2",
			"title": "⏰Animate On Load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-2-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"yValue": 30,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-18",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".navbar",
							"selectorGuids": ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-17",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".trusted-by-holder",
							"selectorGuids": ["c51b1dd9-20ab-fc5e-6b31-051ceb10f3c9"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".trusted-by-holder",
							"selectorGuids": ["c51b1dd9-20ab-fc5e-6b31-051ceb10f3c9"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-15",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".elips-holder",
							"selectorGuids": ["6326009f-fa03-34c5-318f-b8a5bb2ef221"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-14",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".elips-holder",
							"selectorGuids": ["6326009f-fa03-34c5-318f-b8a5bb2ef221"]
						},
						"xValue": 1.2,
						"yValue": 1.2,
						"locked": true
					}
				}, {
					"id": "a-2-n-4",
					"actionTypeId": "STYLE_FILTER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"filters": [{
							"type": "grayscale",
							"filterId": "ccea",
							"value": 100,
							"unit": "%"
						}]
					}
				}, {
					"id": "a-2-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"xValue": 90,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-02",
							"selectorGuids": ["de90537c-d163-47cf-ca54-c8f56d97d27d"]
						},
						"yValue": 30,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-02",
							"selectorGuids": ["de90537c-d163-47cf-ca54-c8f56d97d27d"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-7",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-02",
							"selectorGuids": ["de90537c-d163-47cf-ca54-c8f56d97d27d"]
						},
						"xValue": 90,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-03",
							"selectorGuids": ["a53f6cc7-fcb3-e6c2-023f-ae0cc4616c5d"]
						},
						"yValue": 30,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-11",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-03",
							"selectorGuids": ["a53f6cc7-fcb3-e6c2-023f-ae0cc4616c5d"]
						},
						"xValue": 90,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animate-on-load-03",
							"selectorGuids": ["a53f6cc7-fcb3-e6c2-023f-ae0cc4616c5d"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-13",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hand-image-holder",
							"selectorGuids": ["53ad8a44-c3a0-41cf-cc8a-80eb30a2cf83"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-12",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hand-image-holder",
							"selectorGuids": ["53ad8a44-c3a0-41cf-cc8a-80eb30a2cf83"]
						},
						"yValue": 400,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-2-n-19",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-22",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-21",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-23",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 200,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-02",
							"selectorGuids": ["de90537c-d163-47cf-ca54-c8f56d97d27d"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-24",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 200,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-02",
							"selectorGuids": ["de90537c-d163-47cf-ca54-c8f56d97d27d"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-25",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 200,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-02",
							"selectorGuids": ["de90537c-d163-47cf-ca54-c8f56d97d27d"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-26",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-03",
							"selectorGuids": ["a53f6cc7-fcb3-e6c2-023f-ae0cc4616c5d"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-27",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-03",
							"selectorGuids": ["a53f6cc7-fcb3-e6c2-023f-ae0cc4616c5d"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-28",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-03",
							"selectorGuids": ["a53f6cc7-fcb3-e6c2-023f-ae0cc4616c5d"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-20",
					"actionTypeId": "STYLE_FILTER",
					"config": {
						"delay": 500,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".animate-on-load-01",
							"selectorGuids": ["f9b47808-36ab-97dc-d7bd-9a019f91ee88"]
						},
						"filters": [{
							"type": "grayscale",
							"filterId": "ccea",
							"value": 0,
							"unit": "%"
						}]
					}
				}, {
					"id": "a-2-n-31",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 600,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".trusted-by-holder",
							"selectorGuids": ["c51b1dd9-20ab-fc5e-6b31-051ceb10f3c9"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-32",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 600,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".trusted-by-holder",
							"selectorGuids": ["c51b1dd9-20ab-fc5e-6b31-051ceb10f3c9"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-29",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1000,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".hand-image-holder",
							"selectorGuids": ["53ad8a44-c3a0-41cf-cc8a-80eb30a2cf83"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-30",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1000,
						"easing": "ease",
						"duration": 900,
						"target": {
							"selector": ".hand-image-holder",
							"selectorGuids": ["53ad8a44-c3a0-41cf-cc8a-80eb30a2cf83"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-33",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1200,
						"easing": "ease",
						"duration": 1600,
						"target": {
							"selector": ".elips-holder",
							"selectorGuids": ["6326009f-fa03-34c5-318f-b8a5bb2ef221"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-34",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1200,
						"easing": "ease",
						"duration": 1600,
						"target": {
							"selector": ".elips-holder",
							"selectorGuids": ["6326009f-fa03-34c5-318f-b8a5bb2ef221"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-2-n-35",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1200,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".navbar",
							"selectorGuids": ["5db79913-ce1f-b210-8717-ee76f7ca6cdf"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675625341467
		},
		"a-6": {
			"id": "a-6",
			"title": "Early Access - On View",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-6-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 65,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-6-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-6-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 177,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-6-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-6-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"yValue": -55,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-6-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {},
						"xValue": 0,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-6-n-10",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-6-n-9",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-6-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 100,
						"easing": "ease",
						"duration": 600,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-6-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "ease",
						"duration": 600,
						"target": {},
						"xValue": 0,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675681446869
		},
		"a-8": {
			"id": "a-8",
			"title": "Power Feature -> Hover On",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-8-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675682291672
		},
		"a-9": {
			"id": "a-9",
			"title": "Power Feature -> Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1675682291672
		},
		"a-10": {
			"id": "a-10",
			"title": "Slider In View",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-10-n-6",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-10-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675693243917
		},
		"a-11": {
			"id": "a-11",
			"title": "Slider Out of view",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-11-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0.5,
						"unit": ""
					}
				}, {
					"id": "a-11-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0.5,
						"unit": ""
					}
				}, {
					"id": "a-11-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675693243917
		},
		"a-14": {
			"id": "a-14",
			"title": "On Hover Button Delusional",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-14-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": [0.25, 0.1, 0.25, 1],
						"duration": 100,
						"target": {
							"useEventTarget": true,
							"id": "6412ec862e856074f8b72d16|87c2bca2-bd0f-f730-2012-d6047e9a6de0"
						},
						"xValue": 0,
						"yValue": -7,
						"xUnit": "px",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1678974465088
		},
		"a-15": {
			"id": "a-15",
			"title": "Out Of Hover Delusional",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-15-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": [0.25, 0.1, 0.25, 1],
						"duration": 300,
						"target": {
							"useEventTarget": true,
							"id": "6412ec862e856074f8b72d16|87c2bca2-bd0f-f730-2012-d6047e9a6de0"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1678974978363
		},
		"a-17": {
			"id": "a-17",
			"title": "Payment Plane Animation",
			"continuousParameterGroups": [{
				"id": "a-17-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-17-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.basic",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "fc1a0d00-268d-932c-dd59-53b3426866e9"]
							},
							"xValue": 0,
							"yValue": 500,
							"xUnit": "px",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-17-n-7",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "easeIn",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.basic",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "fc1a0d00-268d-932c-dd59-53b3426866e9"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-17-n-14",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "easeIn",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.middle",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "0a4ee52e-2752-896f-407f-3c8b79804e9e"]
							},
							"xValue": 0,
							"yValue": 124,
							"xUnit": "px",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-17-n-15",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "easeIn",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.middle",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "0a4ee52e-2752-896f-407f-3c8b79804e9e"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 30,
					"actionItems": [{
						"id": "a-17-n-13",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "easeIn",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.middle",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "0a4ee52e-2752-896f-407f-3c8b79804e9e"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-17-n-12",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "easeIn",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.middle",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "0a4ee52e-2752-896f-407f-3c8b79804e9e"]
							},
							"xValue": 0,
							"yValue": 0,
							"xUnit": "px",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 35,
					"actionItems": [{
						"id": "a-17-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "easeIn",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.basic",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "fc1a0d00-268d-932c-dd59-53b3426866e9"]
							},
							"xValue": 0,
							"yValue": 0,
							"xUnit": "px",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-17-n-11",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "easeIn",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".basic-plan-holder.basic",
								"selectorGuids": ["d9f485eb-ad9f-cbc0-b820-52f03da6ec4f", "fc1a0d00-268d-932c-dd59-53b3426866e9"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1679570811128
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});