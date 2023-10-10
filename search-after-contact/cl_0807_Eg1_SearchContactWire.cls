public with sharing class cl_0807_Eg1_SearchContactWire {
  @AuraEnabled(cacheable=true)
  public static List<Contact> findContact(String searchKey) {
    String sk = '%' + searchKey + '%';
    return [
      SELECT Id, Name, Phone, Email
      FROM Contact
      WHERE FirstName LIKE :sk
    ];
  }
}
