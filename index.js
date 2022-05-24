function creategrid(size=16){
    //const div=[];
    
    const cont=document.querySelector('.container');
   
    const s=size*size;
    const side= 960/size;
    console.log(side);
    
    for(let i=0;i<s;++i){
      const  div=document.createElement('div');
        div.classList.add('pixel');
        
        div.style.cssText= `width:${side}px; height:${side}px`;
    
        cont.appendChild(div);
        
       cont.addEventListener('mousedown',()=>{
        div.addEventListener('mouseover',()=>{
            div.style.backgroundColor= 'black';
            
        });
       });
      cont.addEventListener('mouserelease',()=>{
        div.removeEventListener();
      });
       // cont.addEventListener('')
       
     }



}

creategrid();

const b=document.querySelector('button');
function newgrid()
{
      
      creategrid(prompt('Enter size'));
        
}
b.addEventListener('click',newgrid);
//