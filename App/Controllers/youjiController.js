/**
 * Created by lenovo on 2017/10/25.
 */
app.controller("youjiController",["$scope","youjiServer",function($scope,youjiServer){
    $scope.tabs=[];
    youjiServer.getData().then(function(result){
        $scope.getData = result.data
    });
    new Swiper(".swiper-container",{
        autoplay: 1500,
        loop: true
    })
}]);