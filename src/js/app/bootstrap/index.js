import bootstrapDropdownDirective from './directives/bootstrap-dropdown/bootstrap-dropdown';

const bootstrap = angular.module('bootstrap',[]);

bootstrap.directive('bootstrapDropdown',bootstrapDropdownDirective);

export default bootstrap;