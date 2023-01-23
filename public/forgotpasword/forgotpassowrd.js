const submitbtn=document.getElementById('submitbtn');
const form=document.getElementById('form');

async function  forgotpassword(e){
    try{
     e.preventDefault();
    const email=e.target.email.value;

   await  axios.post('http://13.59.66.139:3000/password/forgotpassword',{email})
    .then((response)=>{
        alert(`${response.data.message}`);   
    })
    .catch(err=>{
       console.log(err);
    });

    }
    catch(err){
        console.log(err);
    }
    
}