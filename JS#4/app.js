(function(){

    const pictures  =[
        "1",
        "2",
        "3",
        "4",
        "5"
    ];


    const buttons = document.querySelectorAll('.btn');
    const imageDiv = document.querySelector('.img-container');

    let counter = 0;

    buttons.forEach(function(button){
        console.log(button)

        button.onclick = function(e){

            if(e.target.classList.contains('left-btn')){
                counter--;

                if(counter<0){

                    counter = pictures.length -1;
                }

            imageDiv.style.background = `url('img/${pictures[counter]}.jpg')`;
            }

            else if(e.target.classList.contains('right-btn')){
                counter++;

                if(counter>pictures.length-1){

                    counter = 0;
                }

            imageDiv.style.background = `url('img/${pictures[counter]}.jpg')`;
            }

        }


    })

})()
