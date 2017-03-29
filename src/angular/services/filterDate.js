app.factory('FilterDateService', ['$rootScope', ($rootScope) => {
  console.log('FilterDateService');

  let _filteredDate = undefined;

  let stub = {};

  stub.getFilteredDate = () => {
    return (_filteredDate) ? _filteredDate : '';
  }

  stub.setFilteredDate = (date) => {
    _filteredDate = date;
    console.log('setFilteredDate to: ' + date);
    $rootScope.$broadcast('date:changed', date);
  }

  return stub;
}]);
