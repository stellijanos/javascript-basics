// method -> obj
// function ->global (window in browser, global in node)

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this; // references the video object
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
          
//         });
//     }
// };


// video.showTags();




function playVideo(a, b) {
    console.log(this);
}

// playVideo.call({name: 'Janos'}, 1, 2); // define/override this 
// playVideo.apply({name: 'Janos'}, [1, 2]); // define/override this 
// playVideo.bind({name: 'Janos'})(); // returns a new function
// call and apply difference is, 
// that in apply we have to pass parameters of a function as array
// and in call like parameters

// and sets this to point to that object permanantly

// playVideo();



// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }.bind(this)); // to make this refer to the video object
//     }
// };


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }); // to make this refer to the video object
    }
};


video.showTags();

// arrowfunctions inherit the 'this' value from the containing function
