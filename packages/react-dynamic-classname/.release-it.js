module.exports = {
  "hooks": {
    "before:init": ["yarn test"],
    "after:bump": "NODE_ENV=production yarn build",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "release": true
  },
  "npm": {
    "publish": false,
    "ignoreVersion": true,
    "publishPath": "dist",
    "publishConfig": {
      "access": "public"
    }
  },
  "plugins": {
    "@release-it/bumper": {
      "out": ["package.json", "package.json"]
    },
    "@release-it/conventional-changelog": {
      "preset": "conventionalcommits",
      "infile": "CHANGELOG.md"
    }
  }
}