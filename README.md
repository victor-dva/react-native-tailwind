# react-native-tailwind
This repository explains how to setup a react native (Javascript) project with Tailwind

# Step 1
1. Create your react-native project with expo : `npx create-expo-app --template blank my-react-native-app`
2. cd my-react-native-app

# Step 2
1. Install dependencies :
<br>`npm install nativewind react-native-reanimated react-native-safe-area-context babel-preset-expo`
<br>`npm install --save-dev tailwindcss`
2. Setup Tailwind : `npx tailwindcss init`
In tailwind.config.js, replace content by : <br>
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.js"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
# Step 3 Create global.css file and edit <br>
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# Step 4 Create babel.config.js <br>
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```
# Step 5 Create metro.config.js <br>
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```
# Step 6 Edit App.json <br>
```
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

# Step 7 Import global.css in App.js <br>
```
import "./global.css"
 
export default App() {
  /* Your App */
}
```