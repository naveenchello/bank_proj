if (localStorage.getItem("random") == null) {
  localStorage.setItem("random", "100000");
}
// if (localStorage.getItem("accountnumbers") == null) {
//   localStorage.setItem("accountnumbers", "00001");
// }
console.log(localStorage.getItem("random"));
var note = 0;
setInterval(function () {

  // document.getElementById("time").innerHTML=Date().toString().substring(16,18);
  if (Date().toString().substring(0, 3) == "Sun") {
    //console.log("hai");
    document.getElementById("btn-img1").disabled = true;
  }
  else if (parseInt(Date().toString().substring(16, 18)) > 18 || parseInt(Date().toString().substring(16, 18)) < 8) {
    document.getElementById("btn-img1").disabled = true;
  }


  else {
    document.getElementById("btn-img1").disabled = false;
  }
}, 1000);


// document.getElementById("btn").onclick = function()
// {
//     location.href=""
// }
function show(a) {
  // alert("hello"+a);
  var b = [document.getElementsByClassName("welcome")[0], document.getElementsByClassName("login")[0], document.getElementsByClassName("maindash")[0], document.getElementsByClassName("transaction")[0], document.getElementsByClassName("history")[0]];
  if (a < 5) {
    for (var i = 0; i < 5; i++) {
      if (i == a) {

        b[i].style.display = "flex";
        if (i == 2) {
          document.getElementsByClassName("manben")[0].style.display = "none";
          document.getElementsByClassName("customer")[0].style.display = "flex";
        }
        continue;
      }


      b[i].style.display = "none";

    }
  }
  if (a == 5) {
    localStorage.setItem("identify", "");
    //document.getElementsByClassName("icon1")[4].style.display="none";
    location.reload();
  }
  // alert("hello da");
}
function show2(a) {
  // alert("hello"+a);
  var b = [document.getElementsByClassName("welcome")[0], document.getElementsByClassName("login")[0], document.getElementsByClassName("maindash")[0], document.getElementsByClassName("transaction")[0], document.getElementsByClassName("history")[0]];

  for (var i = 0; i < 5; i++) {
    if (i == a) {



      if (i == 2 || i == 4) {
        b[i].style.display = "flex";
        document.getElementsByClassName("sucess")[0].style.display = "none"
        document.getElementsByClassName("form")[0].style.display = "flex";

        continue;
      }
    }
    b[i].style.display = "none";

  }


}
function show1(a) {
  var b = [document.getElementsByClassName("signup")[0], document.getElementsByClassName("signin")[0]];
  var w = document.getElementsByClassName("change")[0];
  var sizex = b[1].clientWidth;
  var sizey = w.clientWidth;
  // console.log("befor"+sizey);


  for (var i = 0; i < 2; i++) {
    //b[i].style.display="none";
    if (i == a) {

      w.style.transform = "translateX(" + sizex + "px)";
      console.log(w.style.transform);
      w.style.zIndex = 10;
      w.style.transition = "1.7s";




      if (i == 0) {
        document.getElementById("btn3").style.display = "none";
        document.getElementById("sin").style.display = "block";
        b[1].style.transform = "translateX(" + -sizey + "px)";

        b[1].style.transition = "1.7s";
        setTimeout(function () {
          b[1].style.display = "none";
          b[0].style.display = "flex";
          b[0].style.transition = "1.7s";

          b[0].style.transform = "translateX(" + (-sizey) + "px)";
          w.style.borderRadius = "0px 20px 20px 0px";


        }, 500);

      }

      if (i == 1) {
        document.getElementById("btn3").style.display = "block";
        document.getElementById("sin").style.display = "none";
        b[0].style.transform = "translateX(" + sizey + "px)";

        b[0].style.transition = "2.7s";
        setTimeout(function () {
          b[0].style.display = "none";
          b[1].style.display = "flex";
          b[1].style.transition = "2.7s";

          b[1].style.transform = "translateX(" + (-sizex) + "px)";
          w.style.borderRadius = "20px 0px 0px 20px";


        }, 450);

      }
      continue;
    }


  }
  //  console.log("befor"+sizey);
}
//signin
//username checker
function callun() {
  var uname = document.getElementById("username").value;
  console.log("data" + uname);
  console.log("the username" + uname);
  if (uname == "") {
    document.getElementById("un").innerHTML = "Enter the userName";
  } else {
    document.getElementById("un").innerHTML = "";
  }
}
//password checker
function callpd() {
  var pwd = document.getElementById("pwd").value;
  if (pwd == "") {
    document.getElementById("pd").innerHTML = "enter the password";
  } else {
    document.getElementById("pd").innerHTML = "";
  }
}
function lg() {

  var uname = document.getElementById("username").value;
  console.log(uname)
  var boo = false;
  var pwd = document.getElementById("pwd").value;
  // alert("hello");
  if (uname == "") {
    document.getElementById("un").innerHTML = "Enter Username";
    boo = false;
    // return false;
  } else if (pwd == "") {
    document.getElementById("pd").innerHTML = "Enter Password";
    boo = false;
    //return false;
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);

      if (key.startsWith("AC")) {
        value = localStorage.getItem(key);
        var a3 = JSON.parse(value);
        if (uname == a3.username && pwd == a3.pwd) {
          // alert("ok");

          localStorage.setItem("identify", a3.accno);

          boo = true;
          break;
          //return true;
        }
      }

    }
    document.getElementById("log").style.display = "block";

  }
  if (boo == true) {
    console.log("dsfg" + boo);
    OTP = (Math.floor(Math.random() * (9999 - 1000) + 1000))
    alert(OTP);
    localStorage.setItem("OTP", OTP);
    // document.getElementsByClassName("login")[0].style.display="none";
    // document.getElementsByClassName("customer")[0].style.display="flex";
    dashboard();
    document.getElementById("otppop").style.display = "block";

    // document.getElementsByClassName("icon1")[1].style.display = "none";
    // document.getElementById("signout").style.display = "flex";
    // document.getElementsByClassName("sh")[0].style.display = "flex";
    // document.getElementsByClassName("sh")[1].style.display = "flex";
    // document.getElementsByClassName("sh")[2].style.display = "flex";
    // document.getElementsByClassName("sh")[3].style.display = "flex";

    // show(2);
  }
}
function OTPcheck() {
  if (document.getElementById("otpnumber").value == localStorage.getItem("OTP")) {
    document.getElementsByClassName("icon1")[1].style.display = "none";
    document.getElementById("signout").style.display = "flex";
    document.getElementsByClassName("sh")[0].style.display = "flex";
    document.getElementsByClassName("sh")[1].style.display = "flex";
    document.getElementsByClassName("sh")[2].style.display = "flex";
    document.getElementsByClassName("sh")[3].style.display = "flex";
    document.getElementById("otppop").style.display = "none";

    show(2);
  }
  else {
    setTimeout(function () {
      document.getElementById("warn").style.display = "none";
    }, 2000)
    document.getElementById("warn").style.display = "block";
  }
}

//registration
function reg() {
  var username = document.getElementById("Username");
  var fullname = document.getElementById("fullname");
  var accno = document.getElementById("accno");
  var ifsc = document.getElementById("ifsc");
  var branch = document.getElementById("branch");
  var pno = document.getElementById("pno");
  var balance = document.getElementById("balance");
  var pwd = document.getElementById("Pwd");
  var cpwd = document.getElementById("cpwd");
  var boo = false;
  if (username.value == "") {
    console.log("howdy hello");
    document.getElementById("getname").innerHTML = "Enter UserName";
    // return false;
  } else if (fullname.value == "") {
    console.log("howdy good morning");
    document.getElementById("getfull").innerHTML = "Enter fullname";
    //return false;
  } else if (accno.value == "") {
    document.getElementById("getacc").innerHTML = "Enter Account No";
    //return false;
  } else if (ifsc.value == "") {
    document.getElementById("getifsc").innerHTML = "Enter Ifsc";
    //return false;
  } else if (branch.value == "") {
    document.getElementById("city").innerHTML = "Enter Branch";
    //return false;
  } else if (pno.value == "") {
    document.getElementById("phone").innerHTML = "Enter Phone No";
    //return false;
  }
  else if (pno.value.length < 10 || pno.value.length > 10) {
    document.getElementById("phone").innerHTML =
      "phone no must be 10 ten digits";
    //return false;
  } else if (pno.value.match("[A-Z a-z]")) {
    document.getElementById("phone").innerHTML =
      "phone no must have digit only";
    // return false;
  }
  else if (pwd.value == "") {
    document.getElementById("passwordA").innerHTML = "Enter Password";
    //return false;
  }
  else if (pwd.length < 9) {
    document.getElementById("passwordL").innerHTML =
      "password must me atleast 8 characters";
    //return false;
  }
  else if (!pwd.value.match("[A-Z]")) {
    document.getElementById("passwordA").innerHTML = "must have one capital letter";
  } //else {
  //   document.getElementById("passwordA").innerHTML =
  //     "must have one capital letter";
  //   //return false;
  // }
  else if (!pwd.value.match("[0-9]")) {
    document.getElementById("passwordN").innerHTML = "must have atleast one number";
  } //else {
  //   document.getElementById("passwordN").innerHTML =
  //     "must have atleast one number";
  //   //return false;
  // }
  else if (!pwd.value.match("[!,@,#,$,%,^,&,*,(,)]")) {
    document.getElementById("passwordS").innerHTML = "must have atleast one special character";
  }// else {
  //   document.getElementById("passwordS").innerHTML =
  //     "must have atleast one special character";
  // }
  else if (cpwd.value == "") {
    document.getElementById("Cpassword").innerHTML =
      "Enter confirm password";
    //return false;
  } else if (cpwd.value.length > 1) {
    var pwd = document.getElementById("Pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    console.log("wait");
    if (pwd == cpwd) {
      document.getElementById("Cpassword").innerHTML = "";
      boo = true;
    } else {
      document.getElementById("Cpassword").innerHTML =
        "Password not matching";
      // return false;
    }

  }
  if (boo == true) {

    var obj = {
      username: username.value,
      fullname: fullname.value,
      accno: accno.value,
      ifsc: ifsc.value,
      branch: branch.value,
      pno: pno.value,
      balance: balance.value,
      pwd: pwd,
    };
    var str = JSON.stringify(obj);
    localStorage.setItem(accno.value, str);
    location.reload();
    //return true;
  }
}
//full name vfalidation
function full() {
  var fullname = document.getElementById("fullname").value;
  if (fullname == "") {
    document.getElementById("getfull").innerHTML = "Enter full name";
  } else {
    document.getElementById("getfull").innerHTML = "";
  }
}
//ifsc validation

function ifscval() {
  var ifsc = document.getElementById("ifsc").value;
  if (ifsc == "") {
    document.getElementById("getifsc").innerHTML = "Enter Ifsc";
  } else {
    document.getElementById("getifsc").innerHTML = "";
  }
}

//branch validation

function getbranch() {
  console.log("hai");
  var branch = document.getElementById("branch").value;
  if ((branch == "")) {
    document.getElementById("city").innerHTML = "Enter Branch";
  } else {
    document.getElementById("city").innerHTML = "";
  }
}

//validation
function getuser() {
  var username = document.getElementById("Username");
  for (var i = 0; i < localStorage.length; i++) {
    var getkey = localStorage.key(i.toString());
    if (getkey.startsWith("AC")) {
      var getitem = JSON.parse(localStorage.getItem(getkey));

      if (username.value == getitem.username) {

        document.getElementById("getname").innerHTML = "username Already available";
        console.log(username.value);
      } else {
        document.getElementById("getname").innerHTML = "";
      }
    }
  }
}
//account number validation
function accountval() {


  //   var txt=JSON.parse(s);
  //  var text= localStorage.getItem(accno);
  //  console.log("the value of account nos"+text)

  var accno = document.getElementById("accno").value;
  console.log("the accno value is" + accno);
  if (accno.startsWith("AC")) {
    for (var i = 0; i < localStorage.length; i++) {
      var s = localStorage.key(i);
      if (s.startsWith("AC")) {
        if (s == accno) {
          document.getElementById("getacc").innerHTML = "Account number already available";
          break;
        }
        document.getElementById("getacc").innerHTML = "";
        continue;

      }
    }

  } else {
    document.getElementById("getacc").innerHTML =
      "Account number must starts with AC";
  }
  // if (ints == accno) {
  //   document.getElementById("getacc").innerHTML = "";
  // } else {
  //   document.getElementById("getacc").innerHTML =
  //     "This account no is already present";
  // }
}
//phone number validation
function phoneval() {
  var pno = document.getElementById("pno").value;
  if (pno.match("[A-Z a-z]")) {
    document.getElementById("phone").innerHTML = "must have numbers only";
  } else if (
    !(
      pno.startsWith("9") ||
      pno.startsWith("8") ||
      pno.startsWith("7") ||
      pno.startsWith("6")
    )
  ) {
    document.getElementById("phone").innerHTML =
      "phone number must start with 9 or 8 or 7 or 6";
  } else if (pno.length < 10) {
    document.getElementById("phone").innerHTML = "must have 10 digits";
  } else {
    document.getElementById("phone").innerHTML = "";
  }
}
//passwordvalidation
function passval() {
  console.log("hello");
  var pwd = document.getElementById("Pwd").value;
  if (pwd.match("[A-Z]")) {
    document.getElementById("passwordA").innerHTML = "";
  } else {
    document.getElementById("passwordA").innerHTML = "must have one capital letter";
  }
  if (pwd.match("[0-9]")) {
    document.getElementById("passwordN").innerHTML = "";
  } else {
    document.getElementById("passwordN").innerHTML = "need atleast one number";
  }
  if (pwd.match("[!,@,#,$,%,^,&,*,(,)]")) {
    document.getElementById("passwordS").innerHTML = "";
  } else {
    document.getElementById("passwordS").innerHTML = "special character needed";
  }
  if (pwd.length < 9) {
    document.getElementById("passwordL").innerHTML =
      "password must be atleast 8 characters";
  } else {
    document.getElementById("passwordL").innerHTML = "";
  }
}
//confirm password validation
function Cpassval() {
  var pwd = document.getElementById("Pwd").value;
  var cpwd = document.getElementById("cpwd").value;
  if (pwd == cpwd) {
    document.getElementById("Cpassword").innerHTML = "";
  } else {
    document.getElementById("Cpassword").innerHTML =
      "Password not matching";
  }
}
var ifc = {
  BNR1000: "Madurai",
  BNR1001: "Chennai",
  BNR1002: "Dindidgul",
  BNR1003: "Erode",
  BNR1004: "Salem",
};
var strifsc = JSON.stringify(ifc);
localStorage.setItem("IFSC", strifsc);
function beneficiary()//beneficiary account validation 
{
  var ifsc = document.getElementById("tifsc");
  var branch = document.getElementById("tbranch");
  var bfc = document.getElementById("bac").value;

  if (!(bfc.startsWith("AC"))) {
    document.getElementById("val1").innerHTML = "Account no must starts with AC";
  }

  else if (bfc.length < 7 || bfc.length > 7) {
    document.getElementById("val1").innerHTML = "account no must be 7 seven digits "

  }
  else {
    document.getElementById("val1").innerHTML = "";
    var key = localStorage.getItem(bfc);
    console.log("hello how are" + key);
    if (key == null) {
      document.getElementById("val1").innerHTML = "no account present with this  number"
    }
    else {
      var fc = JSON.parse(key);
      console.log(fc);
      ifsc.value = fc.ifsc;
      console.log("the value of ifsc" + ifsc);
      branch.value = fc.branch;
      console.log("the value of branch" + branch);
    }
  }




}
//transaction method
function tm(a) {
  if (a == 0) {
    document.getElementById("btn-img").value = "IMPS";
    document.getElementById("btn-img1").value = ""
    document.getElementById("btn-img").style.boxShadow = " 0px 0px 0px 3px black"
    document.getElementById("btn-img1").style.boxShadow = "none"
  }
  if (a == 1) {
    document.getElementById("btn-img1").value = "NEFT"
    document.getElementById("btn-img").value = "";
    document.getElementById("btn-img1").style.boxShadow = " 0px 0px 0px 3px black"
    document.getElementById("btn-img").style.boxShadow = "none"
  }
  if (a == 3) {
    document.getElementById("btn-img1").style.boxShadow = "none"
    document.getElementById("btn-img").style.boxShadow = "none"
  }
}
//notification
function shownote() {
  if (note % 2 == 0) {
    note++;
    document.getElementById("note").style.display = "block";


  }
  else {
    note++;
    document.getElementById("note").style.display = "none";

  }
}
//transaction
function transaction() {
  var fromaccount = document.getElementById("taccno");
  var toaccount = document.getElementById("bac");
  var balance = document.getElementById("bal1");
  var transamount = document.getElementById("amount");
  var tmethod = [document.getElementById("btn-img"), document.getElementById("btn-img1")];
  var m;
  if (tmethod[0].value != "") {
    m = tmethod[0].value;
  }
  else if (tmethod[1].value != "") {
    m = tmethod[1].value;
  }


  var d = new Date();

  if (parseInt(balance.value) >= parseInt(transamount.value)) {
    var obj = {
      fromaccount: fromaccount.value,
      toaccount: toaccount.value,
      balance: balance.value,
      transamount: transamount.value,
      tdate: d.toString().substring(0, 24),
      tmethod: m,
    };
    var text = JSON.stringify(obj);

    var values = localStorage.getItem("random");
    localStorage.setItem(values, text);

    var id = parseInt(values) + 1;

    localStorage.setItem("random", id.toString());

    var fstr = localStorage.getItem(fromaccount.value);
    var fobj = JSON.parse(fstr);

    //from account
    console.log("before" + fobj.balance);
    // var st=JSON.stringify(fobj);
    var fst = fobj.balance;
    console.log("fst" + fst);
    var calc = (parseInt(fst) - parseInt(transamount.value)).toString();
    console.log("calc" + calc);
    fobj.balance = calc;
    console.log("bal" + fobj.balance);
    var st = JSON.stringify(fobj);
    localStorage.setItem(fromaccount.value, st);
    //for toaccount
    var tstr = localStorage.getItem(toaccount.value);
    console.log("toaccount" + toaccount.value);
    var tobj = JSON.parse(tstr);
    console.log("tobj" + tobj);
    var tst = tobj.balance;
    console.log("tst" + tst);
    tobj.balance = parseInt(tobj.balance) + parseInt(transamount.value);
    var sst = JSON.stringify(tobj);
    localStorage.setItem(toaccount.value, sst);

    //JSON.parse(localStorage.getItem("notificaton")).
    // for(var i=0;i<2;i++){

    //   var a=JSON.parse(localStorage.getItem("Notification"))[s+""][i]["price"];
    //   console.log(s);
    //   console.log(JSON.parse(localStorage.getItem("Notification"))[s+""][i]["price"])
    //   var x=document.createElement("p");
    //   x.innerHTML=a;
    //   document.getElementById("note").appendChild(x);
    //   }
    for (var i = 0; i < 11; i++) {

      // var a=JSON.parse(localStorage.getItem("Notification"))[toaccount.value+""][i];
      var a = localStorage.getItem("Notification");
      var b = JSON.parse(a);
      // var c=b[toaccount.value+""][i];


      if (b[toaccount.value + ""][i] == "") {
        b[toaccount.value + ""][i] = "Received Rs." + transamount.value + " from" + (fromaccount.value).substring(0, 5) + "XXX" + fobj.fullname;
        // console.log(c);
        localStorage.setItem("Notification", JSON.stringify(b));
        break;

      }
      else {
        continue;
      }
    }



    dashboard();
    document.getElementsByClassName("sucess")[0].style.display = "flex"
    document.getElementsByClassName("form")[0].style.display = "none";

    document.getElementById("bac").value = "";

    document.getElementById("amount").value = "";
    document.getElementById("tifsc").value = "";
    document.getElementById("tbranch").value = "";
    document.getElementById("btn-img").value = "";
    document.getElementById("btn-img1").value = "";
    tm(3);

    alert("transaction done successfully");

  }
  else {
    alert("balance is low");
  }
}
//dashboard
function dashboard() {
  var s = localStorage.getItem("identify");
  var val = localStorage.getItem(s);
  var txt = JSON.parse(val);
  document.getElementById("id1").value = txt.username;
  document.getElementById("id2").value = txt.fullname;
  document.getElementById("id3").value = txt.accno;
  document.getElementById("id4").value = txt.ifsc;
  document.getElementById("id5").value = txt.branch;
  document.getElementById("id6").value = txt.pno;
  console.log(txt.balance);
  document.getElementById("bal").addEventListener("click", function () {
    document.getElementById("bal").innerHTML = "Balance<br>" + "Rs." + txt.balance;
  })
  document.getElementsByClassName("btnclass")[0].addEventListener("click", function () {
    document.getElementsByClassName("manben")[0].style.display = "flex";
    document.getElementsByClassName("customer")[0].style.display = "none";
    document.getElementsByClassName("b-parent")[0].innerHTML = "";
    var Acno = localStorage.getItem("identify");
    var dstr = localStorage.getItem("BNF");
    var dobj = JSON.parse(dstr);
    for (var i = 0; i < 100; i++) {
      if (dobj[Acno][i + ""] == "") {
        break;
      }
      else {
        if (dobj[Acno][i + ""]["status"] == "Processing...") {
          var bparent = document.getElementsByClassName("b-parent");
          var blist = document.createElement("div");
          blist.className = "b-list";
          blist.innerHTML = "<div>" + dobj[Acno][i + ""]["benname"] + "<p><span  class='bac'>" + dobj[Acno][i + ""]["accno"] + "</span>" + dobj[Acno][i + ""]["ifsc"] + "<p> </div><p class='status-b' style='color:#f2a200'>" + dobj[Acno][i + ""]["status"] + "</p><buttonclass='pay' onclick='pay(" + i + ")' hidden>Pay</button>";
          bparent[0].appendChild(blist);
          continue;
        }
        else if (dobj[Acno][i + ""]["status"] == "rejected") {
          var bparent = document.getElementsByClassName("b-parent");
          var blist = document.createElement("div");
          blist.className = "b-list";
          blist.innerHTML = "<div>" + dobj[Acno][i + ""]["benname"] + "<p><span  class='bac'>" + dobj[Acno][i + ""]["accno"] + "</span>" + dobj[Acno][i + ""]["ifsc"] + "<p> </div><p class='status-b' style='color:red'>" + dobj[Acno][i + ""]["status"] + "</p><button class='pay' onclick='pay(" + i + ")' hidden>Pay</button>";
          bparent[0].appendChild(blist);
          continue;
        }


        else {
          var bparent = document.getElementsByClassName("b-parent");
          var blist = document.createElement("div");
          blist.className = "b-list";
          blist.innerHTML = "<div>" + dobj[Acno][i + ""]["benname"] + "<p><span  class='bac'>" + dobj[Acno][i + ""]["accno"] + "</span>" + dobj[Acno][i + ""]["ifsc"] + "<p> </div><p class='status-b' style='color:green'>" + dobj[Acno][i + ""]["status"] + "</p><button class='pay' onclick='pay(" + i + ")'>Pay</button>";
          bparent[0].appendChild(blist);
          continue;
        }

      }
    }



  })


  document.getElementById("name").innerHTML = txt.fullname;
  document.getElementById("bal1").value = txt.balance;
  document.getElementById("taccno").value = s;
  for (var i = 0; i < 11; i++) {

    var a = JSON.parse(localStorage.getItem("Notification"))[s + ""][i];
    //console.log(s);
    // console.log(JSON.parse(localStorage.getItem("Notification"))[s+""][i])
    if (a == "") {
      continue;
    }
    else {
      var x = document.createElement("p");
      x.innerHTML = a;
      document.getElementById("note").appendChild(x);
    }
  }

  history(s);
  //document.getElementById("p1").innerHTML = txt.fullname;

}
//for showing history
function history(s) {
  document.getElementsByClassName("history")[0].innerHTML = ""
  var ran = localStorage.getItem("random");
  console.log(ran);
  var unique = parseInt(ran);
  console.log(unique);
  for (i = unique - 1; i >= 100000; i--) {
    var t = localStorage.getItem(i.toString());
    var obj = JSON.parse(t);

    if (obj.fromaccount == s) {
      var name = JSON.parse(localStorage.getItem(obj.fromaccount)).fullname;
      var toname = JSON.parse(localStorage.getItem(obj.toaccount)).fullname;
      var card = document.createElement("div");
      card.className = "card";
      var paid = document.createElement("div");
      paid.className = "paid";
      var tick = document.createElement("img");
      tick.className = "tick";
      var dummy = document.createElement("div");
      var cost = document.createElement("span");
      cost.className = "cost";
      var Tdate = document.createElement("span");
      Tdate.className = "Tdate";
      var tid = document.createElement("div");
      tid.className = "tid";
      var t1 = document.createElement("span");
      t1.className = "span1";
      var t2 = document.createElement("span");
      t2.className = "traid";
      var tid1 = document.createElement("div");
      tid1.className = "tid";
      var t3 = document.createElement("span");
      t3.className = "span2";
      var t4 = document.createElement("span");
      t4.className = "span1";
      var tid2 = document.createElement("div");
      tid2.className = "tid";
      var t5 = document.createElement("span");
      t5.className = "span2";
      var t6 = document.createElement("span");
      t6.className = "span1";


      //paid
      tick.src = "https://p1.hiclipart.com/preview/471/586/466/green-check-mark-logo-drawing-line-circle-grass-symbol-png-clipart.jpg";
      paid.appendChild(tick);

      paid.appendChild(dummy);
      cost.style.color = "red";
      cost.innerHTML = "Paid ₹" + obj.transamount + "<br>";
      dummy.appendChild(cost);
      Tdate.innerHTML = obj.tdate;
      dummy.appendChild(Tdate);
      //tid
      t1.innerHTML = " Transaction ID : "
      tid.appendChild(t1);
      t2.innerHTML = i;
      tid.appendChild(t2);
      //tid1
      t3.innerHTML = "To:<span>" + name + "</span>";
      tid1.appendChild(t3);
      t4.innerHTML = "ACNO:<span>" + (obj.toaccount).substring(0, 5) + "XXX" + "</span>";
      tid1.appendChild(t4);
      //tid2
      t5.innerHTML = "From:<span>" + toname + "</span>";
      tid2.appendChild(t5);
      t6.innerHTML = "ACNO:<span>" + (obj.fromaccount).substring(0, 5) + "XXX" + "</span>"
      tid2.appendChild(t6);

      //card
      card.appendChild(paid);
      card.appendChild(tid);
      card.appendChild(tid1);
      card.appendChild(tid2);

      document.getElementsByClassName("history")[0].appendChild(card);


    }
    if (obj.toaccount == s) {
      var name = JSON.parse(localStorage.getItem(obj.fromaccount)).fullname;
      var toname = JSON.parse(localStorage.getItem(obj.toaccount)).fullname;
      var card = document.createElement("div");
      card.className = "card";
      var paid = document.createElement("div");
      paid.className = "paid";
      var tick = document.createElement("img");
      tick.className = "tick";
      var dummy = document.createElement("div");
      var cost = document.createElement("span");
      cost.className = "cost";
      var Tdate = document.createElement("span");
      Tdate.className = "Tdate";
      var tid = document.createElement("div");
      tid.className = "tid";
      var t1 = document.createElement("span");
      t1.className = "span1";
      var t2 = document.createElement("span");
      t2.className = "traid";
      var tid1 = document.createElement("div");
      tid1.className = "tid";
      var t3 = document.createElement("span");
      t3.className = "span2";
      var t4 = document.createElement("span");
      t4.className = "span1";
      var tid2 = document.createElement("div");
      tid2.className = "tid";
      var t5 = document.createElement("span");
      t5.className = "span2";
      var t6 = document.createElement("span");
      t6.className = "span1";


      //paid
      tick.src = "https://p1.hiclipart.com/preview/471/586/466/green-check-mark-logo-drawing-line-circle-grass-symbol-png-clipart.jpg";
      paid.appendChild(tick);

      paid.appendChild(dummy);
      cost.style.color = "#17ff55";
      cost.innerHTML = "Received ₹" + obj.transamount + "<br>";
      dummy.appendChild(cost);
      Tdate.innerHTML = obj.tdate;
      dummy.appendChild(Tdate);
      //tid
      t1.innerHTML = " Transaction ID : "
      tid.appendChild(t1);
      t2.innerHTML = i;
      tid.appendChild(t2);
      //tid1
      t3.innerHTML = "To:<span>" + name + "</span>";
      tid1.appendChild(t3);
      t4.innerHTML = "ACNO:<span>" + (obj.toaccount).substring(0, 5) + "XXX" + "</span>";
      tid1.appendChild(t4);
      //tid2
      t5.innerHTML = "From:<span>" + toname + "</span>";
      tid2.appendChild(t5);
      t6.innerHTML = "ACNO:<span>" + (obj.fromaccount).substring(0, 5) + "XXX" + "</span>"
      tid2.appendChild(t6);

      //card
      card.appendChild(paid);
      card.appendChild(tid);
      card.appendChild(tid1);
      card.appendChild(tid2);

      document.getElementsByClassName("history")[0].appendChild(card);
    }
  }
}
//ADmin LOgin
function login() {
  if (document.getElementById("uname").value == "admin" && document.getElementById("pass").value == "password") {
    return true;
  }
  else {
    alert("wrong password");
    return false;
  }
}


document.getElementById("btn-b1").addEventListener("click", function () {
  document.getElementsByClassName("benif")[0].style.display = "flex";


})
document.getElementById("close").addEventListener("click", function () {
  document.getElementsByClassName("benif")[0].style.display = "none";
})
document.getElementsByClassName("close")[0].addEventListener("click", function () {
  document.getElementsByClassName("benforms")[0].style.display = "none";
})
document.getElementById("btn-b2").addEventListener("click", function () {
  document.getElementsByClassName("manben")[0].style.display = "none";
  document.getElementsByClassName("customer")[0].style.display = "flex";

})
document.getElementById("btn-refresh").addEventListener("click", function () {
  document.getElementsByClassName("b-parent")[0].innerHTML = "";
  var Acno = localStorage.getItem("identify");
  var dstr = localStorage.getItem("BNF");
  var dobj = JSON.parse(dstr);
  for (var i = 0; i < 100; i++) {
    if (dobj[Acno][i + ""] == "") {
      break;
    }
    else {
      if (dobj[Acno][i + ""]["status"] == "Processing...") {
        var bparent = document.getElementsByClassName("b-parent");
        var blist = document.createElement("div");
        blist.className = "b-list";
        blist.innerHTML = "<div>" + dobj[Acno][i + ""]["benname"] + "<p><span  class='bac'>" + dobj[Acno][i + ""]["accno"] + "</span>" + dobj[Acno][i + ""]["ifsc"] + "<p> </div><p class='status-b' style='color:#f2a200'>" + dobj[Acno][i + ""]["status"] + "</p><buttonclass='pay' onclick='pay(" + i + ")' hidden>Pay</button>";
        bparent[0].appendChild(blist);
        continue;
      }
      else if (dobj[Acno][i + ""]["status"] == "rejected") {
        var bparent = document.getElementsByClassName("b-parent");
        var blist = document.createElement("div");
        blist.className = "b-list";
        blist.innerHTML = "<div>" + dobj[Acno][i + ""]["benname"] + "<p><span  class='bac'>" + dobj[Acno][i + ""]["accno"] + "</span>" + dobj[Acno][i + ""]["ifsc"] + "<p> </div><p class='status-b' style='color:red'>" + dobj[Acno][i + ""]["status"] + "</p><button class='pay' onclick='pay(" + i + ")' hidden>Pay</button>";
        bparent[0].appendChild(blist);
        continue;
      }


      else {
        var bparent = document.getElementsByClassName("b-parent");
        var blist = document.createElement("div");
        blist.className = "b-list";
        blist.innerHTML = "<div>" + dobj[Acno][i + ""]["benname"] + "<p><span  class='bac'>" + dobj[Acno][i + ""]["accno"] + "</span>" + dobj[Acno][i + ""]["ifsc"] + "<p> </div><p class='status-b' style='color:green'>" + dobj[Acno][i + ""]["status"] + "</p><button class='pay' onclick='pay(" + i + ")' >Pay</button>";
        bparent[0].appendChild(blist);
        continue;
      }

    }
  }
})
//benificiary add function
function benadd() {
  var data = document.querySelectorAll(".bendata");
  var values = { benname: data[0].value, accno: data[1].value, ifsc: data[3].value, nickname: data[4].value, status: "Processing..." };
  var Acno = localStorage.getItem("identify");
  var dstr = localStorage.getItem("BNF");
  var dobj = JSON.parse(dstr);
  for (var i = 0; i < 100; i++) {
    if (!(dobj[Acno][i + ""] == "")) {
      continue;
    }
    dobj[Acno][i + ""] = values;
    localStorage.setItem("BNF", JSON.stringify(dobj));
    var bparent = document.getElementsByClassName("b-parent");
    var blist = document.createElement("div");
    blist.className = "b-list";
    blist.innerHTML = "<div>" + data[0].value + "<p><span  class='bac'>" + data[1].value + "</span>" + data[3].value + "<p> </div><p class='status-b' style='color:red'>processing...</p><button class='pay' hidden>Pay</button>";
    bparent[0].appendChild(blist);
    break;

  }
  data[0].value = data[1].value = data[2].value = data[3].value = data[4].value = "";
  document.getElementsByClassName("benif")[0].style.display = "none";


}
//pay
function pay(i) {
  var bacc = document.getElementsByClassName("bac")[i].innerHTML;
  console.log(bacc);
  showcase(3);

  function showcase(a) {
    // alert("hello"+a);
    var b = [document.getElementsByClassName("welcome")[0], document.getElementsByClassName("login")[0], document.getElementsByClassName("maindash")[0], document.getElementsByClassName("transaction")[0], document.getElementsByClassName("history")[0]];

    for (var i = 0; i < 5; i++) {
      if (i == a) {

        b[i].style.display = "flex";
        document.getElementById("bac").value = bacc;

        continue;
      }

      b[i].style.display = "none";

    }


  }
}
// var image = document.getElementsByClassName("im1");
// var cw = image[0].clientWidth;
// var counter = 1;
// // var count2 = 0;
// var i = 0;
// var a = document.getElementsByClassName("card2");
// setInterval(function () {
//   document.getElementsByClassName("card2")[0].style.transform = "translateX(" + -cw * counter + "px)";
//   document.getElementsByClassName("card2")[0].style.transition = "all 1s"
//   console.log(cw);


//   if (image[i].id == "firstimg") {
//     counter = 0;
//     i = 0;
//     document.getElementsByClassName("card2")[0].style.transform = "translateX(" + -cw * counter + "px)";
//     document.getElementsByClassName("card2")[0].style.transition = "all 1s"
//   }
//   counter++;
//   i++;


//   // count2++;

// }, 3000);
//hand
//forget password
function forget() {
  document.getElementById("forgetpass").style.display = "block";
}
//passchange
function fcheck() {
  var check = false;
  var data = document.querySelectorAll(".fdata");
  for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if (key.startsWith("AC")) {
      value = localStorage.getItem(key);
      var a3 = JSON.parse(value);
      if (data[0].value == a3.username && data[1].value == a3.pno) {
        // alert("ok");

        localStorage.setItem("identify", a3.accno);
        a3.pwd = data[2].value;
        localStorage.setItem(a3.accno, JSON.stringify(a3));

        check = true;
        break;
        //return true;
      }
    }

  }
  if (check == true) {
    document.getElementById("forgetpass").style.display = "none";
    setTimeout(function () {
      document.getElementsByClassName("psuccess")[0].style.display = "none";
    }, 2000)
    document.getElementsByClassName("psuccess")[0].style.display = "block";


  }
  else {
    document.getElementById("forgetpass").style.display = "none";
    //alert("changing password action failed");
    setTimeout(function () {
      document.getElementsByClassName("pfail")[0].style.display = "none";
    }, 2000)
    document.getElementsByClassName("pfail")[0].style.display = "block";
  }
}