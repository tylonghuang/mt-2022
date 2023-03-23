# MT-2022

This repository contains the code of the master thesis from Long Hoang Nguyen. In the course of the thesis, we explored the effects of a tidy vs. messy online environment on human behavior and choices. This exploration included an online experiment with two different prototypes for a tidy and messy website. Both created prototypes use the same frontend and backend technologies, with the difference lying in the CSS code.


## Tools & Technologies

- Frontend: *[SurveyJS](https://surveyjs.io/)* and *[Bootstrap](https://getbootstrap.com/)*
- Backend: *[Google Sheets API](https://developers.google.com/sheets/api/guides/concepts)* and *[Google Apps Script](https://developers.google.com/apps-script)*

## Software Architecture

Image will be inserted later

## Repository Content

- `backend_scripts`: Contains a Google Apps script that allows for communication between the Frontend and Backend.
- `clean_website`: Contains the code for the tidy website interface.
- `messy_website`: Contains the code for the messy website interface.
- `welcome_page`: Contains the code for a welcome page that redirects the user to either experimental condition randomly.

## Setup and Usage
In case you are interested in using this code, you should:
1. `Git clone` this repository.
2. Open the `index.html` file of the `welcome_page` and redirect to either the `clean_website` or `messy_website`.
3. Check if there are any issues with either website (e.g., Displacement of images).
4. Read the comments in the `getData.gs` file in the folder `backend_scripts` and set up your Google Sheets API access.
5. Try to collect data using either interface.

## Further Notes

To objectively determine whether these developed prototypes are tidy or messy, we included metrics of *Visual Clutter* - in particular *Feature Congestion* and *Subband Entropy*. As the setup can be inconvenient on Windows machines, we set up a *Google Colab* notebook that can be accessed *[here](https://colab.research.google.com/drive/17eIK47NR6Y4X3HjZr6i_EsARwpJTYuQh?usp=sharing)*. Keep in mind, that you probably have to configure your own Colab environment before using the code.

## License

Feel free to use the contents in consideration of *[Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/)*. In case there are any further inquiries, you can also contact the author.
