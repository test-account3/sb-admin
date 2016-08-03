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
var home_1 = require('../../../pages/home/components/home');
var charts_1 = require('../../../pages/charts/components/charts');
var grid_1 = require('../../../pages/grid/components/grid');
var forms_1 = require('../../../pages/forms/components/forms');
var tables_1 = require('../../../pages/tables/components/tables');
var bs_element_1 = require('../../../pages/bootstrap-element/components/bs_element');
var blank_page_1 = require('../../../pages/blank-page/components/blank_page');
var component_1 = require('../../../pages/component/components/component');
var topnav_1 = require('../../../shared/topnav/topnav');
var sidebar_1 = require('../../../shared/sidebar/sidebar');
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard-cmp',
            templateUrl: 'dashboard.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, topnav_1.TopNavComponent, sidebar_1.SidebarComponent]
        }),
        router_1.Routes([
            { path: '/home', component: home_1.HomeComponent },
            { path: '/chart', component: charts_1.ChartComponent },
            { path: '/table', component: tables_1.TableComponent },
            { path: '/forms', component: forms_1.FormComponent },
            { path: '/element', component: bs_element_1.BSElementComponent },
            { path: '/grid', component: grid_1.GridComponent },
            { path: '/component', component: component_1.NG2Component },
            { path: '/blank-page', component: blank_page_1.BlankPageComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQscUJBQTRCLHFDQUFxQyxDQUFDLENBQUE7QUFDbEUsdUJBQTZCLHlDQUF5QyxDQUFDLENBQUE7QUFDdkUscUJBQTRCLHFDQUFxQyxDQUFDLENBQUE7QUFDbEUsc0JBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsdUJBQTZCLHlDQUF5QyxDQUFDLENBQUE7QUFDdkUsMkJBQWlDLHdEQUF3RCxDQUFDLENBQUE7QUFDMUYsMkJBQWlDLGlEQUFpRCxDQUFDLENBQUE7QUFDbkYsMEJBQTJCLCtDQUErQyxDQUFDLENBQUE7QUFFM0UsdUJBQThCLCtCQUErQixDQUFDLENBQUE7QUFDOUQsd0JBQStCLGlDQUFpQyxDQUFDLENBQUE7QUFxQmpFO0lBQUE7SUFBa0MsQ0FBQztJQW5CbkM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxnQkFBZ0I7WUFDN0IsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsd0JBQWUsRUFBRSwwQkFBZ0IsQ0FBQztTQUNuRSxDQUFDO1FBRUQsZUFBTSxDQUFDO1lBQ0osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsdUJBQWMsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHVCQUFjLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxxQkFBYSxFQUFFO1lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsK0JBQWtCLEVBQUM7WUFDbEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsd0JBQVksRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLCtCQUFrQixFQUFFO1NBQ3RELENBQUM7OzBCQUFBO0lBRWdDLHlCQUFDO0FBQUQsQ0FBbEMsQUFBbUMsSUFBQTtBQUF0QiwwQkFBa0IscUJBQUksQ0FBQSIsImZpbGUiOiJsYXlvdXRzL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9wYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZSc7XG5pbXBvcnQge0NoYXJ0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9wYWdlcy9jaGFydHMvY29tcG9uZW50cy9jaGFydHMnO1xuaW1wb3J0IHtHcmlkQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9wYWdlcy9ncmlkL2NvbXBvbmVudHMvZ3JpZCc7XG5pbXBvcnQge0Zvcm1Db21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3BhZ2VzL2Zvcm1zL2NvbXBvbmVudHMvZm9ybXMnO1xuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vcGFnZXMvdGFibGVzL2NvbXBvbmVudHMvdGFibGVzJztcbmltcG9ydCB7QlNFbGVtZW50Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9wYWdlcy9ib290c3RyYXAtZWxlbWVudC9jb21wb25lbnRzL2JzX2VsZW1lbnQnO1xuaW1wb3J0IHtCbGFua1BhZ2VDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3BhZ2VzL2JsYW5rLXBhZ2UvY29tcG9uZW50cy9ibGFua19wYWdlJztcbmltcG9ydCB7TkcyQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9wYWdlcy9jb21wb25lbnQvY29tcG9uZW50cy9jb21wb25lbnQnO1xuXG5pbXBvcnQge1RvcE5hdkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3RvcG5hdi90b3BuYXYnO1xuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2lkZWJhci9zaWRlYmFyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnZGFzaGJvYXJkLWNtcCcsXG4gIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFRvcE5hdkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF1cbn0pXG5cbkBSb3V0ZXMoW1xuICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2NoYXJ0JywgY29tcG9uZW50OiBDaGFydENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy90YWJsZScsIGNvbXBvbmVudDogVGFibGVDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2Zvcm1zJywgY29tcG9uZW50OiBGb3JtQ29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9lbGVtZW50JywgY29tcG9uZW50OiBCU0VsZW1lbnRDb21wb25lbnR9LFxuXHR7IHBhdGg6ICcvZ3JpZCcsIGNvbXBvbmVudDogR3JpZENvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICcvY29tcG9uZW50JywgY29tcG9uZW50OiBORzJDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2JsYW5rLXBhZ2UnLCBjb21wb25lbnQ6IEJsYW5rUGFnZUNvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHsgfVxuIl19
