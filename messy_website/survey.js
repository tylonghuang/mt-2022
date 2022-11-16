// Set theme here
Survey.StylesManager.applyTheme("modern");

// Survey logic goes here
var surveyJSON = {
    "title":"Online Survey",
    "logoPosition":"right",
    "pages":[
        {
            "name":"page1",
            "elements":[
                {
                    "type":"text",
                    "name":"prolific_ID",
                    "title":"Please enter your ID below.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Renumeration",
            "description":"Please enter your Prolific ID here in order to get paid after successfully completing the study."
        },
        {
            "name":"page2",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"age",
                    "title":"How old are you?",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "18-29",
                        "30-49",
                        "50-64",
                        {
                            "value":"65+",
                            "text":"65 or older"
                        }
                    ]
                }
            ],
            "title":"Demographics",
            "description":"To better assess the target group, we would like to ask you some basic information. Remember, that all of this is anonymous."
        },
        {
            "name":"page3",
            "elements":[
                {
                    "type":"radiogroup",
                    "name":"gender",
                    "title":"What gender do you most identify with?",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"M",
                            "text":"Male"
                        },
                        {
                            "value":"F",
                            "text":"Female"
                        },
                        {
                            "value":"OTHER",
                            "text":"Other"
                        }
                    ]
                }
            ],
            "title":"Demographics",
            "description":"To better assess the target group, we would like to ask you some basic information. Remember, that all of this is anonymous."
        },
        {
            "name":"page4",
            "elements":[
                {
                    "type":"text",
                    "name":"pizza_filler",
                    "title":"What do you like to eat on your pizza? ",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Introductory Questions",
            "description":"To get started, we would like to ask you some more questions about you."
        },
        {
            "name":"page5",
            "elements":[
                {
                    "type":"text",
                    "name":"travel_filler",
                    "title":"If you could go visit any place in the world, where would you go?",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Introductory Questions",
            "description":"To get started, we would like to ask you some more questions about you."
        },
        {
            "name":"page6",
            "elements":[
                {
                    "type":"text",
                    "name":"future_filler",
                    "title":"Do you think it is better to see the future or change the past?",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Introductory Questions",
            "description":"To get started, we would like to ask you some more questions about you."
        },
        {
            "name":"page7",
            "elements":[
                {
                    "type":"text",
                    "name":"skill_filler",
                    "title":"If you could learn any skill, what would it be?",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Introductory Questions",
            "description":"To get started, we would like to ask you some more questions about you."
        },
        {
            "name":"page8",
            "elements":[
                {
                    "type":"text",
                    "name":"soup_filler",
                    "title":"If you were at a restaurant and found a fly in your soup, what would you do?",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Introductory Questions",
            "description":"To get started, we would like to ask you some more questions about you."
        },
        {
            "name":"page9",
            "elements":[
                {
                    "type":"boolean",
                    "name":"choose_healthy",
                    "title":"Which voucher would you prefer?",
                    "hideNumber":true,
                    "isRequired":true,
                    "labelTrue":"Smoothie",
                    "labelFalse":"Fast Food"
                }
            ],
            "title":"Task 1 - Voucher",
            "description":"Imagine a situation when the compensation system for participants does not work. Instead of a monetary remuneration, we offer food vouchers upon completion of the study. These vouchers are either for a fast food shop/restaurant or a fruity smoothie shop in your proximity.  "
        },
        {
            "name":"page10",
            "elements":[
                {
                    "type":"expression",
                    "name":"ping_pong_description",
                    "title":"A product team responsible for ping pong balls is currently facing a drought in ideas for new products. On the next page, within the next 3 minutes, please type as many uses as possible for a ping pong ball. Do not use any help because we are curious about your ideas.",
                    "hideNumber":true
                }
            ],
            "readOnly":true,
            "title":"Task 2 - Ping Pong"
        },
        {
            "name":"page11",
            "elements":[
                {
                    "type":"comment",
                    "name":"ping_pong_answer",
                    "title":"How could we use ping pong balls apart from table tennis?",
                    "description":"When entering, please separate your ideas with a semicolon, e.g., Idea A; B; C.",
                    "hideNumber":true
                }
            ],
            "title":"Task 2 - Ping Pong",
            "maxTimeToFinish":180
        },
        {
            "name":"page12",
            "elements":[
                {
                    "type":"expression",
                    "name":"words_description",
                    "title":"Well done! On the next page, within 1 minute, please enter 10 words that are as different from each other as possible, in all meanings and uses of the words. The rules are: \n- Only single words in English\n- Only nouns (e.g., things, objects, concepts)\n- No proper nouns (e.g., no specific people or places)\n- No specialised vocabulary (e.g., no technical terms).\n- Think of the words on your own (e.g., do not just look at objects in your surroundings).",
                    "hideNumber":true
                }
            ],
            "readOnly":true,
            "title":"Task 3 - Words"
        },
        {
            "name":"page13",
            "elements":[
                {
                    "type":"comment",
                    "name":"words_answer",
                    "title":"Please enter the words below.",
                    "description":"When entering, please separate your ideas with a semicolon, e.g., Word; droW; Word.",
                    "hideNumber":true
                }
            ],
            "title":"Task 3 - Words",
            "maxTimeToFinish":60
        },
        {
            "name":"page14",
            "elements":[
                {
                    "type":"text",
                    "name":"charity_amount",
                    "title":"How much money would you contribute? ",
                    "description":"Please enter the number in your local currency.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Task 4 - Charity",
            "description":"We as an organization plan to partner up with a charity that supports abandoned children in extremely poor regions. For this sake, we want to know how much people actually want to contribute for this good cause in order to choose the right charities"
        },
        {
            "name":"page15",
            "elements":[
                {
                    "type":"rating",
                    "name":"prefer_new_restaurant",
                    "title":"Please indicate how much you would prefer the new one over the old one. ",
                    "description":"(The value 50 means you prefer neither and have other ideas)",
                    "hideNumber":true,
                    "isRequired":true,
                    "rateMin":0,
                    "rateMax":100,
                    "rateStep":50,
                    "minRateDescription":"(Prefer old one)",
                    "maxRateDescription":"(Prefer new one)"
                }
            ],
            "title":"Task 5 - Restaurant",
            "description":"Christmas is approaching soon, so imagine you are invited to a nice Christmas gathering. As for food, the organizers had Sushi in mind. Now they only need help to decide on which restaurant to choose. The choices are: (1) the 30+ years old family-owned restaurant down the street, and (2) the new Fusion restaurant with a more western take (e.g. cheese-filled Sushi)."
        },
        {
            "name":"page16",
            "elements":[
                {
                    "type":"text",
                    "name":"study_purpose",
                    "title":"What do you think was the purpose of the study?",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Your thoughts",
            "description":"Thank you! Almost done! Finally, we would like to ask your impressions of the tasks."
        },
        {
            "name":"page17",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"screen_size",
                    "title":"What is the screen size of the device you are using?",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"0-10",
                            "text":"10” or smaller"
                        },
                        {
                            "value":"11-12.9",
                            "text":"11”-12.9”"
                        },
                        {
                            "value":"13-14",
                            "text":"13”-14”"
                        },
                        {
                            "value":"15-17",
                            "text":"15”-17”"
                        },
                        {
                            "value":"18-22",
                            "text":"18”-22”"
                        },
                        {
                            "value":"23-27",
                            "text":"23”-27”"
                        },
                        {
                            "value":"27+",
                            "text":"Bigger than 27”"
                        }
                    ]
                }
            ],
            "title":"Your thoughts",
            "description":"Thank you! Almost done! Finally, we would like to ask your impressions of the tasks. "
        },
        {
            "name":"page18",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"tired_from_layout",
                    "title":"I feel tired from interacting with the layout of this questionnaire.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Strongly disagree",
                            "text":"Strongly disagree "
                        },
                        {
                            "value":"Rather disagree",
                            "text":"Rather disagree"
                        },
                        {
                            "value":"Neither agree nor disagree",
                            "text":"Neither agree nor disagree"
                        },
                        {
                            "value":"Rather agree",
                            "text":"Rather agree"
                        },
                        {
                            "value":"Strongly agree",
                            "text":"Strongly agree"
                        }
                    ]
                }
            ],
            "title":"Your thoughts",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page19",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"layout_is_strain",
                    "title":"Having such a layout around me all day is a strain for me.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Strongly disagree",
                            "text":"Strongly disagree"
                        },
                        {
                            "value":"Rather disagree",
                            "text":"Rather disagree"
                        },
                        {
                            "value":"Neither agree nor disagree",
                            "text":"Neither agree nor disagree"
                        },
                        {
                            "value":"Rather agree",
                            "text":"Rather agree"
                        },
                        {
                            "value":"Strongly agree",
                            "text":"Strongly agree"
                        }
                    ]
                }
            ],
            "title":"Your thoughts",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page20",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"online_interact_strain",
                    "title":"I feel drained from online interactions involving this layout.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Strongly disagree",
                            "text":"Strongly disagree"
                        },
                        {
                            "value":"Rather disagree",
                            "text":"Rather disagree"
                        },
                        {
                            "value":"Neither agree nor disagree",
                            "text":"Neither agree nor disagree"
                        },
                        {
                            "value":"Rather agree",
                            "text":"Rather agree"
                        },
                        {
                            "value":"Strongly agree",
                            "text":"Strongly agree"
                        }
                    ]
                }
            ],
            "title":"Your thoughts",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page21",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"webpage_appearance",
                    "title":"How do you like the background or the visual appearance of the webpage on which the questions and tasks were presented to you?",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Definitely messy",
                            "text":"Definitely messy"
                        },
                        {
                            "value":"Rather more messy than clean",
                            "text":"Rather more messy than clean"
                        },
                        {
                            "value":"Neither nor",
                            "text":"Neither nor"
                        },
                        {
                            "value":"Rather more clean than messy",
                            "text":"Rather more clean than messy"
                        },
                        {
                            "value":"Definitely clean",
                            "text":"Definitely clean"
                        }
                    ]
                }
            ],
            "title":"Your thoughts"
        },
        {
            "name":"page22",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"surrounding_appearance",
                    "title":"How would you describe your physical surroundings, i.e., the room you are sitting in right now? ",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Definitely messy",
                            "text":"Definitely messy"
                        },
                        {
                            "value":"Rather more messy than clean",
                            "text":"Rather more messy than clean"
                        },
                        {
                            "value":"Neither nor",
                            "text":"Neither nor"
                        },
                        {
                            "value":"Rather more clean than messy",
                            "text":"Rather more clean than messy"
                        },
                        {
                            "value":"Definitely clean",
                            "text":"Definitely clean"
                        }
                    ]
                }
            ],
            "title":"Your thoughts"
        },
        {
            "name":"page23",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"desktop_appearance",
                    "title":"How would you describe your desktop, i.e., the working area of a computer screen?",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Definitely messy",
                            "text":"Definitely messy"
                        },
                        {
                            "value":"Rather more messy than clean",
                            "text":"Rather more messy than clean"
                        },
                        {
                            "value":"Neither nor",
                            "text":"Neither nor"
                        },
                        {
                            "value":"Rather more clean than messy",
                            "text":"Rather more clean than messy"
                        },
                        {
                            "value":"Definitely clean",
                            "text":"Definitely clean"
                        }
                    ]
                }
            ],
            "title":"Your thoughts"
        },
        {
            "name":"page24",
            "elements":[
                {
                    "type":"text",
                    "name":"feedback",
                    "title":"Your feedback here:",
                    "hideNumber":true
                }
            ],
            "title":"Congratulations!",
            "description":"You have now completed all questionnaires. Now, we reveal the objectives and main hypotheses of the study.\n\nWe designed the study to test the effects of interacting with messy vs. tidy online environment on decision-making (e.g., creativity, willingness to donate, traditional vs. novel choices, healthy vs. unhealthy food choices). Depending on the experimental condition, you were either assigned to complete the tasks in a messy (colorful, flashy background full of dynamic banners) or in a tidy (white background, no pictures) environment. If you have further questions or would like to share anything, please use the space below."
        },
        {
            "name":"page25",
            "elements":[
                {
                    "type":"expression",
                    "name":"renumeraton",
                    "title":"Dear participant, \nThank you for sharing your opinion with us! To prove that you have successfully completed the survey, please make use of your verification code: 3272E712. Please copy it to Prolific and then finish the survey.",
                    "hideNumber":true
                }
            ],
            "readOnly":true,
            "title":"Congratulations!"
        }
    ],
    "showTimerPanel":"top",
    "showTimerPanelMode":"page"
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