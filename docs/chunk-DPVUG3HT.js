import {
  Ga as F,
  Gb as h,
  Ha as o,
  Hb as b,
  Jb as re,
  Na as B,
  Oa as l,
  P as R,
  Q as f,
  Qa as d,
  S as G,
  Ta as ye,
  U as v,
  _a as ie,
  a as u,
  b as c,
  ba as T,
  ga as j,
  jb as D,
  k as pe,
  la as y,
  n as me,
  pa as E,
  qa as V,
  s as _e,
  tb as g,
  y as ve,
} from "./chunk-WI2OL4WN.js";
var Fe = (() => {
    class n {
      _renderer;
      _elementRef;
      onChange = (e) => {};
      onTouched = () => {};
      constructor(e, i) {
        (this._renderer = e), (this._elementRef = i);
      }
      setProperty(e, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, i);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty("disabled", e);
      }
      static ɵfac = function (i) {
        return new (i || n)(o(F), o(E));
      };
      static ɵdir = l({ type: n });
    }
    return n;
  })(),
  le = (() => {
    class n extends Fe {
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = j(n)))(r || n);
        };
      })();
      static ɵdir = l({ type: n, features: [d] });
    }
    return n;
  })(),
  x = new v("");
var Ye = { provide: x, useExisting: f(() => we), multi: !0 };
function Ke() {
  let n = re() ? re().getUserAgent() : "";
  return /android (\d+)/.test(n.toLowerCase());
}
var Je = new v(""),
  we = (() => {
    class n extends Fe {
      _compositionMode;
      _composing = !1;
      constructor(e, i, r) {
        super(e, i),
          (this._compositionMode = r),
          this._compositionMode == null && (this._compositionMode = !Ke());
      }
      writeValue(e) {
        let i = e ?? "";
        this.setProperty("value", i);
      }
      _handleInput(e) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        (this._composing = !1), this._compositionMode && this.onChange(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(o(F), o(E), o(Je, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            D("input", function (a) {
              return r._handleInput(a.target.value);
            })("blur", function () {
              return r.onTouched();
            })("compositionstart", function () {
              return r._compositionStart();
            })("compositionend", function (a) {
              return r._compositionEnd(a.target.value);
            });
        },
        standalone: !1,
        features: [g([Ye]), d],
      });
    }
    return n;
  })();
function ue(n) {
  return n == null || de(n) === 0;
}
function de(n) {
  return n == null
    ? null
    : Array.isArray(n) || typeof n == "string"
    ? n.length
    : n instanceof Set
    ? n.size
    : null;
}
var J = new v(""),
  Q = new v(""),
  Qe =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Ce = class {
    static min(t) {
      return et(t);
    }
    static max(t) {
      return tt(t);
    }
    static required(t) {
      return nt(t);
    }
    static requiredTrue(t) {
      return it(t);
    }
    static email(t) {
      return rt(t);
    }
    static minLength(t) {
      return st(t);
    }
    static maxLength(t) {
      return ot(t);
    }
    static pattern(t) {
      return at(t);
    }
    static nullValidator(t) {
      return Ie();
    }
    static compose(t) {
      return ke(t);
    }
    static composeAsync(t) {
      return Re(t);
    }
  };
function et(n) {
  return (t) => {
    if (t.value == null || n == null) return null;
    let e = parseFloat(t.value);
    return !isNaN(e) && e < n ? { min: { min: n, actual: t.value } } : null;
  };
}
function tt(n) {
  return (t) => {
    if (t.value == null || n == null) return null;
    let e = parseFloat(t.value);
    return !isNaN(e) && e > n ? { max: { max: n, actual: t.value } } : null;
  };
}
function nt(n) {
  return ue(n.value) ? { required: !0 } : null;
}
function it(n) {
  return n.value === !0 ? null : { required: !0 };
}
function rt(n) {
  return ue(n.value) || Qe.test(n.value) ? null : { email: !0 };
}
function st(n) {
  return (t) => {
    let e = t.value?.length ?? de(t.value);
    return e === null || e === 0
      ? null
      : e < n
      ? { minlength: { requiredLength: n, actualLength: e } }
      : null;
  };
}
function ot(n) {
  return (t) => {
    let e = t.value?.length ?? de(t.value);
    return e !== null && e > n
      ? { maxlength: { requiredLength: n, actualLength: e } }
      : null;
  };
}
function at(n) {
  if (!n) return Ie;
  let t, e;
  return (
    typeof n == "string"
      ? ((e = ""),
        n.charAt(0) !== "^" && (e += "^"),
        (e += n),
        n.charAt(n.length - 1) !== "$" && (e += "$"),
        (t = new RegExp(e)))
      : ((e = n.toString()), (t = n)),
    (i) => {
      if (ue(i.value)) return null;
      let r = i.value;
      return t.test(r)
        ? null
        : { pattern: { requiredPattern: e, actualValue: r } };
    }
  );
}
function Ie(n) {
  return null;
}
function Se(n) {
  return n != null;
}
function Ne(n) {
  return ye(n) ? me(n) : n;
}
function Oe(n) {
  let t = {};
  return (
    n.forEach((e) => {
      t = e != null ? u(u({}, t), e) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function xe(n, t) {
  return t.map((e) => e(n));
}
function lt(n) {
  return !n.validate;
}
function Pe(n) {
  return n.map((t) => (lt(t) ? t : (e) => t.validate(e)));
}
function ke(n) {
  if (!n) return null;
  let t = n.filter(Se);
  return t.length == 0
    ? null
    : function (e) {
        return Oe(xe(e, t));
      };
}
function ce(n) {
  return n != null ? ke(Pe(n)) : null;
}
function Re(n) {
  if (!n) return null;
  let t = n.filter(Se);
  return t.length == 0
    ? null
    : function (e) {
        let i = xe(e, t).map(Ne);
        return ve(i).pipe(_e(Oe));
      };
}
function he(n) {
  return n != null ? Re(Pe(n)) : null;
}
function Ve(n, t) {
  return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function Ge(n) {
  return n._rawValidators;
}
function Te(n) {
  return n._rawAsyncValidators;
}
function se(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function H(n, t) {
  return Array.isArray(n) ? n.includes(t) : n === t;
}
function De(n, t) {
  let e = se(t);
  return (
    se(n).forEach((r) => {
      H(e, r) || e.push(r);
    }),
    e
  );
}
function be(n, t) {
  return se(t).filter((e) => !H(n, e));
}
var L = class {
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators = [];
    _rawAsyncValidators = [];
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = ce(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = he(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _onDestroyCallbacks = [];
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, e) {
      return this.control ? this.control.hasError(t, e) : !1;
    }
    getError(t, e) {
      return this.control ? this.control.getError(t, e) : null;
    }
  },
  p = class extends L {
    name;
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  C = class extends L {
    _parent = null;
    name = null;
    valueAccessor = null;
  },
  $ = class {
    _cd;
    constructor(t) {
      this._cd = t;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  ut = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  on = c(u({}, ut), { "[class.ng-submitted]": "isSubmitted" }),
  an = (() => {
    class n extends $ {
      constructor(e) {
        super(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(o(C, 2));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["", "formControlName", ""],
          ["", "ngModel", ""],
          ["", "formControl", ""],
        ],
        hostVars: 14,
        hostBindings: function (i, r) {
          i & 2 &&
            ie("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
              "ng-pristine",
              r.isPristine
            )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
              "ng-invalid",
              r.isInvalid
            )("ng-pending", r.isPending);
        },
        standalone: !1,
        features: [d],
      });
    }
    return n;
  })(),
  ln = (() => {
    class n extends $ {
      constructor(e) {
        super(e);
      }
      static ɵfac = function (i) {
        return new (i || n)(o(p, 10));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["", "formGroupName", ""],
          ["", "formArrayName", ""],
          ["", "ngModelGroup", ""],
          ["", "formGroup", ""],
          ["form", 3, "ngNoForm", ""],
          ["", "ngForm", ""],
        ],
        hostVars: 16,
        hostBindings: function (i, r) {
          i & 2 &&
            ie("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
              "ng-pristine",
              r.isPristine
            )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
              "ng-invalid",
              r.isInvalid
            )("ng-pending", r.isPending)("ng-submitted", r.isSubmitted);
        },
        standalone: !1,
        features: [d],
      });
    }
    return n;
  })();
var w = "VALID",
  U = "INVALID",
  A = "PENDING",
  I = "DISABLED",
  m = class {},
  W = class extends m {
    value;
    source;
    constructor(t, e) {
      super(), (this.value = t), (this.source = e);
    }
  },
  N = class extends m {
    pristine;
    source;
    constructor(t, e) {
      super(), (this.pristine = t), (this.source = e);
    }
  },
  O = class extends m {
    touched;
    source;
    constructor(t, e) {
      super(), (this.touched = t), (this.source = e);
    }
  },
  M = class extends m {
    status;
    source;
    constructor(t, e) {
      super(), (this.status = t), (this.source = e);
    }
  },
  oe = class extends m {
    source;
    constructor(t) {
      super(), (this.source = t);
    }
  },
  ae = class extends m {
    source;
    constructor(t) {
      super(), (this.source = t);
    }
  };
function je(n) {
  return (ee(n) ? n.validators : n) || null;
}
function dt(n) {
  return Array.isArray(n) ? ce(n) : n || null;
}
function Be(n, t) {
  return (ee(t) ? t.asyncValidators : n) || null;
}
function ct(n) {
  return Array.isArray(n) ? he(n) : n || null;
}
function ee(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function ht(n, t, e) {
  let i = n.controls;
  if (!(t ? Object.keys(i) : i).length) throw new R(1e3, "");
  if (!i[e]) throw new R(1001, "");
}
function ft(n, t, e) {
  n._forEachChild((i, r) => {
    if (e[r] === void 0) throw new R(1002, "");
  });
}
var q = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => {};
    _updateOn;
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(t, e) {
      this._assignValidators(t), this._assignAsyncValidators(e);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return h(this.statusReactive);
    }
    set status(t) {
      h(() => this.statusReactive.set(t));
    }
    _status = b(() => this.statusReactive());
    statusReactive = V(void 0);
    get valid() {
      return this.status === w;
    }
    get invalid() {
      return this.status === U;
    }
    get pending() {
      return this.status == A;
    }
    get disabled() {
      return this.status === I;
    }
    get enabled() {
      return this.status !== I;
    }
    errors;
    get pristine() {
      return h(this.pristineReactive);
    }
    set pristine(t) {
      h(() => this.pristineReactive.set(t));
    }
    _pristine = b(() => this.pristineReactive());
    pristineReactive = V(!0);
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return h(this.touchedReactive);
    }
    set touched(t) {
      h(() => this.touchedReactive.set(t));
    }
    _touched = b(() => this.touchedReactive());
    touchedReactive = V(!1);
    get untouched() {
      return !this.touched;
    }
    _events = new pe();
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators(De(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators(De(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(be(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(be(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return H(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return H(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      let e = this.touched === !1;
      this.touched = !0;
      let i = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsTouched(c(u({}, t), { sourceControl: i })),
        e && t.emitEvent !== !1 && this._events.next(new O(!0, i));
    }
    markAllAsTouched(t = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: t.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((e) => e.markAllAsTouched(t));
    }
    markAsUntouched(t = {}) {
      let e = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let i = t.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsUntouched({
          onlySelf: !0,
          emitEvent: t.emitEvent,
          sourceControl: i,
        });
      }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, i),
        e && t.emitEvent !== !1 && this._events.next(new O(!1, i));
    }
    markAsDirty(t = {}) {
      let e = this.pristine === !0;
      this.pristine = !1;
      let i = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsDirty(c(u({}, t), { sourceControl: i })),
        e && t.emitEvent !== !1 && this._events.next(new N(!1, i));
    }
    markAsPristine(t = {}) {
      let e = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let i = t.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, i),
        e && t.emitEvent !== !1 && this._events.next(new N(!0, i));
    }
    markAsPending(t = {}) {
      this.status = A;
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new M(this.status, e)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.markAsPending(c(u({}, t), { sourceControl: e }));
    }
    disable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = I),
        (this.errors = null),
        this._forEachChild((r) => {
          r.disable(c(u({}, t), { onlySelf: !0 }));
        }),
        this._updateValue();
      let i = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new W(this.value, i)),
        this._events.next(new M(this.status, i)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(c(u({}, t), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = w),
        this._forEachChild((i) => {
          i.enable(c(u({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(c(u({}, t), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((i) => i(!1));
    }
    _updateAncestors(t, e) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine({}, e),
        this._parent._updateTouched({}, e));
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let i = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === w || this.status === A) &&
            this._runAsyncValidator(i, t.emitEvent);
      }
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new W(this.value, e)),
        this._events.next(new M(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.updateValueAndValidity(
            c(u({}, t), { sourceControl: e })
          );
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((e) => e._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? I : w;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t, e) {
      if (this.asyncValidator) {
        (this.status = A),
          (this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1 });
        let i = Ne(this.asyncValidator(this));
        this._asyncValidationSubscription = i.subscribe((r) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(r, { emitEvent: e, shouldHaveEmitted: t });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), t;
      }
      return !1;
    }
    setErrors(t, e = {}) {
      (this.errors = t),
        this._updateControlsErrors(
          e.emitEvent !== !1,
          this,
          e.shouldHaveEmitted
        );
    }
    get(t) {
      let e = t;
      return e == null ||
        (Array.isArray(e) || (e = e.split(".")), e.length === 0)
        ? null
        : e.reduce((i, r) => i && i._find(r), this);
    }
    getError(t, e) {
      let i = e ? this.get(e) : this;
      return i && i.errors ? i.errors[t] : null;
    }
    hasError(t, e) {
      return !!this.getError(t, e);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t, e, i) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        (t || i) && this._events.next(new M(this.status, e)),
        this._parent && this._parent._updateControlsErrors(t, e, i);
    }
    _initObservables() {
      (this.valueChanges = new y()), (this.statusChanges = new y());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? I
        : this.errors
        ? U
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(A)
        ? A
        : this._anyControlsHaveStatus(U)
        ? U
        : w;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((e) => e.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t, e) {
      let i = !this._anyControlsDirty(),
        r = this.pristine !== i;
      (this.pristine = i),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, e),
        r && this._events.next(new N(this.pristine, e));
    }
    _updateTouched(t = {}, e) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new O(this.touched, e)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, e);
    }
    _onDisabledChange = [];
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      ee(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let e = this._parent && this._parent.dirty;
      return !t && !!e && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = dt(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = ct(this._rawAsyncValidators));
    }
  },
  z = class extends q {
    constructor(t, e, i) {
      super(je(e), Be(i, e)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(e),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    controls;
    registerControl(t, e) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = e),
          e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange),
          e);
    }
    addControl(t, e, i = {}) {
      this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, e, i = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        e && this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: i.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, e = {}) {
      ft(this, !0, t),
        Object.keys(t).forEach((i) => {
          ht(this, !0, i),
            this.controls[i].setValue(t[i], {
              onlySelf: !0,
              emitEvent: e.emitEvent,
            });
        }),
        this.updateValueAndValidity(e);
    }
    patchValue(t, e = {}) {
      t != null &&
        (Object.keys(t).forEach((i) => {
          let r = this.controls[i];
          r && r.patchValue(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
        }),
        this.updateValueAndValidity(e));
    }
    reset(t = {}, e = {}) {
      this._forEachChild((i, r) => {
        i.reset(t ? t[r] : null, { onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._updatePristine(e, this),
        this._updateTouched(e, this),
        this.updateValueAndValidity(e);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, e, i) => ((t[i] = e.getRawValue()), t)
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (e, i) =>
        i._syncPendingControls() ? !0 : e
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((e) => {
        let i = this.controls[e];
        i && t(i, e);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [e, i] of Object.entries(this.controls))
        if (this.contains(e) && t(i)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (e, i, r) => ((i.enabled || this.disabled) && (e[r] = i.value), e)
      );
    }
    _reduceChildren(t, e) {
      let i = t;
      return (
        this._forEachChild((r, s) => {
          i = e(i, r, s);
        }),
        i
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var P = new v("", { providedIn: "root", factory: () => te }),
  te = "always";
function gt(n, t) {
  return [...t.path, n];
}
function Z(n, t, e = te) {
  fe(n, t),
    t.valueAccessor.writeValue(n.value),
    (n.disabled || e === "always") &&
      t.valueAccessor.setDisabledState?.(n.disabled),
    mt(n, t),
    vt(n, t),
    _t(n, t),
    pt(n, t);
}
function X(n, t, e = !0) {
  let i = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(i), t.valueAccessor.registerOnTouched(i)),
    K(n, t),
    n &&
      (t._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function Y(n, t) {
  n.forEach((e) => {
    e.registerOnValidatorChange && e.registerOnValidatorChange(t);
  });
}
function pt(n, t) {
  if (t.valueAccessor.setDisabledState) {
    let e = (i) => {
      t.valueAccessor.setDisabledState(i);
    };
    n.registerOnDisabledChange(e),
      t._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(e);
      });
  }
}
function fe(n, t) {
  let e = Ge(n);
  t.validator !== null
    ? n.setValidators(Ve(e, t.validator))
    : typeof e == "function" && n.setValidators([e]);
  let i = Te(n);
  t.asyncValidator !== null
    ? n.setAsyncValidators(Ve(i, t.asyncValidator))
    : typeof i == "function" && n.setAsyncValidators([i]);
  let r = () => n.updateValueAndValidity();
  Y(t._rawValidators, r), Y(t._rawAsyncValidators, r);
}
function K(n, t) {
  let e = !1;
  if (n !== null) {
    if (t.validator !== null) {
      let r = Ge(n);
      if (Array.isArray(r) && r.length > 0) {
        let s = r.filter((a) => a !== t.validator);
        s.length !== r.length && ((e = !0), n.setValidators(s));
      }
    }
    if (t.asyncValidator !== null) {
      let r = Te(n);
      if (Array.isArray(r) && r.length > 0) {
        let s = r.filter((a) => a !== t.asyncValidator);
        s.length !== r.length && ((e = !0), n.setAsyncValidators(s));
      }
    }
  }
  let i = () => {};
  return Y(t._rawValidators, i), Y(t._rawAsyncValidators, i), e;
}
function mt(n, t) {
  t.valueAccessor.registerOnChange((e) => {
    (n._pendingValue = e),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === "change" && Ue(n, t);
  });
}
function _t(n, t) {
  t.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === "blur" && n._pendingChange && Ue(n, t),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function Ue(n, t) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function vt(n, t) {
  let e = (i, r) => {
    t.valueAccessor.writeValue(i), r && t.viewToModelUpdate(i);
  };
  n.registerOnChange(e),
    t._registerOnDestroy(() => {
      n._unregisterOnChange(e);
    });
}
function He(n, t) {
  n == null, fe(n, t);
}
function yt(n, t) {
  return K(n, t);
}
function Le(n, t) {
  if (!n.hasOwnProperty("model")) return !1;
  let e = n.model;
  return e.isFirstChange() ? !0 : !Object.is(t, e.currentValue);
}
function Ct(n) {
  return Object.getPrototypeOf(n.constructor) === le;
}
function $e(n, t) {
  n._syncPendingControls(),
    t.forEach((e) => {
      let i = e.control;
      i.updateOn === "submit" &&
        i._pendingChange &&
        (e.viewToModelUpdate(i._pendingValue), (i._pendingChange = !1));
    });
}
function We(n, t) {
  if (!t) return null;
  Array.isArray(t);
  let e, i, r;
  return (
    t.forEach((s) => {
      s.constructor === we ? (e = s) : Ct(s) ? (i = s) : (r = s);
    }),
    r || i || e || null
  );
}
function Vt(n, t) {
  let e = n.indexOf(t);
  e > -1 && n.splice(e, 1);
}
var Dt = { provide: p, useExisting: f(() => bt) },
  S = Promise.resolve(),
  bt = (() => {
    class n extends p {
      callSetDisabledState;
      get submitted() {
        return h(this.submittedReactive);
      }
      _submitted = b(() => this.submittedReactive());
      submittedReactive = V(!1);
      _directives = new Set();
      form;
      ngSubmit = new y();
      options;
      constructor(e, i, r) {
        super(),
          (this.callSetDisabledState = r),
          (this.form = new z({}, ce(e), he(i)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        S.then(() => {
          let i = this._findContainer(e.path);
          (e.control = i.registerControl(e.name, e.control)),
            Z(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        S.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        S.then(() => {
          let i = this._findContainer(e.path),
            r = new z({});
          He(r, e),
            i.registerControl(e.name, r),
            r.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        S.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        S.then(() => {
          this.form.get(e.path).setValue(i);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          this.submittedReactive.set(!0),
          $e(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
      static ɵfac = function (i) {
        return new (i || n)(o(J, 10), o(Q, 10), o(P, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            D("submit", function (a) {
              return r.onSubmit(a);
            })("reset", function () {
              return r.onReset();
            });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        standalone: !1,
        features: [g([Dt]), d],
      });
    }
    return n;
  })();
function Ae(n, t) {
  let e = n.indexOf(t);
  e > -1 && n.splice(e, 1);
}
function Me(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    Object.keys(n).length === 2 &&
    "value" in n &&
    "disabled" in n
  );
}
var At = class extends q {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = !1;
  constructor(t = null, e, i) {
    super(je(e), Be(i, e)),
      this._applyFormState(t),
      this._setUpdateStrategy(e),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      ee(e) &&
        (e.nonNullable || e.initialValueIsDefault) &&
        (Me(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
  }
  setValue(t, e = {}) {
    (this.value = this._pendingValue = t),
      this._onChange.length &&
        e.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, e.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(e);
  }
  patchValue(t, e = {}) {
    this.setValue(t, e);
  }
  reset(t = this.defaultValue, e = {}) {
    this._applyFormState(t),
      this.markAsPristine(e),
      this.markAsUntouched(e),
      this.setValue(this.value, e),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(t) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(t) {
    this._onChange.push(t);
  }
  _unregisterOnChange(t) {
    Ae(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    Ae(this._onDisabledChange, t);
  }
  _forEachChild(t) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(t) {
    Me(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var Mt = (n) => n instanceof At;
var dn = (() => {
  class n {
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵdir = l({
      type: n,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""],
      standalone: !1,
    });
  }
  return n;
})();
var ge = new v(""),
  Et = { provide: C, useExisting: f(() => Ft) },
  Ft = (() => {
    class n extends C {
      _ngModelWarningConfig;
      callSetDisabledState;
      viewModel;
      form;
      set isDisabled(e) {}
      model;
      update = new y();
      static _ngModelWarningSentOnce = !1;
      _ngModelWarningSent = !1;
      constructor(e, i, r, s, a) {
        super(),
          (this._ngModelWarningConfig = s),
          (this.callSetDisabledState = a),
          this._setValidators(e),
          this._setAsyncValidators(i),
          (this.valueAccessor = We(this, r));
      }
      ngOnChanges(e) {
        if (this._isControlChanged(e)) {
          let i = e.form.previousValue;
          i && X(i, this, !1),
            Z(this.form, this, this.callSetDisabledState),
            this.form.updateValueAndValidity({ emitEvent: !1 });
        }
        Le(e, this.viewModel) &&
          (this.form.setValue(this.model), (this.viewModel = this.model));
      }
      ngOnDestroy() {
        this.form && X(this.form, this, !1);
      }
      get path() {
        return [];
      }
      get control() {
        return this.form;
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      _isControlChanged(e) {
        return e.hasOwnProperty("form");
      }
      static ɵfac = function (i) {
        return new (i || n)(o(J, 10), o(Q, 10), o(x, 10), o(ge, 8), o(P, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [["", "formControl", ""]],
        inputs: {
          form: [0, "formControl", "form"],
          isDisabled: [0, "disabled", "isDisabled"],
          model: [0, "ngModel", "model"],
        },
        outputs: { update: "ngModelChange" },
        exportAs: ["ngForm"],
        standalone: !1,
        features: [g([Et]), d, T],
      });
    }
    return n;
  })(),
  wt = { provide: p, useExisting: f(() => It) },
  It = (() => {
    class n extends p {
      callSetDisabledState;
      get submitted() {
        return h(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      _submitted = b(() => this._submittedReactive());
      _submittedReactive = V(!1);
      _oldForm;
      _onCollectionChange = () => this._updateDomValue();
      directives = [];
      form = null;
      ngSubmit = new y();
      constructor(e, i, r) {
        super(),
          (this.callSetDisabledState = r),
          this._setValidators(e),
          this._setAsyncValidators(i);
      }
      ngOnChanges(e) {
        e.hasOwnProperty("form") &&
          (this._updateValidators(),
          this._updateDomValue(),
          this._updateRegistrations(),
          (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (K(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(e) {
        let i = this.form.get(e.path);
        return (
          Z(i, e, this.callSetDisabledState),
          i.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          i
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        X(e.control || null, e, !1), Vt(this.directives, e);
      }
      addFormGroup(e) {
        this._setUpFormContainer(e);
      }
      removeFormGroup(e) {
        this._cleanUpFormContainer(e);
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      addFormArray(e) {
        this._setUpFormContainer(e);
      }
      removeFormArray(e) {
        this._cleanUpFormContainer(e);
      }
      getFormArray(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        this.form.get(e.path).setValue(i);
      }
      onSubmit(e) {
        return (
          this._submittedReactive.set(!0),
          $e(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new oe(this.control)),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new ae(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let i = e.control,
            r = this.form.get(e.path);
          i !== r &&
            (X(i || null, e),
            Mt(r) && (Z(r, e, this.callSetDisabledState), (e.control = r)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let i = this.form.get(e.path);
        He(i, e), i.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let i = this.form.get(e.path);
          i && yt(i, e) && i.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        fe(this.form, this), this._oldForm && K(this._oldForm, this);
      }
      static ɵfac = function (i) {
        return new (i || n)(o(J, 10), o(Q, 10), o(P, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (i, r) {
          i & 1 &&
            D("submit", function (a) {
              return r.onSubmit(a);
            })("reset", function () {
              return r.onReset();
            });
        },
        inputs: { form: [0, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        standalone: !1,
        features: [g([wt]), d, T],
      });
    }
    return n;
  })();
var St = { provide: C, useExisting: f(() => Nt) },
  Nt = (() => {
    class n extends C {
      _ngModelWarningConfig;
      _added = !1;
      viewModel;
      control;
      name = null;
      set isDisabled(e) {}
      model;
      update = new y();
      static _ngModelWarningSentOnce = !1;
      _ngModelWarningSent = !1;
      constructor(e, i, r, s, a) {
        super(),
          (this._ngModelWarningConfig = a),
          (this._parent = e),
          this._setValidators(i),
          this._setAsyncValidators(r),
          (this.valueAccessor = We(this, s));
      }
      ngOnChanges(e) {
        this._added || this._setUpControl(),
          Le(e, this.viewModel) &&
            ((this.viewModel = this.model),
            this.formDirective.updateModel(this, this.model));
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      viewToModelUpdate(e) {
        (this.viewModel = e), this.update.emit(e);
      }
      get path() {
        return gt(
          this.name == null ? this.name : this.name.toString(),
          this._parent
        );
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _setUpControl() {
        (this.control = this.formDirective.addControl(this)),
          (this._added = !0);
      }
      static ɵfac = function (i) {
        return new (i || n)(o(p, 13), o(J, 10), o(Q, 10), o(x, 10), o(ge, 8));
      };
      static ɵdir = l({
        type: n,
        selectors: [["", "formControlName", ""]],
        inputs: {
          name: [0, "formControlName", "name"],
          isDisabled: [0, "disabled", "isDisabled"],
          model: [0, "ngModel", "model"],
        },
        outputs: { update: "ngModelChange" },
        standalone: !1,
        features: [g([St]), d, T],
      });
    }
    return n;
  })();
var Ot = { provide: x, useExisting: f(() => ze), multi: !0 };
function qe(n, t) {
  return n == null
    ? `${t}`
    : (t && typeof t == "object" && (t = "Object"), `${n}: ${t}`.slice(0, 50));
}
function xt(n) {
  return n.split(":")[0];
}
var ze = (() => {
    class n extends le {
      value;
      _optionMap = new Map();
      _idCounter = 0;
      set compareWith(e) {
        this._compareWith = e;
      }
      _compareWith = Object.is;
      writeValue(e) {
        this.value = e;
        let i = this._getOptionId(e),
          r = qe(i, e);
        this.setProperty("value", r);
      }
      registerOnChange(e) {
        this.onChange = (i) => {
          (this.value = this._getOptionValue(i)), e(this.value);
        };
      }
      _registerOption() {
        return (this._idCounter++).toString();
      }
      _getOptionId(e) {
        for (let i of this._optionMap.keys())
          if (this._compareWith(this._optionMap.get(i), e)) return i;
        return null;
      }
      _getOptionValue(e) {
        let i = xt(e);
        return this._optionMap.has(i) ? this._optionMap.get(i) : e;
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = j(n)))(r || n);
        };
      })();
      static ɵdir = l({
        type: n,
        selectors: [
          ["select", "formControlName", "", 3, "multiple", ""],
          ["select", "formControl", "", 3, "multiple", ""],
          ["select", "ngModel", "", 3, "multiple", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            D("change", function (a) {
              return r.onChange(a.target.value);
            })("blur", function () {
              return r.onTouched();
            });
        },
        inputs: { compareWith: "compareWith" },
        standalone: !1,
        features: [g([Ot]), d],
      });
    }
    return n;
  })(),
  cn = (() => {
    class n {
      _element;
      _renderer;
      _select;
      id;
      constructor(e, i, r) {
        (this._element = e),
          (this._renderer = i),
          (this._select = r),
          this._select && (this.id = this._select._registerOption());
      }
      set ngValue(e) {
        this._select != null &&
          (this._select._optionMap.set(this.id, e),
          this._setElementValue(qe(this.id, e)),
          this._select.writeValue(this._select.value));
      }
      set value(e) {
        this._setElementValue(e),
          this._select && this._select.writeValue(this._select.value);
      }
      _setElementValue(e) {
        this._renderer.setProperty(this._element.nativeElement, "value", e);
      }
      ngOnDestroy() {
        this._select &&
          (this._select._optionMap.delete(this.id),
          this._select.writeValue(this._select.value));
      }
      static ɵfac = function (i) {
        return new (i || n)(o(E), o(F), o(ze, 9));
      };
      static ɵdir = l({
        type: n,
        selectors: [["option"]],
        inputs: { ngValue: "ngValue", value: "value" },
        standalone: !1,
      });
    }
    return n;
  })(),
  Pt = { provide: x, useExisting: f(() => Ze), multi: !0 };
function Ee(n, t) {
  return n == null
    ? `${t}`
    : (typeof t == "string" && (t = `'${t}'`),
      t && typeof t == "object" && (t = "Object"),
      `${n}: ${t}`.slice(0, 50));
}
function kt(n) {
  return n.split(":")[0];
}
var Ze = (() => {
    class n extends le {
      value;
      _optionMap = new Map();
      _idCounter = 0;
      set compareWith(e) {
        this._compareWith = e;
      }
      _compareWith = Object.is;
      writeValue(e) {
        this.value = e;
        let i;
        if (Array.isArray(e)) {
          let r = e.map((s) => this._getOptionId(s));
          i = (s, a) => {
            s._setSelected(r.indexOf(a.toString()) > -1);
          };
        } else
          i = (r, s) => {
            r._setSelected(!1);
          };
        this._optionMap.forEach(i);
      }
      registerOnChange(e) {
        this.onChange = (i) => {
          let r = [],
            s = i.selectedOptions;
          if (s !== void 0) {
            let a = s;
            for (let _ = 0; _ < a.length; _++) {
              let k = a[_],
                ne = this._getOptionValue(k.value);
              r.push(ne);
            }
          } else {
            let a = i.options;
            for (let _ = 0; _ < a.length; _++) {
              let k = a[_];
              if (k.selected) {
                let ne = this._getOptionValue(k.value);
                r.push(ne);
              }
            }
          }
          (this.value = r), e(r);
        };
      }
      _registerOption(e) {
        let i = (this._idCounter++).toString();
        return this._optionMap.set(i, e), i;
      }
      _getOptionId(e) {
        for (let i of this._optionMap.keys())
          if (this._compareWith(this._optionMap.get(i)._value, e)) return i;
        return null;
      }
      _getOptionValue(e) {
        let i = kt(e);
        return this._optionMap.has(i) ? this._optionMap.get(i)._value : e;
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = j(n)))(r || n);
        };
      })();
      static ɵdir = l({
        type: n,
        selectors: [
          ["select", "multiple", "", "formControlName", ""],
          ["select", "multiple", "", "formControl", ""],
          ["select", "multiple", "", "ngModel", ""],
        ],
        hostBindings: function (i, r) {
          i & 1 &&
            D("change", function (a) {
              return r.onChange(a.target);
            })("blur", function () {
              return r.onTouched();
            });
        },
        inputs: { compareWith: "compareWith" },
        standalone: !1,
        features: [g([Pt]), d],
      });
    }
    return n;
  })(),
  hn = (() => {
    class n {
      _element;
      _renderer;
      _select;
      id;
      _value;
      constructor(e, i, r) {
        (this._element = e),
          (this._renderer = i),
          (this._select = r),
          this._select && (this.id = this._select._registerOption(this));
      }
      set ngValue(e) {
        this._select != null &&
          ((this._value = e),
          this._setElementValue(Ee(this.id, e)),
          this._select.writeValue(this._select.value));
      }
      set value(e) {
        this._select
          ? ((this._value = e),
            this._setElementValue(Ee(this.id, e)),
            this._select.writeValue(this._select.value))
          : this._setElementValue(e);
      }
      _setElementValue(e) {
        this._renderer.setProperty(this._element.nativeElement, "value", e);
      }
      _setSelected(e) {
        this._renderer.setProperty(this._element.nativeElement, "selected", e);
      }
      ngOnDestroy() {
        this._select &&
          (this._select._optionMap.delete(this.id),
          this._select.writeValue(this._select.value));
      }
      static ɵfac = function (i) {
        return new (i || n)(o(E), o(F), o(Ze, 9));
      };
      static ɵdir = l({
        type: n,
        selectors: [["option"]],
        inputs: { ngValue: "ngValue", value: "value" },
        standalone: !1,
      });
    }
    return n;
  })();
var Xe = (() => {
  class n {
    static ɵfac = function (i) {
      return new (i || n)();
    };
    static ɵmod = B({ type: n });
    static ɵinj = G({});
  }
  return n;
})();
var fn = (() => {
    class n {
      static withConfig(e) {
        return {
          ngModule: n,
          providers: [{ provide: P, useValue: e.callSetDisabledState ?? te }],
        };
      }
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵmod = B({ type: n });
      static ɵinj = G({ imports: [Xe] });
    }
    return n;
  })(),
  gn = (() => {
    class n {
      static withConfig(e) {
        return {
          ngModule: n,
          providers: [
            {
              provide: ge,
              useValue: e.warnOnNgModelWithFormControl ?? "always",
            },
            { provide: P, useValue: e.callSetDisabledState ?? te },
          ],
        };
      }
      static ɵfac = function (i) {
        return new (i || n)();
      };
      static ɵmod = B({ type: n });
      static ɵinj = G({ imports: [Xe] });
    }
    return n;
  })();
export {
  we as a,
  Ce as b,
  an as c,
  ln as d,
  z as e,
  bt as f,
  At as g,
  dn as h,
  Ft as i,
  It as j,
  Nt as k,
  ze as l,
  cn as m,
  hn as n,
  fn as o,
  gn as p,
};
