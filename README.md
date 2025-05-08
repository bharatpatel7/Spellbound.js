# 🪄✨ Spellbound.js ✨🪄

[![npm version](https://img.shields.io/npm/v/spellbound.js.svg?style=flat-square)](https://www.npmjs.com/package/spellbound.js)
[![npm downloads](https://img.shields.io/npm/dm/spellbound.js.svg?style=flat-square)](https://www.npmjs.com/package/spellbound.js)

Welcome to **Spellbound.js**, a library of enchanting web animations and effects inspired by the wizarding world! Whether you're summoning glowing cursors, casting scroll charms, or animating text with invisible quills, this library will bring a touch of magic to your web projects. ⚡

---

## 🧙‍♂️ Features

- **Lumos Charm**: Toggle between light and dark themes with a flick of your wand.
- **Scroll Charm**: Reveal elements as they scroll into view, like a wizard emerging from an invisibility cloak.
- **Text Incantation**: Animate text as if it's being typed by a magical quill.
- **Cursor Glow**: Add a glowing aura that follows your cursor like a loyal house-elf.

---

## 📦 Installation

Install the library using your favorite package manager:

```bash
npm install spellbound.js
```

Or, if you're more of a yarn wizard:

```bash
yarn add spellbound.js
```

---

## 🪄 Usage

### 1. **Lumos Charm**
Illuminate your site with light and dark themes:

```typescript
import { castLumosCharm } from "spellbound.js";

castLumosCharm("#theme-toggle");
```

### 2. **Scroll Charm**
Enchant elements to reveal themselves as they scroll into view:

```typescript
import { castScrollCharm } from "spellbound.js";

castScrollCharm(".magical-element", {
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
  animationClass: "sb-fade-in",
});
```

### 3. **Text Incantation**
Bring text to life with a typewriter effect:

```typescript
import { castTextIncantation } from "spellbound.js";

castTextIncantation("#magical-text", {
  text: ["Welcome to Hogwarts!", "Let the magic begin!"],
  speed: 100,
  loop: true,
});
```

### 4. **Cursor Glow**
Add a glowing aura to your cursor:

```typescript
import { useCursorGlow } from "spellbound.js";

useCursorGlow("rgba(255, 215, 0, 0.5)", 60);
```

---

## 🧙‍♀️ Contributing

Contributions are always welcome! If you have ideas for new spells or improvements, feel free to open an issue or submit a pull request. Together, we can make the web more magical! ✨

---

## ⚡ License

This project is licensed under the [MIT License](LICENSE). Use it freely, but remember: with great power comes great responsibility (and a touch of magic).

---

## 🌟 Acknowledgments

- Inspired by the wizarding world of Harry Potter. ⚡
- Special thanks to all the developers who believe in magic. 🪄
- Created with ❤️ by Bharat Garsondiya.
- 📧 Email: contact@bharatgarsondiya.me

---

Let the magic begin! 🪄✨
