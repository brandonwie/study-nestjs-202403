# Installation

## Install Node

Check out [here](https://nodejs.org/en/download) for installation info.

Personally recommend to use node package manager.

I use [homebrew](https://brew.sh/).

Once you set up `homebrew`,

```bash
brew install nvm
```

Now, node version manager is ready.

## Activate PNPM

Since v16.13, Node.js ships Corepack.

```bash
# current LTS
nvm use v20.11.1
```

```bash
corepack enable pnpm
```

- Follow pnpm installation instruction [here](https://pnpm.io/installation) for more
