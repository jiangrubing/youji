app.factory("baseServer",function($http,$q){
    return {
        ajax:function(url,type,data){
            var defer = $q.defer();
            if(type == "JSONP"){
                $ajax({
                    url:url,
                    type:"jsonp",
                    data:data,
                    success:function(data){
                        defer.resolve(data)
                    },
                    error:function(error){
                        defer.reject(error)
                    }
                });
                return defer.promise;
            }else{
                $http({
                   url:url,
                   methed:type | "get",
                   data:data  | null
                }).then(function(result){
                    defer.resolve(result)
                },function(error){
                    defer.reject(error);
                })
                return defer.promise;
            }

        }
    }
})