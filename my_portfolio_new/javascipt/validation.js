

function validate1(){
    //reset commment
    
    let name_node=document.getElementById("fname");
    let span_name=document.getElementById("error1");
    
    span_name.innerHTML="";

    let fname=name_node.value;
    if(fname.length==0){
        span_name.innerHTML="*this feild is required";
        name_node.style.border="2px solid red";
        return false;
    }
    
    if(fname.length<3){
        span_name.innerHTML="*name is too short";
        name_node.style.border="2px solid red";
        return false;
    }
    name_node.style.border="2px solid green";
    return true;
}

function validate2(){

    //reset comment
    
    let email_node=document.getElementById("femail");
    let span_name=document.getElementById("error2");
    
    span_name.innerHTML="";
    let femail=email_node.value;

    if(femail.length==0){
        span_name.innerHTML="*this feild is required";
        email_node.style.border="2px solid red";
        return false;
    }

    let subs=femail.substring(femail.indexOf('@')+1);

    if(!femail.includes('@')||subs.length==0){
        span_name.innerHTML="*not a valid email";
        email_node.style.border="2px solid red";
        return false;
    }
    
    email_node.style.border="2px solid green";
    return true;
}

function validate3(){
    //reset commment
    
    let sub_node=document.getElementById("fsubject");
    let span_name=document.getElementById("error3");
    
    span_name.innerHTML="";

    let fsubject=sub_node.value;
    if(fsubject.length==0){
        span_name.innerHTML="*this feild is required";
        sub_node.style.border="2px solid red";
        return false;
    }
    
    if(fsubject.length>50){
        span_name.innerHTML="*subject is too long";
        sub_node.style.border="2px solid red";
        return false;
    }

    if(fsubject.length<6){
        span_name.innerHTML="*subject is too short";
        sub_node.style.border="2px solid red";
        return false;
    }
    sub_node.style.border="2px solid green";
    return true;
}

function validate4(){
    //reset commment
    
    let text_node=document.getElementById("textArea");
    let span_name=document.getElementById("error4");
    
    span_name.innerHTML="";

    let ftext=text_node.value;
    if(ftext.length==0){
        span_name.innerHTML="*this feild is required";
        text_node.style.border="2px solid red";
        return false;
    }
    
    if(ftext.length>150){
        span_name.innerHTML="*message is too long";
        text_node.style.border="2px solid red";
        return false;
    }

    if(ftext.length<6){
        span_name.innerHTML="*message is too short";
        text_node.style.border="2px solid red";
        return false;
    }
    text_node.style.border="2px solid green";
    return true;
}


function validate(){

    if(validate1()&& validate2() && validate3()&& validate4())
        return true;
    return false;
}