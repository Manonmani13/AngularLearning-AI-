class Student{
    name:string;
    age:number;
    mark:number;

    geStudentGrade():string{
        if(this.mark>=75){
            return "A";
        }
        else if(this.mark>=65 && this.mark<60){
            return "B";
        }
        else {
            return "C";
        }
    }

}