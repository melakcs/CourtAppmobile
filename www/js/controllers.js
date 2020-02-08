angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,CourtFactory) {
$scope.id=1234;

 
})

.controller('ChatsCtrl', function($scope, CourtFactory) {
 $scope.viewSchedules=viewSchedules;
 $scope.schedules = []
function viewSchedules(){
		
		$scope.loading = true;
		CourtFactory.GetCaseShedules()
        .then(function (result) {
          $scope.schedules = result;
          console.log($scope.schedules);
        }, function (error) {
          console.log("error", error)
        });

}
//calling the service method
$scope.viewSchedules();

})



.controller('AccountCtrl', function($scope,CourtFactory ) {
  $scope.viewAnnouncements=viewAnnouncements;
 $scope.anouncements = [];
 
    function viewAnnouncements() {
       $scope.loading = true;
      CourtFactory.GetAnouncements()
        .then(function (result) {
          $scope.lists = result;
          console.log("data fro db vvv",$scope.list);
        }, function (error) {
          console.log("error", error)
        });

    }
	//calling the service method 
	viewAnnouncements();
});
