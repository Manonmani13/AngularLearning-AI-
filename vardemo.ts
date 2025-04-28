var index=0;
for(var index=0;index<=5;index++){
    console.log(index);
}
console.log("outside"+index)

function display(){
    let msg:string="welcome to ashok it";
    {
        let msg:string="welcome to angular";
        console.log("inside block "+msg);
    }
    console.log("outside the block"+msg);
}