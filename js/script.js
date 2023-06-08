var slideIndex = 1;
showDivs (slideIndex);
        function plusDivs (n) {
        showDivs ((slideIndex += n));    
        }

        function showDivs(n) {
            var i;
            var imgList = document.getElementsByClassName("img-slideshow");
            if (n > imgList.lenght) {slideIndex = 1}               
            else if (n < 1) slideIndex = imgList.lenght;            
            for(i = 0; i < imgList.lenght; i++) {
                imgList[i].style.display = "none";
            } 
            imgList[slideIndex - 1].style.display = "block";
        }   
        setInterval(() => {
            plusDivs(1);
        }, 1000);
          

        


    function validateForm(){
        var name = document.forms["message-form"]["full-name"].value;
        var name = document.forms["message-form"]["birth-date"].value;
        var name = document.forms["message-form"]["gender"].value;
        var name = document.forms["message-form"]["messages"].value;

        if (name == "")(birth-date == "")(gender == "")(messages == "");{
            alert("input tidak boleh kosong");
            return false;
        }
        document.getElementsById["sender-full-name"].InnerText - name;
        document.getElementsById["sender-birth-date"].InnerText - date;
        document.getElementsById["sender-gender"].InnerText - gender;
        document.getElementsById["sender-messages"].InnerText - messages;
        return false;
    }
