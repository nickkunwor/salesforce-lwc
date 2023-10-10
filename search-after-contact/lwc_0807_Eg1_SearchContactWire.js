import { LightningElement, wire } from "lwc";
import findContacts from "@salesforce/apex/cl_0807_Eg1_SearchContactWire.findContact";

export default class Lwc_0807_Eg1_SearchContactWire extends LightningElement {
  searchText;
  rec;
  err;

  //Wire a Propery //
  @wire(findContacts, { searchKey: "$searchText" }) contacts;

  //Wire a Function //

  //Second methid
  /*@wire(findContacts, { searchKey: "$searchText" })
  contacts({ error, data }) {
    if (data) {
      this.rec = data;
      this.err = error;
    }
  }*/

  searchme(event) {
    this.searchText = event.target.value;
  }
}
