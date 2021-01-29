$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:15
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:15
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:16,
                alphanumeric:true
                //number:true,    
            },
            Birthday:{
                required:true,
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"please enter first name",
                minlength:"please enter a name above 4 characters",
                maxlength:"please enter name below 15 characters "
            },
            sname:{
                required:"please enter first name",
                minlength:"please enter a name above 4 characters",
                maxlength:"please enter name below 15 characters "
            },
            emailAddress:{
                required:"please enter emailaddress"
            },
            password:{
                required:"please enter the password",
                minlength:"plese enter password above 8 characters",
                maxlength:"please enter the password below 16 characters",
                alphanumeric:"please enter password with alphanumeric charecters "
            },
            Birthday:{
                required:"please enter the day "
            },
            month:{
                required:"please enter the month"
            },
            year:{
                required:"please enter the year"
            },
            gender:{
                required:"please enter your gender"
            }

          
        }
             
    })
})