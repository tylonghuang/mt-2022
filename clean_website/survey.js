// Set theme here
Survey.StylesManager.applyTheme("modern");

// Survey logic goes here
var surveyJSON = {
    "title": "Online Survey",
    "description": "Participate at your own fun",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "title": "Context",
            "description": "Imagine you are currently employed for a company that specializes in manufacturing sports products in masses for the public. However, the reputation of the company has significantly plummeted recently due to the current market situation and some controversy. Your boss announced some \"groundbreaking\" ideas that could improve the situation.  In his opinion, a charity event and a new \"trendy\" product could solve all the problems in the  world. For this sake, he asks you to fill out this survey, as he wants to know what people from within think first. You would even get some extra money for it."
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "dropdown",
                    "name": "age",
                    "title": "How old are you?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "18-29",
                            "text": "18-29"
                        },
                        {
                            "value": "30-49",
                            "text": "30-49"
                        },
                        {
                            "value": "50-64",
                            "text": "50-64"
                        },
                        {
                            "value": "65+",
                            "text": "65 or older"
                        }
                    ]
                }
            ],
            "title": "Demographics",
            "description": "To better assess the target group, we would like to ask you some basic information. Remember, that all of this is anonymous."
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "gender",
                    "title": "What gender do you most identify with?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "M",
                            "text": "Male"
                        },
                        {
                            "value": "F",
                            "text": "Female"
                        },
                        {
                            "value": "OTHER",
                            "text": "Other"
                        }
                    ]
                }
            ],
            "title": "Demographics",
            "description": "To better assess the target group, we would like to ask you some basic information. Remember, that all of this is anonymous."
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "dropdown",
                    "name": "charity_amount",
                    "title": "How much money would you to contribute yourself, if you could?",
                    "description": "(The charity also offers nice merchandice after a certain amount)",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "0",
                            "text": "0 €"
                        },
                        {
                            "value": "1-10",
                            "text": "1-10 €"
                        },
                        {
                            "value": "10-100",
                            "text": "10-100 €"
                        },
                        {
                            "value": "100-1000",
                            "text": "100-1.000 €"
                        },
                        {
                            "value": "1000+",
                            "text": "More than 1.000 €"
                        }
                    ]
                }
            ],
            "title": "Looking for charity",
            "description": "We plan to partner up with a charity that supports abandoned children in extremely poor regions. For this sake, we want to know how much people actually want to contribute for this good cause in order to find the right charities. Of course, we expect no one to spend any real money right now. This is a solely hypothetical value."
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "text",
                    "name": "charity_opinion",
                    "title": "What is your opinion about using a charity to improve the company image?",
                    "description": "(In case you have no opinion, please enter \"-\")",
                    "isRequired": true
                }
            ],
            "title": "Looking for charity",
            "description": "We plan to partner up with a charity that supports abandoned children in extremely poor regions. For this sake, we want to know how much people actually want to contribute for this good cause in order to find the right charities. Of course, we expect no one to spend any real money right now. This is a solely hypothetical value."
        },
        {
            "name": "page6",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "quality_check",
                    "title": "Who is always right?",
                    "description": "Regardless of your true preference, please select \"The customer\".",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "BOSS",
                            "text": "Your boss"
                        },
                        {
                            "value": "CUSTOMER",
                            "text": "The customer"
                        },
                        {
                            "value": "GUT",
                            "text": "Your gut feeling"
                        }
                    ],
                    "choicesOrder": "random"
                }
            ],
            "title": "Data quality check",
            "description": "Please read this question carefully. To ensure that your responses can be used later, we ask you to answer this question as instructed."
        },
        {
            "name": "page7",
            "elements": [
                {
                "type": "comment",
                "name": "ping_pong_usage",
                "title": "How could we use ping pong balls apart from table tennis?",
                "description": "Please list up to 10 items below. It is fine, if you come up with less.",
                "isRequired": true
                }
            ],
            "title": "Looking for product",
            "description": "Our product team responsible for ping pong balls is currently facing a drought in ideas for new products. The ping pong ball industry is just too saturated. However, they recently saw that our closest competitor is getting record profits with ping pong lamps. Since we want to stand out, we would like to ask you for some creative ideas."
        },
        {
            "name": "page8",
            "elements": [
                {
                    "type": "rating",
                    "name": "old_vs_new",
                    "title": "Please indicate how much you would prefer the new one over the old one.",
                    "description": "(The value 50 means you prefer neither and have other suggestions)",
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 100,
                    "rateStep": 50,
                    "minRateDescription": "(Prefer old one)",
                    "maxRateDescription": "(Prefer new one)"
                }
            ],
            "title": "Looking for restaurant",
            "description": "Thank you for answering all the prior questions. We would like to organize a nice christmas gathering to give something back. As for food, we had Sushi in mind. Now we only need help to decide on which restaurant to choose. The choices are: (1) the 30+ years old family-owned restaurant down the street, and (2) the new Fusion Restaurant that has a more western take with cheese filled Sushi."
        },
        {
            "name": "page9",
            "elements": [
                {
                    "type": "text",
                    "name": "other_suggestion",
                    "visibleIf": "{old_vs_new} = 50",
                    "title": "What else would you suggest?",
                    "isRequired": true
                }
            ],
            "title": "Looking for restaurant",
            "description": "Thank you for answering all the prior questions. We would like to organize a nice christmas gathering to give something back. As for food, we had Sushi in mind. Now we only need help to decide on which restaurant to choose. The choices are: (1) the 30+ years old family-owned restaurant down the street, and (2) the new Fusion Restaurant that has a more western take with cheese filled Sushi."
        }
    ],
    "firstPageIsStarted": true
};

function sendDataToServer(survey, options) {
    options.showDataSaving();
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbzr_7Zp_bUCjfczuYWHqcVU0hu-zNY2hAGKS5rQ3IoSxWuKaaQZUkvMhy6J9N5IdGzBMQ/exec',
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