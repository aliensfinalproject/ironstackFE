
import angular from 'angular';

import { SERVER } from './server';

import './app.core';

angular
 .module('app', ['app.core'])
 .constant('SERVER', SERVER);
