 // main document ready function to check if dom is loaded fully or not

let myFacebookToken;

$(document).ready(() => {


    myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No user Token found");

    } else {

        getAllDetails();

    } // end if condition

}); // end document.ready function

let getAllDetails = () => {


    // API call to get user details

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://graph.facebook.com/me?fields=id,name,feed{message,full_picture,story,created_time,name,comments.limit(3),likes.limit(3)},cover,picture.type(large)&access_token=' + myFacebookToken,

        success: (response) => {

            $('#dataSection').css('display', 'block');

            console.log(response);
                                            
           
            if(response.feed.data[0].likes){   //display likes of the feed.
          
            for(y of response.feed.data[0].likes.data){
            $('#jadu').append(y.name)
            
           }
          
          }




   

            if(response.feed.data[1].likes){   //display likes of the feed.
          
            for(y of response.feed.data[1].likes.data){
            $('#son').append(y.name)
            
           }
           }


    if(response.feed.data[2].likes){   //display likes of the feed.
          
    for(y of response.feed.data[2].likes.data){
          $('#york').append(y.name)
            
           }
          }



            if(response.feed.data[3].likes){ //display likes of the feed.
          
            for(y of response.feed.data[3].likes.data){
            $('#bali').append(y.name)
            
           }
            }
            

               if(response.feed.data[4].likes){   //display likes of the feed.

               for(y of response.feed.data[4].likes.data){

            $('#sidhu').append(y.name)
            
           }
           }


             if(response.feed.data[5].likes){  //display likes of the feed.
          
            for(y of response.feed.data[5].likes.data){
            $('#high').append(y.name)
            
           }
            }



        if(response.feed.data[6].likes){ //display likes of the feed.
          
        for(y of response.feed.data[6].likes.data){
            $('#end').append(y.name)
            
           }
            }


            if(response.feed.data[7].likes){  //display likes of the feed.
          
            for(y of response.feed.data[7].likes.data){
             $('#tane').append(y.name)
            
           }

            }



            if(response.feed.data[8].likes){   //display likes of the feed.

            for(y of response.feed.data[8].likes.data){
            $('#jatta').append(y.name)
            
           }
            }


//display the friends comments along with name.

           let temprow;
           for(let x in response.feed.data){
                  
           if(response.feed.data[0].comments){
            let temprow= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[0].comments.data[0].from.name}

                                   <span >${response.feed.data[0].comments.data[0].message}</span>
                                  </div>

                                  </div>`
               $('#jadu').append(temprow);
             }

            break;
          }


          let janab;
           for(let x in response.feed.data){
                  
             if(response.feed.data[1].comments){
            let janab= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[1].comments.data[0].from.name}

                                   <span >${response.feed.data[1].comments.data[0].message}</span>
                                  </div>
                                 </div>`
                $('#son').append(janab);

               }
            break;
          }


             let man;


           for(let x in response.feed.data){
                  
           if(response.feed.data[2].comments){
            let man= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[2].comments.data[0].from.name}

                                   <span >${response.feed.data[2].comments.data[0].message}</span>
                                  </div>
                                  </div>`
               $('#york').append(man);
               }
            break;
          }

          let technology;
          for(let x in response.feed.data){

           if(response.feed.data[3].comments){
            let technology= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[3].comments.data[0].from.name}

                                   <span >${response.feed.data[3].comments.data[0].message}</span>
                                  </div>
                                  </div>`
             $('#bali').append(technology);

            }
            break;
          }
          


              let node;
              for(let x in response.feed.data){
                  
            if(response.feed.data[4].comments){
            let node= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[4].comments.data[0].from.name}

                                   <span >${response.feed.data[4].comments.data[0].message}</span>
                                  </div>
                                  </div>`
              $('#sidhu').append(node);
               }
            break;
          }
          


              let shut;
         for(let x in response.feed.data){
          if(response.feed.data[5].comments){
            let shut= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[5].comments.data[0].from.name}

                                   <span >${response.feed.data[5].comments.data[0].message}</span>
                                  </div>
                                  </div>`
             $('#high').append(shut);

            }
            break;
          }
          


              let normal;
            for(let x in response.feed.data){
           if(response.feed.data[6].comments){
            let normal= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[6].comments.data[0].from.name}

                                   <span >${response.feed.data[6].comments.data[0].message}</span>
                                  </div>
                                 </div>`
              $('#end').append(normal);

            }
            break;
          }
          
            
         

              let status;
              for(let x in response.feed.data){
               if(response.feed.data[7].comments){
            let status= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[7].comments.data[0].from.name}

                                   <span >${response.feed.data[7].comments.data[0].message}</span>
                                  </div>
                                 </div>`
              $('#tane').append(status);

            }
            break;
          }



              let quote;
              for(let x in response.feed.data){
             if(response.feed.data[8].comments){
            let quote= ` <div class="alert alert-success vir" role="alert">
 
                                <div class="alert bg-primary nose"  role="alert">${response.feed.data[8].comments.data[0].from.name}

                                   <span >${response.feed.data[8].comments.data[0].message}</span>
                                  </div>
                                  </div>`
            $('#jatta').append(quote);

            }
            break;
          }
          
          
           $('#lap').append(response.name);//display name of the user
           $('#maha').append(response.name);//display name of the user
           $('#zebra').append(response.name);//display name of the user
           $('#college').append(response.name);//display name of the user
           $('#press').append(response.name);//display name of the user

             $('.dog').html('<img src="' + response.picture.data.url + '" class="img-fluid pitty"/>');

            $('.taken').html('<img src="' + response.picture.data.url + '" class="img-fluid size"/>');

            $('.shiva').html('<img src="' + response.picture.data.url + '" class="img-fluid size-one"/>');

            

             
              $('.jia').append(response.feed.data[5].message);//display message

              $('.himanshu').append(response.feed.data[7].message);//display message

              $('.lcd').append(response.feed.data[8].message);//display message



            $('.bro').append(  response.feed.data[3].created_time);//creatied time of feed
             
            $('.cat').append(  response.feed.data[1].created_time);//creatied time of feed

            $('.pig').append(  response.feed.data[2].created_time);//creatied time of feed

            $('.pradeep').append(  response.feed.data[4].created_time);//creatied time of feed
            
            $('.negi').append(  response.feed.data[5].created_time);//creatied time of feed

            $('.anky').append(  response.feed.data[6].created_time);//creatied time of feed

            $('.logo').append(  response.feed.data[7].created_time);//creatied time of feed


            $('.did').append(  response.feed.data[8].created_time);//creatied time of feed

            $('.gym').append(  response.feed.data[0].created_time);//creatied time of feed



              $('#note').append(response.feed.data[1].story);//story of the feed

              $('#piku').append(response.feed.data[2].story);//story of the feed

              $('#mouse').append(response.feed.data[3].story);//story of the feed


              $('#tau').append(response.feed.data[7].story);//story of the feed


              $('#madhur').append(response.feed.data[5].story);//story of the feed

              $('#gif').append(response.feed.data[6].story);//story of the feed

              $('#jail').append(response.feed.data[0].story);//story of the feed






            $('.relate').html('<img src="' + response.feed.data[6].full_picture + '" class="img-fluid one"/>');//display  picture

            $('.tech').html('<img src="' + response.feed.data[0].full_picture + '" class="img-fluid one"/>');//display  picture

                 


            $('.fire').html('<img src="' + response.feed.data[7].full_picture + '" class="img-fluid one"/>');//display  picture

            $('.namo').html('<img src="' + response.feed.data[8].full_picture + '" class="img-fluid one"/>');//display picture




            $('.mountain').html('<img src="' + response.feed.data[5].full_picture + '" class="img-fluid one"/>');//display picture



            $('.play').html('<img src="' + response.feed.data[4].full_picture + '" class="img-fluid one"/>');//display  picture
             
            
            $('.ed').html('<img src="' + response.feed.data[3].full_picture + '" class="img-fluid one"/>');//display  picture
             
                    
            
            $('.dron').html('<img src="' + response.feed.data[2].full_picture + '" class="img-fluid one"/>');//display picture
           
            
                  
        
            $('.super').html('<img src="' + response.feed.data[1].full_picture + '" class="img-fluid one"/>');//display picture
     


            $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');//display profile picture

            

            $('#cover').css('background-image', 'url(' + response.cover.source + ')');//display cover picture



        },


       


         error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message);

        },


 
    });// end ajax call 

}
 