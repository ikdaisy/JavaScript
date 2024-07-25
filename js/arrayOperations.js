let a=[]
while(true){
    choice=prompt("[1] Add data \n [2] Display data \n [3] Edit data \n [4] Delete data \n [5] Exit \n Enter your choice: ")
    if(choice==1){
        data=prompt("Enter the data: ")
        a.push(data)
    }

    else if(choice==2){
        str=``
        for(i in a){
            str+=`[${+i+1}] ${a[i]} \n`
        }
        alert(str)
    }
    else if(choice==3){
        index=prompt("Enter the index of data to edit: ")
        replace=prompt("Enter the data to replace: ")
        a[index-1]=replace
    }
    else if(choice==4){
        del=prompt("Enter the index of data to delete: ")
        a.splice(a.indexOf(del-1),1)
    }
    else if(choice==5){
        break
    }
    else{
        alert("Invalid choice")
    }



}