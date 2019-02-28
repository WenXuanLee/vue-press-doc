const fs = require("fs")
const readline = require('readline');

let folderDefault = 'example'
let fileDefault = 'test'
let createOption = 'file'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
// Create options
rl.question('Create new group folder or file? ', (answer) => {
createOption = answer
if(answer === 'folder') { 
    createGroupFolder()
} else {
    createNewDocFile()
}

});

// Create group folder structure
function createGroupFolder() {
    rl.question('Your group name? ', (answer) => {
        groupFolder = answer
        // create folder
        fs.mkdir(`./docs/${groupFolder}`, { recursive: true }, (err) => {
            if (err) { console.log(err) }
            /* else { */
                fs.writeFile(`./docs/${answer}/README.md`, `# ${answer}Get Started`, (err) => {
                    if (err) { console.log(err) }
                    else { 
                        console.log('Group folder is built')
                    }
                }); 
           /*  } */
        });
        rl.close()
    });
}

// Create new doc file with default template
function createNewDocFile() {
    rl.question('What\'s the doc page name? ', (answer) => {
        fs.writeFile(`./docs/doc/${answer}.md`, 
        `--- 
sidebarDepth: 2
---

# ${answer}

## 流程架構

## 主要規則

## Services 
`, 
        (err) => {
            if (err) { console.log(err) }
            else { 
                console.log('New doc is built')
            }
        });   
        rl.close()            
    })
}   

function autoSidebar() {

}