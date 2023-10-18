public with sharing class contactController {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactList() {
    return [
      SELECT Id, FirstName, Name, Title, Phone, Email, LeadSource
      FROM Contact
      LIMIT 10
    ];
  }
  @AuraEnabled
    public static string deleteSelectedContacts(List<String> contactIdList){      
        List<Contact> contactList = new List<Contact>();
        contactList = [select id from Contact where id in:contactIdList];
        if(contactList!=null && contactList.size()>0){
            try{
                delete contactList;
                return 'Contacts deleted successfully';
            }
            catch(Exception e){
                return e.getMessage();
            }  
        }
        else{
                return 'No Contacts Found';
        }        
    }
}
