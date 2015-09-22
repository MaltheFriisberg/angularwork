/**
 * Created by Mal on 11-09-2015.
 */



(function() {
    var todoApp = angular.module("FridgeApp", []);

    todoApp.controller("FridgeController",
        function($scope) {
            $scope.todo = model;

            $scope.addItem = function(item)
            {
                var object = {
                    action: item,
                    done: false
                };

                $scope.todo.items.push(object);

            };
            $scope.remove = function(index)
            {
                //var index = $scope.indexOf(item);
                $scope.todo.items.splice(index, 1);

            }

            $scope.incompleteCount = function()
            {
                var count = 0;
                angular.forEach($scope.todo.items, function(item) {
                    if (!item.done){
                        count++;
                    }
                });

                return count;
            };

            $scope.warningLevel = function()
            {
                //if the incompleteCount > 3 : 'showRedColor'
                return $scope.incompleteCount() > 1 ? 'label-warning' : 'label-success'
            };

        });
})();



var model = { user: "Stig",
    items: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: false },
        { action: "Take over the world", done: true }
    ]
}