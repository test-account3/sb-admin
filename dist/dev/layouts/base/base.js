"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_1 = require('../../pages/login/components/login');
var signup_1 = require('../../pages/signup/components/signup');
var dashboard_1 = require('../dashboard/components/dashboard');
var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = null;
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'base.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/', component: login_1.LoginComponent },
            { path: '/signup', component: signup_1.SignupComponent },
            { path: 'dashboard', component: dashboard_1.DashboardComponent }
        ]), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvYmFzZS9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkQsZUFBZSxDQUFDLENBQUE7QUFDN0UsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsc0JBQTZCLG9DQUFvQyxDQUFDLENBQUE7QUFDbEUsdUJBQThCLHNDQUFzQyxDQUFDLENBQUE7QUFDckUsMEJBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFnQnJFO0lBRUMsc0JBQW1CLGdCQUFpQztRQURwRCxxQkFBZ0IsR0FBUSxJQUFJLENBQUM7UUFHekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7SUFuQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2xDLENBQUM7UUFFRCxlQUFNLENBQUM7WUFDSixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUU7WUFDeEMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx3QkFBZSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsOEJBQWtCLEVBQUU7U0FDdkQsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksb0JBQVksZUFNeEIsQ0FBQSIsImZpbGUiOiJsYXlvdXRzL2Jhc2UvYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vcGFnZXMvbG9naW4vY29tcG9uZW50cy9sb2dpbic7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi4vLi4vcGFnZXMvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwJztcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuLi9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdiYXNlLmh0bWwnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlcyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdkYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0dmlld0NvbnRhaW5lclJlZjogYW55ID0gbnVsbDtcblx0cHVibGljIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuXHQgICAgLy8gWW91IG5lZWQgdGhpcyBzbWFsbCBoYWNrIGluIG9yZGVyIHRvIGNhdGNoIGFwcGxpY2F0aW9uIHJvb3QgdmlldyBjb250YWluZXIgcmVmXG5cdCAgICB0aGlzLnZpZXdDb250YWluZXJSZWYgPSB2aWV3Q29udGFpbmVyUmVmO1xuXHR9XG59XG4iXX0=
