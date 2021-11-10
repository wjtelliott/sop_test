let changePage = function(pageNumber)
{
    switch (pageNumber)
    {
        default:
        case 0:
            document.querySelector('.homeContent').style.display = 'block';
            document.querySelector('.deleteItemContent').style.display = 'none';
            break;
        case 1:
            document.querySelector('.deleteItemContent').style.display = 'block';
            document.querySelector('.homeContent').style.display = 'none';
            break;
    }
};


let createDeletePage = function()
{

    let images = [];
    let paragraphs = [];

    let descriptions =
    [ // need 9 steps
        `First, you must right click on the order ( The string of letters and numbers on the left underlined in blue )
        and choose 'Order Release'.`,

        `Next, we need to suspend our order. After the order is suspended, right click on the order link again and choose 'Order Maintenance'. NOTE YOUR SKU NUMBER AND LINE NUMBER OF THE SKU TO DELETE.`,

        `Log into Escalate and go into function ISTM. Press F8 to go down a block. Press SHIFT+F2 to highlight the IST Number field. Type in your IST / Order from BXK into this field and press F2 to execute.
        After it loads, press F8 to go down a block. Use the arrow keys to navigate to the correct LINE NUMBER and SKU of your piece to delete.
        NOTE THE DELIVERY DOC# ON THE RIGHT, THAT IS YOUR SO# FOR THE SKU. Replace the number in the Quantity field to a 0 and press F9 to commit.`,

        `Go back into BXK and now click on the underlined line number of the SKU to delete. Click delete and confirm.`,

        `Go back into Escalate and go into function SOM. Username and password 'SLU'. If it does not let you save or commit in SOM, use the username and password that it says can change that SO#.
        Type your SO# into the box, and press F2 to execute into the order. Press F8 to go down a block and then navigate to the correct SKU. Press ENTER to move the cursor to the right, and empty
        the fields 'STORE' & 'LOCATION' as shown below. Press F9 to commit.`,

        ``,

        `Now, go into LOFT and create a new transfer. Site W2, To Site W2. Order date and delivery date as TODAY. Add item, with your SKU. Save the transfer and it should fill.`,

        `Go into BXK and into 'Adjust Inventory'. Type in the SKU and press enter. You should see the SKU that was allocated earlier. Check it, choose Option 'Move', and in the location box choose 'UNKOWN'. Click Move.`,

        `Back into LOFT, void your transfer that filled. Save. Email the destination store the IST number, Line number, SKU, and SO# (if there is one) for the piece removed, and a reason why it was removed.`,
    ];

    let returnLink = document.createElement('a');
    returnLink.textContent = 'Return to SOP';
    returnLink.setAttribute('href','#');
    returnLink.setAttribute('onclick', 'return changePage(0)');
    returnLink.style.fontSize = '24px';

    let header = document.createElement('h2');
    header.textContent = 'Delete Item';

    let steps = 9;

    for (let i = 1; i <= steps; i++)
    {
        let newImage = document.createElement('img');
        newImage.setAttribute('src', `./resources/deleteItem/step${i}.jpg`);

        images.push(newImage);


        let newPara = document.createElement('p');
        newPara.textContent = descriptions[i - 1];
        paragraphs.push(newPara);
    }

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'deleteItemContent');
    newDiv.style.display = 'none';

    newDiv.append(returnLink);
    newDiv.append(document.createElement('br'));

    for (let i = 0; i < images.length; i++)
    {
        newDiv.append(paragraphs[i]);
        newDiv.append(document.createElement('br'));
        newDiv.append(images[i]);
        newDiv.append(document.createElement('br'));
        newDiv.append(document.createElement('hr'));
        newDiv.append(document.createElement('br'));
    }

    document.body.append(newDiv);

};

createDeletePage();