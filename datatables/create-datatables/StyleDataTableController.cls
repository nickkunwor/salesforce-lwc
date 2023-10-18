public with sharing class StyleDataTableController {
  @AuraEnabled(cacheable=true)
  public static list<Account> getAccounts() {
    return [
      SELECT Id, Name, AnnualRevenue, Industry, Phone
      FROM Account
      WHERE AnnualRevenue != NULL
      LIMIT 5
    ];
  }
}
