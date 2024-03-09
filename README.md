# ChakChak.io

for easy reservation

## Description

## Setting

### Before you start

```bash
# node setup
nvm install
nvm use

# package install
pnpm install

# install [pre-commit](https://pre-commit.com/) to restrict commit
# rule is defined in [.pre-commit-config.yaml](.pre-commit-config.yaml)
pnpm pre-commit:install

# setup .env
cp .env.example .env

# start
pnpm run dev

# ETC
## test command list
pnpm run test
pnpm run test:watch
## icon auto generate
pnpm run build:ts-icons
```

### ENV

We are using [@t3-oss/env-nextjs](https://env.t3.gg/docs/recipes) and zod for env management.
If you want to add new env variable, please check env.ts at the root of the project.

### CVA(class-variance-authority)

You need to set up [tailwindcss intellisense setting](https://cva.style/docs/getting-started/installation)

for vscode. add the following

1. [Install the "Tailwind CSS IntelliSense" Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Add the following to your settings.json

```.json
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "tailwindCSS.classAttributes": ["class", "className", ".*Variants"],
```

## Design System(Enchant)

### How to use

## Warning

1. Do not declare type: "module" in package.json. It will break the build process.
   1.1. Because some of the packages still need dynamic import.

## Comment List

1. @TODO -> comment for what to do in the future
2. @WARN -> comment for preventing modification or explaining the reason for the controversial code

## Job List

### High Priority

1. create active button using comopoundVariants of cva
2. re design button component

### Propose

1. Remove required field in FromLabel. and detect required field from useFormContext(need to check possibility)
