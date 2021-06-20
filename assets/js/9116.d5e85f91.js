(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[9116,6214],{96214:function(e,n,r){"use strict";r.r(n),r.d(n,{plugin:function(){return o}});var t=r(41476),i=r(57135),_=r.n(i),a=["prepend","content","append"],o=function(){var e=(0,t.Z)(_().mark((function e(n,r,t){var i,o,l;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.placement||"prepend",l=t.content,a.includes(o)){e.next=4;break}throw Error("Configuration provided for 'add' plugin is invalid: value of 'placement' field is not valid (valid values are: "+a.join(", ")+")");case 4:if(l){e.next=6;break}throw Error("Configuration provided for 'add' plugin is invalid: \"content\" is missing!");case 6:return e.abrupt("return",((i={content:null})[o]=Array.isArray(l)?l:[l],i));case 7:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),l={plugin:o};n.default=l},59116:function(e,n,r){"use strict";r.r(n),r.d(n,{preset:function(){return _}});var t=r(70247),i=r(96214),_={buildGeneratesSection:function(e){if(!e.presetConfig.typesPath)throw new Error('Preset "import-types" requires you to specify "typesPath" configuration and point it to your base types file (generated by "typescript" plugin)!');var n=e.presetConfig.importTypesNamespace||"Types",r=Object.assign({},e.pluginMap,{add:i.default}),_=[].concat(e.plugins),a=Object.assign({},e.config,{namespacedImportName:n,importOperationTypesFrom:n,externalFragments:[]});return e.documents.map((function(r){if((0,t.L5)(r.document,a.externalFragments.map((function(e){return e.name})),e.schemaAst)){var i=e.config.useTypeImports?"import type":"import";_.unshift({add:{content:i+" * as "+n+" from '"+e.presetConfig.typesPath+"';\n"}})}})),[{filename:e.baseOutputDir,plugins:_,pluginMap:r,config:a,schema:e.schema,schemaAst:e.schemaAst,documents:e.documents}]}};n.default=_},70247:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{u3:function(){return ApolloFederation},tF:function(){return DetailedError},E1:function(){return addFederationReferencesToSchema},f4:function(){return federationSpec},Wp:function(){return getBaseType},Ed:function(){return isComplexPluginOutput},L5:function(){return isUsingTypes},NT:function(){return removeFederation},o9:function(){return removeNonNullWrapper},IF:function(){return resolveExternalModuleAndFn}});var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(55117),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16726),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(58459),graphql__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93067),graphql__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(44825),graphql__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41867),graphql__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44399),graphql__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(27057),lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(98784),lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),process=__webpack_require__(27061);function resolveExternalModuleAndFn(pointer){if("function"==typeof pointer)return pointer;var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")},_pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName="change-case-all");var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var n={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var r,t;"string"==typeof e?n.content+=e:(n.content+=e.content,(r=n.prepend).push.apply(r,e.prepend||[]),(t=n.append).push.apply(t,e.append||[]))})),[].concat(n.prepend,[n.content],n.append).join("\n")}function isWrapperType(e){return(0,graphql__WEBPACK_IMPORTED_MODULE_1__.HG)(e)||(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function removeNonNullWrapper(e){return(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e)?e.ofType:e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:isConfiguredOutput(e)?e.plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var n;return"string"==typeof e?[(n={},n[e]={},n)]:Array.isArray(e)?e.map((function(e){var n;return"string"==typeof e?((n={})[e]={},n):e})):"object"==typeof e?Object.keys(e).reduce((function(n,r){var t;return[].concat(n,[(t={},t[r]=e[r],t)])}),[]):[]}function hasNullableTypeRecursively(e){return!(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e)||!(!(0,graphql__WEBPACK_IMPORTED_MODULE_1__.HG)(e)&&!(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,n,r){var t=0,i=[];return(0,graphql__WEBPACK_IMPORTED_MODULE_2__.Vn)(e,{SelectionSet:{enter:function(e,t,_,a){if(!a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var o=e.selections||[];if(r&&o.length>0){var l=function(){if(_.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.FRAGMENT_DEFINITION)return _.typeCondition.name.value;if(_.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.FIELD){var e=i[i.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var n=e.getFields()[_.name.value];if(!n)throw new Error('Unable to find field "'+_.name.value+'" on type "'+e+'"!');return getBaseType(n.type).name}if(_.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.OPERATION_DEFINITION){if("query"===_.operation)return r.getQueryType().name;if("mutation"===_.operation)return r.getMutationType().name;if("subscription"===_.operation)return r.getSubscriptionType().name}else if(_.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.INLINE_FRAGMENT)return _.typeCondition?_.typeCondition.name.value:i[i.length-1].name;return null}();i.push(r.getType(l))}}},leave:function(e){var n=e.selections||[];r&&n.length>0&&i.pop()}},Field:{enter:function(e,_,a,o,l){if(!e.name.value.startsWith("__")&&!l.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var u=e.selectionSet&&e.selectionSet.selections||[],s=u.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.FRAGMENT_SPREAD&&!n.includes(e.name.value)}));if((0===u.length||s.length>0)&&t++,r){var p=i[i.length-1];if(p&&(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(p)){var c=p.getFields()[e.name.value];if(!c)throw new Error('Unable to find field "'+e.name.value+'" on type "'+p+'"!');hasNullableTypeRecursively(c.type)&&t++}}}}},enter:{VariableDefinition:function(e,r,i,_,a){a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||t++},InputValueDefinition:function(e,r,i,_,a){a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||t++}}}),t>0}var federationSpec=(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var n=e.getTypeMap();for(var r in n){var t=e.getType(r);if((0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(t)&&isFederationObjectType(t)){var i,_=t.toConfig();_.fields=Object.assign(((i={})[resolveReferenceFieldName]={type:t},i),_.fields);var a=new graphql__WEBPACK_IMPORTED_MODULE_1__.h6(_);a.astNode=a.astNode||(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)((0,graphql__WEBPACK_IMPORTED_MODULE_5__.yG)(a)).definitions[0],a.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.NAME,value:r}}}),n[r]=a}}return e}function removeFederation(e){var n=e.getQueryType().getFields();delete n._entities,delete n._service;var r=e.getTypeMap();return delete r._Service,delete r._Entity,delete r._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var n=e.enabled,r=e.schema;this.enabled=!1,this.enabled=n,this.schema=r,this.providesMap=this.createMapOfProvides()}var n=e.prototype;return n.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},n.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},n.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},n.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},n.skipField=function(e){var n=e.fieldNode,r=e.parentType;return!!(this.enabled&&(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(r)&&isFederationObjectType(r))&&this.isExternalAndNotProvided(n,r)},n.isResolveReferenceField=function(e){var n="string"==typeof e.name?e.name:e.name.value;return this.enabled&&n===resolveReferenceFieldName},n.transformParentType=function(e){var n=this,r=e.fieldNode,t=e.parentType,i=e.parentTypeSignature;if(this.enabled&&(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(t)&&isFederationObjectType(t)&&(isTypeExtension(t)||r.name.value===resolveReferenceFieldName)){var _=getDirectivesByName("key",t);if(_.length){var a=["{ __typename: '"+t.name+"' } &"],o=getDirectivesByName("requires",r).map(this.extractKeyOrRequiresFieldSet),l=this.translateFieldSet(lodash__WEBPACK_IMPORTED_MODULE_0__.merge.apply(void 0,[{}].concat(o)),i),u=_.map((function(e){var r=n.extractKeyOrRequiresFieldSet(e);return n.translateFieldSet(r,i)})),s=u.length>1?["(",")"]:["",""],p=s[0],c=s[1];return a.push([p,u.join(" | "),c].join("")),o.length&&a.push("& "+l),a.join(" ")}}return i},n.isExternalAndNotProvided=function(e,n){return this.isExternal(e)&&!this.hasProvides(n,e)},n.isExternal=function(e){return getDirectivesByName("external",e).length>0},n.hasProvides=function(e,n){var r=this.providesMap[(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(e)?e.name:e.name.value];return!(!r||!r.length)&&r.includes(n.name.value)},n.translateFieldSet=function(e,n){return"GraphQLRecursivePick<"+n+", "+JSON.stringify(e)+">"},n.extractKeyOrRequiresFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;return(0,graphql__WEBPACK_IMPORTED_MODULE_2__.Vn)((0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)("{"+n+"}"),{leave:{SelectionSet:function(e){return e.selections.reduce((function(e,n){return e[n.name]=n.selection,e}),{})},Field:function(e){return{name:e.name.value,selection:!e.selectionSet||e.selectionSet}},Document:function(e){return e.definitions.find((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})).selectionSet}}})},n.extractProvidesFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(n))throw new Error("Nested fields in _FieldSet is not supported in the @provides directive");return n.split(/\s+/g)},n.createMapOfProvides=function(){var e=this,n={};return Object.keys(this.schema.getTypeMap()).forEach((function(r){var t=e.schema.getType(r);(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(t)&&Object.values(t.getFields()).forEach((function(r){var t,i=getDirectivesByName("provides",r.astNode).map(e.extractProvidesFieldSet).reduce((function(e,n){return[].concat(e,n)}),[]),_=getBaseType(r.type);n[_.name]||(n[_.name]=[]),(t=n[_.name]).push.apply(t,i)}))})),n},e}();function isFederationObjectType(e){var n=(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(e)?e.astNode||(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)((0,graphql__WEBPACK_IMPORTED_MODULE_5__.yG)(e)).definitions[0]:e,r=n.name.value,t=n.directives,i=!["Query","Mutation","Subscription"].includes(r),_=!r.startsWith("__"),a=t.some((function(e){return"key"===e.name.value}));return i&&_&&a}function getDirectivesByName(e,n){var r;return(r=(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(n)?n.astNode:n)&&r.directives?r.directives.filter((function(n){return n.name.value===e})):[]}function isTypeExtension(e){var n;return null===(n=((0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(e)?e.astNode||(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)((0,graphql__WEBPACK_IMPORTED_MODULE_5__.yG)(e)).definitions[0]:e).fields)||void 0===n?void 0:n.some((function(e){return getDirectivesByName("external",e).length}))}var DetailedError=function(e){function n(r,t,i){var _;return(_=e.call(this,r)||this).message=r,_.details=t,_.source=i,Object.setPrototypeOf((0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.Z)(_),n.prototype),Error.captureStackTrace((0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.Z)(_),n),_}return(0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__.Z)(n,e),n}((0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_8__.Z)(Error));function isDetailedError(e){return e.details}}}]);