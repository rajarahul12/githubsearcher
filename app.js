//Init Github
const github = new GitHub();
//Init UI
const ui=new UI();
//Search input
const searchUser = document.getElementById('searchUser');
//Search Input Event Listener
searchUser.addEventListener('keyup',(e)=>{
    //Get Input Text
    const userText=e.target.value;
    if(userText!=''){
        //Make HTTP Call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==='Not Found'){
                //show alert
                ui.showAlert('User not found','alert alert-danger');
            }else{
                //Show Profile
                ui.showProfile(data.profile);
                //Show Repositories
                ui.showRepos(data.repos);
            }  
        }   
        );
    }
    else{
        //Clear Profile
        ui.clearProfile();
    }
    e.preventDefault();
})