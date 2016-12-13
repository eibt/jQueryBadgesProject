$(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/ivandigital.json',
        dataType: 'jsonp',
        success: function(response) {
            response.courses.completed.forEach(function(current) {
                $('#badges').append('<div class="course"><h3>'
                    + current.title + '</h3><img src="' + current.badge
                    + '"><a target="_blank" class="btn-primary btn" href="'
                    + current.url + '">See Course</a></div>');
            });
        }
    });

});
