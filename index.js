function toggle_hamburger_menu() {
    $('#menu_logo').click(() => {
        if ($('#menu_list').height() === 0) {
            $('#menu_list').css('height', 300)
        }
        else if ($('#menu_list').height() !== 0) {
            $('#menu_list').css('height', 0)
        }
    })
}
function close_menu_on_click() {
    $('#menu_list div a').click(() => {
        $('#menu_list').height(0);
    })
}
function close_menu_on_screen_touch() {
    $('body').click(() => {
        if ($('#menu_list').height() !== 0) {
            $('#menu_list').css('height', 0)
        }
    })
}
function project_detail_handler() {
    $('.btn.details').click(() => {
        $('.detail_box').css('z-index', 5)
        $('.detail_box').append(`
        <img class='project img_detail' src="img/project_one.PNG">
                    <div class='text_container'>
                        <div class='project_title'>Geography Quiz</div>
                        <div class='project_description'>This is a web quiz develop with html, css, and javascrip. I check and validate 
                        user input. The user gets feedback base on answer. Finally user is able to see final score and restart 
                        quiz if wished</div>
                    </div>
                    <div class='btn_container'>
                        <a href="https://github.com/AlenJ-dmt/quiz_app"><button class="btn">Code</button></a>
                        <a href="https://alenj-dmt.github.io/quiz_app/"><button class="btn">View Site</button></a>
                    </div>
                    <div class="close_details">
                        <button class='btn close'>X</button>
                    </div>
        `)
    })

    $('.detail_box').click('close_details',function() {
        $('.detail_box').empty()
        $('.detail_box').css('z-index', -5)
    })
}
function main() {
    toggle_hamburger_menu();
    close_menu_on_click();
    close_menu_on_screen_touch();
    project_detail_handler();
}
main();