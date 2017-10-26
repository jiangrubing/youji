app.factory("youjiServer",["baseServer",function(baseServer){
    return {
        getData:function() {
            return baseServer.ajax("http://localhost:8099/api","get");
        }
    }
}])