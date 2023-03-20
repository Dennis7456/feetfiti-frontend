module.exports = {
  '*.{ts,tsx}': (filenames) => [
    'yarn prettier --write',
    'git add .',
    'yarn format:check',
    'yarn lint',
    'yarn type:check'
],
}
