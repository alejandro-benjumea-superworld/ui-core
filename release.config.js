module.exports = {
  branches: ['master'],
  ci: false,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          'chore(release): set `package.json` to ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
};
