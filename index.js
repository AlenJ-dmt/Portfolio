function toggle_hamburger_menu(){
    $('#menu_logo').click(  ()  => {
        if( $('#menu_list').height() === 0){
            console.log('ping')
            $('#menu_list').css('height', 300)
        }
        else if( $('#menu_list').height() !== 0){
            $('#menu_list').css('height', 0)
        }
    })
}
function close_menu_on_click(){
    $('#menu_list div a').click( () =>{
        console.log('ping')
        $('#menu_list').height(0);
    })
}
function close_menu_on_screen_touch(){
    $('body').click( () => {
        if( $('#menu_list').height() !== 0){
            $('#menu_list').css('height', 0)
        }
    })
}
function main(){
    toggle_hamburger_menu();
    close_menu_on_click();
    close_on_screen_touch();
}
main();