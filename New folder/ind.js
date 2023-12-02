function validate() {
      
    if( document.myForm.FName.value == "" ) {
       alert( "Please provide your first name!" );
       document.myForm.FName.focus() ;
       return false;
    }
    if( document.myForm.LName.value == "" ) {
        alert( "Please provide your last name!" );
        document.myForm.LName.focus() ;
        return false;
     }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.phoneNo.value == "" || isNaN( document.myForm.phoneNo.value ) ||
       document.myForm.phoneNo.value.length != 10 ) {
       alert( "Please provide a phone number in the format 0## ### ####." );
       document.myForm.phoneNo.focus() ;
       return false;
    }
    
 function validateEmail() {
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.myForm.EMail.focus() ;
       return false;
    }
    return( true );
 }