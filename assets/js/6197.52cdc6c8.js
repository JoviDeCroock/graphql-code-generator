(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[6197],{26197:function(e,n,t){"use strict";t.d(n,{jf:function(){return ye}});var i=t(94455),o=t(49654),s=t(44825),r=t(58758),c=t(3490),a=t(41867),l=t(93723),u=t(44399),d=t(66434),f=t(93067),v=t(54457),p=t(87786),m=t(24442),E=t(18361),y=t(30138);function T(e,n,t){const i=null!=e?e:E.El,o=e=>{const i=new Error;i.stack=e.stack,t&&(i.originalMessage=e.message,i.message=`Error in resolver ${t}\n${e.message}`),n.log(i)};return(e,n,t,s)=>{try{const r=i(e,n,t,s);return r&&"function"==typeof r.then&&"function"==typeof r.catch&&r.catch((e=>{const n=e instanceof Error?e:new Error(e);return o(n),e})),r}catch(r){throw o(r),r}}}function h(e,n,t){const o=(0,l.nN)(e)?{schema:e,resolvers:n,resolverValidationOptions:t}:e;let{schema:s,resolvers:r,defaultFieldResolver:c,resolverValidationOptions:a={},inheritResolversFromInterfaces:u=!1,updateResolversInPlace:d=!1}=o;const{requireResolversToMatchSchema:p="error",requireResolversForResolveType:m}=a,E=u?function(e,n){const t=Object.keys({...e.getTypeMap(),...n}),i={};return t.forEach((t=>{const o=e.getType(t);if(o&&"getInterfaces"in o){const e=o.getInterfaces().map((e=>n[e.name])).filter((e=>null!=e));i[t]={},e.forEach((e=>{Object.keys(e).forEach((n=>{"__isTypeOf"!==n&&n.startsWith("__")||(i[t][n]=e[n])}))}));const s=n[t];i[t]={...i[t],...s}}else{const e=n[t];null!=e&&(i[t]=e)}})),i}(s,r):r;return Object.keys(E).forEach((e=>{const n=E[e],t=typeof n;if("__schema"===e){if("function"!==t)throw new Error(`"${e}" defined in resolvers, but has invalid value "${n}". A schema resolver's value must be of type object or function.`)}else{if("object"!==t)throw new Error(`"${e}" defined in resolvers, but has invalid value "${n}". The resolver's value must be of type object.`);const i=s.getType(e);if(null==i){if("ignore"===p)return;throw new Error(`"${e}" defined in resolvers, but not in schema`)}if((0,v.u1)(i))Object.keys(n).forEach((e=>{e.startsWith("__")?i[e.substring(2)]=n[e]:i[e]=n[e]}));else if((0,f.EM)(i)){const e=i.getValues();Object.keys(n).forEach((n=>{if(!n.startsWith("__")&&!e.some((e=>e.name===n))&&p&&"ignore"!==p)throw new Error(`${i.name}.${n} was defined in resolvers, but not present within ${i.name}`)}))}else(0,f.EN)(i)?Object.keys(n).forEach((e=>{if(!e.startsWith("__")&&p&&"ignore"!==p)throw new Error(`${i.name}.${e} was defined in resolvers, but ${i.name} is not an object or interface type`)})):((0,f.lp)(i)||(0,f.oT)(i))&&Object.keys(n).forEach((t=>{if(!t.startsWith("__")){if(null==i.getFields()[t]&&p&&"ignore"!==p)throw new Error(`${e}.${t} defined in resolvers, but not in schema`);const o=n[t];if("function"!=typeof o&&"object"!=typeof o)throw new Error(`Resolver ${e}.${t} must be object or function`)}}))}})),s=d?function(e,n,t){const o=e.getTypeMap();Object.keys(n).forEach((t=>{if("__schema"!==t){const i=e.getType(t),s=n[t];if((0,f.KA)(i))Object.keys(s).forEach((e=>{var n,t,o,r,c,a,l,u,d,f;e.startsWith("__")?i[e.substring(2)]=s[e]:"astNode"===e&&null!=i.astNode?i.astNode={...i.astNode,description:null!==(o=null===(t=null===(n=s)||void 0===n?void 0:n.astNode)||void 0===t?void 0:t.description)&&void 0!==o?o:i.astNode.description,directives:(null!==(r=i.astNode.directives)&&void 0!==r?r:[]).concat(null!==(l=null===(a=null===(c=s)||void 0===c?void 0:c.astNode)||void 0===a?void 0:a.directives)&&void 0!==l?l:[])}:"extensionASTNodes"===e&&null!=i.extensionASTNodes?i.extensionASTNodes=(null!==(u=[])&&void 0!==u?u:i.extensionASTNodes).concat(null!==(f=null===(d=s)||void 0===d?void 0:d.extensionASTNodes)&&void 0!==f?f:[]):"extensions"===e&&null!=i.extensions&&null!=s.extensions?i.extensions=Object.assign({},i.extensions,s.extensions):i[e]=s[e]}));else if((0,f.EM)(i)){const e=i.toConfig(),n=e.values;Object.keys(s).forEach((t=>{var o,r,c,a,l,u,d,f,v;t.startsWith("__")?e[t.substring(2)]=s[t]:"astNode"===t&&null!=e.astNode?e.astNode={...e.astNode,description:null!==(c=null===(r=null===(o=s)||void 0===o?void 0:o.astNode)||void 0===r?void 0:r.description)&&void 0!==c?c:e.astNode.description,directives:(null!==(a=e.astNode.directives)&&void 0!==a?a:[]).concat(null!==(d=null===(u=null===(l=s)||void 0===l?void 0:l.astNode)||void 0===u?void 0:u.directives)&&void 0!==d?d:[])}:"extensionASTNodes"===t&&null!=e.extensionASTNodes?e.extensionASTNodes=e.extensionASTNodes.concat(null!==(v=null===(f=s)||void 0===f?void 0:f.extensionASTNodes)&&void 0!==v?v:[]):"extensions"===t&&null!=i.extensions&&null!=s.extensions?i.extensions=Object.assign({},i.extensions,s.extensions):n[t]&&(n[t].value=s[t])})),o[t]=new f.mR(e)}else(0,f.EN)(i)?Object.keys(s).forEach((e=>{e.startsWith("__")&&(i[e.substring(2)]=s[e])})):((0,f.lp)(i)||(0,f.oT)(i))&&Object.keys(s).forEach((e=>{if(e.startsWith("__"))return void(i[e.substring(2)]=s[e]);const n=i.getFields()[e];if(null!=n){const t=s[e];"function"==typeof t?n.resolve=t:N(n,t)}}))}})),(0,i.pD)(e,i.RF),(0,i.r8)(e),(0,i.pD)(e,i.Oe),null!=t&&(0,i.pY)(e,(e=>{e.resolve||(e.resolve=t)}));return e}(s,E,c):function(e,n,t){e=(0,i.gf)(e,{[i.h0.SCALAR_TYPE]:e=>{const t=e.toConfig(),i=n[e.name];if(!(0,v.u1)(e)&&null!=i)return Object.keys(i).forEach((n=>{var o,s,r,c,a,l,u,d,f;n.startsWith("__")?t[n.substring(2)]=i[n]:"astNode"===n&&null!=t.astNode?t.astNode={...t.astNode,description:null!==(r=null===(s=null===(o=i)||void 0===o?void 0:o.astNode)||void 0===s?void 0:s.description)&&void 0!==r?r:t.astNode.description,directives:(null!==(c=t.astNode.directives)&&void 0!==c?c:[]).concat(null!==(u=null===(l=null===(a=i)||void 0===a?void 0:a.astNode)||void 0===l?void 0:l.directives)&&void 0!==u?u:[])}:"extensionASTNodes"===n&&null!=t.extensionASTNodes?t.extensionASTNodes=t.extensionASTNodes.concat(null!==(f=null===(d=i)||void 0===d?void 0:d.extensionASTNodes)&&void 0!==f?f:[]):"extensions"===n&&null!=t.extensions&&null!=i.extensions?t.extensions=Object.assign({},e.extensions,i.extensions):t[n]=i[n]})),new f.n2(t)},[i.h0.ENUM_TYPE]:e=>{const t=n[e.name],i=e.toConfig(),o=i.values;if(null!=t)return Object.keys(t).forEach((n=>{var s,r,c,a,l,u,d,f,v;n.startsWith("__")?i[n.substring(2)]=t[n]:"astNode"===n&&null!=i.astNode?i.astNode={...i.astNode,description:null!==(c=null===(r=null===(s=t)||void 0===s?void 0:s.astNode)||void 0===r?void 0:r.description)&&void 0!==c?c:i.astNode.description,directives:(null!==(a=i.astNode.directives)&&void 0!==a?a:[]).concat(null!==(d=null===(u=null===(l=t)||void 0===l?void 0:l.astNode)||void 0===u?void 0:u.directives)&&void 0!==d?d:[])}:"extensionASTNodes"===n&&null!=i.extensionASTNodes?i.extensionASTNodes=i.extensionASTNodes.concat(null!==(v=null===(f=t)||void 0===f?void 0:f.extensionASTNodes)&&void 0!==v?v:[]):"extensions"===n&&null!=i.extensions&&null!=t.extensions?i.extensions=Object.assign({},e.extensions,t.extensions):o[n]&&(o[n].value=t[n])})),new f.mR(i)},[i.h0.UNION_TYPE]:e=>{const t=n[e.name];if(null!=t){const n=e.toConfig();return Object.keys(t).forEach((e=>{e.startsWith("__")&&(n[e.substring(2)]=t[e])})),new f.Gp(n)}},[i.h0.OBJECT_TYPE]:e=>{const t=n[e.name];if(null!=t){const n=e.toConfig();return Object.keys(t).forEach((e=>{e.startsWith("__")&&(n[e.substring(2)]=t[e])})),new f.h6(n)}},[i.h0.INTERFACE_TYPE]:e=>{const t=n[e.name];if(null!=t){const n=e.toConfig();return Object.keys(t).forEach((e=>{e.startsWith("__")&&(n[e.substring(2)]=t[e])})),new f.oW(n)}},[i.h0.COMPOSITE_FIELD]:(e,t,i)=>{const o=n[i];if(null!=o){const n=o[t];if(null!=n){const t={...e};return"function"==typeof n?t.resolve=n:N(t,n),t}}}}),null!=t&&(e=(0,i.gf)(e,{[i.h0.OBJECT_FIELD]:e=>({...e,resolve:null!=e.resolve?e.resolve:t})}));return e}(s,E,c),(m||"ignore"!==m)&&function(e,n){(0,i.gf)(e,{[i.h0.ABSTRACT_TYPE]:e=>{if(!e.resolveType){const t=`Type "${e.name}" is missing a "__resolveType" resolver. Pass 'ignore' into "resolverValidationOptions.requireResolversForResolveType" to disable this error.`;if("error"===n)throw new Error(t);"warn"===n&&y.warn(t)}}})}(s,m),s}function N(e,n){Object.keys(n).forEach((t=>{e[t]=n[t]}))}function g(e,n){if(!n)throw new Error("Must provide a logger");if("function"!=typeof n.log)throw new Error("Logger.log must be a function");return(0,i.gf)(e,{[i.h0.OBJECT_FIELD]:(e,t,i)=>({...e,resolve:T(e.resolve,n,`${i}.${t}`)})})}function _(e,n){if(!e||0===e.length)return{};if(1===e.length){const n=e[0];return Array.isArray(n)?_(n):n}const t=new Array,o=new Array;for(let i of e)Array.isArray(i)&&(i=_(i)),"function"==typeof i?t.push(i):"object"==typeof i&&o.push(i);let s={};if(s=t.length?(...e)=>{const n=t.map((n=>n(...e)));return o.concat(n).reduce(i.Ee,{})}:o.reduce(i.Ee,{}),n&&n.exclusions)for(const i of n.exclusions){const[e,n]=i.split(".");n&&"*"!==n?s[e]&&delete s[e][n]:delete s[e]}return s}function x(e,n,t){const o=[].concat(n,e).filter((e=>e)).reduce(((e,n)=>e.find((e=>e.name.value===n.name.value))?e:e.concat([n])),[]);return t&&t.sort&&o.sort(i.YU),o}let b={};function O(){b={}}function I(e){const n=e.name.value;switch(A(e,n),e.kind){case"EnumTypeDefinition":e.values.forEach((e=>{A(e,n,e.name.value)}));break;case"ObjectTypeDefinition":case"InputObjectTypeDefinition":case"InterfaceTypeDefinition":e.fields&&e.fields.forEach((e=>{A(e,n,e.name.value),function(e){return"FieldDefinition"===e.kind}(e)&&e.arguments&&e.arguments.forEach((t=>{A(t,n,e.name.value,t.name.value)}))}))}}function A(e,n,t,i){const s=(0,o.Eb)(e,{commentDescriptions:!0});if("string"!=typeof s||0===s.length)return;const r=[n];t&&(r.push(t),i&&r.push(i));const c=r.join(".");b[c]||(b[c]=[]),b[c].push(s)}function D(e){return"\n# "+e.replace(/\n/g,"\n# ")}function S(e,n){return e?e.filter((e=>e)).join(n||""):""}function k(e){return(n,t,i,o,s)=>{const r=[],c=o.reduce(((e,n)=>(["fields","arguments","values"].includes(n)&&r.push(e.name.value),e[n])),s[0]),a=[...r,c.name.value].join("."),l=[];return b[a]&&l.push(...b[a]),S([...l.map(D),n.description,e(n)],"\n")}}function $(e){return e&&`  ${e.replace(/\n/g,"\n  ")}`}function j(e){return e&&0!==e.length?`{\n${$(S(e,"\n"))}\n}`:""}function w(e,n,t){return n?e+n+(t||""):""}function F(e){return(0,s.Vn)(e,{leave:{Name:e=>e.value,Variable:e=>`$${e.name}`,Document:e=>`${e.definitions.map((e=>`${e}\n${"#"===e[0]?"":"\n"}`)).join("").trim()}\n`,OperationTypeDefinition:e=>`${e.operation}: ${e.type}`,VariableDefinition:({variable:e,type:n,defaultValue:t})=>`${e}: ${n}${w(" = ",t)}`,SelectionSet:({selections:e})=>j(e),Field:({alias:e,name:n,arguments:t,directives:i,selectionSet:o})=>S([w("",e,": ")+n+w("(",S(t,", "),")"),S(i," "),o],"  "),Argument:k((({name:e,value:n})=>`${e}: ${n}`)),IntValue:({value:e})=>e,FloatValue:({value:e})=>e,StringValue:({value:e,block:n},t)=>n?function(e,n){const t=e.replace(/"""/g,'\\"""');return" "!==e[0]&&"\t"!==e[0]||-1!==e.indexOf("\n")?`"""\n${n?t:$(t)}\n"""`:`"""${t.replace(/"$/,'"\n')}"""`}(e,"description"===t):JSON.stringify(e),BooleanValue:({value:e})=>e?"true":"false",NullValue:()=>"null",EnumValue:({value:e})=>e,ListValue:({values:e})=>`[${S(e,", ")}]`,ObjectValue:({fields:e})=>`{${S(e,", ")}}`,ObjectField:({name:e,value:n})=>`${e}: ${n}`,Directive:({name:e,arguments:n})=>`@${e}${w("(",S(n,", "),")")}`,NamedType:({name:e})=>e,ListType:({type:e})=>`[${e}]`,NonNullType:({type:e})=>`${e}!`,SchemaDefinition:({directives:e,operationTypes:n})=>S(["schema",S(e," "),j(n)]," "),ScalarTypeDefinition:k((({name:e,directives:n})=>S(["scalar",e,S(n," ")]," "))),ObjectTypeDefinition:k((({name:e,interfaces:n,directives:t,fields:i})=>S(["type",e,w("implements ",S(n," & ")),S(t," "),j(i)]," "))),FieldDefinition:k((({name:e,arguments:n,type:t,directives:i})=>`${e+w("(",S(n,", "),")")}: ${t}${w(" ",S(i," "))}`)),InputValueDefinition:k((({name:e,type:n,defaultValue:t,directives:i})=>S([`${e}: ${n}`,w("= ",t),S(i," ")]," "))),InterfaceTypeDefinition:k((({name:e,directives:n,fields:t})=>S(["interface",e,S(n," "),j(t)]," "))),UnionTypeDefinition:k((({name:e,directives:n,types:t})=>S(["union",e,S(n," "),t&&0!==t.length?`= ${S(t," | ")}`:""]," "))),EnumTypeDefinition:k((({name:e,directives:n,values:t})=>S(["enum",e,S(n," "),j(t)]," "))),EnumValueDefinition:k((({name:e,directives:n})=>S([e,S(n," ")]," "))),InputObjectTypeDefinition:k((({name:e,directives:n,fields:t})=>S(["input",e,S(n," "),j(t)]," "))),ScalarTypeExtension:({name:e,directives:n})=>S(["extend scalar",e,S(n," ")]," "),ObjectTypeExtension:({name:e,interfaces:n,directives:t,fields:i})=>S(["extend type",e,w("implements ",S(n," & ")),S(t," "),j(i)]," "),InterfaceTypeExtension:({name:e,directives:n,fields:t})=>S(["extend interface",e,S(n," "),j(t)]," "),UnionTypeExtension:({name:e,directives:n,types:t})=>S(["extend union",e,S(n," "),t&&0!==t.length?`= ${S(t," | ")}`:""]," "),EnumTypeExtension:({name:e,directives:n,values:t})=>S(["extend enum",e,S(n," "),j(t)]," "),InputObjectTypeExtension:({name:e,directives:n,fields:t})=>S(["extend input",e,S(n," "),j(t)]," "),DirectiveDefinition:k((({name:e,arguments:n,locations:t})=>`directive @${e}${w("(",S(n,", "),")")} on ${S(t," | ")}`))}})}function R(e,n){return!!e.find((e=>e.name.value===n.name.value))}function C(e,n){const t=[...n];for(const i of e){const e=t.findIndex((e=>e.name.value===i.name.value));if(e>-1){const n=t[e];if("ListValue"===n.value.kind){const e=n.value.values,t=i.value.values;n.value.values=Y(e,t,((e,n)=>{const t=e.value;return!t||!n.some((e=>e.value===t))}))}else n.value=i.value}else t.push(i)}return t}function M(e=[],n=[],t){const i=t&&t.reverseDirectives,o=i?n:e,s=[...i?e:n].map(((e,n,t)=>{const i=t.findIndex((n=>n.name.value===e.name.value));if(i!==n){const n=t[i];return e.arguments=C(e.arguments,n.arguments),null}return e})).filter((e=>e));for(const r of o)if(R(s,r)){const e=s.findIndex((e=>e.name.value===r.name.value)),n=s[e];s[e].arguments=C(r.arguments||[],n.arguments||[])}else s.push(r);return s}function P(e,n){return n?(function(e,n){const t=(0,r.print)(e),i=(0,r.print)(n),o=new RegExp("(directive @w*d*)|( on .*$)","g");if(t.replace(o,"")!==i.replace(o,""))throw new Error(`Unable to merge GraphQL directive "${e.name.value}". \nExisting directive:  \n\t${i} \nReceived directive: \n\t${t}`)}(e,n),{...e,locations:[...n.locations,...e.locations.filter((e=>!function(e,n){return n.some((({value:n})=>n===e.value))}(e,n.locations)))]}):e}function Y(e,n,t){return e.concat(n.filter((n=>t(n,e))))}function U(e,n,t){if(null==t?void 0:t.consistentEnumMerge){const t=e;e=n,n=t}const o=new Map;for(const i of e)o.set(i.name.value,i);for(const i of n){const e=i.name.value;if(o.has(e)){const n=o.get(e);n.description=i.description||n.description,n.directives=M(i.directives,n.directives)}else o.set(e,i)}const s=[...o.values()];return t&&t.sort&&s.sort(i.YU),s}function L(e,n,t){return n?{name:e.name,description:e.description||n.description,kind:t&&t.convertExtensions||"EnumTypeDefinition"===e.kind||"EnumTypeDefinition"===n.kind?"EnumTypeDefinition":"EnumTypeExtension",loc:e.loc,directives:M(e.directives,n.directives,t),values:U(e.values,n.values,t)}:t&&t.convertExtensions?{...e,kind:"EnumTypeDefinition"}:e}function V(e){return"string"==typeof e}function B(e){return e instanceof c.H}function H(e){let n=e;for(;n.kind===a.h.LIST_TYPE||"NonNullType"===n.kind;)n=n.type;return n}function W(e){return e.kind!==a.h.NAMED_TYPE}function q(e){return e.kind===a.h.LIST_TYPE}function Q(e){return e.kind===a.h.NON_NULL_TYPE}function X(e){return q(e)?`[${X(e.type)}]`:Q(e)?`${X(e.type)}!`:e.name.value}var G;function J(e,n){return e<n?G.A_SMALLER_THAN_B:e>n?G.A_GREATER_THAN_B:G.A_EQUALS_B}function K(e,n,t){const i=e.find((e=>e.name.value===n.name.value));if(i&&!(null==t?void 0:t.ignoreFieldConflicts)){const e=H(i.type),t=H(n.type);if(e.name.value!==t.name.value)throw new Error(`Field "${n.name.value}" already defined with a different type. Declared as "${e.name.value}", but you tried to override with "${t.name.value}"`)}return!!i}function z(e,n,t,o){const s=[...t];for(const i of n)if(K(s,i,o)){const n=s.find((e=>e.name.value===i.name.value));(null==o?void 0:o.ignoreFieldConflicts)||((null==o?void 0:o.throwOnConflict)?Z(e,n,i,!1):Z(e,n,i,!0),Q(i.type)&&!Q(n.type)&&(n.type=i.type)),n.arguments=x(i.arguments||[],n.arguments||[],o),n.directives=M(i.directives,n.directives,o),n.description=i.description||n.description}else s.push(i);return o&&o.sort&&s.sort(i.YU),o&&o.exclusions?s.filter((n=>!o.exclusions.includes(`${e.name.value}.${n.name.value}`))):s}function Z(e,n,t,o=!1){const s=X(n.type),r=X(t.type);if((0,i.LN)(s,r)&&!1===ee(n.type,t.type,o))throw new Error(`Field '${e.name.value}.${n.name.value}' changed type from '${s}' to '${r}'`)}function ee(e,n,t=!1){if(!W(e)&&!W(n))return e.toString()===n.toString();if(Q(n)){return ee(Q(e)?e.type:e,n.type)}return Q(e)?ee(n,e,t):!!q(e)&&(q(n)&&ee(e.type,n.type)||Q(n)&&ee(e,n.type))}function ne(e,n,t){if(n)try{return{name:e.name,description:e.description||n.description,kind:t&&t.convertExtensions||"InputObjectTypeDefinition"===e.kind||"InputObjectTypeDefinition"===n.kind?"InputObjectTypeDefinition":"InputObjectTypeExtension",loc:e.loc,fields:z(e,e.fields,n.fields,t),directives:M(e.directives,n.directives,t)}}catch(i){throw new Error(`Unable to merge GraphQL input type "${e.name.value}": ${i.message}`)}return t&&t.convertExtensions?{...e,kind:"InputObjectTypeDefinition"}:e}function te(e,n,t){if(n)try{return{name:e.name,description:e.description||n.description,kind:t&&t.convertExtensions||"InterfaceTypeDefinition"===e.kind||"InterfaceTypeDefinition"===n.kind?"InterfaceTypeDefinition":"InterfaceTypeExtension",loc:e.loc,fields:z(e,e.fields,n.fields,t),directives:M(e.directives,n.directives,t)}}catch(i){throw new Error(`Unable to merge GraphQL interface "${e.name.value}": ${i.message}`)}return t&&t.convertExtensions?{...e,kind:"InterfaceTypeDefinition"}:e}function ie(e=[],n=[],t={}){const o=[...n,...e.filter((e=>{return t=e,!n.find((e=>e.name.value===t.name.value));var t}))];return t&&t.sort&&o.sort(i.YU),o}function oe(e,n,t){if(n)try{return{name:e.name,description:e.description||n.description,kind:t&&t.convertExtensions||"ObjectTypeDefinition"===e.kind||"ObjectTypeDefinition"===n.kind?"ObjectTypeDefinition":"ObjectTypeExtension",loc:e.loc,fields:z(e,e.fields,n.fields,t),directives:M(e.directives,n.directives,t),interfaces:ie(e.interfaces,n.interfaces,t)}}catch(i){throw new Error(`Unable to merge GraphQL type "${e.name.value}": ${i.message}`)}return t&&t.convertExtensions?{...e,kind:"ObjectTypeDefinition"}:e}function se(e,n,t){return n?{name:e.name,description:e.description||n.description,kind:t&&t.convertExtensions||"ScalarTypeDefinition"===e.kind||"ScalarTypeDefinition"===n.kind?"ScalarTypeDefinition":"ScalarTypeExtension",loc:e.loc,directives:M(e.directives,n.directives,t)}:t&&t.convertExtensions?{...e,kind:"ScalarTypeDefinition"}:e}function re(e,n,t){return n?{name:e.name,description:e.description||n.description,directives:M(e.directives,n.directives,t),kind:t&&t.convertExtensions||"UnionTypeDefinition"===e.kind||"UnionTypeDefinition"===n.kind?"UnionTypeDefinition":"UnionTypeExtension",loc:e.loc,types:ie(e.types,n.types,t)}:t&&t.convertExtensions?{...e,kind:"UnionTypeDefinition"}:e}!function(e){e[e.A_SMALLER_THAN_B=-1]="A_SMALLER_THAN_B",e[e.A_EQUALS_B=0]="A_EQUALS_B",e[e.A_GREATER_THAN_B=1]="A_GREATER_THAN_B"}(G||(G={}));const ce={query:"Query",mutation:"Mutation",subscription:"Subscription"};function ae(e=[],n=[]){const t=[];for(const i in ce){const o=e.find((e=>e.operation===i))||n.find((e=>e.operation===i));o&&t.push(o)}return t}function le(e,n,t){return n?{kind:e.kind===a.h.SCHEMA_DEFINITION||n.kind===a.h.SCHEMA_DEFINITION?a.h.SCHEMA_DEFINITION:a.h.SCHEMA_EXTENSION,description:e.description||n.description,directives:M(e.directives,n.directives,t),operationTypes:ae(e.operationTypes,n.operationTypes)}:(null==t?void 0:t.convertExtensions)?{...e,kind:a.h.SCHEMA_EXTENSION}:e}const ue=Symbol("schemaDefSymbol");function de(e,n){for(const t of e)if(t)if(Array.isArray(t))de(t,n);else if((0,l.nN)(t)){de((0,i.HA)(t).definitions,n)}else if(V(t)||B(t)){de((0,u.Qc)(t).definitions,n)}else(0,d.Ir)(t)?n.push(t):de(t.definitions,n)}function fe(e,n){var t,i;O();const o=[];de(e,o);const s=function(e,n){var t,i;const o={};for(const s of e)if("name"in s){const e=s.name.value;if((null==n?void 0:n.commentDescriptions)&&I(s),(null===(t=null==n?void 0:n.exclusions)||void 0===t?void 0:t.includes(e+".*"))||(null===(i=null==n?void 0:n.exclusions)||void 0===i?void 0:i.includes(e)))delete o[e];else switch(s.kind){case a.h.OBJECT_TYPE_DEFINITION:case a.h.OBJECT_TYPE_EXTENSION:o[e]=oe(s,o[e],n);break;case a.h.ENUM_TYPE_DEFINITION:case a.h.ENUM_TYPE_EXTENSION:o[e]=L(s,o[e],n);break;case a.h.UNION_TYPE_DEFINITION:case a.h.UNION_TYPE_EXTENSION:o[e]=re(s,o[e],n);break;case a.h.SCALAR_TYPE_DEFINITION:case a.h.SCALAR_TYPE_EXTENSION:o[e]=se(s,o[e],n);break;case a.h.INPUT_OBJECT_TYPE_DEFINITION:case a.h.INPUT_OBJECT_TYPE_EXTENSION:o[e]=ne(s,o[e],n);break;case a.h.INTERFACE_TYPE_DEFINITION:case a.h.INTERFACE_TYPE_EXTENSION:o[e]=te(s,o[e],n);break;case a.h.DIRECTIVE_DEFINITION:o[e]=P(s,o[e])}}else s.kind!==a.h.SCHEMA_DEFINITION&&s.kind!==a.h.SCHEMA_EXTENSION||(o[ue]=le(s,o[ue],n));return o}(o,n);let r=s[ue]||{kind:a.h.SCHEMA_DEFINITION,operationTypes:[]};if(null==n?void 0:n.useSchemaDefinition){const e=r.operationTypes;for(const n in ce){if(!e.find((e=>e.operation===n))){const t=s[ce[n]];t&&e.push({kind:a.h.OPERATION_TYPE_DEFINITION,type:{kind:a.h.NAMED_TYPE,name:t.name},operation:n})}}}(null==n?void 0:n.forceSchemaDefinition)&&!(null===(t=null==r?void 0:r.operationTypes)||void 0===t?void 0:t.length)&&(r={kind:a.h.SCHEMA_DEFINITION,operationTypes:[{kind:a.h.OPERATION_TYPE_DEFINITION,operation:"query",type:{kind:a.h.NAMED_TYPE,name:{kind:a.h.NAME,value:"Query"}}}]});const c=Object.values(s);if((null===(i=r.operationTypes)||void 0===i?void 0:i.length)&&c.push(r),null==n?void 0:n.sort){const e="function"==typeof n.sort?n.sort:J;c.sort(((n,t)=>{var i,o;return e(null===(i=n.name)||void 0===i?void 0:i.value,null===(o=t.name)||void 0===o?void 0:o.value)}))}return c}function ve(e){return e.reduce(((e,n)=>[e,n].reduce(i.Ee,{})),{})}function pe(e,n){e&&(e.extensions=[e.extensions||{},n||{}].reduce(i.Ee,{}))}function me(e){const n={schemaExtensions:{},types:{}};return function(e,n){n.onSchema(e);const t=e.getTypeMap();for(const[,i]of Object.entries(t)){const e=(0,f.KA)(i)&&(0,v.u1)(i),t=(0,p.s9)(i);if(!e&&!t)if((0,f.lp)(i)){n.onObjectType(i);const e=i.getFields();for(const[,t]of Object.entries(e)){n.onObjectField(i,t);const e=t.args||[];for(const o of e)n.onObjectFieldArg(i,t,o)}}else if((0,f.oT)(i)){n.onInterface(i);const e=i.getFields();for(const[,t]of Object.entries(e)){n.onInterfaceField(i,t);const e=t.args||[];for(const o of e)n.onInterfaceFieldArg(i,t,o)}}else if((0,f.hL)(i)){n.onInputType(i);const e=i.getFields();for(const[,t]of Object.entries(e))n.onInputFieldType(i,t)}else if((0,f.EN)(i))n.onUnion(i);else if((0,f.KA)(i))n.onScalar(i);else if((0,f.EM)(i)){n.onEnum(i);for(const e of i.getValues())n.onEnumValue(i,e)}}}(e,{onSchema:e=>n.schemaExtensions=e.extensions||{},onObjectType:e=>n.types[e.name]={fields:{},type:"object",extensions:e.extensions||{}},onObjectField:(e,t)=>n.types[e.name].fields[t.name]={arguments:{},extensions:t.extensions||{}},onObjectFieldArg:(e,t,i)=>n.types[e.name].fields[t.name].arguments[i.name]=i.extensions||{},onInterface:e=>n.types[e.name]={fields:{},type:"interface",extensions:e.extensions||{}},onInterfaceField:(e,t)=>n.types[e.name].fields[t.name]={arguments:{},extensions:t.extensions||{}},onInterfaceFieldArg:(e,t,i)=>n.types[e.name].fields[t.name].arguments[i.name]=i.extensions||{},onEnum:e=>n.types[e.name]={values:{},type:"enum",extensions:e.extensions||{}},onEnumValue:(e,t)=>n.types[e.name].values[t.name]=t.extensions||{},onScalar:e=>n.types[e.name]={type:"scalar",extensions:e.extensions||{}},onUnion:e=>n.types[e.name]={type:"union",extensions:e.extensions||{}},onInputType:e=>n.types[e.name]={fields:{},type:"input",extensions:e.extensions||{}},onInputFieldType:(e,t)=>n.types[e.name].fields[t.name]={extensions:t.extensions||{}}}),n}const Ee={requireResolversForArgs:"ignore",requireResolversForNonScalar:"ignore",requireResolversForAllFields:"ignore",requireResolversForResolveType:"ignore",requireResolversToMatchSchema:"ignore"};function ye(e){const n=Te(e),t=[],o=[];for(const s of e.schemas)t.push((0,i.wq)(s)),o.push(me(s));t.push(...he(e));return Ne({resolvers:_(t,e),typeDefs:n,extensions:ve(o)},e)}function Te({schemas:e,typeDefs:n,...t}){return function(e,n){O();const t={kind:a.h.DOCUMENT,definitions:fe(e,{useSchemaDefinition:!0,forceSchemaDefinition:!1,throwOnConflict:!1,commentDescriptions:!1,...n})};let i;return i=n&&n.commentDescriptions?F(t):t,O(),i}([...e,...n?(0,i._2)(n):[]],t)}function he(e){return e.resolvers?(0,i._2)(e.resolvers):[]}function Ne({resolvers:e,typeDefs:n,extensions:t},o){let s="string"==typeof n?(0,m.I)(n,o):(0,m.M)(n,o);return e&&(s=h({schema:s,resolvers:e,resolverValidationOptions:{...Ee,...o.resolverValidationOptions||{}}})),o.logger&&(s=g(s,o.logger)),o.schemaDirectives&&i.B4.visitSchemaDirectives(s,o.schemaDirectives),function(e,n){pe(e,n.schemaExtensions);for(const[t,i]of Object.entries(n.types||{})){const n=e.getType(t);if(n)if(pe(n,i.extensions),"object"===i.type||"interface"===i.type)for(const[e,t]of Object.entries(i.fields)){const i=n.getFields()[e];if(i){pe(i,t.extensions);for(const[e,n]of Object.entries(t.arguments))pe(i.args.find((n=>n.name===e)),n)}}else if("input"===i.type)for(const[e,t]of Object.entries(i.fields))pe(n.getFields()[e],t.extensions);else if("enum"===i.type)for(const[e,t]of Object.entries(i.values))pe(n.getValue(e),t)}}(s,t),s}}}]);