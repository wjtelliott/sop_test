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

    descriptions: [
        
        `First make sure the item you intent to short has at least one marked as Available in LOFT.
        If there is not any available in LOFT as available, you will need to un-fill one of the Reserved pieces from its attached SO in SOM on ERS.`,

        `Next go into Inventory > Adjust Inventory`,

        `Type in your SKU or Tag# in the Find bar and press ENTER. Find the tag of the item you're looking to short out.`,

        `Check the box next to the item you wish to short out, Choose option Delete -> WMS -> with the memo of reading short. Click delete and confirm.
        <b>If you've made an IST W2 to W2 to fill an item to make it available, remember to go back and void that IST.</b>`

],

    imagesPath: './resources/shortItem/',
    className: 'shortItemContent',
    headerText: 'Short Item',
    group: 'Misc'
};
allPages.push(shortItemPage);

let finalizeAnISTPage = 
{

    descriptions: [
        
        `To finalize an IST in loft, go to Shipments - Transfers - Tranfers`,

        `Type in your ist # into the transfer ID field, or fill out Site / To Site. Check Open transfers, and change the delivery date if needed. Click on the IST# to open it after you've searched.`,

        `Click on the status field and change it to Closed. Save the transfer.`
    
    ],

    imagesPath: './resources/finalizeLoft/',
    className: 'finalizeISTContentLoft',
    headerText: 'Finalize an IST',
    group: 'LOFT'
};
allPages.push(finalizeAnISTPage);

let finalizeAnISTPage = 
{

    descriptions: [
        
        `To finalize an IST, open ERS and open ISTM.`,

        `Fill out the top of ISTM as shown, change the date to your finalizing date, and change the store / location to the store and location that you are finalizing the IST TO. This example finalizing an IST TO W2.`,

        `Press F8, and type in your IST to finalize. Press F2 to Open the IST. Press F9 to commit, and F12 to back out.`
    
    ],

    imagesPath: './resources/finalizeIST/',
    className: 'finalizeISTContent',
    headerText: 'Finalize an IST',
    group: 'Escalate'
};
allPages.push(finalizeAnISTPage);

let bolGenerationPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'bolGenerationContent',
    headerText: 'BOL Generation *',
    group: 'Office'
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

let allocateAnOrder = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'allocateAnOrderContent',
    headerText: 'Allocate an Order *',
    group: 'BXK'
};
allPages.push(allocateAnOrder);

let createIstPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'createISTContent',
    headerText: 'Create an IST *',
    group: 'LOFT'
};
allPages.push(createIstPage);

let reopenBXKPO = 
{

    descriptions: [
        'Open BXK and go to Maintenance -> PO Maintenance -> PO Maintenance',
        'Goto Filters and type in your PO as an option',
        'After you\'ve clicked submit, click on the underlined 1 to the left of the PO',
        'Click on the PO # at the top left',
        'In this example, this PO is still open. When the PO is set to closed status, a button will appear next to the others highlighted below that is named Activate. Click on the Activate button and then confirm reopen the PO.'
    ],

    imagesPath: './resources/reopen/',
    className: 'reopenPOBXK',
    headerText: 'Reopen a closed PO',
    group: 'BXK'
};
allPages.push(reopenBXKPO);

let addonPolicyPage = 
{

    descriptions:
    [
        `Addon policy: If a piece is two-to-a-box, and both labels go to separate locations, the location that is picked first gets both of the labels. If you have to remove a SKU from a truck, remember to email the store that the reason was due to our addon policy.

 

        To create an addon, log into LOFT and go to your Shipments tab. Click on new Transfer.`,
        `Change the Site and To Site locations to the correct location and destination. Change the delivery date to the correct date. Add the SKUs of the items you wish to add-on to the truck file. Make sure Shipping is blank and click Save.`,
        `If a line doesn't fill (marked yellow), click on fill eligibility and change the fill date to 6 months ago. Enter your username and password again and save the transfer again. If it still doesn’t fill, you will have to unfill an SO that is reserving that SKU before saving the transfer.`,
        `Once the transfer is filled and saved, copy your transfer ID and click on truck routes.`,
        `Type in 'w20' for the truck field, and the delivery date. Click search to see the truck routes of that date.`,
        `Click on the truck route you're going to add a SKU to. Click on the TRANSFERS tab and the Transfer ID field will pop up. Paste your transfer ID in that field and click search. Click and drag the transfer on the left to the truck route on the right. Click on Save truck route at the top right.`,
        `Once you've added that transfer to the truck route & saved the route, you will be able to allocate that piece in BXK.`,
    ],

    imagesPath: './resources/addon/',
    className: 'addonPolicyContent',
    headerText: 'Addons / Addon Policy',
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
    group: 'Office'
};
allPages.push(discrepancySheetPage);

let printTagsFromBOLPage = 
{

    descriptions: ['This page is a placeholder, and not yet finished.'],

    imagesPath: './resources/null/',
    className: 'printBolTagsContent',
    headerText: 'Print Tags from a BOL *',
    group: 'Office'
};
allPages.push(printTagsFromBOLPage);


let unfillSalesOrderPage =
{

    descriptions:
    [

        `To unfill a sales order, first write down your SO#. If it has an A,B,C, etc at the end, it is a split. Write that down, but it is not part of the SO#. After you've gotten your SO#, open ERS and go into SOM.`,

        `Company Code is SLU, password SLU for corporate store. If you attempt to make changes to an SO# for a franchise store, it will tell you that 'user MIF' or etc only is allowed to make changes to this order. 
        If that happens, use that three letter user for the company code AND password in SOM. You may have to back out and go back into SOM to do this.`,

        `Log in again using your ERS login. Press F8 to highlight SO#, and type in your SO. Press F2 to execute and open that SO#.`,

        `If you have to go to a split of the SO#, use the down and up arrows to navigate to the correct split, and then press F8 to go to the lines of the SO#.`,

        `In this example, the store and location of the SKU 7050052 in Ln12 of this SO# is W2-W2WHS, which is filled from W2.`,

        `To unfill this SO#, Press F8 to go to the SO lines, and use the arrow keys to navigate to the correct line / sku. Press ENTER until your cursor is on the Store (W2) that you wish to unfill.
         Press backspace so that it is now blank, and press ENTER to make the location also blank. Press F9 to commit and save.
          <b>Make sure to do any changes to that inventory in a timely manner after unfilling this SO. It will re-fill that SO after a short period, or if any other changes are made.</b>`

    ],

    imagesPath: './resources/unfillSO/',
    className: 'unfillSalesOrder',
    headerText: 'Unfill an SO',
    group: 'Escalate'

};
allPages.push(unfillSalesOrderPage);


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