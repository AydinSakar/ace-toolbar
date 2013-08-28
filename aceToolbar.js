angular.module('appglu.ace-toolbar', []).
directive('aceToolbar', ['$parse', function ($parse) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'bower_components/ace-toolbar/ace-toolbar.html',
        link: function ($scope, iElement, iAttrs) {
            $scope.leftButtonLabel = iAttrs.leftButtonLabel || '';
            $scope.leftButtonShow = iAttrs.leftButtonIconClass || iAttrs.leftButtonLabel;
            $scope.leftButtonAction = iAttrs.leftButtonAction;
            $scope.leftButtonIconClass = iAttrs.leftButtonIconClass;

            $scope.leftButtonActionFn = function () {
                var parsedExpression = $parse($scope.leftButtonAction);
                parsedExpression($scope);
            };

            $scope.rightButtonLabel = iAttrs.rightButtonLabel || '';
            $scope.rightButtonShow = iAttrs.rightButtonLabel || iAttrs.rightButtonIconClass;
            $scope.rightButtonAction = iAttrs.rightButtonAction;
            $scope.rightButtonIconClass = iAttrs.rightButtonIconClass;

            $scope.rightButtonActionFn = function () {
                var parsedExpression = $parse($scope.rightButtonAction);
                parsedExpression($scope);
            };
        }
    }
}]);
