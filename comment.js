
     
          // document.getElementById("reply_btn").addEventListener("click", myFunction);
          // function myFunction() {
          // document.getElementById("demo").className="d-block" ;
          // }
          // document.getElementById("reply_btn2").addEventListener("click", myFunction);
          // function myFunction() {
          // document.getElementById("demo2").className="d-block" ;
          // }

          // document.getElementById("cancel_btn").addEventListener("click", cancelFunction);
          // function cancelFunction() {
          // document.getElementById("demo").className="d-none" ;    
          // }
          // document.getElementById("cancel_btn2").addEventListener("click", cancelFunction);
          // function cancelFunction() {
          // document.getElementById("demo2").className="d-none" ;    
          // }
          const btn = document.getElementById('reply_btn');
          const form = document.getElementById('demo');
          btn.addEventListener('click', () => {
          form.classList.toggle('d-none');
          })
          const btn2 = document.getElementById('reply_btn2');
          const form2 = document.getElementById('demo2');
          btn2.addEventListener('click', () => {
          form2.classList.toggle('d-none');
          })
    