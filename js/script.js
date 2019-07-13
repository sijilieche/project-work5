// 获取主体部分注册项元素
var username = document.getElementById('username'), //用户名输入框
    loginPwd = document.getElementById('loginPwd'), //登录密码输入框
    confirmPwd = document.getElementById('confirmPwd'), //确认密码输入框
    name1 = document.getElementById('name1'), //姓名输入框
    IDNumber = document.getElementById('IDNumber'), //证件号码输入框
    mailbox = document.getElementById('mailbox'), //邮箱输入框
    cellphoneNumber = document.getElementById('cellphoneNumber'), //手机号码输入框
    hint1 = document.getElementsByClassName('hint1')[0]; //用户名后的文本
hint2 = document.getElementsByClassName('hint2')[0], //登录密码后的3个小方块
    hint2__span = hint2.querySelectorAll('span'), //获取每个小方块
    passwordHint = document.getElementById('passwordHint'), //登录密码下面的提示
    hint3 = document.getElementsByClassName('hint3')[0], //确认密码后的文本
    hint4 = document.getElementsByClassName('hint4')[0], //姓名填写规则后的文本
    prompt = document.getElementById('prompt'), //姓名填写规则提示文本框
    hint6 = document.getElementsByClassName('hint6')[0], //证件输入框后的文本
    hint7 = document.getElementsByClassName('hint7')[0], //邮箱后的文本
    hint8 = document.getElementsByClassName('hint8')[0], //手机号码后的文本
    main__next = document.getElementsByClassName('main__next')[0], //下一步按钮
    clause = document.getElementById('clause'), // 条款
    imooc = document.getElementsByClassName('imooc')[0], //我的IMOOC
    spinner1 = document.getElementsByClassName('spinner1')[0], //我的IMOOC下拉列表
    spinnerItem = spinner1.getElementsByTagName('div'); //我的IMOOC下拉列表每一项
var reg = /正则/; //正则

var test1 = false, //默认用户名填写错误时为false
    test2 = false, //默认登录密码填写错误时为false
    test3 = false, //默认确认密码填写错误时为false
    test4 = false, //默认姓名填写错误时为false
    test6 = false, //默认证件号码填写错误时为false
    test7 = false, //默认邮箱填写错误时为false
    test8 = false, //默认手机号码填写错误时为false
    test9 = false; //默认条款没有勾选时为false
// 用户名输入框
username.onblur = function () {
    var reg = /^[a-zA-Z]+\w{5,29}$/;
    if (this.value == "") {
        hint1.innerHTML = "请输入6-30位字母、数字或'_'，字母开头的用户名";
        hint1.style.color = 'red';
    } else if (!reg.exec(this.value)) {
        hint1.innerHTML = "请以6-30位字母、数字或'_'，字母开头";
        hint1.style.color = 'red';
    } else if (reg.exec(this.value)) {
        hint1.innerHTML = "用户名输入正确";
        hint1.style.color = 'green';
        test1 = true;
    }
}
// 密码输入框
loginPwd.onblur = function () {
    var reg = /^[a-zA-Z\d\W]{6,20}$/;
    if (loginPwd.value == "") {
        passwordHint.style.display = "block";
        hint2.style.display = "inline-block";
    } else if (!reg.exec(loginPwd.value)) {
        passwordHint.style.display = "block";
        hint2.style.display = "inline-block";
    } else if (reg.exec(loginPwd.value)) {
        var regNumber = /^\d{6,20}$/,
            regLetter = /^[a-zA-Z]{6,20}$/,
            regSymbol = /^\W{6,20}$/;
        if (regNumber.exec(this.value) ||
            regLetter.exec(this.value) ||
            regSymbol.exec(this.value)) {
            hint2.style.display = "inline-block";
            hint2__span[0].style.backgroundColor = 'red';
            passwordHint.style.display = "none";
        } else if (/^[\da-zA-Z]{6,20}$/.exec(this.value) ||
            /^[\d\W]{6,20}$/.exec(this.value) ||
            /^[a-zA-Z\W]{6,20}$/.exec(this.value)) {
            hint2.style.display = "inline-block";
            hint2__span[0].style.backgroundColor = 'red';
            hint2__span[1].style.backgroundColor = 'orange';
            passwordHint.style.display = "none";
        } else if (/^[a-zA-Z\d\W]{6,20}$/.exec(this.value)) {
            hint2.style.display = "inline-block";
            hint2__span[0].style.backgroundColor = 'red';
            hint2__span[1].style.backgroundColor = 'orange';
            hint2__span[2].style.backgroundColor = 'green';
            passwordHint.style.display = "none";
        }
        test2 = true;
    }
}
// 确认密码
confirmPwd.onblur = function () {
    if (this.value == "") {
        hint3.innerHTML = "密码不能为空";
        hint3.style.color = 'red';
    } else if (this.value != loginPwd.value) {
        hint3.innerHTML = "两次密码输入不一致，请重新输入";
        hint3.style.color = 'red';
    } else if (this.value == loginPwd.value) {
        hint3.innerHTML = "两次密码输入一致";
        hint3.style.color = 'green';
        test3 = true;
    }
}
// 姓名
name1.onblur = function () {
    var reg = /^[\u4e00-\u9fa5a-zA-Z]{3,30}$/;
    if (this.value == "") {
        hint4.innerHTML = "姓名不能为空";
        hint4.style.color = 'red';
        hint4.style.textDecoration = "none";
    } else if (!reg.exec(this.value)) {
        hint4.innerHTML = "姓名只能包含中文或者英文,且字符在3-30个之间！";
        hint4.style.color = 'red';
        hint4.style.textDecoration = "none";
    } else if (reg.exec(this.value)) {
        hint4.innerHTML = "姓名输入正确";
        hint4.style.color = 'green';
        test4 = true;
        hint4.style.textDecoration = "none";
    }
}
// 证件输入框
IDNumber.onblur = function () {
    var reg = /^[\d]{17}[\dxX]$/;
    if (this.value == "") {
        hint6.innerHTML = "身份证号码不能为空";
        hint6.style.color = 'red';
    } else if (!reg.exec(this.value)) {
        hint6.innerHTML = "请输入18位身份证号码";
        hint6.style.color = 'red';
    } else if (reg.exec(this.value)) {
        hint6.innerHTML = "号码输入正确";
        hint6.style.color = 'green';
        test6 = true;
    }
}
// 邮箱输入框
mailbox.onblur = function () {
    var reg = /^[\da-zA-Z_-]+@[\da-zA-Z_-]+\.[\da-zA-Z_-]+$/;
    if (this.value == "") {
        hint7.innerHTML = "邮箱不能为空";
        hint7.style.color = 'red';
    } else if (!reg.exec(this.value)) {
        hint7.innerHTML = "请输入正确的邮箱";
        hint7.style.color = 'red';
    } else if (reg.exec(this.value)) {
        hint7.innerHTML = "邮箱格式正确";
        hint7.style.color = 'green';
        test7 = true;
    }
}
// 手机号码
cellphoneNumber.onblur = function () {
    var reg = /^[1][03-9]\d{9}$/;
    if (this.value == "") {
        hint8.innerHTML = "手机号码不能为空";
        hint8.style.color = 'red';
    } else if (!reg.exec(this.value)) {
        hint8.innerHTML = "您输入的手机号码不是有效的格式！";
        hint8.style.color = 'red';
    } else if (reg.exec(this.value)) {
        hint8.innerHTML = "手机格式正确";
        hint8.style.color = 'green';
        test8 = true;
    }
}
// 条款
clause.onclick = function () {
    if (!this.checked) {
        test9 = false;
    } else {
        test9 = true;
    }
}
// 提交验证
main__next.onclick = function () {
    if (test1 == false || test2 == false || test3 == false || test4 == false || test6 == false || test7 == false || test8 == false || test9 == false) {
        // 如果有不正确的，就无法跳转
        alert("请按照要求完整填写信息！");
    } else {
        // 表单中的输入框输入格式都正确的话，点击下一步按钮，跳转到慕课网网站
        return window.location.href = "http://www.imooc.com";
    }
}
// 当鼠标划过“姓名填写规则”时，变小手状，且在右下方出现文本提示框
hint4.onmouseover = function () {
    this.style.cursor = "pointer";
    prompt.style.display = "inline-block";
}
// 鼠标离开“姓名填写规则”时，回到原来的状态
hint4.onmouseout = function () {
    this.style.cursor = "none";
    prompt.style.display = "none";
}
// 当鼠标划过文本提示框时，文本提示框显示
prompt.onmouseover = function () {
    prompt.style.display = "inline-block";
}
// 当鼠标离开文本提示框时，文本提示框隐藏
prompt.onmouseout = function () {
    prompt.style.display = "none";
}
//  当鼠标划过提交按钮时，变小手状，且按钮的背景颜色有变化
main__next.onmouseover = function () {
    this.style.cursor = "pointer";
    this.style.backgroundColor = "#FF6600";
}
// 当鼠标离开提交按钮时，回到原来的状态
main__next.onmouseout = function () {
    this.style.cursor = "auto";
    this.style.backgroundColor = "rgb(251, 116, 3)";
}
// 当鼠标划过头部右侧选项的“我的IMOOC”时，鼠标变小手状，出现下拉列表
imooc.onmouseover = function () {
    this.style.cursor = "pointer";
    this.style.color = "rgb(251, 116, 3)";
    spinner1.style.display = "inline-block";
}
//  当鼠标离开头部右侧选项的“我的IMOOC”时.回到原来的状态
imooc.onmouseout = function () {
    this.style.cursor = "none";
    this.style.color = "black";
    spinner1.style.display = "none";
}
// 当鼠标划过下拉列表时，下拉列表显示
spinner1.onmouseover = function () {
    spinner1.style.display = "inline-block";
}
// 当鼠标离开下拉列表时，下拉列表隐藏
spinner1.onmouseout = function () {
    spinner1.style.display = "none";
}
// 鼠标划过列表中的每一项内容时变小手状且字体颜色发生变化
for (var i = 0; i < spinnerItem.length; i++) {
    spinnerItem[i].onmouseover = function () {
        this.style.cursor = "pointer";
        this.style.color = "red";
    }
    spinnerItem[i].onmouseout = function () {
        this.style.cursor = "none";
        this.style.color = "rgb(125, 126, 129)";
    }
}