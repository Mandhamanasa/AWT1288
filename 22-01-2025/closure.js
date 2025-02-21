function outer(name)
{
    var msg="welcome";
    function inner(){
        console.log(`${msg}to ${name}`)
    }
    return inner;
}
let inner=outer("cvr");
inner()      