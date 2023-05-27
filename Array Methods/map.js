const blogPostsFromDatabase = [
    {
        title: 'How to use the map() function',
        category: 'uncategorized'
    },
    {
        title: 'What is JavaScript?',
        category: 'uncategorized'
    },
    {
        title: 'Why are you crazy enough to learn code?',
        category: 'uncategorized'
    }
];

blogPostsFromDatabase.map((arrItem) => {
    arrItem.category = 'Web Development';
    return arrItem;
})
console.log(blogPostsFromDatabase)