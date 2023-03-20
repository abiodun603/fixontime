/*===== MENU SHOW =====*/ 
const showmenu = (toggleid,navmenuid) =>{
    $(toggleid).on('click',()=>{
        $(navmenuid).toggleClass('show');
    });
}

showmenu('.nav_toggle','.nav_menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navlink = $('.nav_link');
const arraynav = Array.from(navlink);
function linkaction(){
  console.log('hello');
   /*Active link*/
  arraynav.forEach((cur) => {
    $(cur).removeClass('active');
  });
  
 $(this).addClass('active');

   /*Remove menu mobile*/
   const navmenu = $('.nav_menu');
   navmenu.removeClass('show');
}

arraynav.forEach((cur) =>{
    $(cur).on('click',linkaction);
});


 
  



/*===== SCROLL REVEAL ANIMATION =====*/


/*SCROLL HOME*/

/*SCROLL ABOUT*/


/*SCROLL SKILLS*/

/*SCROLL WORK*/


/*SCROLL CONTACT*/





