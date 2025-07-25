"use strict";(self.webpackChunktailwind_quartz=self.webpackChunktailwind_quartz||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsLink:()=>AsLink,Default:()=>Default,Intents:()=>Intents,LoadingStates:()=>LoadingStates,States:()=>States,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Intents$parameters,_Intents$parameters2,_States$parameters,_States$parameters2,_WithIcons$parameters,_WithIcons$parameters2,_AsLink$parameters,_AsLink$parameters2,_LoadingStates$parame,_LoadingStates$parame2,_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Button",component:_Button__WEBPACK_IMPORTED_MODULE_0__.$,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{intent:{control:"select",options:["primary","secondary","ghost","inline","alert"]},isLoading:{control:"boolean"},disabled:{control:"boolean"}}};var Default={args:{children:"Button"}},Intents={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"primary",children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"text-sm text-gray-500",children:"Filled button for primary actions"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"secondary",children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"text-sm text-gray-500",children:"Outlined button for secondary actions"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"ghost",children:"Ghost"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"text-sm text-gray-500",children:"Minimal button with no border"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"inline",children:"Inline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"text-sm text-gray-500",children:"Text-only button with underline"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"alert",children:"Alert"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"text-sm text-gray-500",children:"Destructive action button"})]})]})}},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"space-y-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-sm font-bold mb-2",children:"Normal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"primary",children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"secondary",children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"ghost",children:"Ghost"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"inline",children:"Inline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"alert",children:"Alert"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-sm font-bold mb-2",children:"Disabled"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"primary",disabled:!0,children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"secondary",disabled:!0,children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"ghost",disabled:!0,children:"Ghost"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"inline",disabled:!0,children:"Inline"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"alert",disabled:!0,children:"Alert"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-sm font-bold mb-2",children:"Loading"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"primary",isLoading:!0,children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"secondary",isLoading:!0,children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"ghost",isLoading:!0,children:"Ghost"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"alert",isLoading:!0,children:"Alert"})]})]})]})}},WithIcons={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"primary",icon:"plus",children:"Add Item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"secondary",icon:"edit",children:"Edit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"ghost",icon:"trash",children:"Delete"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{intent:"alert",icon:"alert-triangle",children:"Warning"})]})}},AsLink={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{href:"https://example.com",external:!0,children:"External Link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{href:"/internal",intent:"secondary",children:"Internal Link"})]})}},LoadingStates={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"space-y-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{isLoading:!0,children:"Loading with Text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{isLoading:!0,loadingOnly:!0,children:"Loading Only"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.$,{icon:"plus",isLoading:!0,children:"With Icon"})]})})}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Intents.parameters=_objectSpread(_objectSpread({},Intents.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Intents$parameters=Intents.parameters)||void 0===_Intents$parameters?void 0:_Intents$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div className="space-y-4">\n      <div className="flex gap-4 items-center">\n        <Button intent="primary">Primary</Button>\n        <span className="text-sm text-gray-500">Filled button for primary actions</span>\n      </div>\n      <div className="flex gap-4 items-center">\n        <Button intent="secondary">Secondary</Button>\n        <span className="text-sm text-gray-500">Outlined button for secondary actions</span>\n      </div>\n      <div className="flex gap-4 items-center">\n        <Button intent="ghost">Ghost</Button>\n        <span className="text-sm text-gray-500">Minimal button with no border</span>\n      </div>\n      <div className="flex gap-4 items-center">\n        <Button intent="inline">Inline</Button>\n        <span className="text-sm text-gray-500">Text-only button with underline</span>\n      </div>\n      <div className="flex gap-4 items-center">\n        <Button intent="alert">Alert</Button>\n        <span className="text-sm text-gray-500">Destructive action button</span>\n      </div>\n    </div>\n}'},null===(_Intents$parameters2=Intents.parameters)||void 0===_Intents$parameters2||null===(_Intents$parameters2=_Intents$parameters2.docs)||void 0===_Intents$parameters2?void 0:_Intents$parameters2.source)})}),States.parameters=_objectSpread(_objectSpread({},States.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_States$parameters=States.parameters)||void 0===_States$parameters?void 0:_States$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div className="space-y-4">\n      <div>\n        <p className="text-sm font-bold mb-2">Normal</p>\n        <div className="flex gap-2">\n          <Button intent="primary">Primary</Button>\n          <Button intent="secondary">Secondary</Button>\n          <Button intent="ghost">Ghost</Button>\n          <Button intent="inline">Inline</Button>\n          <Button intent="alert">Alert</Button>\n        </div>\n      </div>\n      <div>\n        <p className="text-sm font-bold mb-2">Disabled</p>\n        <div className="flex gap-2">\n          <Button intent="primary" disabled>Primary</Button>\n          <Button intent="secondary" disabled>Secondary</Button>\n          <Button intent="ghost" disabled>Ghost</Button>\n          <Button intent="inline" disabled>Inline</Button>\n          <Button intent="alert" disabled>Alert</Button>\n        </div>\n      </div>\n      <div>\n        <p className="text-sm font-bold mb-2">Loading</p>\n        <div className="flex gap-2">\n          <Button intent="primary" isLoading>Primary</Button>\n          <Button intent="secondary" isLoading>Secondary</Button>\n          <Button intent="ghost" isLoading>Ghost</Button>\n          <Button intent="alert" isLoading>Alert</Button>\n        </div>\n      </div>\n    </div>\n}'},null===(_States$parameters2=States.parameters)||void 0===_States$parameters2||null===(_States$parameters2=_States$parameters2.docs)||void 0===_States$parameters2?void 0:_States$parameters2.source)})}),WithIcons.parameters=_objectSpread(_objectSpread({},WithIcons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcons$parameters=WithIcons.parameters)||void 0===_WithIcons$parameters?void 0:_WithIcons$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div className="flex gap-2">\n      <Button intent="primary" icon="plus">Add Item</Button>\n      <Button intent="secondary" icon="edit">Edit</Button>\n      <Button intent="ghost" icon="trash">Delete</Button>\n      <Button intent="alert" icon="alert-triangle">Warning</Button>\n    </div>\n}'},null===(_WithIcons$parameters2=WithIcons.parameters)||void 0===_WithIcons$parameters2||null===(_WithIcons$parameters2=_WithIcons$parameters2.docs)||void 0===_WithIcons$parameters2?void 0:_WithIcons$parameters2.source)})}),AsLink.parameters=_objectSpread(_objectSpread({},AsLink.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AsLink$parameters=AsLink.parameters)||void 0===_AsLink$parameters?void 0:_AsLink$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div className="flex gap-2">\n      <Button href="https://example.com" external>\n        External Link\n      </Button>\n      <Button href="/internal" intent="secondary">\n        Internal Link\n      </Button>\n    </div>\n}'},null===(_AsLink$parameters2=AsLink.parameters)||void 0===_AsLink$parameters2||null===(_AsLink$parameters2=_AsLink$parameters2.docs)||void 0===_AsLink$parameters2?void 0:_AsLink$parameters2.source)})}),LoadingStates.parameters=_objectSpread(_objectSpread({},LoadingStates.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoadingStates$parame=LoadingStates.parameters)||void 0===_LoadingStates$parame?void 0:_LoadingStates$parame.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <div className="space-y-4">\n      <div className="flex gap-2">\n        <Button isLoading>Loading with Text</Button>\n        <Button isLoading loadingOnly>Loading Only</Button>\n        <Button icon="plus" isLoading>With Icon</Button>\n      </div>\n    </div>\n}'},null===(_LoadingStates$parame2=LoadingStates.parameters)||void 0===_LoadingStates$parame2||null===(_LoadingStates$parame2=_LoadingStates$parame2.docs)||void 0===_LoadingStates$parame2?void 0:_LoadingStates$parame2.source)})});const __namedExportsOrder=["Default","Intents","States","WithIcons","AsLink","LoadingStates"];try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{intent:{defaultValue:{value:"primary"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"inline"'},{value:'"secondary"'},{value:'"ghost"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"home"'},{value:'"user"'},{value:'"error"'},{value:'"terminal"'},{value:'"plus"'},{value:'"close"'},{value:'"check"'},{value:'"chevronDown"'},{value:'"chevronUp"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"folder"'},{value:'"file"'},{value:'"database"'},{value:'"settings"'},{value:'"logout"'},{value:'"warning"'},{value:'"info"'},{value:'"eye"'},{value:'"eyeOff"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},external:{defaultValue:{value:"false"},description:"",name:"external",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},loadingOnly:{defaultValue:{value:"false"},description:"",name:"loadingOnly",required:!1,type:{name:"boolean"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.stories.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);