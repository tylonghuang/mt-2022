// Set theme here
Survey.StylesManager.applyTheme("modern");

// Survey logic goes here
var surveyJSON = {
    "title": "Online Experiment",
    "description": "Participate at your own fun",
    "pages": [
        {
        "name": "page1",
        "elements": [
            {
            "type": "checkbox",
            "name": "privacyQuestion",
            "title": "I have read the privacy statement linked above and agree to have my data processed in the scope of this study.",
            "isRequired": true,
            "choices": [
                {
                    "value": "item1",
                    "text": "Yes"
                }
            ]
            }
        ],
            "title": "Privacy Statement",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in purus molestie, rhoncus ante ut, faucibus lacus. Etiam imperdiet nisl dui, vitae elementum mi bibendum sed."
        },
        {
        "name": "page2",
        "elements": [
            {
            "type": "rating",
            "name": "scaleQuestion",
            "title": "On a scale of one to five, how likely are you going to help the dog?",
            "isRequired": true,
            "minRateDescription": "(Most unlikely)",
            "maxRateDescription": "(Most likely)"
            }
        ],
            "title": "Experiment 1",
            "description": "Imagine you are in x situation. How would you rate following statements?"
        },
        {
            "name": "page3",
            "elements": [
            {
            "type": "checkbox",
            "name": "checkboxQuestion",
            "title": "What do you like about dogs?",
            "isRequired": true,
            "choices": [
                {
                    "value": "item1",
                    "text": "Their looks"
                },
                {
                    "value": "item2",
                    "text": "Their smell"
                },
                {
                    "value": "item3",
                    "text": "Just dogs"
                }
            ],
            "hasOther": true
            }
            ],
            "title": "Experiment 2",
            "description": "Imagine you are in y situation. How would you rate following statements?"
        }
    ],
    "firstPageIsStarted": true
};

function sendDataToServer(survey, options) {
    options.showDataSaving();
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbx6bDOrZabpm4w_XHJPIgPqDLIpJ1MbOwa2yXXJ2UqX0DMblNqzKWSD93eKv6_4hXO_/exec',
        type: 'post',
        data: JSON.stringify(survey.data),
        //We need tell web app that we use plain text.
        headers: {
            "Content-Type": "text/plain"
        },
        processData: false,
        complete: function(res, status) {
            if (status == 'success') {
                //Show that data was send successfully
                options.showDataSavingSuccess();
            } else {
                //Display retry button in case of error
                options.showDataSavingError();
            }
        },
    });
}
var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});