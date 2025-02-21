function fetchUserData(userID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user={id:userID,name:'john doe',type:'premium'};
            resolve(user);
        },1000);
    });
}
function fetchUserSettings(userType){
    return new Promise ((resolve,reject)=>{
        console.log("fetching settings for usertype:$(userType)");
        const settings=userType==='premium'
        ?{theme:'dark',notifications:true,accessLevel:'high'}
        :{theme:'light',notifications:false,accessLevel:'low'};
        resolve(settings);
});
}
fetchUserData(1)
.then(user=>fetchUserSettings(user.type))
.then(details=>{console.log(details)})
.then(error=>{console.log(error)})