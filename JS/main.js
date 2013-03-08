var levsaved = localObj("levsaved" + levelpackname);
var enterkeybind = false;
/*
*-levsaved
*|-nprevpass
*|-nlastpass
*|-nlastlev
*|-levpassx
*-visbefore
*/
function test(passwd, prevpass, levreq) {
    //!------hash(hash +hash(hash))-------!
    var tmpshaf = CryptoJS.SHA512(passwd).toString();
    return !!(CryptoJS.SHA512(tmpshaf + CryptoJS.SHA512(tmpshaf).toString()).toString() == CryptoJS.AES.decrypt(levels[levreq].hash, prevpass.toString()))
}
function clear() {
    levsaved.remove('nprevpass').remove("nlastpass").remove('nlastlev').save();
    window.localStorage.removeItem("nvisbefore");
}
function setlev(arg) {
    var levreq = parseInt(arg);
    if ((!isNaN(levreq)) && levsaved.has("levpass" + levreq) && levsaved.has("levpass" + (levreq - 1))) {
        var tmplastpass = levsaved.get("levpass" + levreq);
        var prevpass = levsaved.get("levpass" + (levreq - 1));
        if (test(tmplastpass, prevpass, levreq)) {
            lastpass = tmplastpass;
            levelspers = levreq;
            levsaved.set('nlastpass', lastpass);
            levsaved.set('nprevpass', prevpass);
            levsaved.set('nlastlev', levreq).save();;
            window.localStorage.setItem("nvisbefore", true);
            return true;
        }
    }
    return false;
}
$(document).ready(function () {
    if (window.localStorage.getItem("nvisbefore") && levsaved.has("nlastpass")) {
        /**/console.log("readingstate");/**/
        levelspers = parseInt(levsaved.get("nlastlev"));
        var tmplastpass = levsaved.get("nlastpass");
        if (test(tmplastpass, levsaved.get("nprevpass"), levelspers)) {
            $("#qusconimg").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAADElEQVQImWP4//8/AAX+Av5Y8msOAAAAAElFTkSuQmCC");
            lastpass = tmplastpass;
            var nextqus = CryptoJS.AES.decrypt(levels[levelspers].encqus, lastpass).toString(CryptoJS.enc.Utf8);
            $("#qusconimg").attr("src", nextqus);//解密
            $("#levtitle").text("Level " + (levelspers + 1) + " " + levels[levelspers].titles);
            $("#levdesc").text(levels[levelspers].desc);
            $("#iptanscon").val("");
            $("#iptanscon").text("");
            /**/console.log("readingstate2");/**/
            if (levels[levelspers].endl == 1) {
                $("#iptanscon").attr('disabled', "true");
                $("#subans").attr('disabled', "true");
                $("#levtitle").text(levels[levelspers].titles);
                clear();
            }
            else {
                levelspers += 1;
            }
        }
        else {
            window.localStorage.clear();
        }
    }
});
$("#subans").click(function () {
    //提交
    /**/console.log("submited");/**/
    var anssubed = $("#iptanscon").val().toString().trim().replace(".", "");
    $.get("log.txt", { levelnow: levelspers, ans: anssubed, levpack: levelpackname});
    if (test(anssubed, lastpass, levelspers)) {
        //set the question begin
        $("#qusconimg").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAADElEQVQImWP4//8/AAX+Av5Y8msOAAAAAElFTkSuQmCC");
        var nextqus = CryptoJS.AES.decrypt(levels[levelspers].encqus, anssubed).toString(CryptoJS.enc.Utf8);
        $("#qusconimg").attr("src", nextqus);//解密问题图片
        $("#qusconimg").css("width", "auto");
        $("#qusconimg").css("height", "auto");
        $("#levtitle").text("Level " + (levelspers + 1) + " " + levels[levelspers].titles);
        $("#levdesc").text(levels[levelspers].desc);
        //set the question end
        //set the storage begin
        window.localStorage.setItem('nvisbefore', true);
        lastpass = anssubed;
        if (levelspers != 0) {
            levsaved.set('nprevpass', levsaved.get("nlastpass"));
        } else {
            levsaved.set('nprevpass', 'Librains');
        }
        levsaved.set('nlastpass', lastpass);
        levsaved.set('nlastlev', levelspers);
        levsaved.set('levpass' + levelspers.toString(), lastpass).save();
        //set the storage end
        /**/console.log("savingstate");/**/
        $("#iptanscon").val("");//清除文字
        $("#iptanscon").text("");
        if (levels[levelspers].endl == 1) {
            $("#iptanscon").attr('disabled', "true");
            $("#subans").attr('disabled', "true");
            $("#levtitle").text(levels[levelspers].titles);
            passed = true;
        }
        else {
            levelspers += 1;
        }
    }
    else {//warning
        $("#iptanscon").animate({
            backgroundColor: 'red',
        }, 500);
        $("#iptanscon").animate({
            backgroundColor: 'white',
        }, 500);
        $("#iptanscon").val("");
        $("#iptanscon").text("");
        $("#iptanscon").focus();
    }
});
document.onkeydown = function (e) {//
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which;
    if (code == 13 ) {
        if (enterkeybind) {
            $("#sublevreq").click();
        } else if(!passed){
            $("#subans").click();
        }
    }
}
$("#sublevreq").click(function () {
    if ($("#levreq").val() > 1 && setlev(($("#levreq").val() - 1))) { window.location.href = window.location.href; }
    else {
        $("#toolsdiv").animate({
            backgroundColor: 'red',
        }, 500);
        $("#toolsdiv").animate({
            backgroundColor: 'black',
        }, 500);
    }
});
$("#subclear").click(function () {
    if ($("#ifclearall").attr("checked")) {
        window.localStorage.clear();
    } else {
        clear();
    }
    window.location.href = window.location.href;
});
$("#tools").click(function () {
    $("#toolsdiv").slideToggle(500);
});
$("#levreq").focus(function () {
    enterkeybind = true;
});
$("#levreq").blur(function () {
    enterkeybind = false;
});