# ⚛️ Storyblok ❤ Remix | Boilerplate

## 📖 Background

> This boilerplate aims to kickstart my own webdevelopment projects by offering the base functionalities of simple to medium sized applications which require a CMS. (:

## 🚀 Features

- Remix with Vite
- TypeScript
- TailwindCSS
- Vercel Hosting
- Storyblok CMS support
- Pre-commit Linting & Formatting

## 🔽 Installation & Usage

Clone the repository:

```bash
$ git clone https://github.com/schmaenjael/remix-boilerplate
```

Install the dependencies:

```bash
$ npm install
```

Navigate to storyblok.com and get a development token and create a `.env` file with the following content:

```js
STORYBLOK_TOKEN = [storybloktoken];
STORYBLOK_MODE = draft;
NODE_ENV = development;
SESSION_SECRET = [supersecretpassword];
```

Afterwards run the application

```bash
$ npm run dev
```

To run the application using https use the support-script `script:https` to run an https proxy in a different terminal.

```bash
$ npm run script:https
```

## 📁 Scaffolding

```bash
storyblok-remix-boilerplate
├── public
│   ├── build # build folder
│   └── fonts
├── src
│   ├── components # atomic design pattern
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── templates
│   │   └── index.ts # export storyblok components
│   ├── routes # application file-based routing
│   │   └── $.tsx # required for storyblok based routes
│   ├── styles # global non-tailwind native styles
│   │   └── tailwind.css # & tailwind entry css
│   ├── utils # utility and helper functions
│   │   ├── env.server.ts # exposes certain .env items
│   │   ├── i18next.ts # handle internationalization
│   │   └── nonceProvider.ts
│   ├── entry.client.tsx # remix client entry
│   ├── entry.server.tsx # remix server entry
│   └── root.tsx
├── types
│   ├── globals.d.ts # define .env types
│   └── reset.d.ts # total-typescript type resets
├── LICENSE
├── package.json
├── postcss.config.cjs # required by tailwind
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🐛 Bugs

If you have questions, feature requests or a bug you want to report, please click [here](https://github.com/schmaenjael/storyblok-remix-boilerplate/issues) to file an issue.

## 🖊️ Author

- [**schmaenjael**](https://github.com/schmaenjael) [![GitHub followers](https://img.shields.io/github/followers/schmaenjael.svg?style=social)](https://github.com/schmaenjael)

## ⚠️ License

Copyright (c) 2024 schmaenjael
<br />
Licensed under the GNU General Public License; for further information refer to the appended `LICENSE`!
