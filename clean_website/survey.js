// Set theme here
Survey.StylesManager.applyTheme("modern");

// Survey logic goes here
var surveyJSON = {
    "title":"Online Survey",
    "logoPosition":"right",
    "completedHtml":"<h4>Thank you for completing the survey. To be renumerated, please use the verification code: <strong>3272E712</strong></h4>",
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
            "description":"******************************************** ********************************************"
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
            "description":"******************************************** ********************************************"
        },
        {
            "name":"page4",
            "elements":[
                {
                    "type":"text",
                    "name":"pizza_filler",
                    "title":"What do you like to eat on your pizza? ",
                    "description":"Please write a short answer.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Task 1",
            "description":"To get started, we would like to ask you some more questions about you."
        },
        {
            "name":"page5",
            "elements":[
                {
                    "type":"text",
                    "name":"travel_filler",
                    "title":"If you could go visit any place in the world, where would you go?",
                    "description":"Please write a short answer.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ]
        },
        {
            "name":"page6",
            "elements":[
                {
                    "type":"text",
                    "name":"future_filler",
                    "title":"Do you think it is better to see the future or change the past?",
                    "description":"Please write a short answer.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ]
        },
        {
            "name":"page7",
            "elements":[
                {
                    "type":"text",
                    "name":"skill_filler",
                    "title":"If you could learn any new skill, what would it be?",
                    "description":"Please write a short answer.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ]
        },
        {
            "name":"page8",
            "elements":[
                {
                    "type":"text",
                    "name":"soup_filler",
                    "title":"If you were at a restaurant and found a fly in your soup, what would you do?",
                    "description":"Please write a short answer.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ]
        },
        {
            "name":"page9",
            "elements":[
                {
                    "type":"expression",
                    "name":"ping_pong_description",
                    "title":"A product team responsible for ping pong balls is currently facing a drought in ideas for new products. On the next page, within the next 3 minutes, please type as many alternative uses as possible for a ping pong ball. Do not use any help because we are curious about your ideas.",
                    "hideNumber":true
                }
            ],
            "readOnly":true,
            "title":"Task 2"
        },
        {
            "name":"page10",
            "elements":[
                {
                    "type":"comment",
                    "name":"ping_pong_answer",
                    "title":"How could we use ping pong balls apart from table tennis?",
                    "hideNumber":true
                }
            ],
            "title":"Task 2",
            "maxTimeToFinish":180
        },
        {
            "name":"page11",
            "elements":[
                {
                    "type":"expression",
                    "name":"words_description",
                    "title":"Well done! On the next page, within 1 minute, please enter 10 words that are as different from each other as possible, in all meanings and uses of the words. The rules are the following: (1) Only single words in English, (2) Only nouns (e.g., things, objects, concepts), (3) No proper nouns (e.g., no specific people or places), (4) No specialised vocabulary (e.g., no technical terms), and (5) Think of the words on your own (e.g., do not just look at objects in your surroundings).",
                    "hideNumber":true
                }
            ],
            "readOnly":true,
            "title":"Task 3"
        },
        {
            "name":"page12",
            "elements":[
                {
                    "type":"comment",
                    "name":"words_answer",
                    "title":"Please enter the words below.",
                    "hideNumber":true
                }
            ],
            "title":"Task 3",
            "description":"******************************************** ********************************************",
            "maxTimeToFinish":60
        },
        {
            "name":"page13",
            "elements":[
                {
                    "type":"boolean",
                    "name":"healthy_voucher_choice",
                    "title":"Which voucher would you prefer?",
                    "hideNumber":true,
                    "isRequired":true,
                    "labelTrue":"Smoothie",
                    "labelFalse":"Fast Food"
                }
            ],
            "title":"Task 4",
            "description":"Imagine a situation when the compensation system for participants does not work. Instead of a monetary remuneration, we offer food vouchers upon completion of the study. These vouchers are either for a fast food shop/restaurant or a fruity smoothie shop in your proximity."
        },
        {
            "name":"page14",
            "elements":[
                {
                    "type":"text",
                    "name":"charity_amount",
                    "title":"How much money would you contribute for charity purposes? ",
                    "description":"Please enter the amount of money in your local currency.",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Task 5",
            "description":"We as an organization plan to partner up with a charity that supports abandoned children in extremely poor regions. For this sake, we would like to know how much people are willing to contribute to choose the right charities."
        },
        {
            "name":"page15",
            "elements":[
                {
                    "type":"image",
                    "name":"crossword_image",
                    "hideNumber":true,
                    "imageLink":"https://drive.google.com/uc?export=view&id=1i7SUznq2SD_R1uaoK2Lky29t2m4cW-DD",
                    "imageHeight":100
                },
                {
                    "type":"text",
                    "name":"crossword_task",
                    "title":"Write down the words you can find in the puzzle within the next 1 minute.",
                    "description":"Words are hidden vertically and horizontally.",
                    "hideNumber":true
                }
            ],
            "title":"Task 6",
            "maxTimeToFinish":65
        },
        {
            "name":"page16",
            "elements":[
                {
                    "type":"text",
                    "name":"study_purpose",
                    "title":"What do you think was the purpose of this online study?",
                    "hideNumber":true,
                    "isRequired":true
                }
            ],
            "title":"Thank you! Almost done!",
            "description":"Finally, we would like to know your impressions of the tasks."
        },
        {
            "name":"page17",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"screen_size",
                    "title":"What is the screen size of the computer/laptop you are using?",
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
            "visible":false,
            "description":"We are curious about the device, with which you were answering the questionnaire."
        },
        {
            "name":"page18",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"tired_from_questionnaire",
                    "title":"I feel tired from interacting with the questionnaire webpage.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Strongly disagree",
                            "text":"Strongly disagree "
                        },
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page19",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"webpage_is_strain",
                    "title":"Having such a webpage in front of me for a while is a strain for me.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page20",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"online_interact_strain",
                    "title":"I feel drained from online interactions involving this webpage.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page21",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"distracted_by_info",
                    "title":"I was often distracted by the excessive amount of information on this webpage.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page22",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"overwhelmed_by_info",
                    "title":"I find that I am overwhelmed by the amount of information that I process on this webpage.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page23",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"blue_clothes",
                    "title":"I like blue clothes.",
                    "description":"Please answer \"Rather disagree\" to show you read questions attentively.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page24",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"problems_due_to_tmi",
                    "title":"I feel some problems with too much information on this webpage.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page25",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"webpage_is_organized",
                    "title":"I feel that information on the webpage is organized and well structured.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page26",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"webpage_is_chaotic",
                    "title":"This webpage often strikes me as chaotic.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page27",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"website_in_disarray",
                    "title":"Information presented on the website is often in disarray.",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        "Strongly disagree",
                        "Rather disagree",
                        "Neither agree nor disagree",
                        "Rather agree",
                        "Strongly agree"
                    ]
                }
            ],
            "title":"Your thoughts on the webpage",
            "description":"Please indicate the extent to which you agree or disagree with the following statements."
        },
        {
            "name":"page28",
            "elements":[
                {
                    "type":"dropdown",
                    "name":"physical_surrounding_appearance",
                    "title":"How would you describe your physical surroundings, i.e., the room you are sitting in right now? ",
                    "hideNumber":true,
                    "isRequired":true,
                    "choices":[
                        {
                            "value":"Definitely messy",
                            "text":"Definitely messy/cluttered"
                        },
                        {
                            "value":"Rather more messy than clean",
                            "text":"Rather more messy/cluttered than clean"
                        },
                        "Neither nor",
                        {
                            "value":"Rather more clean than messy",
                            "text":"Rather more clean than messy/cluttered"
                        },
                        "Definitely clean"
                    ]
                }
            ],
            "title":"Your thoughts"
        },
        {
            "name":"page29",
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
                            "text":"Definitely messy/cluttered"
                        },
                        {
                            "value":"Rather more messy than clean",
                            "text":"Rather more messy/cluttered than clean"
                        },
                        "Neither nor",
                        {
                            "value":"Rather more clean than messy",
                            "text":"Rather more clean than messy/cluttered"
                        },
                        "Definitely clean"
                    ]
                }
            ],
            "title":"Your thoughts"
        },
        {
            "name":"page30",
            "elements":[
                {
                    "type":"text",
                    "name":"feedback",
                    "title":"Your feedback here:",
                    "hideNumber":true
                }
            ],
            "title":"Congratulations!",
            "description":"You have now completed all questionnaires. Now, we reveal the objectives and main hypotheses of the study.We designed the study to test the effects of interacting with messy vs. tidy online environment on decision-making (e.g., creativity, willingness to donate, traditional vs. novel choices, healthy vs. unhealthy food choices). Depending on the experimental condition, you were either assigned to complete the tasks on a messy (colorful, flashy background full of dynamic banners) or on a tidy (white background, no pictures) webpage. If you have further questions or would like to share anything, please use the space below."
        }
    ],
    "showPrevButton":false,
    "showTimerPanel":"top",
    "showTimerPanelMode":"page"
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