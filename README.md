# ChakChak.io

for easy reservation

## Description

## ENV

We are using [@t3-oss/env-nextjs](https://env.t3.gg/docs/recipes) and zod for env management.
If you want to add new env variable, please check env.ts at the root of the project.

## Design System(Enchant)

### How to use

## Warning

1. Do not declare type: "module" in package.json. It will break the build process.
    1.1. Because some of the packages still need dynamic import.
