## Netbeast App package.json example

The **package.json** of a npm module is its manifest, and that is all Netbeast apps need to be recognized as one of them
and be launched on netbeast dashboard.

http://docs.netbeast.co

```json
{
  "name": "netbeast-terminal-app",
  "version": "1.0.0",
  "description": "Web ssh access, made from tty.js",
  "main": "main.js",
  "dependencies": {
    "minimist": "^1.1.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "./main.js --port 31416"
  },
  "keywords": [
    "web-ssh",
    "ssh",
    "iot",
    "netbeast"
  ],
  "logo" : "assets/icon.png",
  "author" : "jesus@netbeast",
  "license" : "GPL V2"
}

```
