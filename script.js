function addNewWEField() {
    let newNodeExp = document.createElement('textarea');
    newNodeExp.classList.add('form-control');
    newNodeExp.classList.add('weField');
    newNodeExp.setAttribute("placeholder", "Enter more here");
    newNodeExp.setAttribute("margin-top", "2");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNodeExp, weAddButtonOb);
}

function addEduField() {
    let newNodeEdu = document.createElement('textarea');
    newNodeEdu.classList.add('form-control');
    newNodeEdu.classList.add('eduField');
    newNodeEdu.setAttribute("placeholder", "Enter more here");
    newNodeEdu.setAttribute("margin-top", "2");

    let eduOb = document.getElementById("edu");
    let eduAddButtonOb = document.getElementById("eduAddButton");

    eduOb.insertBefore(newNodeEdu, eduAddButtonOb)
}

function addSkillField() {
    let newNodeSkill = document.createElement('textarea');
    newNodeSkill.classList.add('form-control');
    newNodeSkill.classList.add('skillField');
    newNodeSkill.setAttribute("placeholder", "Enter more here");
    newNodeSkill.setAttribute("margin-top", "2");

    let skillOb = document.getElementById("skill");
    let skillAddButtonOb = document.getElementById("skillAddButton");

    skillOb.insertBefore(newNodeSkill, skillAddButtonOb)
}

function showImage(){
    var imgURL = document.getElementById("imgForm").value;
    var img = document.createElement("img");
    img.src = imgURL;
    var div = document.getElementById("imgTemp");
    div.innerHTML = "";
    div.appendChild(img);
}

// generating/
function generateResume() {
    // name genration
    let nameF = document.getElementById('nameField').value;

    let nameT1 = document.getElementById('nameTemp1');
    let nameT2 = document.getElementById('nameTemp2');

    nameT1.innerHTML = nameF;
    nameT2.innerHTML = nameF;

    // contect genration
    document.getElementById('contTemp').innerHTML = document.getElementById('contField').value;
    // email genration
    document.getElementById('emailTemp').innerHTML = document.getElementById('emailField').value;
    // address genration
    document.getElementById('addrTemp').innerHTML = document.getElementById('addrField').value;
    // linkdin generation
    document.getElementById('linkdinTemp').innerHTML = document.getElementById('linkdinField').value;
    // github generation
    document.getElementById('gitTemp').innerHTML = document.getElementById('githubField').value;

    // objective generation
    document.getElementById('objTemp').innerHTML = document.getElementById('objField').value;

    // experience generation
    let exps = document.getElementsByClassName('weField');

    let expSrt = "";

    for (var e of exps) {
        expSrt = expSrt + `<li> ${e.value} </li>`;
    }

    document.getElementById("expTemp").innerHTML = expSrt;

    // education generation
    let edus = document.getElementsByClassName("eduField");

    let eduStr = "";

    for (var e of edus) {
        eduStr = eduStr + `<li>${e.value}</li>`;
    }

    document.getElementById('eduTemp').innerHTML = eduStr;
    // education generation
    let skills = document.getElementsByClassName("skillField");

    let skillStr = "";

    for (var e of skills) {
        skillStr = skillStr + `<li>${e.value}</li>`;
    }

    document.getElementById('skillTemp').innerHTML = skillStr;

    document.getElementById('resume-form').style.display = 'none';

    document.getElementById('resume-template').style.display = 'block';

// add image
    var imgURL = document.getElementById("imgField").value;
    var img = document.createElement("img");
    img.src = imgURL;
    var div = document.getElementById("imgTemp");
    div.innerHTML = "";
    div.appendChild(img);
    img.classList.add('img-fluid');
    img.classList.add('mt-2');

}


function printResume() {
    window.print();
}
