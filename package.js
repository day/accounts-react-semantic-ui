Package.describe({
  summary: 'Semantic UI Components for Accounts React',
  version: '1.0.2',
  name: 'day:accounts-react-semantic-ui',
  git: 'https://github.com/day/accounts-react-semantic-ui',
  documentation: 'README.md'
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use('ecmascript')
  api.mainModule('index.js', 'client')
})
