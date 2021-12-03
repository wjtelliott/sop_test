/*

    Created by William JT Elliott
    Date: 11-22-2021 @ 19:01
    Modify this file for new page content

    Last page updated: 112521@1116
*/ 


// use allPages for our page array.
// each page will be an obj
let allPages = [];

// null page here to copy/pasta when making new pages.
// Make sure to change this data and also PUSH after object creation.
// let p = 
// {

//     descriptions: [],

//     imagesPath: './resources//',
//     className: '',
//     headerText: '',
//     group: ''
// };

let deletePage = 
{
    descriptions:
    [ // need 9 steps
        `First, you must right click on the order ( The string of letters and numbers on the left underlined in blue )
        and choose 'Order Release'.`,

        `Next, we need to suspend our order. After the order is suspended, right click on the order link again and choose 'Order Maintenance'. NOTE YOUR SKU NUMBER AND LINE NUMBER OF THE SKU TO DELETE.`,

        `Log into Escalate and go into function ISTM. Press F8 to go down a block. Press SHIFT+F2 to highlight the IST Number field. Type in your IST / Order from BXK into this field and press F2 to execute.
        After it loads, press F8 to go down a block. Use the arrow keys to navigate to the correct LINE NUMBER and SKU of your piece to delete.
        <b>NOTE THE DELIVERY DOC# ON THE RIGHT, THAT IS YOUR SO# FOR THE SKU.</b> Replace the number in the Quantity field to a 0 and press F9 to commit.`,

        `Go back into BXK and now click on the underlined line number of the SKU to delete. Click delete and confirm.`,

        `Go back into Escalate and go into function SOM. Username and password 'SLU'. If it does not let you save or commit in SOM, use the username and password that it says can change that SO#.
        Type your SO# into the box, and press F2 to execute into the order. Press F8 to go down a block and then navigate to the correct SKU. Press ENTER to move the cursor to the right, and empty
        the fields 'STORE' & 'LOCATION' as shown below. Press F9 to commit.`,

        ``,

        `Now, go into LOFT and create a new transfer. Site W2, To Site W2. Order date and delivery date as TODAY. Add item, with your SKU. Save the transfer and it should fill.`,

        `Go into BXK and into 'Adjust Inventory'. Type in the SKU and press enter. You should see the SKU that was allocated earlier. Check it, choose Option 'Move', and in the location box choose 'UNKOWN'. Click Move.`,

        `Back into LOFT, void your transfer that filled. Save. Email the destination store the IST number, Line number, SKU, and SO# (if there is one) for the piece removed, and a reason why it was removed.`,
    ],
    imagesPath: './resources/deleteItem/',
    className: 'deleteItemContent',
    headerText: 'Delete Item from a Truck',
    group: 'Misc'
};
//push to array
allPages.push(deletePage);



let pkrPage = 
{ //2 steps. 2 imgs

    descriptions: [

        `
        <b>Before you go into the PKR, make sure that no labels need to be received in BXK for W30W2-TODAY.</b> You can do this by
        going into Receiving -> Reprint labels in BXK. Under Filters, choose unreceived tag type, and for an option add PO PO Manifest.
        In the text box add 'w30w2-*TODAYS DATE*' Example: W30W2-112221 for Nov 22, 2021. If any labels are there, they need to be received.
        After you've reprinted and/or received those labels, type PKR into the main menu of Escalate. You will see this screen, but it
        won't be filled out. Make sure to fill out the form as shown, CHOOSE 'N' ON REPORT UNFILLED LINES POP-UP. Make sure to use the
        correct date. Press F8 to go to the 'Data Correct?' field.`,

        `After you've pressed ENTER on Data Correct, put in a comment, chosen Y on process immediately, and returned to the main menu
        of escalate, go into RPTM. Click the 'V' on your PKR report and open the window that pops up. If everything is received correctly,
        you will see a report similiar to the one below. If anything else is in the report, either wait a few minutes and try again, or you
        may have to manually finalize the ISTs that didn't correctly finalize automatically.`

    ],

    imagesPath: './resources/pkr/',
    className: 'pkrContent',
    headerText: 'PKR Report',
    group: 'Escalate-Reports'
};
allPages.push(pkrPage);



let dtcsrPage = 
{//4 steps 4 imgs

    descriptions: [
        `Before you are able to run the DTCSR report, make sure that there are no ISTs that need to be finalized in BXK for outbound today.
        Once that is finished, open Escalate and type WHSCR to open that folder.`,

        `You will see the following screen. Type DTCSR to go into that report.`,

        `Enter the following fields as shown below. Make sure to use the truck date of the day that deliveries will ARRIVE. If it is
        Nov 9, 2021, you will enter 111021. If it's Friday, Nov 5th, 2021, you will enter Monday's date: 110821.
        Press F8 to go to the Data Correct field.`,

        `After you press Enter and enter in a comment, choose Y on process immediately, and get back to the escalate main menu, go into
        RPTM to view your report. It should look as shown below. If there are any other stores besides W1 or W3, you will have to double
        check in BXK that they are finalized and showing delivered. If they are and still show in this report, you will have finalize
        each IST that isn't finalized for that truck in TDM, and run the report again. Example: M7 will be finalized to M7-M7TRK.`,
    ],

    imagesPath: './resources/dtcsr/',
    className: 'dtcsrContent',
    headerText: 'DTCSR Report',
    group: 'Escalate-Reports'
};
allPages.push(dtcsrPage);

let tsW1Page = 
{
    //no desc on this page. All pics from docx.
    descriptions: [`Below is the infomation on creating & finalizing TS0xx ISTs as well as how to handle Overage and Shorts, from Mike Wettstein.`,``,``,``,``,``,``,``],

    imagesPath: './resources/tdmw1/',
    className: 'tsW1Content',
    headerText: 'Finalize TS and W1 Info',
    group: 'Misc'
};
allPages.push(tsW1Page);



let shortItemPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'shortItemContent',
    headerText: 'Short Item *',
    group: 'Misc'
};
allPages.push(shortItemPage);

let finalizeAnISTPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'finalizeISTContent',
    headerText: 'Finalize an IST *',
    group: 'Escalate'
};
allPages.push(finalizeAnISTPage);

let bolGenerationPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'bolGenerationContent',
    headerText: 'BOL Generation *',
    group: 'BXK'
};
allPages.push(bolGenerationPage);

let assignWorkPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'assignWorkToUserContent',
    headerText: 'Assign Work to a User *',
    group: 'BXK'
};
allPages.push(assignWorkPage);

let createIstPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'createISTContent',
    headerText: 'Create an IST *',
    group: 'LOFT'
};
allPages.push(createIstPage);

let addonPolicyPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'addonPolicyContent',
    headerText: 'Addons / Addon Policy *',
    group: 'LOFT'
};
allPages.push(addonPolicyPage);

let tdmBasicsPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'tdmBasicContent',
    headerText: 'Using TDM to finalize trucks *',
    group: 'Escalate'
};
allPages.push(tdmBasicsPage);

let trackingLostPcsPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'trackingLostPcsContent',
    headerText: 'Tracking Down Lost Pieces *',
    group: 'Misc'
};
allPages.push(trackingLostPcsPage);

let discrepancySheetPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'discrepancySheetContent',
    headerText: 'Discrepancy Sheet Info *',
    group: 'Misc'
};
allPages.push(discrepancySheetPage);

let printTagsFromBOLPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'printBolTagsContent',
    headerText: 'Print Tags from a BOL *',
    group: 'BXK'
};
allPages.push(printTagsFromBOLPage);




//-------------------------------------Keep new pages above this line---------------------------------------------------

let infoPage =
{
    //no img, just 1 desc
    descriptions: [`Welcome to the Standard Operating Procedures module.<br><br> Here will you find additional infomation on how to complete certain jobs / tasks related to each above topic.
    If a topic or module is confusing, needs rework or additions, or to add a new topic to this page: contact a supervisor.`
    ],

    imagesPath: './resources/null/',
    className: 'infoPage',
    headerText: 'Coming soon to this list / Additional Info',
    group: 'Additional-Info'
};
//allPages.push(infoPage);


let progHelpPage =
{
    //no img, just 1 desc
    descriptions: [`This page is not yet complete. More info will be here on how to manage / fix / add / replace information to this SOP module.`
    ],

    imagesPath: './resources/null/',
    className: 'progHelpPage',
    headerText: 'Readme',
    group: 'Additional-Info'
};
allPages.push(progHelpPage);