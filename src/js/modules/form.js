import {postData} from '../servises/servises';



function form(selForm, 
              selInputs, 
              selHTML, 
              selParrent, 
              feedbackForm,
              feedbackInputs,
              error)
{
    const formModal = document.querySelector(selForm),
          inputs = document.querySelectorAll(selInputs),
          formFeedBack = document.querySelector(feedbackForm),
          inputsFeedback = document.querySelectorAll(feedbackInputs);
    const parrent = document.querySelector(selParrent);

    let goodValidation; 

    formModal.addEventListener('submit', (event) => {
        event.preventDefault();
        goodValidation = true;
        start(formModal, inputs);    
    });
    formFeedBack.addEventListener('submit', (event) => {
        event.preventDefault();
        goodValidation = true;
        start(formFeedBack, inputsFeedback);    
    });

    const statusMessage = {
        loading: 'Отправка...',
        empty: 'Заполните поле',
        fail: 'Что-то пошло не так'
    };


    
    function start(form, entry){ 
        validation(entry);
       
        if(goodValidation === true){
            showThanksModal(statusMessage.loading);
            setTimeout(() => {
                window.location.href = selHTML;
            }, 2000);
            
            // bingPostData(form);
            // sendingMail(form);
        } else {
            showThanksModal(statusMessage.empty);
        }
    }
    
    
    function validation(entry){
        entry.forEach(item => {
            if (item.value != ''){
                item.classList.remove(error);
            } else{
                goodValidation = false;
                item.classList.add(error);
            }
        });
    }
    
    
    // function bingPostData(form) {
    
    //         const formData = new FormData(form);
    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
    //         postData('http://localhost:3000/answers', json)
    //         .then(data => {
    //             console.log(data);
    //             window.location.href = selHTML;
    //         }).catch(() => {
    //             showThanksModal(statusMessage.fail);
    //         }).finally(() => {
    //             form.reset();
    //         });  
    // }

    // async function sendingMail(form) {

    //     let formData = new FormData(form);
    
    //         await fetch('sendmailer.php', {
    //             method: 'POST',
    //             body: formData
    //         });
    //     }
    
    function showThanksModal(message){
        
        const text = document.createElement('p');
        text.innerHTML = `${message}`;
        parrent.append(text);
        setTimeout(()=> {
        text.innerHTML = ``;
        parrent.append(text);
        },3000);
    }
}

export default form;
