window.onload = function () {
    var icon = {
        cat : '<path class="svgpath" data-index="path_0" fill="#272636" d="M958.571337 446.689528c0-118.14684-65.258283-214.083843-146.156778-215.614709C789.569248 157.25965 725.970768 104.155175 651.084197 104.155175c-52.05661 0-98.651834 25.668613-129.902582 66.109674C489.991242 126.588093 441.519274 98.526991 387.084501 98.526991c-76.098165 0-140.534733 54.840002-162.401764 130.521682-4.89345-0.711198-9.856485-1.079588-14.878872-1.079588-81.802074 0-148.116409 96.549963-148.116409 215.650525 0 72.64246 24.669866 136.89381 62.476937 175.968757-0.713244 7.103792-1.080611 14.280238-1.080611 21.519106 0 158.094668 173.285648 286.255583 387.045103 286.255583s387.045103-128.160915 387.045103-286.255583c0-6.290263-0.277316-12.533454-0.817622-18.723434C934.015058 583.284533 958.571337 519.164167 958.571337 446.689528zM645.812123 177.701215c49.166793 0 89.023546 45.011146 89.023546 100.534717s-39.856753 100.534717-89.023546 100.534717c-49.16577 0-89.022523-45.011146-89.022523-100.534717S596.646354 177.701215 645.812123 177.701215zM395.626038 176.166255c49.16577 0 89.023546 45.011146 89.023546 100.534717s-39.856753 100.534717-89.023546 100.534717-89.023546-45.011146-89.023546-100.534717S346.460268 176.166255 395.626038 176.166255zM116.277772 425.583838c0-55.523571 39.856753-100.534717 89.023546-100.534717s89.023546 45.011146 89.023546 100.534717-39.856753 100.534717-89.023546 100.534717S116.277772 481.108432 116.277772 425.583838zM505.177106 793.238312c-171.915441 90.050945-270.152836 0.910743-270.152836-114.098641s121.410164-208.242811 271.176143-208.242811 271.176143 93.233428 271.176143 208.242811S669.929404 878.172727 505.177106 793.238312zM817.718355 526.119579c-49.16577 0-89.022523-45.011146-89.022523-100.534717s39.856753-100.534717 89.022523-100.534717c49.166793 0 89.023546 45.011146 89.023546 100.534717S866.885148 526.119579 817.718355 526.119579z" />',
        upload: '<path class="svgpath" data-index="path_0" fill="#272636" d="M994 448l-68 0c-16.568 0-30 13.432-30 30l0 418L128 896 128 478c0-16.568-13.432-30-30-30L30 448c-16.568 0-30 13.432-30 30l0 450 0 64 0 2c0 16.568 13.432 30 30 30l2 0 66 0 828 0 66 0 2 0c16.568 0 30-13.432 30-30l0-2 0-64L1024 478C1024 461.432 1010.568 448 994 448z" /><path class="svgpath" data-index="path_1" fill="#272636" d="M448 256l0 416c0 17.672 14.328 32 32 32l64 0c17.672 0 32-14.328 32-32L576 256l192 0L512 0 256 256 448 256z" />',
        web: '<path class="svgpath" data-index="path_0" fill="#272636" d="M513.022795 1022.399549c-68.725244 0-135.412063-13.46671-198.206224-40.026622-60.637032-25.647123-115.087155-62.35721-161.839969-109.109-46.752814-46.752814-83.4629-101.202936-109.110023-161.839969-26.559912-62.794162-40.026622-129.48098-40.026622-198.206224 0-68.726268 13.46671-135.412063 40.026622-198.206224 25.647123-60.637032 62.35721-115.088178 109.110023-161.839969 46.752814-46.752814 101.202936-83.4629 161.839969-109.110023C377.610732 17.501606 444.296527 4.034896 513.022795 4.034896c68.725244 0 135.412063 13.46671 198.206224 40.026622 60.637032 25.647123 115.088178 62.35721 161.839969 109.110023s83.4629 101.202936 109.109 161.839969c26.559912 62.794162 40.026622 129.48098 40.026622 198.206224-0.001023 68.726268-13.467733 135.412063-40.027645 198.205201l-56.547901-23.917736c23.341614-55.184857 35.176151-113.823372 35.177174-174.288488 0-246.908436-200.875007-447.783443-447.784466-447.783443-246.909459 0-447.784466 200.875007-447.784466 447.784466 0 246.909459 200.875007 447.784466 447.784466 447.784466 124.319423 0 244.095367-52.342112 328.615343-143.606699l45.046962 41.718147c-47.190789 50.957579-103.147218 91.091648-166.314887 119.286804C654.962527 1007.596402 585.199651 1022.399549 513.022795 1022.399549z" /><path class="svgpath" data-index="path_1" fill="#272636" d="M821.902654 626.37698c-9.954723 0-19.327184-2.0241-28.051893-6.072299-27.16571-12.603039-45.0091-43.330878-53.036937-91.328032-3.417843-20.434401-4.279467-39.550785-4.433986-51.249221-55.807027-38.3484-81.381495-79.432097-76.044954-122.225739 5.272074-42.266639 40.612976-82.253352 105.038288-118.849852 45.283346-25.722848 88.60706-40.375569 90.428545-40.986483l13.017478 38.807864c-0.800225 0.270153-42.078351 14.31503-83.763752 38.075177-51.513234 29.359678-80.596619 59.804061-84.104513 88.041172-3.502777 28.179806 19.051915 58.124815 67.035766 89.00308l9.822716 6.320962-0.447185 11.672854c-1.175779 32.063253 5.520737 102.532211 33.732266 115.594715 16.708544 7.738241 44.965098-4.666276 80.156598-34.983769-1.846044-12.121062-3.770883-31.769564-1.588171-53.156664 5.004991-49.046043 28.64234-83.421968 68.358901-99.411127l15.287171 37.969776c-61.657268 24.823362-40.168862 116.475781-39.944757 117.398804l2.860141 11.772115-8.943696 8.170077c-27.176966 24.829502-51.127448 40.900525-73.220628 49.134047C842.78731 624.276133 832.043618 626.37698 821.902654 626.37698zM868.819197 234.474242l-6.508227-19.403932 6.517437 19.400862C868.82636 234.472196 868.82329 234.473219 868.819197 234.474242L868.819197 234.474242z" /><path class="svgpath" data-index="path_2" fill="#272636" d="M515.287371 380.567575c-33.93488 0-59.057047-11.462053-70.739111-32.275077-13.658068-24.333198-8.115841-56.923454 16.962324-99.535971 0.607844-8.739035 2.246157-26.88737 6.197142-45.264926 3.372817-15.69547 7.810896-28.525684 13.190417-38.135552 11.664667-20.841677 26.720571-25.216311 37.296441-25.216311 27.620058 0 53.389978 28.263717 86.168522 94.505397l1.430582 2.892887 0.471744 3.192715c0.157589 1.068332 3.794419 26.503631-2.407839 55.495942-8.750291 40.898479-32.323173 69.382207-68.171636 82.371032l-2.056845 0.744967-2.166339 0.293689C530.759761 379.732557 524.336468 380.567575 515.287371 380.567575zM519.09407 181.584662c-2.789533 3.247974-8.361435 13.582343-12.654204 36.977169-3.533476 19.25146-4.343935 37.120432-4.352121 37.298488l-0.230244 5.266957-2.746554 4.511757c-26.106588 42.785455-21.043269 58.745962-18.869766 62.618153 3.938706 7.017834 17.367553 11.377118 35.045167 11.377118 3.703345 0 6.759961-0.195451 8.652054-0.357134 20.929682-8.349155 33.915437-24.920576 39.666418-50.584072 3.802606-16.969487 3.02387-32.765241 2.468215-39.10974C538.752806 195.11277 523.524986 183.848215 519.09407 181.584662z" /><path class="svgpath" data-index="path_3" fill="#272636" d="M225.06136 897.730155c-2.836605 0-5.03569-0.072655-6.505158-0.228197l4.285606-40.706097c12.410658 1.087774 114.382097-6.504134 204.547653-14.249539 28.54615-6.681166 35.33988-37.683251 36.660968-46.02422-7.648191-54.259788 15.000646-85.654822 35.57524-102.514815 21.822005-17.882276 45.191248-22.715351 47.784306-23.208585l2.419096-0.458441 2.459005 0.127913c26.631544 1.378393 47.798633-4.381797 61.237713-16.667611 3.859911-3.529383 6.531763-7.115048 8.28571-9.946536-12.815887-24.982998-33.162284-40.145325-60.58996-45.11757-23.245424-4.213975-43.055608 0.441045-43.25106 0.48914l-19.763113 4.923126-5.019317-19.738553c-7.735172-30.4188-21.503756-51.135634-39.816844-59.911508-6.53688-3.133364-12.573363-4.211928-16.633842-4.551666-15.065114 12.718673-29.484521 14.296611-39.451524 13.124925-27.332509-3.225461-44.342927-29.471219-47.612391-34.944883-8.43716-12.624529-14.283308-15.165398-15.653515-15.023158-4.333702 0.375553-13.30605 11.213389-17.778922 21.475104l-0.552585 1.294482-0.692778 1.134847c-14.727423 24.545022-43.538609 40.329521-85.635379 46.913473-28.894074 4.517897-53.967122 2.956332-55.020104 2.888793l-9.060353-0.591471-5.64251-7.114025c-0.992607-1.251503-11.166317-12.455683-62.104453-20.452821-28.812209-4.524037-55.395658-5.571902-55.660694-5.582135l1.534959-40.903595c1.166569 0.042979 28.933983 1.12359 60.081377 5.986341 39.535435 6.172583 65.682955 15.19405 80.934311 28.068266 25.676799 0.293689 78.620615-4.279467 94.880951-29.322839 4.420683-9.757225 21.158902-41.850154 51.010791-44.558845 19.756973-1.789763 37.849026 9.528004 53.79009 33.643238l0.670266 1.085728c3.584642 6.048763 11.570523 14.712073 17.346063 15.356756 3.957125 0.455371 8.833179-4.071735 11.398608-6.800893l4.831029-5.136997 6.969739-1.071402c2.223644-0.340761 22.399149-3.016707 45.741787 8.169053 18.218944 8.730848 41.763173 27.735691 56.440453 69.032236 10.858302-0.893346 25.335015-1.000793 41.018206 1.841951 30.743188 5.572926 72.127737 23.537066 94.705965 77.471442l2.7486 6.566556-1.919722 6.854105c-0.528026 1.886977-5.656837 18.883069-22.910802 34.657334-14.077623 12.871145-39.349193 27.590382-81.242326 27.592428-2.188852 0-4.41352-0.039909-6.693446-0.122797-4.78498 1.309832-17.446347 5.457292-28.677133 15.055904-17.638729 15.074324-24.235984 37.467333-19.60757 66.555835l0.401136 2.524496-0.231267 2.543939c-0.165776 1.819438-1.86958 18.299785-10.653641 36.473703-12.576433 26.02063-33.251312 42.696428-59.789735 48.225351l-1.199315 0.249687-1.220804 0.105401C402.438187 885.776915 261.514597 897.728108 225.06136 897.730155z" />;'
    };
    var 
    //获取图标Class数组
    icon_Obj = getElementsByClassName("svg_icon");
    //循环遍历所有图标并绘制SVG图标
    for(var sort in icon_Obj)
    {
        var
        //图标画布中X轴偏移
        offsetX = icon_Obj[sort].getAttribute("icon-offsetx")?icon_Obj[sort].getAttribute("icon-offsetx"):0,
        //图标画布中Y轴偏移
        offsetY = icon_Obj[sort].getAttribute("icon-offsety")?icon_Obj[sort].getAttribute("icon-offsetx"):0,
        //图标宽度
        iconWidth = icon_Obj[sort].getAttribute("icon-width")?icon_Obj[sort].getAttribute("icon-width"):32,
        //图标高度
        iconHeight = icon_Obj[sort].getAttribute("icon-height")?icon_Obj[sort].getAttribute("icon-height"):32,
        //图标填充颜色
        fillColor = icon_Obj[sort].getAttribute("icon-fill")?icon_Obj[sort].getAttribute("icon-fill"):"#000",
        //图标描边颜色
        strokeColor = icon_Obj[sort].getAttribute("icon-stroke")?icon_Obj[sort].getAttribute("icon-stroke"):"none",
        r = Raphael(icon_Obj[sort], iconWidth, iconHeight);
        var str = iconWidth/1024+"";        
        var dot = str.indexOf('.');
        fill = {fill: fillColor , stroke: strokeColor,transform: "s"+str.substring(0,dot+3)+","+str.substring(0,dot+3)+",0,0"};
        Icon = r.path(icon[icon_Obj[sort].getAttribute("data-icon")]).attr(fill);
        //图标边框效果
        /*
        stroke = {stroke: "#fff", "stroke-width": 3, "stroke-linejoin": "round", opacity: 0},
        s = r.path(icon[icon_Obj[sort].getAttribute("data-icon")]).attr(stroke).translate(0, 0),
        (function (icon, path, s, name) {
            var Path = document.getElementById("path");
            Path.value = path;
            console.log(path)
        })(Icon, icon[icon_Obj[sort].getAttribute("data-icon")], s, name);
        */
    }
    //预览效果
    var preview = Raphael("preview", 350, 350);
    for(var sort in icon_Obj)
    {
        icon_Obj[sort].onclick = function(event)
        {
            for(var i=0; i<event.target.childNodes.length;i++){
                if(event.target.childNodes[i].tagName == "path")
                {
                    var path = event.target.childNodes[i].getAttribute("d");
                    var Path = document.getElementById("path");
                    Path.value = path;            
                    select_Icon(path);
                }
            }            
        }
    }
    //绘制预览图标
    function select_Icon(path)
    {
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
                transform: "s0.34,0.34,0,0"
            }),
            dl,
            h,
            l;
            console.log(p)
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
        preview.rect(0, 0, 1024, 1024).attr({
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
    }
};

//获取某一class的所有元素
function getElementsByClassName(className,tagName){
    var ele=[],all=document.getElementsByTagName(tagName||"*");
    for(var i=0;i<all.length;i++){
        if(all[i].className==className)
        {
            ele[ele.length]=all[i];
        }
    }
    return ele;
}