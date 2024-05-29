// this = the object that is executing the current function

// method -> obj
// function ->global (window in browser, global in node)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); // reffers to the window object
            // its a regular function in foreach
        }, this); // to override this (window)
    }
}


video.stop = function() {
    console.log(this); // refers to the video object
}

// video.play();
// video.stop();

function playVideo() {
    console.log(this); // refers to the Window object
}

// playVideo();

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');


video.showTags();
