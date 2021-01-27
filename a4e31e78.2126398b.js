(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{302:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(1),o=t(6),r=(t(0),t(427)),i=t(431),c=t(432),s={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},l={unversionedId:"troubleshooting",id:"version-5.x/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself.",source:"@site/versioned_docs/version-5.x/troubleshooting.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/troubleshooting.md",version:"5.x",sidebar_label:"Troubleshooting",sidebar:"version-5.x/docs",previous:{title:"Compatibility layer",permalink:"/docs/compatibility"},next:{title:"Limitations",permalink:"/docs/limitations"}},u=[{value:"I&#39;m getting an error &quot;Unable to resolve module&quot; after updating to the latest version",id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version",children:[{value:"Stale cache of Metro bundler",id:"stale-cache-of-metro-bundler",children:[]},{value:"Missing peer dependency",id:"missing-peer-dependency",children:[]},{value:"Missing extensions in metro configuration",id:"missing-extensions-in-metro-configuration",children:[]}]},{value:"I&#39;m getting &quot;SyntaxError in @react-navigation/xxx/xxx.tsx&quot; or &quot;SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token&quot;",id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token",children:[]},{value:"I&#39;m getting &quot;Module &#39;...&#39; has no exported member &#39;xxx&#39; when using TypeScript",id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript",children:[]},{value:"I&#39;m getting an error &quot;null is not an object (evaluating &#39;RNGestureHandlerModule.default.Direction&#39;)&quot;",id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection",children:[]},{value:"I&#39;m getting an error &quot;requireNativeComponent: &quot;RNCSafeAreaProvider&quot; was not found in the UIManager&quot;",id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager",children:[]},{value:"I&#39;m getting an error &quot;Tried to register two views with the same name RNCSafeAreaProvider&quot;",id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider",children:[]},{value:"Nothing is visible on the screen after adding a <code>View</code>",id:"nothing-is-visible-on-the-screen-after-adding-a-view",children:[]},{value:"I get the warning &quot;Non-serializable values were found in the navigation state&quot;",id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state",children:[]},{value:"I&#39;m getting &quot;Invalid hook call. Hooks can only be called inside of the body of a function component&quot;",id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component",children:[]},{value:"Screens are unmounting/remounting during navigation",id:"screens-are-unmountingremounting-during-navigation",children:[]},{value:"App is not working properly when connected to Chrome Debugger",id:"app-is-not-working-properly-when-connected-to-chrome-debugger",children:[]}],b={rightToc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation. These issues may or may not be related to React Navigation itself."),Object(r.b)("p",null,"Before troubleshooting an issue, make sure that you have upgraded to ",Object(r.b)("strong",{parentName:"p"},"the latest available versions")," of the packages. You can install the latest versions by installing the packages again (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"npm install package-name"),")."),Object(r.b)("h2",{id:"im-getting-an-error-unable-to-resolve-module-after-updating-to-the-latest-version"},'I\'m getting an error "Unable to resolve module" after updating to the latest version'),Object(r.b)("p",null,"This might happen for 3 reasons:"),Object(r.b)("h3",{id:"stale-cache-of-metro-bundler"},"Stale cache of Metro bundler"),Object(r.b)("p",null,"If the module points to a local file (i.e. the name of the module starts with ",Object(r.b)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to stale cache. To fix this, try the following solutions."),Object(r.b)("p",null,"If you're using Expo, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"expo start -c\n")),Object(r.b)("p",null,"If you're not using Expo, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx react-native start --reset-cache\n")),Object(r.b)("p",null,"If that doesn't work, you can also try the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"rm -rf $TMPDIR/metro-bundler-cache-*\n")),Object(r.b)("h3",{id:"missing-peer-dependency"},"Missing peer dependency"),Object(r.b)("p",null,"If the module points to an npm package (i.e. the name of the module doesn't with ",Object(r.b)("inlineCode",{parentName:"p"},"./"),"), then it's probably due to a missing dependency. To fix this, install the dependency in your project:"),Object(r.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install name-of-the-module\n"))),Object(r.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add name-of-the-module\n")))),Object(r.b)("p",null,"Sometimes it might even be due to a corrupt installation. If clearing cache didn't work, try deleting your ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," folder and run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," again."),Object(r.b)("h3",{id:"missing-extensions-in-metro-configuration"},"Missing extensions in metro configuration"),Object(r.b)("p",null,"Sometimes the error may look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'Error: While trying to resolve module "@react-navigation/native" from file "/path/to/src/App.js", the package "/path/to/node_modules/@react-navigation/native/package.json" was successfully found. However, this package itself specifies a "main" module field that could not be resolved ("/path/to/node_modules/@react-navigation/native/src/index.tsx"\n')),Object(r.b)("p",null,"This can happen if you have a custom configuration for metro and haven't specified ",Object(r.b)("inlineCode",{parentName:"p"},"ts")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tsx")," as valid extensions. These extensions are present in the default configuration. To check if this is the issue, look for a ",Object(r.b)("inlineCode",{parentName:"p"},"metro.config.js")," file in your project and check if you have specified the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/metro/docs/en/configuration#sourceexts"}),Object(r.b)("inlineCode",{parentName:"a"},"sourceExts"))," option. It should at least have the following configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"sourceExts: ['js', 'json', 'ts', 'tsx'];\n")),Object(r.b)("p",null,"If it's missing these extensions, add them and then clear metro cache as shown in the section above."),Object(r.b)("h2",{id:"im-getting-syntaxerror-in-react-navigationxxxxxxtsx-or-syntaxerror-xxxreact-navigationxxxxxxtsx-unexpected-token"},'I\'m getting "SyntaxError in @react-navigation/xxx/xxx.tsx" or "SyntaxError: /xxx/@react-navigation/xxx/xxx.tsx: Unexpected token"'),Object(r.b)("p",null,"This might happen if you have an old version of the ",Object(r.b)("inlineCode",{parentName:"p"},"metro-react-native-babel-preset")," package. Try upgrading it to the latest version."),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev metro-react-native-babel-preset\n")),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev metro-react-native-babel-preset\n")),Object(r.b)("p",null,"If you have ",Object(r.b)("inlineCode",{parentName:"p"},"@babel/core")," installed, also upgrade it to latest version."),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev @babel/core\n")),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev @babel/core\n")),Object(r.b)("p",null,"If upgrading the packages don't help, you can also try deleting your ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," as well as lock the file and reinstall your dependencies."),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"rm -rf node_modules\nrm package-lock.json\nnpm install\n")),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"rm -rf node_modules\nrm yarn.lock\nyarn\n")),Object(r.b)("p",null,"After upgrading or reinstalling the packages, you should also clear Metro bundler's cache following the instructions earlier in the page."),Object(r.b)("h2",{id:"im-getting-module--has-no-exported-member-xxx-when-using-typescript"},"I'm getting \"Module '","[...]","' has no exported member 'xxx' when using TypeScript"),Object(r.b)("p",null,"This might happen if you have an old version of TypeScript in your project. You can try upgrading it:"),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev typescript\n")),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev typescript\n")),Object(r.b)("h2",{id:"im-getting-an-error-null-is-not-an-object-evaluating-rngesturehandlermoduledefaultdirection"},"I'm getting an error \"null is not an object (evaluating 'RNGestureHandlerModule.default.Direction')\""),Object(r.b)("p",null,"This and some similar errors might occur if you have a bare React Native project and the library ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," library isn't linked."),Object(r.b)("p",null,"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"react-native unlink react-native-gesture-handler\n")),Object(r.b)("p",null,"If you're testing on iOS and use Mac, make sure you have run ",Object(r.b)("inlineCode",{parentName:"p"},"pod install")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"ios/")," folder:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd ios\npod install\ncd ..\n")),Object(r.b)("p",null,"Now rebuild the app and test on your device or simulator."),Object(r.b)("h2",{id:"im-getting-an-error-requirenativecomponent-rncsafeareaprovider-was-not-found-in-the-uimanager"},'I\'m getting an error "requireNativeComponent: "RNCSafeAreaProvider" was not found in the UIManager"'),Object(r.b)("p",null,"This and some similar errors might occur if you have a bare React Native project and the library ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," library isn't linked."),Object(r.b)("p",null,"Linking is automatic from React Native 0.60, so if you have linked the library manually, first unlink it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"react-native unlink react-native-safe-area-context\n")),Object(r.b)("p",null,"If you're testing on iOS and use Mac, make sure you have run ",Object(r.b)("inlineCode",{parentName:"p"},"pod install")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"ios/")," folder:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd ios\npod install\ncd ..\n")),Object(r.b)("p",null,"Now rebuild the app and test on your device or simulator."),Object(r.b)("h2",{id:"im-getting-an-error-tried-to-register-two-views-with-the-same-name-rncsafeareaprovider"},'I\'m getting an error "Tried to register two views with the same name RNCSafeAreaProvider"'),Object(r.b)("p",null,"This might occur if you have multiple versions of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),Object(r.b)("inlineCode",{parentName:"a"},"react-native-safe-area-context"))," installed."),Object(r.b)("p",null,"If you're using Expo managed workflow, it's likely that you have installed an incompatible version. To install the correct version, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"expo install react-native-safe-area-context\n")),Object(r.b)("p",null,"If it didn't fix the error or you're not using Expo managed workflow, you'll need to check which package depends on a different version of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-safe-area-context"),"."),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),", run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn why react-native-safe-area-context\n")),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),", run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm ls react-native-safe-area-context\n")),Object(r.b)("p",null,"This will tell you if a package you use has a dependency on ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-safe-area-context"),". If it's a third-party package, you should open an issue on the relevant repo's issue tracker explaining the problem. Generally for libraries, dependencies containing native code should be defined in ",Object(r.b)("inlineCode",{parentName:"p"},"peerDependencies")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," to avoid such issues."),Object(r.b)("p",null,"If it's already in ",Object(r.b)("inlineCode",{parentName:"p"},"peerDependencies")," and not in ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies"),", and you use ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),", it might be because of incompatible version range defined for the package. The author of the library will need to relax the version range in such cases to allow a wider range of versions to be installed."),Object(r.b)("p",null,"If you use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),", you can also temporarily override the version being installed using ",Object(r.b)("inlineCode",{parentName:"p"},"resolutions"),". Add the following in your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"resolutions": {\n  "react-native-safe-area-context": "<version you want to use>"\n}\n')),Object(r.b)("p",null,"And then run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn\n")),Object(r.b)("p",null,"If you're on iOS and not using Expo managed workflow, also run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"cd ios\npod install\ncd ..\n")),Object(r.b)("p",null,"Now rebuild the app and test on your device or simulator."),Object(r.b)("h2",{id:"nothing-is-visible-on-the-screen-after-adding-a-view"},"Nothing is visible on the screen after adding a ",Object(r.b)("inlineCode",{parentName:"h2"},"View")),Object(r.b)("p",null,"If you wrap the container in a ",Object(r.b)("inlineCode",{parentName:"p"},"View"),", make sure the ",Object(r.b)("inlineCode",{parentName:"p"},"View")," stretches to fill the container using ",Object(r.b)("inlineCode",{parentName:"p"},"flex: 1"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <View style={{ flex: 1 }}>\n      <NavigationContainer>{/* ... */}</NavigationContainer>\n    </View>\n  );\n}\n")),Object(r.b)("h2",{id:"i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state"},'I get the warning "Non-serializable values were found in the navigation state"'),Object(r.b)("p",null,"This can happen if you are passing non-serializable values such as class instances, functions etc. in params. React Navigation warns you in this case because this can break other functionality such ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/state-persistence"}),"state persistence"),", ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deep-linking"}),"deep linking")," etc."),Object(r.b)("p",null,"Example of some use cases for passing functions in params are the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To pass a callback to use in a header button. This can be achieved using ",Object(r.b)("inlineCode",{parentName:"li"},"navigation.setOptions")," instead. See the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/header-buttons#header-interaction-with-its-screen-component"}),"guide for header buttons")," for examples."),Object(r.b)("li",{parentName:"ul"},"To pass a callback to the next screen which it can call to pass some data back. You can usually achieve it using ",Object(r.b)("inlineCode",{parentName:"li"},"navigate")," instead. See the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/params"}),"guide for params")," for examples."),Object(r.b)("li",{parentName:"ul"},"To pass complex data to another screen. Instead of passing the data ",Object(r.b)("inlineCode",{parentName:"li"},"params"),", you can store that complex data somewhere else (like a global store), and pass an id instead. Then the screen can get the data from the global store using the id. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/params#what-should-be-in-params"}),"what should be in params"),"."),Object(r.b)("li",{parentName:"ul"},"Pass data, callbacks etc. from a parent to child screens. You can either use React Context, or pass a children callback to pass these down instead of using params. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/hello-react-navigation#passing-additional-props"}),"passing additional props"),".")),Object(r.b)("p",null,"If you don't use state persistence or deep link to the screen which accepts functions in params, then the warning doesn't affect you and you can safely ignore it. To ignore the warning, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"YellowBox.ignoreWarnings"),"."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { YellowBox } from 'react-native';\n\nYellowBox.ignoreWarnings([\n  'Non-serializable values were found in the navigation state',\n]);\n")),Object(r.b)("h2",{id:"im-getting-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component"},'I\'m getting "Invalid hook call. Hooks can only be called inside of the body of a function component"'),Object(r.b)("p",null,"This can happen when you pass a React component to an option that accepts a function returning a react element. For example, the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stack-navigator#header"}),Object(r.b)("inlineCode",{parentName:"a"},"header")," option in stack navigator")," expects a function returning a react element:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{ header: (props) => <MyHeader {...props} /> }}\n/>\n')),Object(r.b)("p",null,"If you directly pass a function here, you'll get this error when using hooks:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Stack.Screen\n  name="Home"\n  component={Home}\n  option={{\n    // This is not correct\n    header: MyHeader,\n  }}\n/>\n')),Object(r.b)("p",null,"The same applies to other options like ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft"),", ",Object(r.b)("inlineCode",{parentName:"p"},"headerRight"),", ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarIcon")," etc. as well as props such as ",Object(r.b)("inlineCode",{parentName:"p"},"tabBar"),", ",Object(r.b)("inlineCode",{parentName:"p"},"drawerContent")," etc."),Object(r.b)("h2",{id:"screens-are-unmountingremounting-during-navigation"},"Screens are unmounting/remounting during navigation"),Object(r.b)("p",null,"Sometimes you might have noticed that your screens unmount/remount, or your local component state or the navigation state resets when you navigate. This might happen if you are creating React components during render."),Object(r.b)("p",null,"The simplest example is something like following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={() => {\n          return <SomeComponent />;\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"component")," prop expects a React Component, but in the example, it's getting a function returning an React Element. While superficially a component and a function returning a React Element look the exact same, they don't behave the same way when used."),Object(r.b)("p",null,"Here, every time the component re-renders, a new function will be created and passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"component")," prop. React will see a new component and unmount the previous component before rendering the new one. This will cause any local state in the old component to be lost. React Navigation will detect and warn for this specific case but there can be other ways you might be creating components during render which it can't detect."),Object(r.b)("p",null,"Another easy to identify example of this is when you create a component inside another component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  const Home = () => {\n    return <SomeComponent />;\n  };\n\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),Object(r.b)("p",null,"Or when you use a higher order component (such as ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," from Redux, or ",Object(r.b)("inlineCode",{parentName:"p"},"withX")," functions that accept a component) inside another component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={withSomeData(Home)} />\n    </Stack.Navigator>\n  );\n}\n')),Object(r.b)("p",null,"If you're unsure, it's always best to make sure that the components you are using as screens are defined outside of a React component. They could be defined in another file and imported, or defined at the top level scope in the same file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const Home = () => {\n  return <SomeComponent />;\n};\n\nfunction App() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={Home} />\n    </Stack.Navigator>\n  );\n}\n')),Object(r.b)("p",null,"This is not React Navigation specific, but related to React in general. You should always avoid creating components during render, whether you are using React Navigation or not."),Object(r.b)("h2",{id:"app-is-not-working-properly-when-connected-to-chrome-debugger"},"App is not working properly when connected to Chrome Debugger"),Object(r.b)("p",null,"When the app is connected to Chrome Debugger (or other tools that use Chrome Debugger such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jhen0409/react-native-debugger"}),"React Native Debugger"),") you might encounter various issues related to timing."),Object(r.b)("p",null,"This can result in issues such as button presses taking a long time to register or not working at all, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2367"}),"gestures and animations being slow and buggy")," etc. There can be other functional issues such as promises not resolving, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/4470"}),"timeouts and intervals not working correctly")," etc. as well."),Object(r.b)("p",null,"The issues are not related to React Navigation, but due to the nature of how the Chrome Debugger works. When connected to Chrome Debugger, your whole app runs on Chrome and communicates with the native app via sockets over the network, which can introduce latency and timing related issues."),Object(r.b)("p",null,"So, unless you are trying to debug something, it's better to test the app without being connected to the Chrome Debugger. If you are using iOS, you can alternatively use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/debugging#safari-developer-tools"}),"Safari to debug your app")," which debugs the app on the device directly and does not have these issues, though it has other downsides."))}p.isMDXComponent=!0},427:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||r;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},428:function(e,n,t){"use strict";function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}},429:function(e,n,t){"use strict";var a=t(0),o=t(430);n.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},430:function(e,n,t){"use strict";var a=t(0),o=Object(a.createContext)(void 0);n.a=o},431:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(429),i=t(428),c=t(49),s=t.n(c),l=37,u=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(r.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(a.useState)(c),j=f[0],O=f[1],v=Object(a.useState)(!1),y=v[0],N=v[1];if(null!=p){var x=h[p];null!=x&&x!==j&&b.some((function(e){return e.value===x}))&&O(x)}var w=function(e){O(e),null!=p&&g(p,e)},k=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},T=function(){N(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",T)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(k,e.target,e),C(e)},onFocus:function(){return w(n)},onClick:function(){w(n),N(!1)},onPointerDown:function(){return N(!1)}},t)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===j}))[0]))}},432:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function(e){return o.a.createElement("div",null,e.children)}}}]);