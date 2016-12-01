
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { run } from "./run";
import { routerConfig } from "./routes";

import { LayoutController } from "./controllers/layout";
import { RegisterController } from "./controllers/register";
import { LoginController } from "./controllers/login";
import { UserService } from "./services/users";
import { ClassController } from "./controllers/class"
import { ClassAddController } from "./controllers/classadd"
import { UserListController } from "./controllers/userlist"

angular
 .module('app.core', ['ui.router', 'ngCookies'])
 .config(routerConfig)
 .run(run)
 .controller('LayoutController', LayoutController)
 .controller('RegisterController', RegisterController)
 .controller('LoginController', LoginController)
 .controller('ClassController',ClassController)
 .controller('ClassAddController',ClassAddController)
 .controller('UserListController',UserListController)
 .service('UserService', UserService);
