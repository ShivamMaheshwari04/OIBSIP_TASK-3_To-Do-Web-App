function editTask(button) {
  var taskElement = button.closest(".task");
  var taskNameElement = taskElement.querySelector(".taskname");
  var currentTaskName = taskNameElement.textContent;
  var updatedTaskName = prompt("Enter updated Task Name:", currentTaskName);

  if (updatedTaskName !== null && updatedTaskName !== "") {
    taskNameElement.textContent = updatedTaskName;
  }
}

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

function handleCheckboxChange(checkbox, taskName, currentDateTime) {
  const taskElement = checkbox.closest('.task');

  if (checkbox.checked) {
    const completedTasksContainer = document.querySelector('.completed');
    completedTasksContainer.innerHTML += `
      <div class="done">
        <span class="datetime">${currentDateTime}</span>
        <span class="taskname">${taskName}</span>
      </div>
    `;
    taskElement.remove();
  } 
  else {
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.appendChild(taskElement);
  }
}
function handleCheckboxChange(checkbox, taskName, currentDateTime) {
  const taskElement = checkbox.closest('.task');

  if (checkbox.checked) {
    const completedTasksContainer = document.querySelector('.completed');
    completedTasksContainer.innerHTML += `
      <div class="done">
        <span class="datetime">${currentDateTime}</span>
        <span class="taskname">${taskName}</span>
      </div>
    `;
    taskElement.remove();
  } else {
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.appendChild(taskElement);
  }
}


document.querySelector('#push').onclick = function () {
  var taskName = document.querySelector('#newtask input[placeholder="Add Tasks"]').value;

  if (taskName.length == 0) {
    alert("Kindly Enter Task Name");
  } else {
    var currentDateTime = currentDateTimes();
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span class="datetime">
            <input type="checkbox" name="checkbox" class="task-checkbox">
            <span class="checkmark"></span> ${currentDateTime}
          </span>
          <span class="taskname">${taskName}</span>
          <div class="button">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete">
              <i class="fa fa-close"></i>
            </button>
          </div>
        </div>
      `;
    var taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        var taskElement = checkbox.closest('.task');
        var taskNameElement = taskElement.querySelector('.taskname');
        var currentTaskName = taskNameElement.textContent;
        var currentDateTime = taskElement.querySelector('.datetime').textContent;


        handleCheckboxChange(checkbox, currentTaskName, currentDateTime);
      });
    });

    var current_tasks = document.getElementsByClassName("delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        var task = this.closest(".task");
        task.remove();
      };
    }
    document.querySelector('#newtask input[placeholder="Add Tasks"]').value = "";
  }
};