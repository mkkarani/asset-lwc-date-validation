import {
    LightningElement,
    track
} from 'lwc';

export default class LwcDateValidation extends LightningElement {

    @track myDate;

    handleInputEvent(event) {
        if (event.target.name == 'myDate') {
            var today = new Date();
            this.myDate = event.target.value;
            if (this.myDate != null) {
                var myDateString = this.myDate.toString();
                var splittedDate = this.splitDate(myDateString);
                var myDateYear = splittedDate[0];
                var myDateMonth = splittedDate[1];
                var myDateValue = splittedDate[2];

                if (myDateYear > today.getFullYear() || (myDateMonth > (today.getMonth() + 1) && myDateYear > today.getFullYear()) ||
                    (myDateValue > today.getDate() && myDateMonth > (today.getMonth() + 1) && myDateYear > today.getFullYear()) ||
                    (myDateValue > today.getDate() && myDateMonth == (today.getMonth() + 1) && myDateYear == today.getFullYear())) {
                    alert('Entered date is greater than today');
                } else if(myDateYear == today.getFullYear() && myDateMonth == (today.getMonth() + 1)&& myDateValue == today.getDate()) {
                    alert('Entered date is equal to today');
                }
                else{
                    alert('Entered date is smaller than today');
                }

            }
        }
    }
    splitDate(date) {
        var result = date.split('-');
        return result;
    }
}
