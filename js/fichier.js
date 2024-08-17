let b=document.querySelector('#idbtn')
b.onclick=function()
{   
    let g=document.querySelector('#menub')
    if(b.innerHTML==='<i class="fa fa-bars py-0"></i>Menu')
    {
        g.setAttribute('class','d-block')
        b.innerHTML='<i class="fa fa-bars py-0"></i>Menus'
    }
    else
    {
        g.setAttribute('class','d-none')
        b.innerHTML='<i class="fa fa-bars py-0"></i>Menu'
    }
    
    
}

let c=document.querySelector('#idbtn1')
c.onclick=function()
{
    let e=document.querySelector('#menub1')
    if(c.innerHTML==='<i class="fa fa-bars py-0"></i>Menu')
        {
            e.setAttribute('class','d-block')
            c.innerHTML='<i class="fa fa-bars py-0"></i>Menus'
        }
        else
        {
            e.setAttribute('class','d-none')
            c.innerHTML='<i class="fa fa-bars py-0"></i>Menu'
        }
}


let l1=document.querySelector('#idli1')
let l2=document.querySelector('#idli2')
let l3=document.querySelector('#idli3')
let l4=document.querySelector('#idli4')

l1.onclick=function()
{
    let a1=document.querySelector('#ida1')
    let a2=document.querySelector('#ida2')
    let a3=document.querySelector('#ida3')
    let a4=document.querySelector('#ida4')
    a1.setAttribute('class',' page-link text-white bg-success')
    a2.setAttribute('class',' page-link text-white bg-primary')
    a3.setAttribute('class',' page-link text-white bg-primary')
    a4.setAttribute('class',' page-link text-white bg-primary')
}
l2.onclick=function()
{
    let a1=document.querySelector('#ida1')
    let a2=document.querySelector('#ida2')
    let a3=document.querySelector('#ida3')
    let a4=document.querySelector('#ida4')
    a1.setAttribute('class',' page-link text-white bg-primary')
    a2.setAttribute('class',' page-link text-white bg-success')
    a3.setAttribute('class',' page-link text-white bg-primary')
    a4.setAttribute('class',' page-link text-white bg-primary')
}

l3.onclick=function()
{
    let a1=document.querySelector('#ida1')
    let a2=document.querySelector('#ida2')
    let a3=document.querySelector('#ida3')
    let a4=document.querySelector('#ida4')
    a1.setAttribute('class',' page-link text-white bg-primary')
    a2.setAttribute('class',' page-link text-white bg-primary')
    a3.setAttribute('class',' page-link text-white bg-success')
    a4.setAttribute('class',' page-link text-white bg-primary')
}

l4.onclick=function()
{
    let a1=document.querySelector('#ida1')
    let a2=document.querySelector('#ida2')
    let a3=document.querySelector('#ida3')
    let a4=document.querySelector('#ida4')
    a1.setAttribute('class',' page-link text-white bg-primary')
    a2.setAttribute('class',' page-link text-white bg-primary')
    a3.setAttribute('class',' page-link text-white bg-primary')
    a4.setAttribute('class',' page-link text-white bg-success')
}

let l5=document.querySelector('#idli5')
let l6=document.querySelector('#idli6')
let l7=document.querySelector('#idli7')
let l8=document.querySelector('#idli8')
l5.onclick=function()
{
    let a5=document.querySelector('#ida5')
    let a6=document.querySelector('#ida6')
    let a7=document.querySelector('#ida7')
    let a8=document.querySelector('#ida8')
    a5.setAttribute('class',' page-link text-white bg-success')
    a6.setAttribute('class',' page-link text-white bg-primary')
    a7.setAttribute('class',' page-link text-white bg-primary')
    a8.setAttribute('class',' page-link text-white bg-primary')
}
l6.onclick=function()
{
    let a5=document.querySelector('#ida5')
    let a6=document.querySelector('#ida6')
    let a7=document.querySelector('#ida7')
    let a8=document.querySelector('#ida8')
    a5.setAttribute('class',' page-link text-white bg-primary')
    a6.setAttribute('class',' page-link text-white bg-success')
    a7.setAttribute('class',' page-link text-white bg-primary')
    a8.setAttribute('class',' page-link text-white bg-primary')
}

l7.onclick=function()
{
    let a5=document.querySelector('#ida5')
    let a6=document.querySelector('#ida6')
    let a7=document.querySelector('#ida7')
    let a8=document.querySelector('#ida8')
    a5.setAttribute('class',' page-link text-white bg-primary')
    a6.setAttribute('class',' page-link text-white bg-primary')
    a7.setAttribute('class',' page-link text-white bg-success')
    a8.setAttribute('class',' page-link text-white bg-primary')
}

l8.onclick=function()
{
    let a5=document.querySelector('#ida5')
    let a6=document.querySelector('#ida6')
    let a7=document.querySelector('#ida7')
    let a8=document.querySelector('#ida8')
    a5.setAttribute('class',' page-link text-white bg-primary')
    a6.setAttribute('class',' page-link text-white bg-primary')
    a7.setAttribute('class',' page-link text-white bg-primary')
    a8.setAttribute('class',' page-link text-white bg-success')
}

let bt1=document.querySelector('#idb1')
let bt2=document.querySelector('#idb2')
let bt3=document.querySelector('#idb3')
let bt4=document.querySelector('#idb4')
let bt5=document.querySelector('#idb5')
let bt6=document.querySelector('#idb6')
let bt7=document.querySelector('#idb7')
let bt8=document.querySelector('#idb8')
let bt9=document.querySelector('#idb9')
let img1=document.querySelector('#idimg1')
let img2=document.querySelector('#idimg2')
let img3=document.querySelector('#idimg3')
let img4=document.querySelector('#idimg4')
let iframes=document.querySelector('#idiframe')

bt1.onmouseover=function()
{
    bt1.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt1.onmouseout=function()
{
    bt1.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}
bt1.onclick=function()
{   
    
    if(bt1.innerHTML==='View Propriety')
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-block container d-flex justify-content-center')
        ddiv.scrollIntoView({ behavior: 'smooth' })
        bt1.innerHTML='View less'
        img1.setAttribute('src','/images/rooms/1.jpg')
        img2.setAttribute('src','/images/rooms/1-1.jpg')
        img3.setAttribute('src','/images/rooms/1-2.jpg')
        img4.setAttribute('src','/images/rooms/1-3.jpg')

    }
    else
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-none container d-flex justify-content-center')
        bt1.innerHTML='View Propriety'
    }
    
    
}
bt2.onmouseover=function()
{
    bt2.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt2.onmouseout=function()
{
    bt2.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}

bt2.onclick=function()
{   
    
    if(bt2.innerHTML==='View Propriety')
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-block container d-flex justify-content-center')
        ddiv.scrollIntoView({ behavior: 'smooth' })
        bt2.innerHTML='View less'
        img1.setAttribute('src','/images/rooms/2.jpg')
        img2.setAttribute('src','/images/rooms/2-1.jpg')
        img3.setAttribute('src','/images/rooms/2-2.jpg')
        img4.setAttribute('src','/images/rooms/2-3.jpg')
        iframes.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064618896!2d-0.431244892094902!3d51.52860701174157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sca!4v1723486046969!5m2!1sen!2sca')

    }
    else
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-none container d-flex justify-content-center')
        bt2.innerHTML='View Propriety'
    }
    
    
}

bt3.onmouseover=function()
{
    bt3.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt3.onmouseout=function()
{
    bt3.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}

bt3.onclick=function()
{   
    
    if(bt3.innerHTML==='View Propriety')
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-block container d-flex justify-content-center')
        ddiv.scrollIntoView({ behavior: 'smooth' })
        bt3.innerHTML='View less'
        img1.setAttribute('src','/images/rooms/3.jpg')
        img2.setAttribute('src','/images/rooms/3-1.jpg')
        img3.setAttribute('src','/images/rooms/3-2.jpg')
        img4.setAttribute('src','/images/rooms/3-3.jpg')
        iframes.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.0989738187936!2d1.2385088758903608!3d52.62205552866957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e0d87b805801%3A0xb9b97bf00744e573!2sUniversity%20of%20East%20Anglia!5e0!3m2!1sen!2sca!4v1723486175084!5m2!1sen!2sca')

    }
    else
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-none container d-flex justify-content-center')
        bt3.innerHTML='View Propriety'
    }
    
    
}
bt4.onmouseover=function()
{
    bt4.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt4.onmouseout=function()
{
    bt4.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}

bt4.onclick=function()
{   
    
    if(bt4.innerHTML==='View Propriety')
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-block container d-flex justify-content-center')
        ddiv.scrollIntoView({ behavior: 'smooth' })
        bt4.innerHTML='View less'
        bt1.innerHTML='View Propriety'
        bt2.innerHTML='View Propriety'
        bt3.innerHTML='View Propriety'
        bt5.innerHTML='View Propriety'
        bt6.innerHTML='View Propriety'
        img1.setAttribute('src','/images/rooms/4.jpg')
        img2.setAttribute('src','/images/rooms/4-1.jpg')
        img3.setAttribute('src','/images/rooms/4-2.jpg')
        img4.setAttribute('src','/images/rooms/4-3.jpg')
        iframes.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.96497804072!2d-84.58494435200438!3d33.767543407696586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sca!4v1723486247889!5m2!1sen!2sca')

    }
    else
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-none container d-flex justify-content-center')
        bt4.innerHTML='View Propriety'
    }
    
    
}
bt5.onmouseover=function()
{
    bt5.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt5.onmouseout=function()
{
    bt5.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}
bt5.onclick=function()
{   
    
    if(bt5.innerHTML==='View Propriety')
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-block container d-flex justify-content-center')
        ddiv.scrollIntoView({ behavior: 'smooth' })
        bt5.innerHTML='View less'
        bt1.innerHTML='View Propriety'
        bt2.innerHTML='View Propriety'
        bt3.innerHTML='View Propriety'
        bt4.innerHTML='View Propriety'
        bt6.innerHTML='View Propriety'
        img1.setAttribute('src','/images/rooms/5.jpg')
        img2.setAttribute('src','/images/rooms/5-1.jpg')
        img3.setAttribute('src','/images/rooms/5-2.jpg')
        img4.setAttribute('src','/images/rooms/5-3.jpg')
        iframes.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174611.8823941134!2d-71.50972602152184!3d46.85725847275856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8913e53804f25%3A0x435c1350817bbcde!2sAquarium%20of%20Quebec!5e0!3m2!1sen!2sca!4v1723486320722!5m2!1sen!2sca')

    }
    else
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-none container d-flex justify-content-center')
        bt5.innerHTML='View Propriety'
    }
    
    
}


bt6.onmouseover=function()
{
    bt6.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt6.onmouseout=function()
{
    bt6.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}

bt6.onclick=function()
{   
    
    if(bt6.innerHTML==='View Propriety')
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-block container d-flex justify-content-center')
        ddiv.scrollIntoView({ behavior: 'smooth' })
        bt6.innerHTML='View less'
        bt1.innerHTML='View Propriety'
        bt2.innerHTML='View Propriety'
        bt3.innerHTML='View Propriety'
        bt5.innerHTML='View Propriety'
        bt4.innerHTML='View Propriety'
        img1.setAttribute('src','/images/rooms/6.jpg')
        img2.setAttribute('src','/images/rooms/6-1.jpg')
        img3.setAttribute('src','/images/rooms/6-2.jpg')
        img4.setAttribute('src','/images/rooms/6-3.jpg')
        iframes.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1659819.0140428545!2d-65.97445133693242!3d-35.65646100509209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1sen!2sca!4v1723486390411!5m2!1sen!2sca')

    }
    else
    {
        let ddiv=document.querySelector("#ddiv")
        ddiv.setAttribute('class','d-none container d-flex justify-content-center')
        bt6.innerHTML='View Propriety'
    }
    
    
}


bt7.onmouseover=function()
{
    bt7.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt7.onmouseout=function()
{
    bt7.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}

bt8.onmouseover=function()
{
    bt8.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt8.onmouseout=function()
{
    bt8.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}
bt9.onmouseover=function()
{
    bt9.setAttribute('class',' btn text-white text-bold p-2 btn-success')
}

bt9.onmouseout=function()
{
    bt9.setAttribute('class',' btn border border-2 border-info text-info text-bold p-2')
}