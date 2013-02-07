$(document).ready(function () {
    if (window.localStorage.getItem("nvisbefore") && window.localStorage.getItem("nlastpass") && window.localStorage.getItem("nlastlev") && window.localStorage.getItem("nprevpass")) {
        console.log("readingstate");
        levelspers = parseInt(window.localStorage.getItem("lastlev"));
        lastpass = window.localStorage.getItem("nlastpass");
        var tmpshaf = CryptoJS.SHA512(lastpass).toString();
        if (CryptoJS.SHA512(tmpshaf + CryptoJS.SHA512(tmpshaf).toString()).toString() == CryptoJS.AES.decrypt(levels[levelspers].hash, window.localStorage.getItem("nprevpass")).toString()) {
            var nextqus = CryptoJS.AES.decrypt(levels[levelspers].encqus, lastpass).toString(CryptoJS.enc.Utf8);
            $("#qusconimg").attr("src", nextqus);//解密
            $("#levtitle").text("Level " + (levelspers + 1) + " " + levels[levelspers].titles);
            $("#levdesc").text(levels[levelspers].desc);
            $("#iptanscon").val("");
            $("#iptanscon").text("");
            console.log("readingstate2");
            if (levels[levelspers].endl == 1) {
                $("#iptanscon").attr('disabled', "true");
                $("#subans").attr('disabled', "true");
                window.localStorage.clear();
            }
            else {
                levelspers += 1;
            }
        }
    }
    else {
        window.localStorage.clear();
    }
});
document.onkeydown = function (e) {
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which;
    if (code == 13 && (!passed)) {
        $("#subans").click();
    }
}
$("#subans").click(function () {
    //提交
    console.log("submited");
    var tmpshaf = CryptoJS.SHA512($("#iptanscon").val()).toString();
    if (CryptoJS.SHA512(tmpshaf + CryptoJS.SHA512(tmpshaf).toString()).toString() == CryptoJS.AES.decrypt(levels[levelspers].hash, lastpass)) {//验证
        var nextqus = CryptoJS.AES.decrypt(levels[levelspers].encqus, $("#iptanscon").val()).toString(CryptoJS.enc.Utf8);
        $("#qusconimg").attr("src",nextqus);//解密
        $("#levtitle").text("Level " + (levelspers + 1) + " " + levels[levelspers].titles);
        $("#levdesc").text(levels[levelspers].desc);
        window.localStorage.setItem('visbefore', true);
        lastpass = $("#iptanscon").val();
        if (levelspers != 0) {
            window.localStorage.setItem('nprevpass', window.localStorage.getItem("nlastpass"));
        } else {
            window.localStorage.setItem('naprevpass', "Librains");
        }
        window.localStorage.setItem('nlastpass', lastpass);
        window.localStorage.setItem('nlastlev', levelspers);
        console.log("savingstate");
        $("#iptanscon").val("");
        $("#iptanscon").text("");
        $.get("log.txt", { levelnow: levelspers, ans: lastpass });
        if (levels[levelspers].endl == 1) {
            $("#iptanscon").attr('disabled', "true");
            $("#subans").attr('disabled', "true");
            $("#levtitle").text("Librains " + levels[levelspers].titles);
            window.localStorage.clear();
            passed = true;
        }
        else {
            levelspers += 1;
        }
    }
    else {
        $.get("log.txt", { levelnow: levelspers, ans: $("#iptanscon").val() });
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
function fnclear() {
    window.localStorage.clear();
}
function fnsetlev() { }