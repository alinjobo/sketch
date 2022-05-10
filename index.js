function creategrid(size=16){
    const div=[];
    const cont=document.querySelector('.container');
    const s=size*size;
    
    for(let i=0;i<s;++i){
        div[i]=document.createElement('div');
        div[i].classList.add('pixel');
        div[i].style.height="37.5px";
        div[i].style.width="37.5px";
        cont.append(div[i]);
        div[i].addEventListener('mouseenter',()=>{
            div[i].style.backgroundColor= 'black';
            
        })   ;
        div[i].addEventListener('mouseleave',()=>{
            div[i].style.backgroundColor='white';
        }
        );
     }



}

creategrid();