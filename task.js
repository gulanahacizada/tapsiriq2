class User{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }

    rename(name){
        this.name=name;
    }
}
class UsersList{
    constructor(){
        this.users=[];
        this.currentId=1;
    }
    addUser(name){
        let user=new User(name,this.currentId);
        this.users.push(user);
        this.currentId++;
        return user
    
    }
    removeUser(id){
      const  index=this.users.findIndex(user=>user.id===id)
      if(index !==0){
          this.users.splice(index,1)
      }
    }
    renameUser(id,name){
        const user=this.users.findIndex(user=>user.id===id)
        if(user){
            user.name=this.name
            // user.rename(name);
        }
    }
    getAllUserString(){

        return this.users.map((users)=>{
              `${users.id}; ${users.name}`
        })
        
    }
}
class Application{
    constructor(){
        this.userList = new UsersList();
    }
    init(){
  
        while(true){
            
            let emr=prompt("Emrleri daxil edin:'1,name'-create ,'2,id,name'-rename ,'3,name'-remove emrini ifade edir.");
    //    let emr1 = (emr.split(","))[1]
    //  console.log(emr1)
    console.log(emr)
            let a= emr != null ? emr.split("-") : "cancel oldu";
            // console.log(a[1])
        this.userList.addUser(a[1])
        console.log( this.userList.addUser(a[1]));
         if(emr==null){
                    console.log(this.userList.getAllUserString())
                    break;
                }
            // console.log(a)
                    switch(emr[0]){
                        case '1':
                       this.userList.addUser(a[1]);
                    break;
                        case '2':
                      this.userList.renameUser(a[1],a[2]);
                      break;
                        case '3':
                     this.userList.removeUser(a[1])
                     break;
                        default:
                        alert("Yanlis daxil etdiniz")
                    }
                
            
            }
            
        }
    }

const app = new Application();
app.init();
