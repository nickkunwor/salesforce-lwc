public with sharing class AccountManager {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccount() {
    return [
      SELECT id, Name, Phone, AnnualRevenue
      FROM Account
      WHERE AnnualRevenue > 0
      ORDER BY AnnualRevenue DESC
      LIMIT 5
    ];
  }
}
