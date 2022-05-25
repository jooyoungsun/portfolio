/* header,footer 불러오기 */
function includeHTML() {
    let z,
        elmnt,
        file,
        xhttp;
    z = document.getElementsByTagName("*");
    for (let i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("data-include");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("data-include");
                    includeHTML();
                } // if
            } // onreadystatechange
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        } // if - file
    } // for
}

// includeHTML
window.addEventListener('DOMContentLoaded', () => {
    includeHTML();
});


/* 파비콘 이미지 바꾸기 */
function favicon_change() {
    var domain = location.origin;
    var disable_url = domain + '/wp-content/themes/studio_jt/images/favicon-v2-192-disabled.png';
    var active_url = domain + '/wp-content/themes/studio_jt/images/favicon-v2-192.png';
    $(window).on("blur focus", function (e) {
        var prevType = $(this).data("prevType");
        if (prevType != e.type) {
            switch (e.type) {
                case "blur":
                    favicon.change(disable_url);
                    break;
                case "focus":
                    favicon.change(active_url);
                    break;
            }
        }
        $(this).data("prevType", e.type)
    })
}