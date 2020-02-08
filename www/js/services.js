angular.module('starter.services', [])

.factory('CourtFactory', function($q,$http) {
  // Might use a resource here that returns a JSON array
var server_url="http://localhost:1619/api";
  var services={
    GetCaseShedules:GetCaseShedules,
    GetAnouncements:GetAnouncements,

}
return services;

  // Some fake testing data
  var announcements = [{
    AnouncementID: 0,
    AnouncementType: 'announcement Type',
    Date: 'You on your date',
    Description: 'Description of announcement'
  }]
  
  var schedules = [
  {
    CaseSheduleID: 0,
    SheduleType: 'Shedule Type',
    Date: 'You on your date',
    CaseID: 'caseID',
	Case:{
	CaseID:1,
	CaseType:"case type",
	CaseDescription:" your Case Description",
	Plaintiff:{}	}
	
  },
  {
    CaseSheduleID: 2,
    SheduleType: 'Shedule Type',
    Date: 'You on your date',
    CaseID: 'caseID',
	Case:{
	CaseID:1,
	CaseType:"case type",
	CaseDescription:" your Case Description",
	Plaintiff:{}	}
	
  }
  ]
  
   function GetCaseShedules() {
   
         var deferred = $q.defer();
		 //Court/getSchedues
      $http.get(server_url+'/CaseShedules').then(
        function (d) {
          deferred.resolve(d.data);
        },
        function (err) {
          deferred.reject(err);

        });
      return deferred.promise;
	 
	  
    }
	
  
  
 
	function GetAnouncements(){
		var deferred = $q.defer();
      $http.get(server_url + '/Anouncements').then(
        function (d) {
          deferred.resolve(d.data);
        },
        function (err) {
          deferred.reject(err);

        });
      return deferred.promise;
	
	
	
	}
   
  
});
