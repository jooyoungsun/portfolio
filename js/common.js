
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