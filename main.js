 function authenticate() {

    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/youtube "})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }


  function loadClient() {
    gapi.client.setApiKey("AIzaSyD-CuB735pK99O3hZmt8lbiFJ3GNncxMjI");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/tasks/v1/rest","https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest") 
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }

    

  function loadClient4() {
    gapi.client.setApiKey("AIzaSyD-CuB735pK99O3hZmt8lbiFJ3GNncxMjI");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/tasks/v1/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
   function agregarTarea() {
    var valor = document.getElementById("search").value;
        document.getElementById("listaTareas").innerHTML=valor;
    return gapi.client.tasks.tasks.insert({
      "tasklist": "MTIzNTkwMzcwNTM4NDA0MzUyMDY6OTU0MzIxMzYzNTI0Nzc3Mjow",
      "resource": {
        "title": valor
      }
    })
        .then(function(response) {
                console.log("Response", response);

                alert("agregado correctamente!!!");
              },
              function(err) { console.error("Execute error", err); 
              alert("Error!!!");
            });
  }

  function appendPre2(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }


      function listTask() {
        gapi.client.tasks.tasks.list({
            "tasklist": "MTIzNTkwMzcwNTM4NDA0MzUyMDY6OTU0MzIxMzYzNTI0Nzc3Mjow"
        }).then(function(response) {
          appendPre2('Busquedas:');
          var tasks = response.result.items;
          if (tasks && tasks.length > 0) {
            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              appendPre2(task.title);
            }
          } else {
            appendPre2('No task found.');
          }
        });
      }


    gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "842126689495-sldjra08sd7kd69hflvd8m7a9cmv840s.apps.googleusercontent.com"});
  });
  gapi.load("client");