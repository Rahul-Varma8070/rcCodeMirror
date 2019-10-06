function rcCodeMirror_close(argument) {
    argument.classList.remove('active-rcCodeMirror_open-fun');
    argument.style.color="#F7819F";
    argument.setAttribute("onclick", "rcCodeMirror_open(this)");
    document.getElementById('rcCodeMirror-HTMLCode-CodePad').style.display = "none";
    document.getElementById('rcCodeMirror-CSSCode-CodePad').style.display = "none";
    document.getElementById('rcCodeMirror-JSCode-CodePad').style.display = "none";
    document.getElementById('rcCodeMirror-runCode-OutputPad').style.display = "none";
    document.getElementById('runButton').classList.remove('active');
    document.getElementById('cssButton').classList.remove('active');
    document.getElementById('htmlButton').classList.remove('active');
    document.getElementById('jsButton').classList.remove('active');
    document.getElementById('runButton').disabled = true;
    document.getElementById('cssButton').disabled = true;
    document.getElementById('htmlButton').disabled = true;
    document.getElementById('jsButton').disabled = true;

}

function rcCodeMirror_open(argument) {
    argument.classList.add('active-rcCodeMirror_open-fun');
    argument.style.color="";
    argument.setAttribute("onclick", "rcCodeMirror_close(this)");
    document.getElementById('rcCodeMirror-HTMLCode-CodePad').style.display = "none";
    document.getElementById('rcCodeMirror-CSSCode-CodePad').style.display = "none";
    document.getElementById('rcCodeMirror-JSCode-CodePad').style.display = "none";
    document.getElementById('rcCodeMirror-runCode-OutputPad').style.display = "block";
    document.getElementById('runButton').className += " active";
    document.getElementById('runButton').removeAttribute('disabled');
    document.getElementById('cssButton').removeAttribute('disabled');
    document.getElementById('htmlButton').removeAttribute('disabled');
    document.getElementById('jsButton').removeAttribute('disabled');

}

function rcCodeMirrorTab(evt, tabid) {
    var i, rcCodeMirrorTabContentainer, rcCodeMirrorTabButton;
    rcCodeMirrorTabContentainer = document.getElementsByClassName("rcCodeMirror-tabConatianer-style");
    for (i = 0; i < rcCodeMirrorTabContentainer.length; i++) {
        rcCodeMirrorTabContentainer[i].style.display = "none";
    }
    rcCodeMirrorTabButton = document.getElementsByClassName("rcCodeMirror-TabButton");
    for (i = 0; i < rcCodeMirrorTabButton.length; i++) {
        rcCodeMirrorTabButton[i].className = rcCodeMirrorTabButton[i].className.replace(" active", "");
    }
    document.getElementById(tabid).style.display = "block";
    evt.currentTarget.className += " active";
}
window.addEventListener("load", rcCodeMirror);
function rcCodeMirror() {
    rcCodeMirror = '<div class=rcCodeMirror-Main-Conainer rc-container=rcCodeMirror rc-content=code-mirror rcattr=rcCodeMirror><div class=rcCodeMirror-head id=rcCodeMirror-head rcCodeMirror=head><div class=rcCodeMirror-title-container id=rcCodeMirror-titleContainer rcCodeMirror=rcCodeMirrorTitle><div class=rcCodeMirror-title ><a class=rcCodeMirror-headTitleLink onclick=\'this.href="https://www.ragasave.com"\'target=_blank>Ragasave</a></div><div class=rcCodeMirror-tools id=rcCodeMirror-tools rcCodeMirror-data=rcCodeMirrorTool><div id=rcCodeMirrorTool_editSwitch class=active style=font-size:14px onclick="rcCodeMirrorEditMode_On(this)" rcCodeMirrortool=editSwitch>Edit Mode</div><div class="rcCodeMirrorDownloadCode-switch"onclick=rcCodeMirrorDownloadCode() rcCodeMirrortool=DownloadCode>Download Codes</div></div></div><div class=rcCodeMirror-head-Content id=rcCodeMirror-headContent rcCodeMirror=headContent><button class=rcCodeMirror-TabButton id=htmlButton onclick=\'rcCodeMirrorTab(event,"rcCodeMirror-HTMLCode-CodePad")\'rcCodeMirror=TabButton>HTML</button> <button class=rcCodeMirror-TabButton id=cssButton onclick=\'rcCodeMirrorTab(event,"rcCodeMirror-CSSCode-CodePad")\'rcCodeMirror=TabButton>CSS</button> <button class=rcCodeMirror-TabButton id=jsButton onclick=\'rcCodeMirrorTab(event,"rcCodeMirror-JSCode-CodePad")\'rcCodeMirror=TabButton>JS</button> <button class=rcCodeMirror-TabButton id=runButton onclick=\'rcCodeMirrorTab(event,"rcCodeMirror-runCode-OutputPad"),runCode()\'rcCodeMirror=TabButton>Run</button></div></div><div class=rcCodeMirror-body id=rcCodeMirror-body rcCodeMirror=body><div class="rcCodeMirror-tabConatianer-style rcCodeMirror-HTMLCodes-Container"id=rcCodeMirror-HTMLCode-CodePad rcCodeMirror=rcCodeMirror-tabConatianer-style><textarea class="style-18 rcCodeMirror-Codepads-TextAreas"id=rcCodeMirror-HtmlPad-Textarea name=html spellcheck=false onchange=rcCodeMirrorJsCodes(this)></textarea></div><div class="rcCodeMirror-tabConatianer-style rcCodeMirror-CSSCodes-Container"id=rcCodeMirror-CSSCode-CodePad rcCodeMirror=rcCodeMirror-tabConatianer-style><textarea class="style-18 rcCodeMirror-Codepads-TextAreas"id=rcCodeMirror-CssPad-Textarea name=css spellcheck=false></textarea></div><div class="rcCodeMirror-tabConatianer-style rcCodeMirror-JSCodes-Container"id=rcCodeMirror-JSCode-CodePad rcCodeMirror=rcCodeMirror-tabConatianer-style><textarea class="style-18 rcCodeMirror-Codepads-TextAreas"id=rcCodeMirror-JsPad-Textarea name=js spellcheck=false onchange=rcCodeMirrorJsCodes(this)></textarea></div><div class="rcCodeMirror-tabConatianer-style rcCodeMirror-runCodes-Container"id=rcCodeMirror-runCode-OutputPad rcCodeMirror=rcCodeMirror-tabConatianer-style style=padding:0><iframe class="style-18 rcCodeMirror-iframe"id=rcCodeMirrorIframe name=rcCodeMirrorIframe ></iframe></div></div><div class=rcCodeMirror-footer-container rcCodeMirror=rcCodeMirrorFooter><div class=rcCodeMirror-switch id=rcCodeMirror-switch-OnOff style="float:right;padding:5px 0;margin-right:20px;font-size:18px;font-weight:bold;cursor:pointer"onclick=rcCodeMirror_close(this)>&lt;/rc></div></div></div>';
    document.getElementById('rcCodeMirror').innerHTML = rcCodeMirror;
    //document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="https://ragasavesourcecodes.000webhostapp.com/rcCodeMirror/rcCodeMirror.css">';
    //document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="rcCodeMirror.css">';
   // document.body.innerHTML += '<script type="text/javascript" src="https://ragasavesourcecodes.000webhostapp.com/rcCodeMirror/rcCodeMirror.js"></script>';
    var html = document.getElementById('rcCodeMirror-HtmlPad-Textarea');
    var css = document.getElementById('rcCodeMirror-CssPad-Textarea');
    var js = document.getElementById('rcCodeMirror-JsPad-Textarea');
    html.setAttribute("readonly", "");
    css.setAttribute("readonly", "");
    js.setAttribute("readonly", "");
    if (html.value == "" && css.value == "" && js.value == "") {
        document.getElementById('rcCodeMirror-HTMLCode-CodePad').style.display = "block";
        document.getElementById('htmlButton').className += " active";
        document.getElementById('rcCodeMirrorTool_editSwitch').classList.add('active');
        document.getElementById('rcCodeMirrorTool_editSwitch').setAttribute("onclick", "rcCodeMirrorEditMode_Off(this)");
        html.removeAttribute("readonly");
        css.removeAttribute("readonly");
        js.removeAttribute("readonly");
    } else {
        document.getElementById('rcCodeMirror-runCode-OutputPad').style.display = "block";
        document.getElementById('runButton').className += " active";

    }
    document.getElementById('rcCodeMirror-switch-OnOff').style.color = "#81F781";

}

function runCode(argument) {
    rcCodeMirrorIframe.location.reload();
    document.getElementById('rcCodeMirrorIframe').srcdoc = '';
    var html = document.getElementById('rcCodeMirror-HtmlPad-Textarea');
    var css = document.getElementById('rcCodeMirror-CssPad-Textarea');
    var js = document.getElementById('rcCodeMirror-JsPad-Textarea');
    //rcCodeMirrorIframe.document.head.innerHTML =  '<style type="text/css">\n\n'+css.value+'\n</style><script type="text/javascript">'+js.value+'</'+'script>';
    if (!css.value == "") {
        document.getElementById('rcCodeMirrorIframe').srcdoc += '<style  type="text/css">\n' + css.value + '\n</style>';
    }
    if (!js.value == "") {
        document.getElementById('rcCodeMirrorIframe').srcdoc += '<script type="text/javascript">' + js.value + '</' + 'script>';
    }
    document.getElementById('rcCodeMirrorIframe').srcdoc += html.value;


}



function rcCodeMirrorDownloadCode(argument) {
    //argument.style.color = "#81F781";
    //argument.setAttribute("onclick", "rcCodeMirrorEditMode_Off(this)");
    var html = document.getElementById('rcCodeMirror-HtmlPad-Textarea');
    var css = document.getElementById('rcCodeMirror-CssPad-Textarea');
    var js = document.getElementById('rcCodeMirror-JsPad-Textarea');
    var codes = document.getElementById('rcCodeMirrorIframe');
    //innerDoc = codes.contentDocument;
    //alert(codes.srcdoc);
    //d.innerHTML = codes.srcdoc;
    //alert(d.innerHTML);
    var rcCodeMirror_comment = '<!--\n\t author  :  Rahul Varma\n\twebsite  :  https://www.ragasave.com\n\tyoutube  :  https://www.youtube.com/channel/UCGd59cTRsvNLdCTwHy2EIFg\n-->\n';
    var codestitle = '<title>' + 'rcCodeMirror' + '</title>';
    if (css.value == "") {
        cssCodes = "";
    } else {
        cssCodes = '\n\t<style type="text/css" >\n' + css.value + '\n\t</style>';
    }
    if (js.value == "") {
        jsCodes = "";
    } else {
        jsCodes = '\n\t<script type="text/javascript" >\n' + js.value + '\n\t</' + 'script>\n\t';
    }

    if (html.value.toUpperCase().match('<HTML')) {
        var downloadableCodes = rcCodeMirror_comment + html.value;
    } else
    if (!html.value.toUpperCase().match('<BODY') && html.value.toUpperCase().match('</BODY>')) {
        var downloadableCodes = '<!DOCTYPE html>\n<html>\n<head>\n\t' + rcCodeMirror_comment + codestitle + jsCodes + cssCodes + '\n<head>\n<body>\n' + html.value + '\n</html>';
    } else
    if (html.value.toUpperCase().match('<BODY') && !html.value.toUpperCase().match('</BODY>')) {
        var downloadableCodes = '<!DOCTYPE html>\n<html>\n<head>\n\t' + rcCodeMirror_comment + codestitle + jsCodes + cssCodes + '\n<head>\n' + html.value + '\n</body>\n</html>';
    } else
    if (html.value.toUpperCase().match('<BODY') || html.value.toUpperCase().match('<BODY>')) {
        var downloadableCodes = '<!DOCTYPE html>\n<html>\n<head>\n\t' + rcCodeMirror_comment + codestitle + jsCodes + cssCodes + '\n<head>\n' + html.value + '\n</html>';

    } else {
        var downloadableCodes = '<!DOCTYPE html>\n<html>\n<head>\n\t' + rcCodeMirror_comment + codestitle + jsCodes + cssCodes + '\n<head>\n<body>\n' + html.value + '\n</body>\n</html>';
    }
    if (html.value == "" && css.value == "" && js.value == "") {
        alert('There Is No Codes To Download ');
    } else {
        var rcCodeMirror_fileName = "rcCodeMirror.html";
        var rcCodeMirror_extractCodes = downloadableCodes;
        var rcCodeMirror_downloadUrl = new Blob([rcCodeMirror_extractCodes], {
            type: "text/html"
        });
        var rcCodeMirror_sendToDownload = window.URL.createObjectURL(rcCodeMirror_downloadUrl);

        var downloadLink = document.createElement("a");
        downloadLink.download = rcCodeMirror_fileName;
        downloadLink.innerHTML = "Download File";
        downloadLink.href = rcCodeMirror_sendToDownload;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);

        downloadLink.click();
    }

}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function rcCodeMirrorEditMode_On(argument) {
   // argument.style.color = "#81F781";
    argument.setAttribute("onclick", "rcCodeMirrorEditMode_Off(this)");
    var html = document.getElementById('rcCodeMirror-HtmlPad-Textarea');
    var css = document.getElementById('rcCodeMirror-CssPad-Textarea');
    var js = document.getElementById('rcCodeMirror-JsPad-Textarea');
    html.removeAttribute("readonly");
    css.removeAttribute("readonly");
    js.removeAttribute("readonly");
    argument.classList.remove('hover');
    argument.classList.add('active');
}

function rcCodeMirrorEditMode_Off(argument) {
    argument.setAttribute("onclick", "rcCodeMirrorEditMode_On(this)");
    var html = document.getElementById('rcCodeMirror-HtmlPad-Textarea');
    var css = document.getElementById('rcCodeMirror-CssPad-Textarea');
    var js = document.getElementById('rcCodeMirror-JsPad-Textarea');
    html.setAttribute("readonly", "");
    css.setAttribute("readonly", "");
    js.setAttribute("readonly", "");
    argument.classList.remove('active');
    argument.classList.add('hover');
}