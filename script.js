            const form=document.getElementById('form');
            const email=document.getElementById('email');
            const username=document.getElementById('username');
            const course=document.getElementById('course');
            const studentID=document.getElementById('studentID');
            const level=document.getElementById('level');
            const date=document.getElementById('date');
            const phone=document.getElementById('phone');
            const complaintType=document.getElementById('complaintType');
            const complaintDetails=document.getElementById('complaintDetails');

            form.addEventListener('submit',(e)=>{
                e.preventDefault();
                
            });
            

        
            function setErrorFor(input,message){
                const formControl = input.parentElement;  
                formControl.className = 'form-control error';  
                const small = formControl.querySelector('small');
                small.innerHTML = message;   
            }
            function setSuccessFor(input){
                const formControl = input.parentElement;  
                formControl.className = 'form-control success';   
            }
            function setErrorFor(select,message){
                const formControl = select.parentElement;  
                formControl.className = 'form-control error';  
                const small = formControl.querySelector('small');
                small.innerHTML = message;   
            }
            function setSuccessFor(select){
                const formControl = select.parentElement;  
                formControl.className = 'form-control success';   
            }
        
            form.addEventListener('submit',function(e){
                e.preventDefault();
                
                if (email.value === '') {
                    setErrorFor(email, 'This field is required');
                } else {
                    setSuccessFor(email);
                }
                if (username.value === '') {
                    setErrorFor(username, 'This field is required');
                } else {
                    setSuccessFor(username);
                }
                if (course.value === '') {
                    setErrorFor(course, 'This field is required');
                } else {
                    setSuccessFor(course);
                }
            
                if (studentID.value === '') {
                    setErrorFor(studentID, 'This field is required');
                } else {
                    setSuccessFor(studentID);
                }
            
                if (level.value === '') {
                    setErrorFor(level, 'This field is required');
                } else {
                    setSuccessFor(level);
                }
            
                if (date.value === '') {
                    setErrorFor(date, 'This field is required');
                } else {
                    setSuccessFor(date);
                }
            
                if (phone.value === '') {
                    setErrorFor(phone, 'This field is required');
                } else {
                    setSuccessFor(phone);
                }
                if (complaintType.value === '') {
                    setErrorFor(complaintType, 'This field is required');
                } else {
                    setSuccessFor(complaintType);
                }
                if (complaintDetails.value === '') {
                    setErrorFor(complaintDetails, 'This field is required');
                } else {
                    setSuccessFor(complaintDetails);
                }

              
              
            });
           
        
        
        
