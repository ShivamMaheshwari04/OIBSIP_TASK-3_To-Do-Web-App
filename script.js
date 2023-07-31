// Edit Task Function Start
function editTask(button) {
  var taskElement = button.closest(".task");
  var taskNameElement = taskElement.querySelector(".taskname");
  var currentTaskName = taskNameElement.textContent;
  var updatedTaskName = prompt("Enter updated Task Name:", currentTaskName);

  if (updatedTaskName !== null && updatedTaskName !== "") {
    taskNameElement.textContent = updatedTaskName;
  }
}
// Edit Task Function End

// Current Date Function Start 
function currentDateTimes() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');
  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
  return formattedDate;
}
// Current Date Function End
document.querySelector('#push').onclick = function () {
  var taskName = document.querySelector('#newtask input[placeholder="Add Tasks"]').value;



  if (taskName.length == 0) {
    alert("Kindly Enter Task Name");
  } else {
    var currentDateTime = currentDateTimes();
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span class="datetime"><input type="checkbox" name="checkbox" id="checkbox"><span class="checkmark"></span> ${currentDateTime}</span>
          <span class="taskname">${taskName}</span>
          
          <div class = "button">
          <button class="edit" onclick="editTask(this)">Edit</button>
          <button class="delete">
            <i class="fa fa-close"></i>
          </button>
          </div>
        </div>
      `;

    var current_tasks = document.getElementsByClassName("delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        var task = this.closest(".task");
        task.remove();
      }
    }

    // Error Solve
    var checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change",function(){
      if(checkbox.checked){
        document.querySelector('.completed').innerHTML += `
          <div class="done">
            Hi
          </div>
        `;
      }
      else{
        console.log("Not Check")
      }
    });
    
    // Load tasks on page load
    document.addEventListener('DOMContentLoaded', function () {
      loadTasks();
    });

    document.querySelector('#newtask input[placeholder="Add Tasks"]').value = "";
  }

  
}

