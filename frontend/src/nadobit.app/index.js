angular.module('nadobit.app', [
    'ui.router',
])

.provider('nbState', /*@ngInject*/ function($stateProvider: angular.ui.IStateProvider) {
    var self = this;

    this.$get = /*@ngInject*/ function($state: angular.ui.IStateService): angular.ui.IStateService {
        return $state;
    };

    /**
     * register mutliple states with extended definition
     */
    this.states = function(definitions: any[], parentName?: string): any {
        definitions.forEach(function(definition: any) {

            // definition maybe loaded via require. At some point there is
            // a caching mechanism which reuses exported objects if the imported
            // files are exactly the same. Because of this, we cannot change
            // the name attribute directly. For this reason a new object is
            // created.
            definition = Object.create(definition);

            if (parentName) {
                definition.name = parentName + '.' + definition.name;
            }

            var subStates: any[] | null = null;
            if ('subStates' in definition) {
                subStates = definition.subStates;
                delete definition.subStates;
            }

            if (definition.templateUrl === true) {
                definition.templateUrl = 'tpl/states/' + definition.name.replace(/\./g, '/') + '.html';
            }

            $stateProvider.state(definition);

            if (subStates) {
                self.states(subStates, definition.name);
            }
        });
        return this;
    };
})

;