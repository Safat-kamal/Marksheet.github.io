function calculate(){
    var bio = document.getElementById('bio').value;
    var ch  = document.getElementById('chem').value;
    var eng = document.getElementById('eng').value;
    var math = document.getElementById('math').value;
    var phy = document.getElementById('phy').value;

    if(bio == '' || ch == '' || eng =='' || math == '' || phy == ''){
        alert("Please Fill Marks Of All The Subjects");
    }
    else if(isNaN(bio) || isNaN(ch) || isNaN(eng) || isNaN(phy)){
        alert("Not Allowed! Please Enter Valid Marks Only.");
    }
    else{
        var total = parseFloat(bio)+parseFloat(ch)+parseFloat(eng)+parseFloat(math)+parseFloat(phy);
        var percent = ((total/500)*100).toFixed(2);
        var grade = " ";
        if(percent <= 100  && percent >= 80 ){
            grade = 'A';
        }
        else if(percent < 80 && percent >= 70){
            grade = 'B';
        }
        else if(percent < 70 && percent >=60){
            grade = 'C';
        }
        else if(percent < 60 && percent >=50){
            grade = 'D';
        }
        else if(percent < 50 && percent >=40){
            grade = 'E';
        }
        else{
            grade = 'F';

        }
        if(percent >= 40){
            document.getElementById('show').innerHTML=`Congratulations! You are Pass. You scored ${total} out of ${500}, Hence your total percentage is ${percent}% and you received ${grade} Grade.`;
            document.getElementById('show').style.color="#009900";
            setTimeout(() => {
                location.href='index.html';
            }, 15000);

        }
        else{
            document.getElementById('show').innerHTML=`Sorry! You are Fail. You scored ${total} only out of ${500}, Hence your total percentage is ${percent}% and you received ${grade} Grade.`;
            document.getElementById('show').style.color="#ff0000";
            setTimeout(() => {
                location.href='index.html';
            }, 15000);
        }


        
    }
    
    
}