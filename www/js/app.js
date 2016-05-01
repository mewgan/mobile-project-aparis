// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic', 'ngCordova'])

    .run(function ($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            if (window.Connection) {
                if (navigator.connection.type == Connection.NONE) {
                    $ionicPopup.alert({
                        title: "Réseau internet non disponible",
                        content: "Vous n'êtes pas connecté à internet"
                    })
                        .then(function (result) {
                            ionic.Platform.exitApp();
                        });
                }
            }
            $ionicPlatform.onHardwareBackButton(function () {
                event.preventDefault();
                event.stopPropagation();
            });
            moment.locale('fr');
        });
    })

    .factory('$localStorage', ['$window', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            add: function (key, value) {
                var tab = [];
                if (typeof $window.localStorage[key] !== 'undefined')
                    tab = JSON.parse($window.localStorage[key]);
                tab.push(value);
                $window.localStorage[key] = JSON.stringify(tab);
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            addObject: function (key, value) {
                var tab = [];
                if (typeof $window.localStorage[key] !== 'undefined')
                    tab = JSON.parse($window.localStorage[key] || '{}');
                tab.push(JSON.stringify(value));
                $window.localStorage[key] = JSON.stringify(tab);
            },
            remove: function (key, index) {
                var tab = JSON.parse($window.localStorage[key] || '{}');
                tab.splice(index, 1);
                $window.localStorage[key] = JSON.stringify(tab);
            }
        }
    }])
    .filter('moment', function () {
        return function (input, momentFn /*, param1, param2, ...param n */) {
            var args = Array.prototype.slice.call(arguments, 2),
                momentObj = moment(input);
            return momentObj[momentFn].apply(momentObj, args);
        };
    })
    .filter('html_entity_decode', function () {
        return function (texte) {
            texte = texte.replace(/&quot;/g, '"'); // 34 22
            texte = texte.replace(/&amp;/g, '&'); // 38 26
            texte = texte.replace(/&#39;/g, "'"); // 39 27
            texte = texte.replace(/&lt;/g, '<'); // 60 3C
            texte = texte.replace(/&gt;/g, '>'); // 62 3E
            texte = texte.replace(/&circ;/g, '^'); // 94 5E
            texte = texte.replace(/&lsquo;/g, '‘'); // 145 91
            texte = texte.replace(/&rsquo;/g, '’'); // 146 92
            texte = texte.replace(/&ldquo;/g, '“'); // 147 93
            texte = texte.replace(/&rdquo;/g, '”'); // 148 94
            texte = texte.replace(/&bull;/g, '•'); // 149 95
            texte = texte.replace(/&ndash;/g, '–'); // 150 96
            texte = texte.replace(/&mdash;/g, '—'); // 151 97
            texte = texte.replace(/&tilde;/g, '˜'); // 152 98
            texte = texte.replace(/&trade;/g, '™'); // 153 99
            texte = texte.replace(/&scaron;/g, 'š'); // 154 9A
            texte = texte.replace(/&rsaquo;/g, '›'); // 155 9B
            texte = texte.replace(/&oelig;/g, 'œ'); // 156 9C
            texte = texte.replace(/&#357;/g, ''); // 157 9D
            texte = texte.replace(/&#382;/g, 'ž'); // 158 9E
            texte = texte.replace(/&Yuml;/g, 'Ÿ'); // 159 9F
            texte = texte.replace(/&nbsp;/g, ' '); // 160 A0
            texte = texte.replace(/&iexcl;/g, '¡'); // 161 A1
            texte = texte.replace(/&cent;/g, '¢'); // 162 A2
            texte = texte.replace(/&pound;/g, '£'); // 163 A3
            texte = texte.replace(/&curren;/g, ' '); // 164 A4
            texte = texte.replace(/&yen;/g, '¥'); // 165 A5
            texte = texte.replace(/&brvbar;/g, '¦'); // 166 A6
            texte = texte.replace(/&sect;/g, '§'); // 167 A7
            texte = texte.replace(/&uml;/g, '¨'); // 168 A8
            texte = texte.replace(/&copy;/g, '©'); // 169 A9
            texte = texte.replace(/&ordf;/g, 'ª'); // 170 AA
            texte = texte.replace(/&laquo;/g, '«'); // 171 AB
            texte = texte.replace(/&not;/g, '¬'); // 172 AC
            texte = texte.replace(/&shy;/g, '­'); // 173 AD
            texte = texte.replace(/&reg;/g, '®'); // 174 AE
            texte = texte.replace(/&macr;/g, '¯'); // 175 AF
            texte = texte.replace(/&deg;/g, '°'); // 176 B0
            texte = texte.replace(/&plusmn;/g, '±'); // 177 B1
            texte = texte.replace(/&sup2;/g, '²'); // 178 B2
            texte = texte.replace(/&sup3;/g, '³'); // 179 B3
            texte = texte.replace(/&acute;/g, '´'); // 180 B4
            texte = texte.replace(/&micro;/g, 'µ'); // 181 B5
            texte = texte.replace(/&para/g, '¶'); // 182 B6
            texte = texte.replace(/&middot;/g, '·'); // 183 B7
            texte = texte.replace(/&cedil;/g, '¸'); // 184 B8
            texte = texte.replace(/&sup1;/g, '¹'); // 185 B9
            texte = texte.replace(/&ordm;/g, 'º'); // 186 BA
            texte = texte.replace(/&raquo;/g, '»'); // 187 BB
            texte = texte.replace(/&frac14;/g, '¼'); // 188 BC
            texte = texte.replace(/&frac12;/g, '½'); // 189 BD
            texte = texte.replace(/&frac34;/g, '¾'); // 190 BE
            texte = texte.replace(/&iquest;/g, '¿'); // 191 BF
            texte = texte.replace(/&Agrave;/g, 'À'); // 192 C0
            texte = texte.replace(/&Aacute;/g, 'Á'); // 193 C1
            texte = texte.replace(/&Acirc;/g, 'Â'); // 194 C2
            texte = texte.replace(/&Atilde;/g, 'Ã'); // 195 C3
            texte = texte.replace(/&Auml;/g, 'Ä'); // 196 C4
            texte = texte.replace(/&Aring;/g, 'Å'); // 197 C5
            texte = texte.replace(/&AElig;/g, 'Æ'); // 198 C6
            texte = texte.replace(/&Ccedil;/g, 'Ç'); // 199 C7
            texte = texte.replace(/&Egrave;/g, 'È'); // 200 C8
            texte = texte.replace(/&Eacute;/g, 'É'); // 201 C9
            texte = texte.replace(/&Ecirc;/g, 'Ê'); // 202 CA
            texte = texte.replace(/&Euml;/g, 'Ë'); // 203 CB
            texte = texte.replace(/&Igrave;/g, 'Ì'); // 204 CC
            texte = texte.replace(/&Iacute;/g, 'Í'); // 205 CD
            texte = texte.replace(/&Icirc;/g, 'Î'); // 206 CE
            texte = texte.replace(/&Iuml;/g, 'Ï'); // 207 CF
            texte = texte.replace(/&ETH;/g, 'Ð'); // 208 D0
            texte = texte.replace(/&Ntilde;/g, 'Ñ'); // 209 D1
            texte = texte.replace(/&Ograve;/g, 'Ò'); // 210 D2
            texte = texte.replace(/&Oacute;/g, 'Ó'); // 211 D3
            texte = texte.replace(/&Ocirc;/g, 'Ô'); // 212 D4
            texte = texte.replace(/&Otilde;/g, 'Õ'); // 213 D5
            texte = texte.replace(/&Ouml;/g, 'Ö'); // 214 D6
            texte = texte.replace(/&times;/g, '×'); // 215 D7
            texte = texte.replace(/&Oslash;/g, 'Ø'); // 216 D8
            texte = texte.replace(/&Ugrave;/g, 'Ù'); // 217 D9
            texte = texte.replace(/&Uacute;/g, 'Ú'); // 218 DA
            texte = texte.replace(/&Ucirc;/g, 'Û'); // 219 DB
            texte = texte.replace(/&Uuml;/g, 'Ü'); // 220 DC
            texte = texte.replace(/&Yacute;/g, 'Ý'); // 221 DD
            texte = texte.replace(/&THORN;/g, 'Þ'); // 222 DE
            texte = texte.replace(/&szlig;/g, 'ß'); // 223 DF
            texte = texte.replace(/&agrave;/g, 'à'); // 224 E0
            texte = texte.replace(/&aacute;/g, 'á'); // 225 E1
            texte = texte.replace(/&acirc;/g, 'â'); // 226 E2
            texte = texte.replace(/&atilde;/g, 'ã'); // 227 E3
            texte = texte.replace(/&auml;/g, 'ä'); // 228 E4
            texte = texte.replace(/&aring;/g, 'å'); // 229 E5
            texte = texte.replace(/&aelig;/g, 'æ'); // 230 E6
            texte = texte.replace(/&ccedil;/g, 'ç'); // 231 E7
            texte = texte.replace(/&egrave;/g, 'è'); // 232 E8
            texte = texte.replace(/&eacute;/g, 'é'); // 233 E9
            texte = texte.replace(/&ecirc;/g, 'ê'); // 234 EA
            texte = texte.replace(/&euml;/g, 'ë'); // 235 EB
            texte = texte.replace(/&igrave;/g, 'ì'); // 236 EC
            texte = texte.replace(/&iacute;/g, 'í'); // 237 ED
            texte = texte.replace(/&icirc;/g, 'î'); // 238 EE
            texte = texte.replace(/&iuml;/g, 'ï'); // 239 EF
            texte = texte.replace(/&eth;/g, 'ð'); // 240 F0
            texte = texte.replace(/&ntilde;/g, 'ñ'); // 241 F1
            texte = texte.replace(/&ograve;/g, 'ò'); // 242 F2
            texte = texte.replace(/&oacute;/g, 'ó'); // 243 F3
            texte = texte.replace(/&ocirc;/g, 'ô'); // 244 F4
            texte = texte.replace(/&otilde;/g, 'õ'); // 245 F5
            texte = texte.replace(/&ouml;/g, 'ö'); // 246 F6
            texte = texte.replace(/&divide;/g, '÷'); // 247 F7
            texte = texte.replace(/&oslash;/g, 'ø'); // 248 F8
            texte = texte.replace(/&ugrave;/g, 'ù'); // 249 F9
            texte = texte.replace(/&uacute;/g, 'ú'); // 250 FA
            texte = texte.replace(/&ucirc;/g, 'û'); // 251 FB
            texte = texte.replace(/&uuml;/g, 'ü'); // 252 FC
            texte = texte.replace(/&yacute;/g, 'ý'); // 253 FD
            texte = texte.replace(/&thorn;/g, 'þ'); // 254 FE
            texte = texte.replace(/&yuml;/g, 'ÿ'); // 255 FF
            return texte;
        };
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('start', {
                url: '/start',
                abstract: true,
                templateUrl: 'templates/menu-start.html'
            })
            .state('start.home', {
                url: '/home',
                views: {
                    'start': {
                        templateUrl: 'templates/start.html',
                        controller: 'IntroCtrl'
                    }
                }
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'home': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('app.news', {
                url: '/news',
                views: {
                    'news': {
                        templateUrl: 'templates/news.html',
                        controller: 'NewsCtrl'
                    }
                }
            })
            .state('app.single-news', {
                url: '/single-news/:news',
                views: {
                    'news': {
                        templateUrl: 'templates/single.html',
                        controller: 'SingleNewsCtrl'
                    }
                }
            })
            .state('app.search', {
                url: '/search',
                views: {
                    'home': {
                        templateUrl: 'templates/search.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('app.search-around-me', {
                url: '/search-around-me/:query/:radius/:date',
                views: {
                    'home': {
                        templateUrl: 'templates/result.html',
                        controller: 'GeoCtrl'
                    }
                }
            })
            .state('app.search-query', {
                url: '/search-query/:query/:date',
                views: {
                    'home': {
                        templateUrl: 'templates/result.html',
                        controller: 'SearchCtrl'
                    }
                }
            })
            .state('app.single', {
                url: '/single/:event',
                views: {
                    'home': {
                        templateUrl: 'templates/event.html',
                        controller: 'EventCtrl'
                    }
                }
            })
            .state('app.events', {
                url: '/events',
                views: {
                    'events': {
                        templateUrl: 'templates/events.html',
                        controller: 'EventsCtrl'
                    }
                }
            })
            .state('app.event', {
                url: '/event/:event',
                views: {
                    'events': {
                        templateUrl: 'templates/event.html',
                        controller: 'EventCtrl'
                    }
                }
            })
            .state('app.favorites', {
                url: '/favorites',
                views: {
                    'favorites': {
                        templateUrl: 'templates/favorites.html',
                        controller: 'FavoriteCtrl'
                    }
                }
            })
            .state('app.favorite', {
                url: '/favorite/:event',
                views: {
                    'favorites': {
                        templateUrl: 'templates/event.html',
                        controller: 'EventCtrl'
                    }
                }
            })
        ;

        if (window.localStorage['started']) {
            $urlRouterProvider.otherwise('/app/home');
        } else {
            $urlRouterProvider.otherwise('/start/home');
        }

    });
