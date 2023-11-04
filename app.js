let btn=document.querySelectorAll("button");
let ul=document.querySelector("ul")
let z=document.querySelector(".z")
let r=document.querySelector(".r")
let list=document.querySelector(".list")
let x=document.querySelector(".x")
let inp=document.querySelector("input")

btn.forEach((e)=>{
    e.addEventListener("click",()=>{
        let li=document.createElement("li");
    let lr=inp.value;
   
    if(lr!==""){
        ul.style.display="block"
        list.style.display="block"
        ul.append(li);
        li.innerText = lr

        let img=document.createElement("img")
        img.src="./image/x.svg"
        img.addEventListener("mouseover",()=>{
            img.src="./image/xr.svg"
        })
        img.addEventListener("mouseout",()=>{
            img.src="./image/x.svg"
        })
        img.style.width="15px"

        img.addEventListener("click",(e)=>{
            e.preventDefault()
            e.target.parentElement.remove();
            })            
        li.append(img)
        ul.append(li);
        inp.value=""
    } if(ul.childElementCount===0){
        list.style.display="none"
        ul.style.display="none"
     }
})
})

x.addEventListener("click",()=>{
   inp.value=""
    })  
''
z.addEventListener("click",()=>{
    r.style.display="block"
    z.style.display="none"
 
    let arr=[]
let childrenUL = [...ul.children]
    childrenUL.forEach((e)=>{
        let v=e.innerText
        arr.push(v);
        
    })
    arr.sort()  
    ul.innerHTML = ""
    arr.forEach((e)=>{
        let li1=document.createElement("li");
        li1.innerText=e

        let img=document.createElement("img")
        img.src="./image/x.svg"
        img.addEventListener("mouseover",()=>{
            img.src="./image/xr.svg"
        })
        img.addEventListener("mouseout",()=>{
            img.src="./image/x.svg"
        })
        img.style.width="15px"

        img.addEventListener("click",(e)=>{
            e.preventDefault()
            e.target.parentElement.remove();
            })            
        li1.append(img)
        ul.append(li1)
    })
    
    })
    
r.addEventListener("click",()=>{
    r.style.display="none"
    z.style.display="block"
    let arr2=[]
    let childrenUl = [...ul.children]
        childrenUl.forEach((e)=>{
            let l=e.innerText
            arr2.push(l);
            
        })
    arr2.sort()
    arr2.reverse()
    ul.innerHTML = ""
    arr2.forEach((e)=>{
        let li2=document.createElement("li");
        li2.innerText=e

        let img=document.createElement("img")
        img.src="./image/x.svg"
        img.addEventListener("mouseover",()=>{
            img.src="./image/xr.svg"
        })
        img.addEventListener("mouseout",()=>{
            img.src="./image/x.svg"
        })
        img.style.width="15px"

        img.addEventListener("click",(e)=>{
            e.preventDefault()
            e.target.parentElement.remove();
            })            
        li2.append(img)
        ul.append(li2)
    })
   
})
function bigImg(x) {
    x.src="./image/xr.svg"
  }
function normalImg(x){
    x.src="./image/x.svg"
}
  