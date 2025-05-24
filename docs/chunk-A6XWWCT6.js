import { b as M, g as x } from "./chunk-FM6GJ4KO.js";
import {
  Aa as l,
  Da as a,
  Kc as f,
  Ma as p,
  Ra as C,
  Ub as O,
  X as m,
  Ya as d,
  Yb as _,
  eb as e,
  fb as n,
  gb as u,
  kb as P,
  pb as o,
  qa as g,
  rb as s,
} from "./chunk-WI2OL4WN.js";
function v(r, c) {
  if (
    (r & 1 &&
      (e(0, "tr")(1, "td", 2)(2, "span"),
      u(3, "img", 3),
      o(4),
      n()(),
      e(5, "td"),
      o(6),
      n(),
      e(7, "td"),
      o(8),
      n()()),
    r & 2)
  ) {
    let t = c.$implicit,
      i = P();
    a(3),
      d("src", t.userImage || "assets/images/user.png", l),
      a(),
      s(
        " ",
        t.username ===
          (i.user.currentUser == null ? null : i.user.currentUser.displayName)
          ? "You"
          : t.username,
        " "
      ),
      a(2),
      s(" ", t.burnedCalories || 0, " "),
      a(2),
      s(" ", t.activities || 0, " ");
  }
}
var h = class r {
  activatedRoute = m(M);
  user = m(f);
  users = g([]);
  ngOnInit() {
    let t = this.activatedRoute.snapshot.data.users.sort(
      (i, b) => i.burnedCalories + b.burnedCalories
    );
    this.users.set(t);
  }
  static ɵfac = function (t) {
    return new (t || r)();
  };
  static ɵcmp = p({
    type: r,
    selectors: [["app-leaderboard"]],
    decls: 18,
    vars: 2,
    consts: [
      [1, "aboutPage"],
      [4, "ngFor", "ngForOf"],
      [1, "username"],
      ["alt", "Profile Picture", 3, "src"],
    ],
    template: function (t, i) {
      t & 1 &&
        (e(0, "main")(1, "section")(2, "strong"),
        o(3),
        n(),
        e(4, "div", 0)(5, "p"),
        o(
          6,
          " Welcome to the Leaderboard! Compete with others, stay active, and climb your way to the top to become the ultimate champion. "
        ),
        n()(),
        e(7, "table")(8, "thead")(9, "tr")(10, "th"),
        o(11, "Username"),
        n(),
        e(12, "th"),
        o(13, "Total Burned Calories"),
        n(),
        e(14, "th"),
        o(15, "Total Activities"),
        n()()(),
        e(16, "tbody"),
        C(17, v, 9, 4, "tr", 1),
        n()()()()),
        t & 2 &&
          (a(3),
          s("TOTAL REGISTERED USERS: ", i.users().length, ""),
          a(14),
          d("ngForOf", i.users()));
    },
    dependencies: [x, _, O],
    styles: [
      'main[_ngcontent-%COMP%]{width:100%;height:100%;min-height:100vh;font-family:Inter,"Sans-Serif"}main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:Roboto,"sans-serif"}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:90%;height:100%;margin:90px auto auto}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .aboutPage[_ngcontent-%COMP%]{background-color:#1e1e2f;color:#fff;padding:30px 20px;text-align:center;border-top-left-radius:12px;border-top-right-radius:12px}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .aboutPage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;max-width:100%;border-collapse:collapse;box-shadow:0 4px 20px #0000001a}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;padding:12px 16px;text-align:left;position:relative}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;gap:15px;align-items:center}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px;height:45px;border-radius:30px}@media (max-width: 600px){section[_ngcontent-%COMP%]{width:100%;padding:0 10px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px 10px;font-size:14px}.username[_ngcontent-%COMP%]{font-size:14px}.username[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]{font-size:16px;padding:20px 10px}}@media (max-width: 450px){main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:9px}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:11px}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-size:11px}}',
    ],
  });
};
export { h as LeaderboardComponent };
