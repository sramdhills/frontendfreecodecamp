const externalData = [
    {
        title: '  Snowden'
    },
    {
        title: '  Fight Club   '
    }
];

for (let i = 0; i < externalData.length; i++){
    const currentTitle = externalData[i].title

    externalData[i].title = currentTitle.trim()

}
console.log(externalData);