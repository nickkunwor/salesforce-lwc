import { LightningElement } from "lwc";

import CASE_OBJECT from "@salesforce/schema/Case";
//import CASE_NUMBER_FIELD from "@salesforce/schema/Case.CaseNumber";
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import ORIGIN_FIELD from "@salesforce/schema/Case.Origin";
import SUBJECT_FIELD from "@salesforce/schema/Case.Subject";
import DESCRIPTION_FIELD from "@salesforce/schema/Case.Description";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateCaseRecordWithEditForm extends LightningElement {
  caseObject = CASE_OBJECT;
  statusField = STATUS_FIELD;
  originField = ORIGIN_FIELD;
  subjectField = SUBJECT_FIELD;
  descField = DESCRIPTION_FIELD;
  originValue = "Phone";

  handleCaseCreated(event) {
    const ev = new ShowToastEvent({
      title: "Case Created",
      message: "Record Id" + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(ev);
  }

  handleCancel(event) {
    const inputFields = this.template.querySelectorAll("lightning-input-field");
    if (inputFields) {
      inputFields.forEach((field) => {
        field.reset();
      });
    }
  }
}
