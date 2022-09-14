# eslint-config

Shared eslint settings for Gameflow. Based on prettier + standard. [Based on eslints own documentation of shareable-configs](https://eslint.org/docs/developer-guide/shareable-configs)

## Installation

Install plugins used by @gameflow-tv/eslint-config:

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import
```

## Usage

`yarn add @gameflow-tv/eslint-config --dev`

Create .eslintrc in the root of your project

```json
{
    "extends": "@gameflow-tv"
}
```
