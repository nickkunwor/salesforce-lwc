import { LightningElement, wire } from "lwc";
import getAccount from "@salesforce/apex/AccountManager.getAccount";

export default class GetTopAccounts extends LightningElement {
  @wire(getAccount) accounts;
}
