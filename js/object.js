let a=[]
while(true){
    choice=prompt("[1] Add student details \n [2] Display details \n [3] Edit details \n [4] Delete student \n [5] Exit \n Enter your choice: ")
    if(choice==1){
        std_name =prompt("Enter the name: ")
        std_age=prompt("Enter the age: ")
        a.push({name:std_name,age:std_age})
    }
    else if(choice==2){
        str=``
        for(i in a){
            str+=`[${+i+1}] ${a[i].name} ${a[i].age} \n`
        }
        alert(str)
    }

    else if(choice==3){
        index=prompt("Enter the index of data to edit: ")
        new_age=prompt("Enter the new age: ")
        a[index-1].age=new_age
    }
    else if(choice==4){
        del=prompt("Enter the index of student to delete: ")
        a.splice(a[del-1],1)
        // a.splice(a.indexOf(del-1),1)
    }
    else if(choice==5){
        break
    }
    else{
        alert("Invalid choice")
    }
}