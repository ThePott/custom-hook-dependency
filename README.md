## 설치할 것
1. react-router
2. MUI & MUI Icons
3. tailwindcss
4. Zustand
5. node:type
```bash
npm install react-router
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install tailwindcss @tailwindcss/vite
npm install zustand
npm install --save @types/node
```


## 파일 수정 ---- Fold Level 2

### index.css
```css
@import "tailwindcss";
```
### tsconfig.app.json, tsconfig.node.json
```json
 /* Path mapping */
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
```

### vite.config.ts
```ts
import path from 'path';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, ".") },
    ],
  },
})
```

### App.css 삭제

### App.tsx
```tsx
import './App.css' // <<<<---- 삭제
```

### index.css
```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: only dark;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```