//làm đồng hồ , hiển thị giwof, get ip public , ip local
function clock() {
    //Khởi tạo đối tượng timer sử dụng Date Object
    var timer = new Date();
    //Gọi các phương thức của đối tượng timer
    var hour = timer.getHours(); //Lấy giờ hiện tại (giá trị từ 0 - 23)
    var minute = timer.getMinutes(); //Lấy phút hiện tại
    var second = timer.getSeconds(); //Lấy giây  hiện tại
    var date = timer.getDate(); //lấy ngày
    var week = timer.getDay(); //lấy số tuần
    var month = timer.getMonth(); //lấy tháng
    var year = timer.getFullYear(); //lấy năm đầy đủ
    //mảng tháng và tuần
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        //Thêm ký tự 0 đằng trước nếu giờ, phút, giây, ngày tháng
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (date < 10) {
        date = "0" + date;
    }

    var weekfinal;
    weekFinal = weekNames[week];
    var monthFinal;
    monthFinal = monthNames[month];
    //Hiện thị thời gian lên thẻ div id="clock" với phương thức innerHTML
    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;
    document.getElementById("date").innerHTML = weekFinal + " " + date + " " + monthFinal + " " + year;
}
//end làm đồng hồ......
//lấy Ip public
function getIPPublic() {

    $.getJSON('https://api.ipdata.co/v1/?api-key=e42c0423b3fd0345fe27a026546e0cf664607bf3d003bc55f42d7c92', function(data) {
        var ip = `${data.ip}`
        document.getElementById("ippublic").innerHTML = ip;
        //More info IP public file more info
        var organisation = `${data.asn.name}`
        document.getElementById("organisation").innerHTML = organisation;
        var isp_domain = `${data.asn.domain}`
        document.getElementById("isp_domain").innerHTML = "<a href='http://" + isp_domain + "' target='_blank' title='" + isp_domain + "'>" + isp_domain + "</a>";
        var isp_route = `${data.asn.route}`
        document.getElementById("isp_route").innerHTML = isp_route;
        var city = `${data.city}`
        document.getElementById("city").innerHTML = city;
        var region = `${data.region}`
        document.getElementById("region").innerHTML = region;
        var regionCode = `${data.region_code}`
        document.getElementById("region_code").innerHTML = regionCode;
        var countryName = `${data.country_name}`
        document.getElementById("country_name").innerHTML = countryName;
        var countryCode = `${data.country_code}`
        document.getElementById("country_code").innerHTML = countryCode;
        var continentName = `${data.continent_name}`
        document.getElementById("continent_name").innerHTML = continentName;
        var continentCode = `${data.continent_code}`
        document.getElementById("continent_code").innerHTML = continentCode;
        var postal = `${data.postal}`
        document.getElementById("postal").innerHTML = postal;
        var callingCode = `${data.calling_code}`
        document.getElementById("calling_code").innerHTML = callingCode;
        var flag = `${data.flag}`
        document.getElementById("flag").innerHTML = "<img src='" + flag + "' alt='No Flag' title='Flag' />";
        var languages = `${data.languages[0].name}`
        document.getElementById("language").innerHTML = languages;

        var currencyName = `${data.currency.name}`
        document.getElementById("currency_name").innerHTML = currencyName;
        var currencyCode = `${data.currency.code}`
        document.getElementById("currency_code").innerHTML = currencyCode;

        var timezoneNane = `${data.time_zone.name}`
        var timezoneAbbr = `${data.time_zone.abbr}`
        var timezoneOffset = `${data.time_zone.offset}`
        document.getElementById("time_zone").innerHTML = timezoneNane + " - " + timezoneAbbr + " - " + timezoneOffset;
    });
}
//End lấy Ip public
//hàm nhạp vào IP xuấy ra thong tin IP 
function check() {
    //hien ket qua
    document.getElementById("info_search").style.display = 'block';
    var data = document.getElementById('type_ip').value; //lấy IP từ thẻ input id=typeip
    //30/11/2020


    var firstLink = "https://api.ipdata.co/v1/";
    var lastLink = "?api-key=e42c0423b3fd0345fe27a026546e0cf664607bf3d003bc55f42d7c92";
    var fullLink = firstLink + data + lastLink;
    $.getJSON(fullLink, function(data) {


        var ipPublic = `${data.ip}`
        document.getElementById("search_ippublic").innerHTML = ipPublic;
        //More info IP public
        var organisation = `${data.asn.name}`
        document.getElementById("search_organisation").innerHTML = organisation;
        var isp_domain = `${data.asn.domain}`
        document.getElementById("search_domain").innerHTML = "<a href='http://" + isp_domain + "' target='_blank' title='" + isp_domain + "'>" + isp_domain + "</a>";
        var isp_route = `${data.asn.route}`
        document.getElementById("search_route").innerHTML = isp_route;
        var city = `${data.city}`
        document.getElementById("search_city").innerHTML = city;
        var region = `${data.region}`
        document.getElementById("search_region").innerHTML = region;
        var regionCode = `${data.region_code}`
        document.getElementById("search_region_code").innerHTML = regionCode;
        var countryName = `${data.country_name}`
        document.getElementById("search_country_name").innerHTML = countryName;
        var countryCode = `${data.country_code}`
        document.getElementById("search_country_code").innerHTML = countryCode;
        var continentName = `${data.continent_name}`
        document.getElementById("search_continent_name").innerHTML = continentName;
        var continentCode = `${data.continent_code}`
        document.getElementById("search_continent_code").innerHTML = continentCode;
        var postal = `${data.postal}`
        document.getElementById("search_postal").innerHTML = postal;
        var callingCode = `${data.calling_code}`
        document.getElementById("search_calling_code").innerHTML = callingCode;
        var flag = `${data.flag}`
        document.getElementById("search_flag").innerHTML = "<img src='" + flag + "' alt='No Flag' title='Flag' />";

        var languages = `${data.languages[0].name}`
        document.getElementById("search_language").innerHTML = languages;

        var currencyName = `${data.currency.name}`
        document.getElementById("search_currency_name").innerHTML = currencyName;
        var currencyCode = `${data.currency.code}`
        document.getElementById("search_currency_code").innerHTML = currencyCode;

        var timezoneNane = `${data.time_zone.name}`
        var timezoneAbbr = `${data.time_zone.abbr}`
        var timezoneOffset = `${data.time_zone.offset}`
        document.getElementById("search_time_zone").innerHTML = timezoneNane + " - " + timezoneAbbr + " - " + timezoneOffset;


    });

} //end nhaapj xuat IP
//hàm nhạp vào DNS xuất ra thong tin
function dnslookup() {
    //hien ket qua
    //document.getElementById("info_search").style.display = 'block';
    var dnsNanme = document.getElementById('dns_name').value; //lấy IP từ thẻ input id=type_dns
    var typeRecord = "A" //default là record A
    typeRecord = document.getElementById('type_record').value;

    var firstLink = "https://dns.google.com/resolve?name=";
    var lastLink = "&type=";
    var fullLink = firstLink + dnsNanme + lastLink + typeRecord;

    $.getJSON(fullLink, function(data) {
        //if
        if (typeRecord === "A") {
            document.getElementById("a_info").style.display = 'block';
            document.getElementById("cname_info").style.display = 'none';
            document.getElementById("mx_info").style.display = 'none';
            document.getElementById("ns_info").style.display = 'none';
            document.getElementById("ptr_info").style.display = 'none';
            document.getElementById("soa_info").style.display = 'none';
            document.getElementById("srv_info").style.display = 'none';
            document.getElementById("txt_info").style.display = 'none';
            var domain = `${data.Question[0].name}`
            document.getElementById("a_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var ip1 = `${data.Answer[0].data}`
            document.getElementById("a_ip1").innerHTML = ip1;
            var ip2 = `${data.Answer[1].data}`
            document.getElementById("a_ip2").innerHTML = "<br/>" + ip2;
            var ip3 = `${data.Answer[2].data}`
            document.getElementById("a_ip3").innerHTML = "<br/>" + ip3;
        }
        if (typeRecord === "CNAME") {
            document.getElementById("a_info").style.display = 'none';
            document.getElementById("cname_info").style.display = 'block';
            document.getElementById("mx_info").style.display = 'none';
            document.getElementById("ns_info").style.display = 'none';
            document.getElementById("ptr_info").style.display = 'none';
            document.getElementById("soa_info").style.display = 'none';
            document.getElementById("srv_info").style.display = 'none';
            document.getElementById("txt_info").style.display = 'none';
            var domain = `${data.Question[0].name}`
            document.getElementById("cname_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var data = `${data.Authority[0].data}`
            document.getElementById("cname_data").innerHTML = data;

        }
        if (typeRecord === "MX") {
            document.getElementById("a_info").style.display = 'none';
            document.getElementById("cname_info").style.display = 'none';
            document.getElementById("mx_info").style.display = 'block';
            document.getElementById("ns_info").style.display = 'none';
            document.getElementById("ptr_info").style.display = 'none';
            document.getElementById("soa_info").style.display = 'none';
            document.getElementById("srv_info").style.display = 'none';
            document.getElementById("txt_info").style.display = 'none';
            var domain = `${data.Question[0].name}`
            document.getElementById("mx_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var data1 = `${data.Answer[0].data}`
            document.getElementById("mx_data1").innerHTML = "<br/>" + data1;
            var data2 = `${data.Answer[1].data}`
            document.getElementById("mx_data2").innerHTML = "<br/>" + data2;
            var data3 = `${data.Answer[2].data}`
            document.getElementById("mx_data3").innerHTML = "<br/>" + data3;
            var data4 = `${data.Answer[3].data}`
            document.getElementById("mx_data4").innerHTML = "<br/>" + data4;
            var data5 = `${data.Answer[4].data}`
            document.getElementById("mx_data5").innerHTML = "<br/>" + data5;
            var data6 = `${data.Answer[5].data}`
            document.getElementById("mx_data6").innerHTML = "<br/>" + data6;
        }
        if (typeRecord === "NS") {
            document.getElementById("a_info").style.display = 'none';
            document.getElementById("cname_info").style.display = 'none';
            document.getElementById("mx_info").style.display = 'none';
            document.getElementById("ns_info").style.display = 'block';
            document.getElementById("ptr_info").style.display = 'none';
            document.getElementById("soa_info").style.display = 'none';
            document.getElementById("srv_info").style.display = 'none';
            document.getElementById("txt_info").style.display = 'none';
            var domain = `${data.Question[0].name}`
            document.getElementById("ns_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var data1 = `${data.Answer[0].data}`
            document.getElementById("ns_data1").innerHTML = "<br/>" + data1;
            var data2 = `${data.Answer[1].data}`
            document.getElementById("ns_data2").innerHTML = "<br/>" + data2;
            var data3 = `${data.Answer[2].data}`
            document.getElementById("ns_data3").innerHTML = "<br/>" + data3;
            var data4 = `${data.Answer[3].data}`
            document.getElementById("ns_data4").innerHTML = "<br/>" + data4;
            var data5 = `${data.Answer[4].data}`
            document.getElementById("ns_data5").innerHTML = "<br/>" + data5;

        }
        if (typeRecord === "PTR") {
            document.getElementById("a_info").style.display = 'none';
            document.getElementById("cname_info").style.display = 'none';
            document.getElementById("mx_info").style.display = 'none';
            document.getElementById("ns_info").style.display = 'none';
            document.getElementById("ptr_info").style.display = 'block';
            document.getElementById("soa_info").style.display = 'none';
            document.getElementById("srv_info").style.display = 'none';
            document.getElementById("txt_info").style.display = 'none';
            var domain = `${data.Question[0].name}`
            document.getElementById("ptr_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var data = `${data.Authority[0].data}`
            document.getElementById("ptr_data").innerHTML = data;

        }
        if (typeRecord === "SOA") {
            document.getElementById("a_info").style.display = 'none';
            document.getElementById("cname_info").style.display = 'none';
            document.getElementById("mx_info").style.display = 'none';
            document.getElementById("ns_info").style.display = 'none';
            document.getElementById("ptr_info").style.display = 'none';
            document.getElementById("soa_info").style.display = 'block';
            document.getElementById("srv_info").style.display = 'none';
            document.getElementById("txt_info").style.display = 'none';
            var domain = `${data.Question[0].name}`
            document.getElementById("soa_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var data = `${data.Answer[0].data}`
            document.getElementById("soa_data").innerHTML = data;

        }
        if (typeRecord === "SRV") {
            document.getElementById("a_info").style.display = 'none';
            document.getElementById("cname_info").style.display = 'none';
            document.getElementById("mx_info").style.display = 'none';
            document.getElementById("ns_info").style.display = 'none';
            document.getElementById("ptr_info").style.display = 'none';
            document.getElementById("soa_info").style.display = 'none';
            document.getElementById("srv_info").style.display = 'block';
            document.getElementById("txt_info").style.display = 'none';
            var domain = `${data.Question[0].name}`
            document.getElementById("srv_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var data = `${data.Authority[0].data}`
            document.getElementById("srv_data").innerHTML = data;

        }
        if (typeRecord === "TXT") {
            document.getElementById("a_info").style.display = 'none';
            document.getElementById("cname_info").style.display = 'none';
            document.getElementById("mx_info").style.display = 'none';
            document.getElementById("ns_info").style.display = 'none';
            document.getElementById("ptr_info").style.display = 'none';
            document.getElementById("soa_info").style.display = 'none';
            document.getElementById("srv_info").style.display = 'none';
            document.getElementById("txt_info").style.display = 'block';
            var domain = `${data.Question[0].name}`
            document.getElementById("txt_domain").innerHTML = "<a href='http://" + domain + "' target='_blank' title='" + domain + "'>" + domain + "</a>";
            var data1 = `${data.Answer[0].data}`
            document.getElementById("txt_data1").innerHTML = "<br/>" + data1;
            var data2 = `${data.Answer[0].data}`
            document.getElementById("txt_data2").innerHTML = "<br/>" + data2;
            var data3 = `${data.Answer[0].data}`
            document.getElementById("txt_data3").innerHTML = "<br/>" + data3;
            var data4 = `${data.Answer[0].data}`
            document.getElementById("txt_data4").innerHTML = "<br/>" + data4;
            var data5 = `${data.Answer[0].data}`
            document.getElementById("txt_data5").innerHTML = "<br/>" + data5;

        }


    });
} //end dns looku
//lấy ip local---------------------
/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getIPLocal(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function() {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }, noop);

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
    var a;
}
// End  lấy ip local---------------------

//Thực hiện hàm clock theo chu kỳ 1 giây
setInterval("clock()", 1000);
//hàm Ip public
setTimeout("getIPPublic()", 1000)
    // sử dụng hàm lấy ip local---------------------
getIPLocal(function(ip) {
    document.getElementById("iplocal").innerHTML = ip;
});
// #10 enter to submit
document.onkeydown = function(evt) {
        var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
        if (keyCode == 13) {
            //your function call here
            document.getElementById('myBtn').onclick();
        }
    }
    /// #10 end