console.log('Initializing Drill Js.....');
const docScores = [[1, 0.32, 0.23, 0.23], [2, 0.72, 0.23, 0.88], [6, 0.62, 0.43, 0.23]];
var docIds = [];
docScores.forEach((element) => {
    docIds.push(element[0]);
});

function pushDocTable(reference) {
    docHeading = document.getElementById('docHeading');
    docContent = document.getElementById('docContent');
    docScores.forEach((value) => {
        let elem = document.createElement('th');
        elem.setAttribute('scope', 'col');
        text = document.createTextNode(`D${value[0]}`);
        elem.appendChild(text);
        docHeading.appendChild(elem);

        elem = document.createElement('td');
        text = document.createTextNode(value[reference]);
        elem.appendChild(text);
        docContent.appendChild(elem);
    });
}


// function to return doc Id of a given section
function getSecScores(docIds, baseId) {
    scores = [
        ['Fund Summary', 1, 0.3, 0.4, 0.6],
        ['FINANCIAL STATEMENTS', 2, 0.3, 0.4, 0.6],
        ['Fund Manager', 6, 0.3, 0.4, 0.6],
    ]
    return scores;
}

function populateSections(docId) {
    console.log('Adding section content for document', docId);
    var secScores = getSecScores(docIds, docId);
    sectionContainer = document.getElementById('sectionContainer');
    secHeadings = document.getElementById('secHeadings');
    secHeadings.innerHTML = `<th scope="col">Section Level Scores</th>`;
    secContent = document.getElementById('secContent');
    secContent.innerHTML = "";

    secScores.forEach((element) => {
        // Append the doc column secheadings
        var myth = document.createElement('th');
        myth.setAttribute('scope', 'col');
        text = document.createTextNode(`D${element[1]}`);
        myth.appendChild(text);
        secHeadings.appendChild(myth)

        // This button should open further headings and subheadings
        let mytr = document.createElement('tr');
        mytr.innerHTML = `<button id="openSectionButton1" class="btn btn-primary openSectionButton" data-toggle="collapse" href='#sectionContainer' role="button" aria-expanded="false" aria-controls="sectionContainer">${element[0]}</button></th>`;


        // Append the button and doc scores
        for (let i = 2; i < element.length; i++) {
            elem = document.createElement('td');
            text = document.createTextNode(element[i]);
            elem.appendChild(text);
            mytr.appendChild(elem);
            console.log(mytr);
            secContent.appendChild(mytr);
        }
    });


}

var openSectionButton = document.getElementsByClassName('openSectionButton')[0];
// openSectionButton.forEach((element)=>{

// });
openSectionButton.addEventListener('click', () => {
    console.log('opening sections');
    populateSections(openSectionButton.id);

});

pushDocTable(1);