<!-- <!DOCTYPE html> -->
<html lang="en">
  <head>
    
    <link rel="stylesheet" href="/static/stylesheet/resume.css">
    <link rel = "stylesheet" href  = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> 
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
    crossorigin="anonymous"
  />
  </head>
  <body class="van-body">
   <section class="van-main-section">
    <header class="van-header">
      <nav class="van-nav-bar">
        <div class="van-left">
        <a class="van-nav-link" id="van-logo" href="">Dribbble</a>
        <a class="van-nav-link" href="">Esibe vanessa</a>
        </div>

        <div class="van-right">
        <a class="van-nav-link"href="" data-toggle="modal" data-target="#exampleModal">FGBFB</a>
        <a class="van-nav-link" href="" data-toggle="modal" data-target="#exampleModal">Linkedin</a>
        <a class="van-nav-link" href="" data-toggle="modal" data-target="#exampleModal">About</a>
        <a class="van-nav-link" href="" data-toggle="modal" data-target="#exampleModal">Contact</a>
        <ul class="todo-list">
        

          
      </div> 
    </nav>
      </header>
  
      <main>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="/resume" method="POST" class="todo-header">
          <input class="todo_input" type="text" name="navbar"/>
          <button type="submit">
            <span class="fas fa-plus"></span>
          </button>
        </form>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>
        <section class="van-section van-one">
          <div class="van-image-div">
            <img class="van-image" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/048/187/original/WhatsApp_Image_2022-10-10_at_20.23.40.jpeg?1665555349" alt="vanessa" />
          </div>
          <div class="van-text-div1">
            <h1>Hi there!</h1>
            <p class="p">
                I’m Esibe (she/her). I am passionate about user friendly designs, user interface and responsive design. I seek opportunities that combine the use of creative designs and strategic thinking in the realm of technologies. 

                As a diversity and inclusion expert, I design websites with inclusion in mind. I mainly use JavaScript and React to perform the transformation magic.
                
                As a mentor, am passionate about sharing the knowledge I’ve learned to those who come after me.
            </p>
          </div>
        </section>
        <section class="van-section van-two">
          <div class="van-text-div1">
              <h2>My career so far</h2>
              <p> Resolving client queries and complaints. Performing administrative and clerical duties, such as data entry and filing, when necessary.
                Collaborating with other banking professionals to ensure high-quality client service.
                 </p>
          </div>
          <div class="van-p-div">
            
            <button class="van-button">PHP</button>
            <button class="van-button">Laravel</button>
            <button class="van-button">Nodejs</button>
            <button class="van-button">CSS</button>
            <button class="van-button">Javascript</button>
            <button class="van-button">Thinking</button>
            <button id="van-long" class="van-button">Information and communication</button>
            <button class="van-button">MongoDB</button>
            <button class="van-button">communication</button>
            <button class="van-button">CSS</button>
            <button class="van-button">HTML</button>
            <button class="van-button">French</button>
            <button class="van-button">Boostrap</button>
          </div>
        </section>
      </main>
      <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>    
      <script src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>    
    </body>
   </section>
</html>
<!-- ////////////////////////// -->

      <!-- section2 -->
      <section  class="features__container">
        <form action="/" method="POST" class="todo-header">
          <input class="todo_input" type="text" name="content" />
          <input class="todo_input" type="text" name="cards" />
          <input class="todo_input" type="text" name="footer" />
          <!-- <input class="todo_input" type="text" name="button" /> -->
          <button type="submit">
            <span class="fas fa-plus"></span>
          </button>
        </form>
        <!-- Feature 1 -->
        <% todoTasks.forEach(details => { %>
        <div id="sec1" class="feature">
          
          <div class="feature__details">
            <h3 class="feature__title"><%= details.content %></h3>
        
            <h5 class="feature__sub__title">
              <%= details.cards %>
            </h5>
            <p>
              <%= details.footer %>
            </p>
          </div>
          <div class="feature__image__container">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/185/original/netflix02.jpg?1670912402"
              alt="Feature image"
              class="feature__image"
            />
          </div>
        </div>
        <a href="/edit/<%= details._id %>" class="edit">
          <span class="fas fa-edit"></span>
        </a>
        <a href="/remove/<%= details._id %>" class="remove">
          <span class="fas fa-times"></span>
        </a>
        <% }) %>

        <!-- <div id="sec1" class="feature">
          
          <div class="feature__details">
            <h3 class="feature__title">Enjoy on your TV.</h3>
        
            <h5 class="feature__sub__title">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h5>
          </div>
          <div class="feature__image__container">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/185/original/netflix02.jpg?1670912402"
              alt="Feature image"
              class="feature__image"
            />
          </div>
        </div> -->
     
        <!-- Feature 2 -->
        <!-- <% todoTasks.forEach(details => { %>
          <div id="sec1" class="feature">
            
            <div class="feature__details">
              <h3 class="feature__title"><%= details.content2 %></h3>
          
              <h5 class="feature__sub__title">
                <%= details.cards2 %>
              </h5>
              <p>
                <%= details.footer2 %>
              </p>
            </div>
            <div class="feature__image__container">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/058/188/original/netflix6.jpg?1670913883"
                alt="Feature image"
                class="feature__image"
              />
            </div>
          </div>
          <a href="/edit/<%= details._id %>" class="edit">
            <span class="fas fa-edit"></span>
          </a>
          <a href="/remove/<%= details._id %>" class="remove">
            <span class="fas fa-times"></span>
          </a>
          <% }) %> -->

               <form action="/youtube" method="POST" class="todo-header">
          <input class="todo_input" type="text" name="content" />
          <input class="todo_input" type="text" name="cards" />
          <input class="todo_input" type="text" name="footer" />
          <!-- <input class="todo_input" type="text" name="button" /> -->
          <button type="submit">
            <span class="fas fa-plus"></span>
          </button>
        </form>
        <!-- Feature 1 -->
        <% youTube.forEach(details => { %>
        <div id="sec1" class="feature">
          
          <div class="feature__details">
            <h3 class="feature__title"><%= details.content %></h3>
        
            <h5 class="feature__sub__title">
              <%= details.cards %>
            </h5>
            <p>
              <%= details.footer %>
            </p>
          </div>
              <% }) %>
                 <a href="/edit/<%= details._id %>" class="edit">
          <span class="fas fa-edit"></span>
        </a>
        <a href="/remove/<%= details._id %>" class="remove">
          <span class="fas fa-times"></span>
        </a>

        css modal: https://codepen.io/denic/pen/ZEbKgPp