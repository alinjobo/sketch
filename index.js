function creategrid(size=16){
    
    const s=size*size;
    const side= 600/size;
    console.log(side);
    for(let i=0;i<s;++i){
        div[i]=document.createElement('div');
        div[i].classList.add('pixel');
        
        div[i].style.cssText= `width:${side}px; height:${side}px`;
      //  div[i].style.height="37.5px";
       // div[i].style.width="37.5px";
        cont.appendChild(div[i]);
        
       cont.addEventListener('mousedown',()=>{
        div[i].addEventListener('mouseover',()=>{
            div[i].style.backgroundColor= 'black';
            
        });
       });
      cont.addEventListener('mouseup',()=>{
        div[i].removeEventListener();
      });
       // cont.addEventListener('')
       
     }



}
const div=[];
const cont=document.querySelector('.container');
creategrid();

const b=document.querySelector('button');
function newgrid()
{
        
        creategrid(prompt(''));
}
b.addEventListener('click',newgrid);
