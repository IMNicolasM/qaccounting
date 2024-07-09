const moduleName = 'iaccounting';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  purchases: `${urlBase}/purchases`,
  accountingAccounts: `${urlBase}/accountingaccounts`,
  providers: `${urlBase}/providers`
}
