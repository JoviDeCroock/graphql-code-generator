(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[3328],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||p;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,r=new Array(p);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<p;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35233:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return d}});var a=n(29603),i=n(50120),p=(n(27378),n(35318)),r=["components"],l={},o={unversionedId:"generated-config/typescript-compatibility",id:"generated-config/typescript-compatibility",isDocsHomePage:!1,title:"typescript-compatibility",description:"If you are migrating from <1.0, we created a new plugin called typescript-compatibility that generates backward compatibility for the typescript-operations and typescript-react-apollo plugins.",source:"@site/docs/generated-config/typescript-compatibility.md",sourceDirName:"generated-config",slug:"/generated-config/typescript-compatibility",permalink:"/docs/generated-config/typescript-compatibility",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-compatibility.md",version:"current",frontMatter:{}},s=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>noNamespaces</code>",id:"nonamespaces",children:[]},{value:"<code>strict</code>",id:"strict",children:[]},{value:"<code>preResolveTypes</code>",id:"preresolvetypes",children:[]},{value:"<code>strictScalars</code>",id:"strictscalars",children:[]},{value:"<code>defaultScalarType</code>",id:"defaultscalartype",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]},{value:"<code>dedupeFragments</code>",id:"dedupefragments",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,p.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"If you are migrating from <1.0, we created a new plugin called ",(0,p.kt)("inlineCode",{parentName:"p"},"typescript-compatibility")," that generates backward compatibility for the ",(0,p.kt)("inlineCode",{parentName:"p"},"typescript-operations")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"typescript-react-apollo")," plugins."),(0,p.kt)("p",null,"It generates types that are pointing to the new form of types. It supports ",(0,p.kt)("em",{parentName:"p"},"most")," of the use-cases."),(0,p.kt)("h2",{id:"installation"},"Installation"),(0,p.kt)("img",{alt:"typescript-compatibility plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-compatibility?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,p.kt)("div",{className:"admonition admonition-shell"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,p.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,p.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-compatibility\n")))),(0,p.kt)("h2",{id:"api-reference"},"API Reference"),(0,p.kt)("h3",{id:"nonamespaces"},(0,p.kt)("inlineCode",{parentName:"h3"},"noNamespaces")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Does not generate TypeScript ",(0,p.kt)("inlineCode",{parentName:"p"},"namespace"),"s and uses the operation name as prefix."),(0,p.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-compatibility\n config:\n   noNamespaces: true\n")),(0,p.kt)("h3",{id:"strict"},(0,p.kt)("inlineCode",{parentName:"h3"},"strict")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Make sure to generate code that compatible with TypeScript strict mode."),(0,p.kt)("h4",{id:"usage-examples-1"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-compatibility\n config:\n   strict: true\n")),(0,p.kt)("h3",{id:"preresolvetypes"},(0,p.kt)("inlineCode",{parentName:"h3"},"preResolveTypes")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Avoid using ",(0,p.kt)("inlineCode",{parentName:"p"},"Pick")," in ",(0,p.kt)("inlineCode",{parentName:"p"},"typescript-operations")," and make sure to optimize this package as well."),(0,p.kt)("h3",{id:"strictscalars"},(0,p.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Makes scalars strict."),(0,p.kt)("p",null,"If scalars are found in the schema that are not defined in ",(0,p.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,p.kt)("h4",{id:"usage-examples-2"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,p.kt)("h3",{id:"defaultscalartype"},(0,p.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"any")),(0,p.kt)("p",null,"Allows you to override the type that unknown scalars will have."),(0,p.kt)("h4",{id:"usage-examples-3"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,p.kt)("h3",{id:"scalars"},(0,p.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,p.kt)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,p.kt)("h3",{id:"namingconvention"},(0,p.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,p.kt)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,p.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,p.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,p.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,p.kt)("p",null,"Available case functions in ",(0,p.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,p.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,p.kt)("h3",{id:"typesprefix"},(0,p.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,p.kt)("p",null,"Prefixes all the generated types."),(0,p.kt)("h4",{id:"usage-examples-4"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,p.kt)("h3",{id:"typessuffix"},(0,p.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,p.kt)("p",null,"Suffixes all the generated types."),(0,p.kt)("h4",{id:"usage-examples-5"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,p.kt)("h3",{id:"skiptypename"},(0,p.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,p.kt)("h4",{id:"usage-examples-6"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,p.kt)("h3",{id:"nonoptionaltypename"},(0,p.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Automatically adds ",(0,p.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,p.kt)("h4",{id:"usage-examples-7"},"Usage Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,p.kt)("h3",{id:"usetypeimports"},(0,p.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Will use ",(0,p.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,p.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,p.kt)("h3",{id:"dedupefragments"},(0,p.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,p.kt)("p",null,"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",null,"Removes fragment duplicants for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - import all of them are imported to the Operation node."))}d.isMDXComponent=!0}}]);