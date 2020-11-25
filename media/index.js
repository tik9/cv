
linksblog = {
    'Share Aliases across the terminal environments of Linux and Windows': 'custom',
    'Creating Documents using Markdown, Javascript and Html (for the automation of job applications)': 'cv',
    'Answers on Pluralsight Skill Test': 'pluralsight-skill-test',
    'A Python app to get text from images and prepare them': 'ml'
}

const list = document.createElement('ol')
document.getElementById('linksblog').appendChild(list)
for (key in linksblog) {
    listItem = document.createElement('li')
    list.appendChild(listItem)
    a = document.createElement('a')
    listItem.appendChild(a)
    a.href = 'https://github.com/tik9/' + linksblog[key]
    a.textContent = key
}
