/*

    Created by William JT Elliott
    Date: 11-22-2021 @ 20:23
    Do not modify

*/


let changePage = function(pageClassname)
{

    // hide ALL pages
    document.querySelectorAll('.page').forEach
    (
        function(e)
        {
            e.style.display = 'none';
        }, null
    );

    // show only page that called this
    document.querySelector(`.${pageClassname}`).style.display = 'block';

    // I almost used a switch here instead of the foreach. Yikes!
};



let listDom = document.querySelector('.homeContentList');

// iterate through pages and add to body, including list link
for (let i = 0; i < allPages.length; i++)
{
    document.body.append(
        createPage(
            allPages[i].className, 
            allPages[i].headerText, 
            allPages[i].imagesPath, 
            allPages[i].descriptions)
        );
    listDom.append(
        createListLink(
            null, 
            allPages[i].className, 
            `return changePage('${allPages[i].className}')`, 
            allPages[i].headerText)
        );
};