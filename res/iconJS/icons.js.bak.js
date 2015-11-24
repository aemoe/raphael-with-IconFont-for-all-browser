window.onload = function () {
    var icon = {
        "?": "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466z M17.328,24.371h-2.707v-2.596h2.707V24.371zM17.328,19.003v0.858h-2.707v-1.057c0-3.19,3.63-3.696,3.63-5.963c0-1.034-0.924-1.826-2.134-1.826c-1.254,0-2.354,0.924-2.354,0.924l-1.541-1.915c0,0,1.519-1.584,4.137-1.584c2.487,0,4.796,1.54,4.796,4.136C21.156,16.208,17.328,16.627,17.328,19.003z"
    },
        x = 0,
        y = 0,
        fill = {fill: "#333", stroke: "none"},
        stroke = {stroke: "#fff", "stroke-width": 3, "stroke-linejoin": "round", opacity: 0},
        selected,
		count = 0,
        Path = document.getElementById("path"),
        none = {fill: "#000", opacity: 0},
        preview = Raphael("preview", 350, 350);
    for (var name in icon) {
		count++;
        var r = Raphael(x + 36, y + 36, 40, 40),
            s = r.path(icon[name]).attr(stroke).translate(4, 4),
            Icon = r.path(icon[name]).attr(fill).translate(4, 4);
        (function (icon, path, s, name) {
            var clicker = function () {
                document.location.hash = name;
                selected && selected.attr(fill);
                selected = icon.attr({fill: "90-#0050af-#002c62"});
                Path.value = path;
                Path.select();
                preview.clear();
                var p = Raphael._path2curve(path),
                    dots = [],
                    handlers = [],
                    set = preview.set(),
                    hset = preview.set(),
                    shape = preview.path(p).attr({
                        fill: "#333",
                        stroke: "#333",
                        "stroke-width": 0,
                        transform: "t10,10s10,10,0,0"
                    }),
                    dl,
                    h,
                    l;
                for (var i = 0, ii = p.length; i < ii; i++) {
                    l = p[i].length;
                    dl = dots[dots.length - 1];
                    switch (p[i][0]) {
                        case "C":
                            handlers.push([dl[0], dl[1]].concat(p[i].slice(1)));
                        case "M":
                            dots.push([p[i][l - 2], p[i][l - 1]]);
                        break;
                    }
                }
                for (i = 0, ii = handlers.length; i < ii; i++) {
                    h = handlers[i];
                    hset.push(
                        preview.circle(h[2], h[3], .1),
                        preview.circle(h[4], h[5], .1),
                        preview.path("M" + h.slice(0, 4) + "M" + h.slice(4, 8))
                    );
                }
                for (i = 0, ii = dots.length; i < ii; i++) {
                    set.push(preview.circle(dots[i][0], dots[i][1], .2));
                }
                set.attr({
                    fill: "#aaa",
                    stroke: "#333",
                    "stroke-width": 1,
                    r: 0,
                    transform: "t10,10s10,10,0,0"
                });
                hset.attr({
                    fill: "#333",
                    stroke: "#333",
                    "stroke-width": 1,
                    opacity: 0,
                    transform: "t10,10s10,10,0,0"
                });
                preview.rect(0, 0, 350, 350).attr({
                    fill: "#000",
                    opacity: 0
                }).hover(function () {
                    set.stop().animate({ r: .15 }, 500);
                    hset.stop().animate({ opacity: .5 }, 500);
                    shape.stop().animate({
                        "stroke-width": 1,
                        "fill-opacity": 0
                    }, 500);
                }, function () {
                    set.stop().animate({ r: 0 }, 500);
                    hset.stop().animate({ opacity: 0 }, 500);
                    shape.stop().animate({
                        "stroke-width": 0,
                        "fill-opacity": 1
                    }, 500);
                });
            };
            r.rect(0, 0, 32, 32).attr(none).click(clicker).hover(function () {
                s.stop().animate({opacity: 1}, 200);
            }, function () {
                s.stop().attr({opacity: 0});
            });
            if (document.location.hash == "#" + name) {
                clicker();
            }
        })(Icon, icon[name], s, name);
        x += 37;
        if (x > 515) {
            x = 0;
            y += 37;
        }
    }
	document.getElementById("number").innerHTML = count;
};