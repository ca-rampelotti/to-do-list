function addTask () {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
        var item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;

        document.getElementById("tasks").appendChild(item); 
      input.value=''
      
    }
}

function markDone (item) {
    item.className = 'finished';
}

function remove (item) {
    if(item.className == 'finished'){
      item.remove();
    }
}

function doAbout() {
  var div = document.getElementById("divabout");
  div.innerHTML = 'Carlos Augusto Rampelotti';
  div.className = 'aboutcolor';
}

function clearAbout() {
  var div = document.getElementById("divabout");
  div.innerHTML ='';
}

