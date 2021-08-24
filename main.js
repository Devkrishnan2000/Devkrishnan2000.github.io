const burgerbtn = document.getElementsByClassName('burger-btn')[0]
const  navlist = document.getElementsByClassName('nav-list')[0]

if(burgerbtn)
{
    burgerbtn.addEventListener('click',()=>{
        navlist.classList.toggle('active');
    })
}

function copy_email()
{
    navigator.clipboard.writeText("devanaswinikumar8@gmail.com");

}

function copy_phno()
{
    navigator.clipboard.writeText("+919074757442");
}
