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

let createGroups = function()
{

    let groups = 
    {
        groupHtml: [],
        groupNames: []
    };
    

    for (let i = 0; i < allPages.length; i++)
    {
        if (!groups.groupNames.includes(allPages[i].group))
        {

            groups.groupNames.push(allPages[i].group);
            groups.groupHtml.push(createListItemGroup(allPages[i].group, allPages[i].group));
        }
    };

    groups.groupHtml.forEach(
        function(e)
        {
            document.querySelector(`.${homePageReturnLink}List`).append(e);
        },null
    );
};

let appendToGroups = function()
{

    for (let i = 0; i < allPages.length; i++)
    {
        document.querySelector(`.${allPages[i].group}-content`).append(
            createListLink(
                null, 
                allPages[i].className, 
                `return changePage('${allPages[i].className}')`, 
                allPages[i].headerText)
        );
    }

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
    // listDom.append(
    //     createListLink(
    //         null, 
    //         allPages[i].className, 
    //         `return changePage('${allPages[i].className}')`, 
    //         allPages[i].headerText)
    //     );
};

createGroups();
appendToGroups();

// Append info to home page AFTER drop down boxes.
document.querySelector('.homeContent').append(info());