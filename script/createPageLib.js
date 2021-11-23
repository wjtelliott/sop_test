/*

    Created by William JT Elliott
    Date: 11-22-2021 @ 20:10
    Do not modify

*/


const homePageReturnLink = 'homeContent';


let createReturnLink = function()
{
    let returnLink = document.createElement('a');
    returnLink.textContent = 'Return to SOP';
    returnLink.setAttribute('href',`#${homePageReturnLink}`);
    returnLink.setAttribute('onclick', `return changePage('${homePageReturnLink}')`);
    returnLink.style.fontSize = '24px';
    return returnLink;
};

let createHeaderText = function(text)
{
    let header = document.createElement('h2');
    header.textContent = text;
    return header;
};


let createPage = function(className, headerText, imagePaths, descriptions)
{
    // Create the Div to contain this page
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', `page ${className}`);
    newDiv.style.display = 'none';

    newDiv.append(createReturnLink());
    newDiv.append(createHeaderText(headerText));

    // Add text, then image, text img repeat
    for (let i = 0; i < descriptions.length; i++)
    {
        let newPara = document.createElement('p');
        newPara.textContent = descriptions[i];
        newDiv.append(newPara);

        newDiv.append(document.createElement('br'));
        let newImage = document.createElement('img');
        newImage.setAttribute('src', `${imagePaths}step${i}.JPG`);
        if (!(newImage == null))
            newDiv.append(newImage);    

        //  horz line & spacing for readability of user
        newDiv.append(document.createElement('br'));
        newDiv.append(document.createElement('hr'));
        newDiv.append(document.createElement('br'));

    }

    return newDiv;

};

// example of the list link we wish to replicate
// <li style="font-size: 24px;"><a href='#deleteItemContent' onclick="return changePage('.deleteItemContent')">Delete Item</a></li>
let createListLink = function(styleText, refText, onClickText, innerHtmlText)
{
    let newListLink = document.createElement('a');
    newListLink.textContent = innerHtmlText;

    // TODO: obsolete. using style.css
    if (styleText != null)
        newListLink.setAttribute('style', styleText);

    newListLink.setAttribute('href', `#${refText}`);
    newListLink.setAttribute('onclick', onClickText);

    // This needs to return as a DOM list object wrapping our content here
    return wrapLink(newListLink);
};

let wrapLink = function(link)
{
    let wrap = document.createElement('li');
    wrap.append(link);
    return wrap;
}



// back to top btn functions
// Do functions work better in JS with or without OOP style? oh well.. these will be static funcs
let autoScroll = null;
window.onscroll = function() { scrollCheck(); };

function scrollCheck()
{
    if (autoScroll != null)
        autoScroll.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none';
    else autoScroll = document.querySelector('.autoScroller');
};

function autoScrollToTop()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}