//  GENERAL GUIDELINE TO USAGE:

//  This is a script that allows us to store the answers from respondents collected from SurveyJS
//  We get data from POST requests from SurveyJS and insert them as rows in our sheet
//  Step 1: Create a spreadsheet with the columns: datetime, raw_data
//  Step 2: Create a code file (Tools > Script editor)
//  Step 3: Paste the code below and change variables if necessary
//  Step 4: Perform: Run > Setup to prepare your script
//  Step 5: Perform: Deploy > New deployment > Web app
//  Step 6: Make app public (Execute as Me & Anyone has access)
//  Step 7: Copy the web app URL and paste it under the sendDataToServer() function in the survey.js file
//  Step 8: Test whether you can get the data correctly

//  ABOUT THIS SCRIPT:

//  Enter sheet name where results will be collected
var SHEET_NAME = "YOUR_SHEET_NAME";
var CHOICES_SHEET_NAME = "Choices"; // You can use this later to fetch remote choices
var SCRIPT_PROP = PropertiesService.getScriptProperties(); // Initiate new property service

function doPost(e){
	return handleResponse(e);
}

function handleResponse(e) {
	// The LockService allows you to have only one invocation of the script run at a time
	// Why? Check: http://googleappsdeveloper.blogspot.co.uk/2011/10/concurrency-and-google-apps-script.html
	var lock = LockService.getPublicLock(); //Public lock locks for any invocation of script.
	lock.waitLock(30000);
	try {
		// Alternatively, you can hard code the spreadsheet name below
		// eg. SpreadsheetApp.openById("1AcsuboS3xxk0kj02ACcE_j4ASb8GrxyZscTU5IM-wqc")
		var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
		var sheet = doc.getSheetByName(SHEET_NAME);
		var data = JSON.parse(e.postData.contents);
		var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
		var nextRow = sheet.getLastRow()+1; // Get next row
		var row = [];
		for (i in headers){
			//  Get the exact timestamps for when the data was collected
			if (headers[i] == "datetime"){
				row.push(new Date());
			}
			//  Get the JSON data and insert it into the column raw_data
			else if (headers[i] == "raw_data"){
				row.push(JSON.stringify(data));
			}
			else {
				//  To support multiple choice question (checkboxes)
				if(Array.isArray(data[headers[i]])) {
					row.push(data[headers[i]].join('|'));
				}else {
					row.push(data[headers[i]]);
				}
				//  TODO: Support other types of questions
			}
		}
		sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
		//  Return JSON success results
		return ContentService
			.createTextOutput(JSON.stringify({"status":"success", "row": nextRow}))
			.setMimeType(ContentService.MimeType.JSON);
	} catch (e){
		//  In case there is an error...
		return ContentService
			.createTextOutput(JSON.stringify({"status":"error", "error": e}))
			.setMimeType(ContentService.MimeType.JSON);
	} finally {
		//  Release the lock that we created earlier
		lock.releaseLock();
	}
}

function setup() {
	var doc = SpreadsheetApp.getActiveSpreadsheet();
	SCRIPT_PROP.setProperty("key", doc.getId());
}