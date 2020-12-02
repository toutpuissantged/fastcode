
let IconUp = document.querySelector(".fa-arrow-up")
let IconDown = document.querySelector(".fa-arrow-down")
let Texterea = document.querySelector('textarea')
let InputColor=document.querySelector('#inputcolor')
let ColorAplly=document.querySelector('.btn-info')
let Align=document.querySelector('.fa-bell')
let IconGras=document.querySelector('.gras')
let IconItalic=document.querySelector('.italic')
let IconSouligner=document.querySelector('.souligner')
let InputRange=document.querySelector('#border-raduis')
let GetCode = document.querySelector('.getcode')
let CodeArea=document.querySelector('.code')

//import msg from 'init'
//console.log(msg)

initSize=20
sizeUnit=10
sizeMax=100
sizeMin=10
Texterea.style.fontSize="20px"
AlignPosition=['left','center','right']
AlignPositionState=0
GrasState=false
ItalicState=false
SoulignerState=false
ColorBlue="rgba(0, 255, 255, 0.288)"
ColorTransparent="transparent"
CodeSchema=`<p style=""></p>`
StyleProps=[]
StyleAttr=[]
StyleText=''
CodeSnip=''

IconUp.addEventListener('click',()=>{
    if (initSize<sizeMax) {
        initSize+=sizeUnit
    }
    Texterea.style.fontSize=String(initSize)+"px"
    console.log(Texterea.style.fontSize,initSize)
})
IconDown.addEventListener('click',()=>{
    if (initSize>sizeMin) {
        initSize-=sizeUnit
    }
    Texterea.style.fontSize=String(initSize)+"px"
    console.log(Texterea.style.fontSize,initSize)
})

ColorAplly.addEventListener("click",()=>{
    let color = InputColor.value
    console.log(color)
    Texterea.style.color=color
})

Align.addEventListener('click',()=>{
    if (AlignPositionState>=AlignPosition.length-1) AlignPositionState=0
    else AlignPositionState+=1
    Texterea.style.textAlign=AlignPosition[AlignPositionState]
})

IconGras.addEventListener('click',()=>{
    if (GrasState) {
        GrasState=false
        Texterea.style.fontWeight='normal'
        IconGras.style.backgroundColor=ColorTransparent
    } 
    else {
        GrasState=true
        Texterea.style.fontWeight='bold'
        IconGras.style.backgroundColor=ColorBlue
    }
})

IconItalic.addEventListener('click',()=>{
    if (ItalicState) {
        ItalicState=false
        Texterea.style.fontStyle='normal'
        IconItalic.style.backgroundColor=ColorTransparent
    } 
    else {
        ItalicState=true
        Texterea.style.fontStyle='italic'
        IconItalic.style.backgroundColor=ColorBlue
    }
})

IconSouligner.addEventListener('click',()=>{
    if (SoulignerState) {
        SoulignerState=false
        Texterea.style.textDecoration='none'
        IconSouligner.style.backgroundColor=ColorTransparent
    } 
    else {
        SoulignerState=true
        Texterea.style.textDecoration='underline'
        IconSouligner.style.backgroundColor=ColorBlue
        
    }
})

InputRange.addEventListener('click',()=>{
    console.log(InputRange.value)
    
})

GetCode.addEventListener('click',()=>{
    CodeArea.value=''
    //console.log(Texterea.style)
    for (let index = 0; index < Texterea.style.length; index++) {
        cur=Texterea.style[index]
        cur2=Texterea.style[cur]
        StyleProps[StyleProps.length]=cur
        StyleAttr[StyleAttr.length]=cur2
        //console.log(cur,cur2)
        
    }
    for (let index = 0; index < StyleProps.length; index++) {
        if (StyleProps[index]!=0){
            StyleText+=StyleProps[index]+':'+StyleAttr[index]+';'
            TextereaContent=Texterea.value
        }
        
    }
    CodeSnip='<p style="'+StyleText+'"> '+TextereaContent+' </p>'

    //CodeArea= Texterea.innerText
    CodeArea.textContent=CodeSnip

    for (let index = 0; index < StyleProps.length; index++) {
        StyleProps[index]=0
        StyleAttr[index] =0
    }
})