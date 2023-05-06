// already declared in techstack.js

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log('hello!!')
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       // entry.target.classList.remove('hidden');
//     } else {
//     entry.target.classList.remove('show');
//     }
//    });
//   });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe (el));





    // const git = document.querySelector('#git')
    // git.classList.add('animate__animated', 'animate__rotateOutDownLeft')



