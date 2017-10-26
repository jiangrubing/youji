/**
 * Created by lenovo on 2017/10/25.
 */
var path = require("path");
var url = require("url");
var gulp = require("gulp");
var webServer = require("gulp-webserver");
gulp.task("server", function () {
    gulp.src(".")
        .pipe(webServer({
            host:"localhost",
            livereload: true,
            directoryListing: true,
            middleware: function(req, res, next){

                var localUrl = url.parse(req.url).pathname;

                if(localUrl == "/api"){
                    var data=[{
                        id: 1,
                        title:"2015年春节为期8天的关西亲子游一奈良+大阪篇",
                        cont:"66人浏览",
                        data:"2-16",
                        images:"Content/images/banner_1 (5).jpg"
                    },{
                        id: 2,
                        title:"2016年春节为期8天的关西亲子游一奈良+大阪篇",
                        cont:"66人浏览",
                        data:"2-16",
                        images:"Content/images/banner_1.jpg"
                    },{
                        id: 3,
                        title:"2017年春节为期8天的关西亲子游一奈良+大阪篇",
                        cont:"66人浏览",
                        data:"2-16",
                        images:"Content/images/banner_1 (1).jpg"
                    }];
                    res.writeHead(200,{
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.end(JSON.stringify(data));

                };
                next();
            },
            port:8099,
            open:"index.html"
        }))
})