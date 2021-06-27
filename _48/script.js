// Getting References
const createGroupInput = document.getElementById("createGroupInput");
const createGroup = document.getElementById("createGroup");
const groupContainer = document.getElementById("groupContainer");

// Some validations
const validateInput = () => {
  console.log("hii");
  if (createGroupInput.value === "") {
    createGroup.classList.remove("working");
  } else {
    createGroup.classList.add("working");
  }
};

createGroupInput.addEventListener("keydown", validateInput);
createGroupInput.addEventListener("keyup", validateInput);

let MyTodo = JSON.parse(localStorage.getItem("MyTodo"));
console.log(MyTodo);
if (MyTodo === null) {
  MyTodo = [];
}

// check if any todoGroup Exists in Container if not then show Oops code

const checkForEmptyGroup = (para) => {
  const noDataFound = document.createElement("h1");
  noDataFound.innerHTML = `<h1 class="oops">😯</h1>
  <h5 class="noGroupFound">No Todo Group To Display</h5>`;
  if (para.length === 0) {
    groupContainer.innerHTML = "";
    groupContainer.appendChild(noDataFound);
  } else {
    noDataFound.remove();
  }
};

checkForEmptyGroup(MyTodo);

// Making Simple function to generate current timestamp in a better format :)

let d = new Date();

// Function to add 0 if value is less than 10 :)
function smFunc(val) {
  if (val < 10) {
    return "0" + val;
  } else {
    return val;
  }
}

let createdAtTime = smFunc(d.getDate())
 + "-" + 
 smFunc(d.getMonth() + 1)
 + "-" + 
 d.getFullYear()
 + " " +
 smFunc(d.getHours())
 + ":" +
 smFunc(d.getMinutes());

// Function to render The Todo Groups

const renderTodoGroups = (todoGroupPara) => {
  groupContainer.innerHTML = "";

  if (MyTodo.length !== 0 || !MyTodo.length <= 0) {
    todoGroupPara.forEach((group) => {
      // Creating TodoGroup Column with Some Data like createdAt and Count of Todos in it
      const tg_column = document.createElement("div");
      tg_column.classList.add("tg_column");
      tg_column.innerHTML = `<span>${group.createdAt}</span>
      <br/><span class="todosLength">Todo Item Contains : ${group.todos.length}</span>`;

      // Name of that group
      // Making it in input so we can make it editable
      const GroupTitle = document.createElement("input");
      GroupTitle.classList.add("groupTitle");
      GroupTitle.value = group.GroupName;
      GroupTitle.setAttribute("readonly", true);
      GroupTitle.setAttribute("spellcheck", false);

      // Button to delete The Group
      const DeleteIt = document.createElement("button");
      DeleteIt.classList.add("deleteGroup");
      DeleteIt.innerHTML = `<i class="far fa-trash-alt"></i>`;
      
      // Button to Edit The Group
      const EditIt = document.createElement("button");
      EditIt.classList.add("editGroup");
      EditIt.innerHTML = `<i class="far fa-edit"></i>`;
      
      // Button to Save the Edited Group
      const SaveIt = document.createElement("button");
      // Class will be same for same style and position
      SaveIt.classList.add("editGroup");
      SaveIt.innerHTML = `<i class="far fa-save"></i>`;

      // This will add title at the top
      tg_column.prepend(GroupTitle);
      // Append Delete Button To tg_column
      tg_column.append(DeleteIt);
      // Append Edit Button To tg_column
      tg_column.append(EditIt);
      // Append tg_column to groupContainer
      groupContainer.append(tg_column);

      // Function to render/add/edit/delete todos in that group
      GroupTitle.addEventListener("click", () => openTodoGroup(group.groupID));

      // If Group have any todo item then show Warning on Deleting it
      // Else directly Delete it
      if (group.todos.length == 0) {
        // THis is to delete group directly if there are no todos inside it and if any todo is there then show the warning
        DeleteIt.addEventListener("click", () => deleteGroup(DeleteIt, group.groupID));
      } else {
        // Function To Render The Delete Warning
        const callDeleteWarning = () => {
          const DeleteWarning = document.createElement("div");
          DeleteWarning.classList.add("deleteWarningWall");
          DeleteWarning.innerHTML = `<div class="deleteWarning">
              <h1>Are You Sure Want To Delete This Group</h1>
              <h3>Deleting This will Also Delete All Todos inside It</h3>
              <div class="dwFooter"></div>
              </div>
          </div>`;
          const dwFooter = DeleteWarning.querySelector(".dwFooter");
          const deleteBtn = document.createElement("button");
          deleteBtn.classList.add("Delete");
          deleteBtn.innerHTML = "Delete";

          const cancelBtn = document.createElement("button");
          cancelBtn.classList.add("Cancel");
          cancelBtn.innerHTML = "Cancel";

          dwFooter.appendChild(deleteBtn);
          dwFooter.appendChild(cancelBtn);

          cancelBtn.addEventListener("click", () => {
            DeleteWarning.classList.add("deleting");
            setTimeout(() => {
              DeleteWarning.remove();
            }, 480);
          });

          deleteBtn.addEventListener("click", () => {
            DeleteWarning.remove();
            deleteGroup(DeleteIt, group.groupID);
          });
          document.querySelector(".container").appendChild(DeleteWarning);
        };
        DeleteIt.addEventListener("click", callDeleteWarning);
      }
      EditIt.addEventListener("click", () => editGroup());

      const editGroup = () => {
        GroupTitle.removeEventListener("click", () => openTodoGroup(group.groupID));
        GroupTitle.style.cursor = "text";
        GroupTitle.removeAttribute("readonly");
        GroupTitle.focus();
        tg_column.append(SaveIt);
        EditIt.remove();
        SaveIt.addEventListener("click", () => {
          if (GroupTitle.value !== "") {
            GroupTitle.style.removeProperty("cursor");
            let name = GroupTitle.value;
            // Update the name
            group.GroupName = name;
            // Save the name
            localStorage.setItem("MyTodo", JSON.stringify(MyTodo));
            GroupTitle.setAttribute("readonly", true);
            GroupTitle.setAttribute("spellcheck", false);
            GroupTitle.blur();
            SaveIt.remove();
            tg_column.append(EditIt);
          } else {
            alert("Blank Name Cant Be Saved");
          }
        });
      };
    });
  } else {
    checkForEmptyGroup(MyTodo);
  }
};

const openTodoGroup = (para) => {
  window.location.assign(window.location.origin + "/todoGroup.html?groupID=" + para);
};

var removeByAttr = function (arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (arr[i] && arr[i].hasOwnProperty(attr) && arguments.length > 2 && arr[i][attr] === value) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

function deleteGroup(fpara, para) {
  // This will add deleting class to the tg_column of that particular group
  fpara.parentElement.classList.add("deleting");
  MyTodo.forEach(
    (item = (group) => {
      // Get the group from localhost which is clicked by matching thier id
      if (group.groupID == para) {
        setTimeout(() => {
          // This is a function to remove whole object where
          // the groupId is equal to the para which is the groupId of current clicked element
          // It means it will delete that group
          removeByAttr(MyTodo, "groupID", para);
          group = null;
          // save the updated group now
          localStorage.setItem("MyTodo", JSON.stringify(MyTodo));
          // Then Render Updated list
          renderTodoGroups(MyTodo);
        }, 600);
      }
    })
  );
}

if (MyTodo === null) {
  MyTodo = [];
} else {
  renderTodoGroups(MyTodo);
}

// Creating Function To add Todo Group to localstorage

const addGroupFunc = () => {
  if (createGroupInput.value !== "") {
    const todoGroup = {
      // Simple way to generate unique id for every group :-)
      groupID: Date.now(),
      GroupName: createGroupInput.value,
      createdAt: createdAtTime,
      // List of todos inside that group
      todos: [],
    };
    // to add group at top not at bottom use unshift
    MyTodo.unshift(todoGroup);
    // Save Updated Data to localstorage :)
    localStorage.setItem("MyTodo", JSON.stringify(MyTodo));

    // Render Them after Adding Them
    renderTodoGroups(MyTodo);
  } else {
    alert("Empty Group Not allowed");
  }

  // remove the plus icon and empty the input
  createGroup.classList.remove("working");
  createGroupInput.innerHTML = "";

  // Then Remove oops code if its empty already
  checkForEmptyGroup(MyTodo);
};

createGroup.addEventListener("click", addGroupFunc);