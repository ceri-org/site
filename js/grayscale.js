!function () { 
    "use strict"; 
    var e = document.querySelector("#mainNav"); 
    if (e && "/" == window.location.pathname) { 
        var o = e.querySelector(".navbar-collapse"); 
        if (o) { 
            var n = new bootstrap.Collapse(o, { toggle: !1 }), t = o.querySelectorAll("a"); 
            for (var a of t) 
                a.addEventListener("click", (function (e) { n.hide() })) 
        } 
        var r = function () { 
            (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > 100 ? e.classList.add("navbar-shrink") : e.classList.remove("navbar-shrink") 
        }; 
        r(), document.addEventListener("scroll", r) 
    } 
}();