(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[5350],{35318:function(e,a,n){"use strict";n.d(a,{Zo:function(){return s},kt:function(){return u}});var t=n(27378);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=t.createContext({}),m=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=m(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=p,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return n?t.createElement(k,o(o({ref:a},s),{},{components:n})):t.createElement(k,o({ref:a},s))}));function u(e,a){var n=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5391:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var t=n(29603),p=n(50120),r=(n(27378),n(35318)),o=["components"],i={id:"java-apollo-android",title:"Java Apollo Android"},l={unversionedId:"plugins/java-apollo-android",id:"plugins/java-apollo-android",isDocsHomePage:!1,title:"Java Apollo Android",description:"{@import ../generated-config/java-apollo-android.md}",source:"@site/docs/plugins/java-apollo-android.md",sourceDirName:"plugins",slug:"/plugins/java-apollo-android",permalink:"/docs/plugins/java-apollo-android",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java-apollo-android.md",version:"current",frontMatter:{id:"java-apollo-android",title:"Java Apollo Android"},sidebar:"sidebar",previous:{title:"Java Resolvers",permalink:"/docs/plugins/java-resolvers"},next:{title:"C#",permalink:"/docs/plugins/c-sharp"}},m=[{value:"Prepare your env",id:"prepare-your-env",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:m};function d(e){var a=e.components,n=(0,p.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},"This plugin and presets creates generated mappers and parsers for a complete type-safe GraphQL requests, for developers that uses Apollo Android runtime."),(0,r.kt)("h2",{parentName:"p"},"Installation"),(0,r.kt)("img",{alt:"java-apollo-android plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/java-apollo-android?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,r.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,r.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/java-apollo-android\n")))),(0,r.kt)("h2",{parentName:"p"},"API Reference"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"package")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Customize the Java package name for the generated operations. The default package name will be generated according to the output file path."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    package: "com.my.package.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typePackage")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Customize the Java package name for the types generated based on input types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    typePackage: "com.my.package.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"fragmentPackage")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Customize the Java package name for the fragments generated classes."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'generates:\n./app/src/main/java/:\n  preset: java-apollo-android\n  config:\n    fragmentPackage: "com.my.package.generated.graphql"\n  plugins:\n    - java-apollo-android\n')),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"fileType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"FileType")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Makes scalars strict."),(0,r.kt)("p",{parentName:"p"},"If scalars are found in the schema that are not defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",{parentName:"p"},"Allows you to override the type that unknown scalars will have."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,r.kt)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,r.kt)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,r.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,r.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,r.kt)("p",{parentName:"p"},"Available case functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Prefixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Suffixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Automatically adds ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Will use ",(0,r.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Removes fragment duplicants for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - import all of them are imported to the Operation node.")),(0,r.kt)("h2",{id:"prepare-your-env"},"Prepare your env"),(0,r.kt)("p",null,"To get started with this plugins and preset, make sure you have the following installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS (10 or later)"),(0,r.kt)("li",{parentName:"ul"},"NPM or Yarn")),(0,r.kt)("p",null,"Run the following in your Android project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  yarn init --yes\n  yarn add @graphql-codegen/cli graphql @graphql-codegen/java-apollo-android\n")),(0,r.kt)("p",null,"Then, create ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen.yml")," with the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'schema: POINT_TO_YOUR_SCHEMA\ndocuments: POINT_TO_YOUR_GRAPHQL_OPERATIONS\ngenerates:\n  ./app/src/main/java/:\n    preset: java-apollo-android\n    config:\n      package: "com.my.app.generated.graphql"\n      fragmentPackage: "com.my.app.generated.graphql"\n      typePackage: "type"\n    plugins:\n      - java-apollo-android\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also, make sure to add ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," to your ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file.")),(0,r.kt)("p",null,"To integrate with your Gradle build, you can add the following to your app Gradle file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'preBuild.doFirst {\n    def proc = "yarn graphql-codegen".execute()\n    proc.waitForProcessOutput(System.out, System.err)\n}\n\nbuild.dependsOn preBuild\n')),(0,r.kt)("p",null,"This will make sure to run and generate output before each time you build your project."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can find a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-codegen-appsync-android-example"},"repository with a working example using AppSync")))}d.isMDXComponent=!0}}]);